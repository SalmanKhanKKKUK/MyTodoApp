function addtodo(){
  var input=document.getElementById("todo-input");

  // console.log(input.value);

  var list=document.getElementById("listItems");

  var listElement=document.createElement("li");

  var listText=document.createTextNode(input.value);

  listElement.appendChild(listText);

  // ******************Del BTN**************************

  var  delbtn=document.createElement("button");

  var delbtntext=document.createTextNode("Delete");

  delbtn.appendChild(delbtntext);

  delbtn.setAttribute("onclick","delTodo(this)");

  listElement.appendChild(delbtn);


    // ******************Edit BTN**************************

    var  Editbtn=document.createElement("button");

    var Editbtntext=document.createTextNode("Edit");
  
    Editbtn.appendChild(Editbtntext);
  
    listElement.appendChild(Editbtn);

   list.appendChild(listElement);

   Editbtn.setAttribute("onclick","editTodo(this)");

  console.log(listElement);

  input.value="";

}

function deletetodo(){

  var list=document.getElementById("listItems");
  
   list.remove();

}

function delTodo(e){

  console.log(e.parentNode.remove());

}

function editTodo(e){
  var currentli= e.parentNode.firstChild.nodeValue;

  var inputField=prompt("Enter Updated Value",currentli);

  e.parentNode.firstChild.nodeValue=inputField;
}