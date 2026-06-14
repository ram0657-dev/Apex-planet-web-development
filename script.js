// script.js - Task 2
// this file has two things:
// 1. form validation for the contact form
// 2. to-do list add and delete using javascript DOM



// ============================================
// PART 1 : FORM VALIDATION
// i learned this from a youtube tutorial on js form validation
// ============================================

function validateForm() {

    // getting values from the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // getting the error and success message elements
    var errorMsg = document.getElementById("error-msg");
    var successMsg = document.getElementById("success-msg");

    // clear old messages first
    errorMsg.innerText = "";
    successMsg.innerText = "";

    // check 1 - name should not be empty
    if (name == "") {
        errorMsg.innerText = "Error : Please enter your full name!";
        return;
    }

    // check 2 - email should not be empty
    if (email == "") {
        errorMsg.innerText = "Error : Please enter your email address!";
        return;
    }

    // check 3 - email should have @ symbol in it
    // i know there is a better way with regex but i dont know that yet
    if (email.indexOf("@") == -1) {
        errorMsg.innerText = "Error : Please enter a valid email address!";
        return;
    }

    // check 4 - phone should not be empty
    if (phone == "") {
        errorMsg.innerText = "Error : Please enter your phone number!";
        return;
    }

    // check 5 - message should not be empty
    if (message == "") {
        errorMsg.innerText = "Error : Please write a message!";
        return;
    }

    // if all checks pass, show success message
    successMsg.innerText = "Form submitted successfully! Thank you.";

    // clear all the fields after successful submit
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}



// ============================================
// PART 2 : TO-DO LIST
// learned DOM manipulation from a todo list tutorial on youtube
// ============================================

function addTask() {

    // get what the user typed in the input
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value;

    // if input is empty, dont add anything
    if (taskText == "") {
        alert("Please type a task first!");
        return;
    }

    // hide the empty message since we have tasks now
    document.getElementById("empty-msg").style.display = "none";

    // get the task list element
    var taskList = document.getElementById("task-list");

    // create a new li element for the task
    var newTask = document.createElement("li");

    // add the task text and a delete button inside the li
    newTask.innerHTML = "<span>" + taskText + "</span>" +
                        "<button class='delete-btn' onclick='deleteTask(this)'>Delete</button>";

    // add the new task to the list
    taskList.appendChild(newTask);

    // clear the input box so user can type next task
    taskInput.value = "";
}


// this runs when delete button is clicked
// "btn" here is the button that was clicked
function deleteTask(btn) {

    // get the li element (parent of the button)
    var taskItem = btn.parentElement;

    // remove that li from the list
    taskItem.remove();

    // check if there are any tasks left
    var taskList = document.getElementById("task-list");

    // if no tasks left, show the empty message again
    if (taskList.children.length == 0) {
        document.getElementById("empty-msg").style.display = "block";
    }
}
