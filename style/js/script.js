
// aos init enable
AOS.init();

let navbar = document.getElementsByClassName("navbar");
console.log(navbar);

document.getElementsByClassName("navbar").addEventListener("scroll", () => {
    alert("hello");
});
