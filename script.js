let selectField = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");


selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}


let options = document.getElementsByClassName("options");
for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
};

