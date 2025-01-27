

$("#just").load("demo.txt");
let essayFolderCont = document.querySelector(`[essays-folders]`)

for(let i = 0; i < essayFolders.length; i++){
    essayFolderCont.innerHTML += 
    `
   <a href='${essayFolders[i].root}.html' style='text-decoration: none;'><div class="row wantmargin folders" >
               <div class="col-4" style="width:95%; margin: auto 10px; border-radius: 10px;" >
                   ${essayFolders[i].name}
               </div>
             </div></a>
   
   `
}
