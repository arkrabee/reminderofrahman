applyAll("rml", (el) => {
   el.innerHTML = det.name
})

applyAll("rml-short", (el) => {
    el.innerHTML = det.shortname
 })

 document.querySelector("title").innerHTML = det.name;



// TO OTHER PAGE

 toPage()
function toPage() {
   let links = document.querySelectorAll("[to]");
   for(let i = 0; i < links.length; i++){
      let linktext = links[i].getAttribute("to");


      links[i].addEventListener("click", () => {
         if(linktext.trim().slice(0,1)==="/"){
            open(linktext.trim().slice(1)+".html", "_self")
         }else {
            open(linktext, "_blank")
         }
      })
   }
}