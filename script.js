let sun = true;
function light() {
  const bg = document.getElementById("bgcontainer");
  const icon = document.getElementById("themeIcon");

  // select ALL text elements inside bgcontainer
  const textElements = bg.querySelectorAll(
    " p, h2, h3, h4, h5, li, a, span,button,hr"
  );

  if (sun === false) {
    // LIGHT MODE
    bg.style.backgroundColor = "white";

    textElements.forEach(el => {
      el.style.color = "black";
    });

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    sun = true;
  } else {
    // DARK MODE
    bg.style.backgroundColor = "black";

    textElements.forEach(el => {
      el.style.color = "white";
    });

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    sun = false;
  }
}

/*let buttoncontactEl=document.getElementById("buttoncontact");

buttoncontactEl.addEventListener("submit",function(event){
  event.preventDefault()
})
*/

let contactnameEl=document.getElementById("contactname");
let errorEl=document.getElementById("error");

contactnameEl.addEventListener("blur",function(event){
  if(contactnameEl.value===""){
    errorEl.textContent="Requred*";
    errorEl.style.color="red";
    errorEl.classList.add("error");
    errorsEl.textContent="";

  }
  else{
    errorEl.textContent="";
  }
})

let errorsEl=document.getElementById("errors");
let contactemailEl=document.getElementById("contactemail");

contactemailEl.addEventListener("blur",function(event){
  if(contactemailEl.value===""){
    errorsEl.textContent="Requred*";
    errorsEl.style.color="red";
    errorEl.textContent="";
  }
  else{
    errorsEl.textContent="";
  }

})