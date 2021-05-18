// Requesting data from the server and passing it to getListItem function
axios.get('https://api.vschool.io/tyler-parker/todo')
    .then(response => {
      getListItem(response.data)
      console.log(response.data);
  }).catch(error => {
      console.log(error)
  });

const toDoForm = document.toDoForm
// Creating a new list item to the API from the form
toDoForm.addEventListener("submit", e => {
  e.preventDefault()
  const item =  {
    title: toDoForm.title.value,
    description: toDoForm.description.value,
    imgUrl: toDoForm.imgUrl.value
  }
  toDoForm.title.value = ""
  toDoForm.description.value = ""
  toDoForm.imgUrl.value = ""
  console.log(toDoForm.title.value);
    
  axios.post('https://api.vschool.io/tyler-parker/todo', item)
    .then(response => console.log(response.data))
    .then(alert("Post successful"))
    .catch(error => console.log(error))
})
// function for receiving data from the API and creating elements to display data on the page
function getListItem(items) {
  document.getElementsByClassName("collection-item").innerHTML = ""
  items.forEach(data => {
    // creating the HTML elements
    const newItem = document.createElement('li')
    const title = document.createElement('h5')
    const description = document.createElement('p')
    const img = document.createElement('img')
    const collection = document.getElementById("itemGroup")
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement("button")
    // setting attributes for HTML elements
    title.textContent = data.title
    description.textContent = data.description
    img.src = data.imgUrl
    img.setAttribute("class", "responsive-img")
    newItem.setAttribute("class", "collection-item")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "filled-in")
    deleteButton.setAttribute("class", "btn red waves-effect waves-light right")
    deleteButton.insertAdjacentHTML("beforeend", "Delete")
    // placing the data elements in order within a list container
    collection.append(newItem)
    newItem.append(title, description, img)
    title.append(checkBox, deleteButton)
    
    // including a PUT event listener checkbox to toggle the completed status in the API
    checkBox.addEventListener("change", (e) => {
      if (checkBox.checked === false) {
        axios.put("https://api.vschool.io/tyler-parker/todo/" + data._id, {completed: false})
          .then(response => console.log(response))
          .catch(error => console.log(error))
      } else {
        axios.put("https://api.vschool.io/tyler-parker/todo/" + data._id, {completed: true})
          .then(response => console.log(response))
          .catch(error => console.log(error))
      }
    })
    // including a DELETE event listener button to delete an item from the API
    deleteButton.addEventListener("click", e => {
      axios.delete("https://api.vschool.io/tyler-parker/todo/" + data._id)
        .then(response => console.log(response))
        .then(alert("Delete Successful"))
        .catch(error => console.log(error))
    })
  });
}