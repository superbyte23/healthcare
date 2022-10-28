// navbar change backgorund when scroll
window.onscroll = function() {scrollFunction() }; 
function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
		document.getElementById("navbar").classList.add("navbar-dark", "bg-dark");
		document.getElementById("offcanvasNavbar").classList.add("bg-dark", "text-light");
	}else{
		document.getElementById("navbar").classList.remove("navbar-dark", "bg-dark");
		document.getElementById("offcanvasNavbar").classList.remove("bg-dark", "text-light");
	}
}