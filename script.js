const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let i = document.createElement("i");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    i = "ri-chat-delete-fill";
    notesContainer.appendChild(inputBox).appendChild(i);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "i"){
        e.target.parentElement.remove();
        updateStorage();
    }
    elseif(e.target.tagName === "p"){
        notes.document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown", event =>{
    if(event.key ==="enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})