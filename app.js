axios.get('https://api.vschool.io/tyler-parker/todo')
    .then(response => {
      getListItem(response.data)
      console.log(response.data);
  }).catch(error => {
      console.log(error)
  });

const todoForm = document.todoForm

todoForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const item =  {
    title: todoForm.title.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value
  }
  console.log(todoForm.title.value);
    
   axios.post('https://api.vschool.io/tyler-parker/todo', item)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

function getListItem(items) {
  items.forEach(data => {
    const newItem = document.createElement('li')
    const title = document.createElement('h5')
    const description = document.createElement('p')
    const img = document.createElement('img')
    const collection = document.getElementById("itemGroup")
    const checkBox = document.createElement('input')


    title.textContent = data.title
    description.textContent = data.description
    img.src = data.imgUrl
    img.setAttribute("class", "responsive-img")
    newItem.setAttribute("class", "collection-item")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "filled-in")

    collection.appendChild(newItem)
    newItem.append(title, checkBox, description, img)
    title.append(checkBox)

    if (data.completed === true) {
      title.insertAdjacentHTML("afterbegin", "<label><input type='checkbox' class='filled-in' checked='checked'/><span></span></label>")
    } else {
      title.insertAdjacentHTML("afterbegin", "<label><input type='checkbox' class='filled-in' /><span></span></label>")
    }

  });
}

// const checkBox = document.getElementsByClassName("filled-in")
// checkBox.addEventListener("change", (e) => {
//   if (checkBox.checked === false) {
//   axios.put("https://api.vschool.io/tyler-parker/todo" + data._id, {completed: false})
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//   } else {
//   axios.put("https://api.vschool.io/tyler-parker/todo" + data._id, {completed: true})
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// }
// })