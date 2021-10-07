let isOneTwo = 1;
let ball = document.querySelector('.ball');
let naughtyText = document.querySelector('.naughty');
let niceText = document.querySelector('.nice');
let body = document.querySelector('body');
ball.addEventListener('click', ()=> {
   ball.classList.toggle('right');
   naughtyText.classList.toggle('active')
   niceText.classList.toggle('active');
   body.classList.toggle('green')

   if (isOneTwo === 1) {
      isOneTwo = 2;
   }
   else {
      isOneTwo = 1;
   }
})

function goData() {
   let loginForm = document.getElementById('login');
   let loginVal = document.createElement('input');
   loginVal.setAttribute('type', 'hidden');
   loginVal.setAttribute('name', 'loginVal');
   loginVal.setAttribute('value', String(isOneTwo));

   loginForm.appendChild(loginVal)
   loginForm.submit();
}

let modal_loading=document.getElementById("modal_loading");
let loginbtn=document.getElementById("loginbutton");
loginbtn.addEventListener("click",(e)=>{
modal_loading.style.display="block";
})