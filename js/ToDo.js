function onPageLoaded(){
    addEventListener("keypress", (keyPressed) => {
      const KeyEnter = 13;

  if(keyPressed.which===KeyEnter){// доработка if

    AddInList();
  }
  })

}

function AddInList(){

  let input = document.getElementById('input').value
  let ul = document.getElementById('ToDoList')
  // const input = document.querySelector("input[type='text']");
  // const ul = document.querySelector("ul.todos");
  let li = document.createElement("li")
  let text = document.createElement("span")
  text.classList.add("Task")
  text.append(input)

  let DelButton = document.createElement('button')
  DelButton.classList.add("DeleteTask")

  ul.appendChild(li).append(text,DelButton)
  DeleteTask(DelButton)

  }

function DeleteTask(element){
  element.addEventListener("click", (event) => {
    element.parentElement.remove();
    event.stopPropagation();
  });
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

let ul = document.getElementById('ToDoList');
ul.onclick = function(event) {
  let target = getEventTarget(event);
  if(target.id === "ToDoList")
    return;
  if(target.classList[0]==="EndedTask"){
    target.classList.remove('EndedTask')
    return;
  }
  target.classList.add("EndedTask")

};

document.addEventListener("DOMContentLoaded", onPageLoaded);
