let imgs = document.querySelectorAll(".gallery img")
imgs[1].getAttribute("src");


let nav = document.querySelector("nav")

nav.onclick = function () {
    console.log("nav was click")
}

let classmate = [
    {
        id: 1,
        name: "Ha",
        age: 12
    },
    {
        id: 2,
        name: "as",
        age: 12
    },
    {
        id: 3,
        name: "a",
        age: 11
    }

]

imgs.forEach((img) => {
    img.addEventListener("click", function () { console.log(img.getAttribute("src")); })

});



let table = document.querySelector("table");
let tr = $("tr")
setTimeout(() => {
    classmate.forEach(function (cm) {
        let row = table.insertRow();
        let data = "<td>" + cm.id + "</td>";
        data += "<td>" + cm.name + "</td>";
        data += "<td>" + cm.age + "</td>";
        console.log(data);
        row.innerHTML = data;

    })
}, 2000);


