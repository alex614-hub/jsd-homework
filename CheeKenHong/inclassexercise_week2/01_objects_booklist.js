const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
  ];

const newUnorderList = document.createElement("ul");

books.forEach(e => {
    const newList = document.createElement("li");

    const mynewImg = document.createElement("img");
    mynewImg.src = "https://picsum.photos/400/500/";
    mynewImg.style.width = "20px";
    mynewImg.style.heigh = "20px";
    newList.appendChild(mynewImg);
    newList.innerHTML +=  "Title: " +  e.title + " By : " + e.author

    if (e.alreadyRead == true)
    {
        newList.style.color = "green"
    }
    else
    {
        newList.style.color = "red"
    }


    newUnorderList.appendChild(newList)
});

document.body.appendChild(newUnorderList);