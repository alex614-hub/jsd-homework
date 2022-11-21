// DOM manipulation

const heading = document.querySelector("body");

heading.style.fontFamily = "Arial, sans-serif"

const listItem = document.querySelectorAll("li");
listItem[0].innerText = "Nickname: Alex";
listItem[1].innerText = "Favourite: Badminton";
listItem[2].innerText = "Hometown: Kajang";

listItem.forEach(e => {
    e.className = "list-item"
    e.style.color = "red"
});

const mynewImg = document.createElement("img");
mynewImg.src = "https://picsum.photos/400/500/";
document.body.appendChild(mynewImg);

