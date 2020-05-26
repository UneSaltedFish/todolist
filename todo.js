//two method:node sibling or array object, here use array.
let highlightColor="#FFFFE0"
function init(){
  console.log("todo start");
  // get list of checkboxes
  let boxes = document.getElementById("checkbox");
  //line break
  var mybr = document.createElement('br');
  boxes.appendChild(mybr);
  todolist.push({name:"wash dish",highlight:false,checked:false});
  todolist.push({name:"wash cloth",highlight:false,checked:false});
  todolist.push({name:"do laundry",highlight:false,checked:false});
  loadlist();

//  console.log(a.nextSibling); //see node is adding succeed
  //add button handler
  //another way:document.getElementById("remove").addEventListener("click",removeitem;)
  let add=document.getElementById("add");
  add.onclick=additem;
  //remove item handler
  let remove=document.getElementById("remove");
  remove.onclick=removeitem;
  let highlight=document.getElementById("high");
  highlight.onclick=highlightit;
  let sort=document.getElementById("sort");
  sort.onclick=sortit;
}
//object{name:"",highlight:"T/F",checked:"T/F"}
//init list
let todolist=[];


function additem(){
  console.log("adding");
  let boxes = document.getElementById("checkbox");
  let input= document.getElementById("txt");
  if(input.value.length == 0){alert("please enter something");}
  else{
    if(isduplicate(input.value)){alert("please enter something else");}
    else{
      //append to array
      let newitem={name:document.getElementById("txt").value,highlight:false,checked:false};
      todolist.push(newitem);
      //make input box empty after click submit
      document.getElementById("txt").value="";
    }
  loadlist(todolist);
  }
}

function removeitem(){
  console.log("infunction remove");
  let aList=[];
  todolist.forEach((element)=>{
    if(element.checked===false){aList.push(element);}
  });
  todolist=aList;
  loadlist();
  console.log("removed");
}


function loadlist(){
  let checkboxes=document.getElementById("checkbox");
  checkboxes.innerHTML=" ";
  todolist.forEach((item)=>{
    let newDiv=document.createElement("div");
    //highlight
    if(item.highlight===true){
      newDiv.style.backgroundColor=highlightColor;
    }
    //make new checkbox
    let newtodo = document.createElement("input");
    newtodo.type ="checkbox";
    newtodo.value=item.name;
    newtodo.checked=item.checked;
    newtodo.onclick=clicked;
    newtodo.highlight=item.highlight;
    let inputtext=document.createTextNode(item.name);
    newDiv.appendChild(newtodo);
    newDiv.appendChild(inputtext);
    checkboxes.appendChild(newDiv);
  });
  console.log(todolist);
}
function clicked(){
  let todoname=this.value; // text of this object.
  todolist.forEach((ob) => {
    if(ob.name===todoname){
      ob.checked=!ob.checked;
      loadlist();
    }
  });
}

function isduplicate(sometext){
  for(i=0;i<todolist.length;i++){
    if(todolist[i].name == sometext){return true;}}
  return false;
}

function highlightit(){
  console.log("highlighting");
  todolist.forEach(element=>{
    if(element.checked===true){
      element.highlight=!element.highlight;
      element.checked=false;
    }
  })
  loadlist();
}
function sortit(){
  let newList=[];
  let anotherList=[];
  todolist.forEach(ob => {
    newList.push(ob.name);
  });
  //sort the list;
  newList.sort();
  for(i=0;i<todolist.length;i++){
    todolist.forEach(item=>{
      if(item.name===newList[0]){
        anotherList.push(item);
        newList.shift();
      }
    })
  }
  todolist=anotherList;
  loadlist();

}





//dd
