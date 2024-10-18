function darkModeToggle() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let toggleBtn =document.querySelector(".toggleBtn");
toggleBtn.addEventListener("click",darkModeToggle)


function promptUser(){
    let userName =prompt("what is your name?");
    let email=prompt("what is your email?")
    let favHobby=prompt("what is your hobby?")
   
    if(userName && favHobby && email){
   alert(
     `Hello ${userName},your favourite hobby is ${favHobby} ,we are thrilled to have you on board and will send you the details of our get togther via your provided email💕,${email}`
   );
    }else{
      alert("Please fill in the spaces");
    }

  }
  let promptUserBtn = document.querySelector (".more");
  promptUserBtn.addEventListener("click",promptUser);


