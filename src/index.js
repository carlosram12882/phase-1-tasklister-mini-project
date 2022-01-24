//Gets Tasks List 
const getsList = function (element){
   let tasks = document.getElementById("tasks")
  tasks.append(element)
  }
//Makes new task
const newTask = function (input){
  let newElement = document.createElement("il")
  getsList(newElement)
  return newElement.innerText = input

}

document.addEventListener("DOMContentLoaded", () => {
  
  document.addEventListener("submit", newTask)
  "submit".preventDefault();
});
