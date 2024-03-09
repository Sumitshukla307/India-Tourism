function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
const disabledKeys =["c","C","x","J","u","I"];
const showAlert = (e) =>{
  e.preventDefault();
  return alert("Are Sir/Mam, Kya kar rahe ho? Aise chupke se Copy to na karo na..!");
};
document.addEventListener("contextmenu", (e) =>{
  showAlert(e);
})
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12"){
    showAlert(e);
  };
});
