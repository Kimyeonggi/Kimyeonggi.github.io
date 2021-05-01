const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  doneList = document.querySelector(".js-doneList");

const TODOS_LS = "toDos";
const DONE_LS = "done";

let toDos = [];
let dones = [];

let flag;

function deletePendingList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanList = toDos.filter(function (el) {
    return el.id !== parseInt(li.id);
  });
  saveList(cleanList,0);
}

function deleteDoneList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  doneList.removeChild(li);
  const cleanList = dones.filter(function (el) {
    return el.id !== parseInt(li.id);
  });
  saveList(cleanList,1);
}

function moveDone(event) {
  let pdBtn = document.createElement("button");
  pdBtn.innerText = "pending ↑";
  pdBtn.addEventListener("click", movePending);

  let delDnBtn = document.createElement("button");
  delDnBtn.innerText = "×";
  delDnBtn.addEventListener("click", deleteDoneList);

  const btn = event.target;
  const li = btn.parentNode;

  li.removeChild(btn);
  const children = li.childNodes;
  for(var i=0; i<children.length; i++){
    if(children[i].nodeName ==="BUTTON"){
      li.removeChild(children[i]);
    }
  }
  
  li.appendChild(pdBtn);
  li.appendChild(delDnBtn);

  toDoList.removeChild(li);
  doneList.appendChild(li);
  const tempList = toDos.filter(function (el) {
    return el.id === parseInt(li.id);
  });

  dones.push(tempList[0]);
  const cleanNewList = dones;
  const cleanCurList = toDos.filter(function (el) {
    return el.id !== parseInt(li.id);
  });

  saveList(cleanCurList, 0);
  saveList(cleanNewList, 1);
}

function movePending(event) {

  let dnBtn = document.createElement("button");
  dnBtn.innerText = "done ↓";
  dnBtn.addEventListener("click", moveDone);

  let delPdBtn = document.createElement("button");
  delPdBtn.innerText = "×";
  delPdBtn.addEventListener("click", deletePendingList);
 
  const btn = event.target;
  const li = btn.parentNode;

  li.removeChild(btn);
  const children = li.childNodes;
  for(var i=0; i<children.length; i++){
    if(children[i].nodeName ==="BUTTON"){
      li.removeChild(children[i]);
    }
  }
  
  li.appendChild(dnBtn);
  li.appendChild(delPdBtn);

  doneList.removeChild(li);
  toDoList.appendChild(li);
  const tempList = dones.filter(function (el) {
    return el.id === parseInt(li.id);
  });
  toDos.push(tempList[0]);
  const cleanNewList = toDos;
  const cleanCurList = dones.filter(function (el) {
    return el.id !== parseInt(li.id);
  });

  saveList(cleanCurList, 1);
  saveList(cleanNewList, 0);
}

function saveList(list, lFlag) {
  if (lFlag === 0) {
    localStorage.setItem(TODOS_LS, JSON.stringify(list));
    toDos = list;
  } else {
    localStorage.setItem(DONE_LS, JSON.stringify(list));
    dones = list;
  }
}

function paintList(text, parent, list, pFlag) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  let dnBtn = document.createElement("button");
  let pdBtn = document.createElement("button");
  let delPdBtn = document.createElement("button");
  let delDnBtn = document.createElement("button");

  const newId = list.length + 1;
  delPdBtn.innerText = "×";
  delDnBtn.innerText = "×";

  dnBtn.innerText = "done ↓";
  pdBtn.innerText = "pending ↑";
  delPdBtn.addEventListener("click", deletePendingList);
  delDnBtn.addEventListener("click", deleteDoneList);
  dnBtn.addEventListener("click", moveDone);
  pdBtn.addEventListener("click", movePending);

  span.innerText = text;
  li.appendChild(span);

  
  //li.appendChild(delBtn);
  if (pFlag === 0) {
    li.appendChild(delPdBtn);
    li.appendChild(dnBtn);
  } else {
    li.appendChild(delDnBtn);
    li.appendChild(pdBtn);
  }


  li.id = newId;
  parent.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  }
  list.push(toDoObj);
  saveList(list, pFlag);
}


function loadList() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedDone = localStorage.getItem(DONE_LS);
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintList(toDo.text, toDoList, toDos, 0);
    });
  }
  if (loadedDone) {
    const parsedDones = JSON.parse(loadedDone);
    parsedDones.forEach(function (done) {
      paintList(done.text, doneList, dones, 1);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintList(currentValue, toDoList, toDos, 0);
  toDoInput.value = "";
}



function init() {
  loadList();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();