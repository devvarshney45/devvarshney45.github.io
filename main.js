var  tyoed=new Typed(".text",{
    strings:["frontend Developer","Problem Solver","Editor"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});
document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("show");
});
