const form = document.querySelector('#form');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const queryGeneral = document.querySelector('#general');
const querySupport = document.querySelector('#support');
const message = document.querySelector('#message');
const checkbox = document.querySelector('#checkbox');

const smallFirst = document.querySelector('#small-first');
const smallLast = document.querySelector('#small-last');
const smallEmail = document.querySelector('#small-email');
const smallQuery = document.querySelector('#small-query');
const smallMessage = document.querySelector('#small-message');
const smallCheckbox = document.querySelector('#small-agree');

let svg = '<svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
let check = 0;

function evalFirstName() {
    let pattern = /^[a-zA-Z ]+$/;

    if (firstName.value === "") {
        smallFirst.textContent = "This field is required";
    } else if (firstName.value.length < 3) {
        smallFirst.textContent = "3 characters minimum";
    } else if (!pattern.test(firstName.value)) {
        smallFirst.textContent = "use letters only";
    } else {
        let svg = '<svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
        smallFirst.innerHTML = svg;
        check += 1;
    }
}
firstName.addEventListener('input', () =>{
     evalFirstName();
});


function evalLastName(){
    let pattern = /^[a-zA-Z ]+$/ ;
    if(lastName.value === ""){
        smallLast.textContent = "This field is required";
    }
    else if (lastName.value.length < 3){
        smallLast.textContent = "3 characters minimum";
    }
    else if(pattern.test(lastName.value) == false){
        smallLast.textContent = "use letters only";
    }
    else {
                smallLast.innerHTML = svg ;
                check += 1;
    };
};
lastName.addEventListener('input', () =>{
    evalLastName();
});


function evalEmail(){
     let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.value === ""){
        smallEmail.textContent = "This field is required";
    }
    else if(pattern.test(email.value) == false){
        smallEmail.textContent = "invalid input";
    }
    else {
        smallEmail.innerHTML = svg;
        check += 1;
    }
}
email.addEventListener('input', () =>{
   evalEmail();
});

function evalQuery(){
    if(queryGeneral.checked == false & querySupport.checked == false){
        smallQuery.textContent = "Please choose a query type";
    }
    else if (queryGeneral.checked == true || querySupport.checked == true) {
        smallQuery.innerHTML = svg;
        check += 1;
    }
};

queryGeneral.addEventListener('input', evalQuery);
querySupport.addEventListener('input', evalQuery);

function evalMessage(){
    if(message.value === ""){
        smallMessage.textContent = "This field is required";
    }
    else {
        smallMessage.innerHTML = svg;
        check += 1;
    }
};

message.addEventListener('input', () =>{
    evalMessage();
});

function evalCheckbox(){
    if(checkbox.checked == false){
        smallCheckbox.textContent = "This field is required";
    }
    else {
        smallCheckbox.innerHTML = svg;
        check += 1;
    }
};

checkbox.addEventListener('input', () =>{
    evalCheckbox();
});

function restart(){
    smallFirst.innerHTML = "";
    smallLast.innerHTML = "";
    smallEmail.innerHTML = "";
    smallQuery.innerHTML = "";
    smallMessage.innerHTML = "";
    smallCheckbox.innerHTML = "";

};

const sentMessage = document.querySelector('.sent-message');

form.addEventListener('submit', (e) =>{

    check = 0;
    evalFirstName();
    evalLastName();
    evalEmail();
    evalCheckbox();
    evalQuery();
    evalMessage();

    if(check == 6){
        sentMessage.classList.toggle('sent-message-active');
        setTimeout(() =>{sentMessage.classList.remove('sent-message-active')}, 4000);
        form.reset();
        restart();
        }
    else {
        e.preventDefault();
    }
});