let loadbox = document.querySelector(".loadbox");
let news = document.querySelector(".news");
setTimeout(function() {
  fadeOut(loadbox);
}, 800);
let params = {
  articleID: 0,
  authorID: 0,
  start: 0,
  limit: 9
}
let numArticles = 0;
// on page load get number of articles for pager
if(numArticles == 0) {
 countNumArticles();
}
// Count Articles XMLHttpRequest
function countNumArticles() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function() {
    if(this.status == 200){
      numArticles = JSON.parse(this.responseText).length;
      getArticles(params);
      outputPager();
    }
  }
  xhr.send();
}

function outputPager() {
  console.log("Pageer started");
  console.log(numArticles);
  let numpagerbtns = Math.ceil(numArticles/9);
  console.log(numpagerbtns);
  let output = "";
  for (var i = 0; i < numpagerbtns; i++) {
   output+= '<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + (i+1) + '</a></li>';
  }
  let pagerchild = document.querySelector("ul.pagination");
  pagerchild.children[0].insertAdjacentHTML('afterend', output);

  console.log(output);


}

// Get Articles XMLHttpRequest
function getArticles(params) {
  let request = '';
  if(params.articleID == 0 && params.authorID == 0) {
    request = "_start=" + params.start + "&_limit=" + params.limit;
  }
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?" + request,
    true
  );
  xhr.onreadystatechange = function() {
    console.log(this.readyState);
    console.log(this.status);
    if(this.readyState == 4 && this.status == 200) {

      let response = JSON.parse(this.responseText);
      let output = "";
      response.forEach(function(item) {
        output += "<div class='col-md-4 mt-4 article'>"
        output +="<h3>" +item.title + "</h3>";
        output +="<p>" + item.body +"</p>";
        output += "</div>";
      });
      news.innerHTML = output;
    }
  }
  xhr.send();
}

let pager = document.querySelector(".pagination");
pager.addEventListener("click", function(e){
  e.preventDefault();
  if(e.target.hasAttribute('data-page') == true) {
    console.log(e.target.dataset.page);
    params.start = e.target.dataset.page * 9;
    getArticles(params);
  }
});




function fadeOut(el) {
  el.style = "opacity:0";
  setTimeout(function() {
    el.style = "display: none";
  }, 500)
}

function fadeIn(el) {
  el.style = "display: initial";
  setTimeout(function() {
    el.style = "opacity:1";
  }, 10)
}
