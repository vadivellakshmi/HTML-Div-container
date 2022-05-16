
let btnClick = document.querySelector(".btn");
let divContainer = document.querySelector(".div1");

btnClick.addEventListener("click",addNew)  
    function addNew() {
        let newDiv = document.createElement("div");
    
        newDiv.classList.add("div-shadow");

        divContainer.append(newDiv);

        
      
     
      
    
    }   
 
 
   
