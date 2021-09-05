const btn_sort = document.querySelector('.btn_sort');
const select_view = document.getElementById("job-viewer");
let view_choice = 1; 
function createId () {
    var randomNumber = Math.round((Math.random()*10000));
    return randomNumber;
}

let Todo_DataBase = [
    { 
        id : createId(),
        title: "Đặt hàng pizza",
        status: true
    },
    {
        id : createId(),
        title : "đi chơi",
        status  : true
    },
    {
        id : createId(),
        title : "đi ăn mum mum ",
        status  : false
    },
    {
        id : createId(),
        title : "đi xem phim",
        status  : false
    }
];

let Ui_taskList = document.querySelector('.list-container');

function RenderUI(Arr) {
        Ui_taskList.innerHTML = '';
    
        if (Arr.length == 0) {
            alert('Không có dữ liệu truyền vào');
            Ui_taskList.innerHTML ='<p class= "todo-empty"> Không có công việc trong danh sách </p>'    
        } else {
            //add the SORT VIEW here:
            if(view_choice == 1) {
                for (const t of Arr) {              
                    Ui_taskList.innerHTML += `
                        <div class="items-container">
                            <div class="check-done">
                                <input type="checkbox" ${t.status ? 'checked' : ''} onClick = "changeStatus(${t.id})"/>
                                <p> ${t.title} </p>
                            </div>
                            <div class="button" >
                                <button class = "btn_Update" onclick = "updateTodo(${t.id})" >			
                                    <img
                                    src="./img/Edit_icon_(the_Noun_Project_30184).svg.png"
                                /> 
                                </button>
                                <button class="btn_delete" onClick = "deleteTodo(${t.id})">
                                    <img
                                    src="./img/trash-can-icon-vector-13490171.jpg"
                                /> 
                                </button>
                            </div>
                        </div>
                        `      
                }
            } else if (view_choice == 2) {
                for (const t of Arr) {  
                    if (t.status) {
                        Ui_taskList.innerHTML += `
                        <div class="items-container">
                            <div class="check-done">
                                <input type="checkbox" ${t.status ? 'checked' : ''} onClick = "changeStatus(${t.id})"/>
                                <p> ${t.title} </p>
                            </div>
                            <div class="button" >
                                <button class = "btn_Update" onclick = "updateTodo(${t.id})" >			
                                    <img
                                    src="./img/Edit_icon_(the_Noun_Project_30184).svg.png"
                                /> 
                                </button>
                                <button class="btn_delete" onClick = "deleteTodo(${t.id})">
                                    <img
                                    src="./img/trash-can-icon-vector-13490171.jpg"
                                /> 
                                </button>
                            </div>
                        </div>
                        `      
                    }                         
                }
            } else if (view_choice == 3) {
                for (const t of Arr) {           
                    if (!t.status) {
                        Ui_taskList.innerHTML += `
                        <div class="items-container">
                            <div class="check-done">
                                <input type="checkbox" ${t.status ? 'checked' : ''} onClick = "changeStatus(${t.id})"/>
                                <p> ${t.title} </p>
                            </div>
                            <div class="button" >
                                <button class = "btn_Update" onclick = "updateTodo(${t.id})" >			
                                    <img
                                    src="./img/Edit_icon_(the_Noun_Project_30184).svg.png"
                                /> 
                                </button>
                                <button class="btn_delete" onClick = "deleteTodo(${t.id})">
                                    <img
                                    src="./img/trash-can-icon-vector-13490171.jpg"
                                /> 
                                </button>
                            </div>
                        </div>
                        `      
                    }                         
                }
            }
            
        }
    }

RenderUI(Todo_DataBase);

const todo_input = document.querySelector("#input_text");
const add_btn = document.querySelector('.add-btn');
let isUpdate = false;
let idUpdate = null;

add_btn.addEventListener('click', function() {
    let task_title = todo_input.value;
    //the Let Only has LOCAL variable value: that means the Bracket in the IF and else 
    //below. dont use var
    if (task_title == "") {
        alert ("Empty content!");
        return;
    }

    if (isUpdate) {
        for(let i = 0; i <Todo_DataBase.length; i++) {
            //let task_title = todo_input.value; //why can change the FIRST JOB NAME???
            if (Todo_DataBase[i].id == idUpdate) {
                Todo_DataBase[i]['title'] = task_title;
            }
        }
        //Be careful the POSITION of BRACKER!!! wow, this SMALL logic bugs waste time to find
        // Be careful. Hillarious mistake make only the first ITEM CHANGES.
        // Because it RESET all the neccessary VARIABLE
        add_btn.innerHTML = "ADD JOB";
        todo_input.value ="";
        isUpdate = false;
        idUpdate = "";
    //Yes we forgot to RENDER-UI : fo the information wont be uploaded
        RenderUI(Todo_DataBase); 
        
    } else {
        let new_Todo = //remember[]; [{}]; and {} is different. I found this bug after a sleep
            {
            'id' : createId(),
            'title' : task_title,
            'status' : false
            }
        
            Todo_DataBase.push(new_Todo);
            RenderUI(Todo_DataBase);
 // We cant use Task_Title to REPLACE todo_input.value: Or it wont changed.... 
//It wont Point to the same Objects/ Place.
            todo_input.value = "";     
    }  
})

function deleteTodo(id) {
    for (let i = 0; i< Todo_DataBase.length; i++) {
        if(Todo_DataBase[i].id == id) {
            Todo_DataBase.splice(i, 1);
        }
    }
    RenderUI(Todo_DataBase);
}

const todo_update = document.querySelector('.btn_Update');
//todo_update.addEventListener('click', updateTodo); ALREADY add in HTML 'onclick'
function updateTodo(id) {
    for (let i = 0; i<Todo_DataBase.length; i++) {
        if (Todo_DataBase[i].id == id) {
            todo_input.value = Todo_DataBase[i].title;
        } 
    }
    add_btn.innerHTML = "Cập Nhật";
    todo_input.focus();
    idUpdate = id;
    isUpdate = true;
}


btn_sort.addEventListener('click', function(){
        //var value = e.options[e.selectedIndex].value
    view_choice = select_view.options[select_view.selectedIndex].value;
    console.log(view_choice);
    RenderUI(Todo_DataBase);
})

function changeStatus(id) {
    for (let i = 0; i<Todo_DataBase.length;i++) {
        if (Todo_DataBase[i].id == id ) {
            Todo_DataBase[i].status = !Todo_DataBase[i].status;
        }
    }
}