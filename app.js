
var list = document.getElementById("list");
var RemoveAll = document.getElementById("RemoveAll")

function addList(){
    var todoInput = document.getElementById("todo_input");
            // Get input value 
    var todoInputValue = todoInput.value;

// Empty Input Condition 

    if(todoInputValue == ""){
        alert("Please input a value")
        return false;
    }
    
        // create li tag 

    var create_Li = document.createElement("li");
    list.appendChild(create_Li);
    var liTxt = document.createTextNode(todoInputValue)
    create_Li.appendChild(liTxt)

    // Create remove button 

    var removeBtn = document.createElement("button")
    var removeBtn_txt = document.createTextNode("Remove");
    create_Li.appendChild(removeBtn)
    removeBtn.appendChild(removeBtn_txt)
    
    // Create Edit Button 

    var editBtn = document.createElement("button");
    create_Li.appendChild(editBtn)
    var editTxt = document.createTextNode("Edit");
    editBtn.appendChild(editTxt)
    editBtn.setAttribute("onclick", "editFun(this)")

    // Add class or onclick function in remove button

    removeBtn.setAttribute("class", "remove_button");
    removeBtn.setAttribute("onclick", "removeItem(this)")
    todoInput.value = ""

}
// remove single li function 

function removeItem(e){
    e.parentNode.remove()
}
// Remove all item Function

function removeAll_list(){
    list.innerHTML = ""
}

// Edit Button Function 

function editFun(e){
var val = e.parentNode.firstChild.nodeValue;
var changeValue = prompt("Enter a New Value", val)
e.parentNode.firstChild.nodeValue = changeValue
}












