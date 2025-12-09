
 window.onscroll = function()
 {toggleTopButton(); };
 function toggleTopButton(){
    const topBtn = 
    document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || 
        document.documentElement.scrollTop > 100) { 
            topBtn.style.display = "block";
        } else { topBtn.stylr.display = "none;"}
 }
 //scroll to top smoothly
 function scrollToTop(){
    window.scrollTo({
        to: 0,
        behavior: "smooth"
    });
 }
 
  function sorryMessage(){
    alert("Oops!!, service not yet available to the public");
  }