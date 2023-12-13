const inBox=document.getElementById("input-box")
let listContainer=document.getElementById("list-container")
function addTask(){
    if(inBox.value===''){
        alert("You must write something1")
    }else{
        listContainer.innerHTML+=`<li>${inBox.value}<span>\u00d7</span></li>`
    }
    inBox.value=''
    saveData()
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()