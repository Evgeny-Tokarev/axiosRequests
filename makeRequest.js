// function getImagesOld(ImgQuant) {
//   while (result.firstChild) {
//     result.removeChild(result.firstChild);
//   }
//   return $.ajax(
//     `https://api.unsplash.com/photos/?client_id=OaT3CMnZEdlBhwgeLP1IE2lOzCut627q3ZZC1F6GF8U&per_page=${ImgQuant}`
//   );
// }
function getImages(ImgQuant) {
  return axios
    .get(
      `https://api.unsplash.com/photos/?client_id=OaT3CMnZEdlBhwgeLP1IE2lOzCut627q3ZZC1F6GF8U&per_page=${ImgQuant}`
    )
    .then((data) => {
      return data.data;
    });
}
function getTodoList() {
  return axios
    .get("https://api.todoist.com/rest/v1/tasks", {
      headers: {
        Authorization: "Bearer  d256d902f48b0900b2f5be9c4e5b196dbccaceb2",
      },
    })
    .then((response) => {
      return response.data;
    });
}
function deleteTask(id) {
  return axios
    .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
      headers: {
        Authorization: "Bearer  d256d902f48b0900b2f5be9c4e5b196dbccaceb2",
      },
    })
    .then((response) => {
      return response.data;
    });
}
