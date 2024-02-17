
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var closeBtn = document.createElement("SPAN");
    var closeTxt = document.createTextNode("\u00D7");
    closeBtn.className = "close";
    closeBtn.appendChild(closeTxt);
    li.appendChild(closeBtn);

    var editBtn = document.createElement("SPAN");
    var editTxt = document.createTextNode("\u270E");
    editBtn.className = "edit";
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);

    closeBtn.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }

    editBtn.onclick = function() {
        var div = this.parentElement;
        var txt = div.childNodes[0];
        var newText = prompt("Edit task:", txt.nodeValue);
        if (newText !== null && newText.trim() !== "") {
            txt.nodeValue = newText;
        } else if (newText === "") {
            alert("Task cannot be empty!");
        }
    }

    li.onclick = function() {
        this.classList.toggle("checked");
    }
}