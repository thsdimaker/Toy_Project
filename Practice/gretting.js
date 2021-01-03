const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);

}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    
    paintGreeting(currentValue);
    saveName(currentValue);

    
}

function askForname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}




function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN); 
    gretting.innerText = `Hello ${text}`;
    
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForname();

    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();


}

init();