// if i clique login the background of the button id the same color as the section if i clique sign up the 
// the button tkae the color od the section and the login take the color of the cover + the sign up content loads
const cover = document.getElementById("cover");
const topCover = document.getElementById("top-cover") ;
const bottomCover = document.getElementById("bottom-cover");
const midCover = document.getElementById("mid-cover");

const loginButton = document.getElementById("login");
const signUpButton = document.getElementById("signUp");

const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");

const input = document.getElementsByClassName("input");

const signUpa = document.getElementById("signUpa");
const Logina = document.getElementById("logina");


loginButton.addEventListener("click",()=>{
    loginButton.classList.add("active");
    signUpButton.classList.remove("active")
    loginForm.classList.remove("hidden");
    loginForm.classList.add("active");
    signUpForm.classList.add("hidden");
    topCover.style.height = '151px';
    bottomCover.style.height = '520px';
    signUpButton.style.backgroundColor = ' transparent';
    loginButton.style.backgroundColor = ' #E4F2EA';

})

Logina.addEventListener("click",()=>{
    Logina.classList.add("active");
    loginButton.classList.add("active");

    signUpButton.classList.remove("active")
    signUpa.classList.remove("active");

    loginForm.classList.add("active");
    loginForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");

    topCover.style.height = '151px';
    bottomCover.style.height = '520px';
    signUpButton.style.backgroundColor = ' transparent';
    loginButton.style.backgroundColor = ' #E4F2EA';

    
})

signUpButton.addEventListener("click",()=>{
    
    signUpa.classList.add("active");
    Logina.classList.remove("active");

    signUpButton.classList.add("active");
    loginButton.classList.remove("active");

    signUpForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    topCover.style.height = '221px';
    bottomCover.style.height = '450px';
    topCover.style.borderRadius = '25px';
    signUpButton.style.backgroundColor = '#E4F2EA';
    loginButton.style.backgroundColor = 'transparent';


})

signUpa.addEventListener("click",()=>{
    signUpa.classList.add("active");
    signUpButton.classList.add("active");

    loginButton.classList.remove("active")
    Logina.classList.remove("active");

    signUpForm.classList.add("active");
    signUpForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    topCover.style.height = '221px';
    bottomCover.style.height = '450px';
    topCover.style.borderRadius = '25px';
    signUpButton.style.backgroundColor = '#E4F2EA';
    loginButton.style.backgroundColor = 'transparent';
})
for(let i = 0; i < input.length ; i++){
    input[i].addEventListener("click",()=>{
        input[i].classList.add("active");
    })
}

