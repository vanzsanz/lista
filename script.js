var input = document.getElementById ("taskInput");
var button = document.getElementById ("addTaskBtn");
var list = document.getElementById ("taskList");

button.addEventListener("click", () => {
    if(input.value == ""){
        alert("Digite sua tarefa!")
    } else {
        var li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li)
        var button = document.createElement("button");
        button.innerHTML = "x";
        li.appendChild(button)

        button.addEventListener("click", () => {
            li.remove();
        } )
    }
});