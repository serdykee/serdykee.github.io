window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var backToTopBtn = document.getElementById("topup");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
backToTopBtn.style.display = "block";
} else {
backToTopBtn.style.display = "none";
}
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}