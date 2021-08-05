const imagesBlock = document.querySelector("#result");
const pictureButton = document.querySelector("#Click-me");
const pagesNumber = document.querySelector("#pic-number");
const todoButton = document.querySelector("#todo-click");
const todo = document.querySelector(".todo");

pictureButton.addEventListener("click", () => {
  getImages(pagesNumber.value).then(imgRendering);
});
todoButton.addEventListener("click", () => {
  getTodoList().then(todoRendering);
});
todo.addEventListener("click", (event) => {
  console.log(event.target);
  deleteTask(event.target.dataset.id).then(getTodoList).then(todoRendering);
});

function imgRendering(images) {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.urls.thumb;
    imagesBlock.appendChild(img);
  });
}
function todoRendering(data) {
  console.log(data);
  while (todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
  data.forEach((item, number) => {
    if (number > 11) {
      const li = document.createElement("li");
      li.innerHTML = item.content + ": " + item.description;
      li.dataset.id = item.id;
      todo.appendChild(li);
    }
  });
}
// success key: OaT3CMnZEdlBhwgeLP1IE2lOzCut627q3ZZC1F6GF8U;
// secret key: sXpsxZ73wQ8b6-KZ7q5oFWQCxH28XpTKkngysjW2ptE;

// tokenApi for Todoist: d256d902f48b0900b2f5be9c4e5b196dbccaceb2
