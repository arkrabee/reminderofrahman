

document.querySelector("title").innerHTML = det.name;


document.querySelector(".navbar-brand").innerHTML = det.name;









///new

document.querySelectorAll('.ripple').forEach(element => {
  element.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const rect = element.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});






toPage()
function toPage() {

  let link = document.querySelectorAll("[to]")


  let a = []
  for (let z = 0; z < link.length; z++) {
    link[z].addEventListener("click", () => {
      open(link[z].getAttribute("to"))

    })
  }
}





setBGbanner()


function setBGbanner() {

  let img = document.querySelector("[bgi]")
  let lnk = img.getAttribute("bgi")
  img.innerHTML = "RABEE"
  img.style.background = "url('" + lnk + "') no-repeat center center/cover"


}