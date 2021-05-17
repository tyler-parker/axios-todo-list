// const axios = require("axios")

axios.get('https://api.vschool.io/tyler-parker/todo')
    .then(response => {
      addListItem(response.data)
      console.log(response.data);
  }).catch(error => {
      console.log(error)
  });

function addListItem(items) {
  items.forEach(data => {
    const newItem = document.createElement('li')
    const title = document.createElement('h5')
    const description = document.createElement('p')
    const img = document.createElement('img')
    const breakLine = document.createElement('br')
    const collection = document.getElementById("itemGroup")

    title.textContent = data.title
    description.textContent = data.description
    img.src = data.imgUrl
    img.setAttribute("class", "responsive-img")
    newItem.setAttribute("class", "collection-item")

    collection.appendChild(newItem)
    newItem.append(title, description, img)
    title.append(breakLine)
    description.append(breakLine)
    img.append(breakLine)
  });
}