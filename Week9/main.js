document.addEventListener("DOMContentLoader", function () {
    //onnpageload et first user
    console.log("loaded");
    //btnclick next

    //ajax request

})

console.log('hello');
userRequest();

let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener("click", function () {
    userRequest();
});
document.querySelector("#fetch").addEventListener('click', function () {
    fetch(
        'https://randomuser.me/api/',
        { method: 'GET' }
    )
        .then(response => response.json())
        .then(json => generateOutput(json))
        .catch(error => console.error('error:', error));
})

function userRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('Get', 'https://randomuser.me/api/', true);
    xhr.onload = function () {
        if (this.status == 200) {
            console.log("load complete");
            let res = JSON.parse(this.responseText);
            generateOutput(res)
        }
    }
    xhr.send();
}

function generateOutput(obj) {
    console.log(obj);
    let user = obj.results[0];
    console.log(user, "user");
    let gender = user.gender;
    let name = `<h1>${user.name.first + " " + user.name.last}</h1>`
    let img = `  <img src="${user.picture.large}" alt="" srcset="">`
    let city = `<h3>${user.location.city + ', ' + user.location.country}</h3>`
    let email = `<h3>${user.email}</h3>`;

    let output = ` <div class="col-md-12"> ${img + name + city + email}  </div>`
    outputHTML(output)
    console.log(output);
    // console.log(email);
    // console.log(city);
    // console.log(img);
    // console.log(name);

}
function outputHTML(html) {
    let location = document.getElementsByClassName("useroutput")[0];
    console.log(location);
    location.innerHTML = html
}


