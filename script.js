const button = document.querySelector("button");

button.onclick = () => {

button.innerHTML = "Opening Resume...";

button.style.transform = "scale(.95)";

setTimeout(()=>{

window.location.href="about.html";

},1200);

}
