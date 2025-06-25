const btn=document.querySelector(".btn")
const categories=document.querySelector(".categories")
const container=document.querySelector(".container")
async function call(url) {
   
       const response=  await fetch(url)
        const data=await response.json()
       console.log(data)
       container.innerHTML="";
       if(data.type==="twopart")
       {
           const setup=data.setup;
           const delivery=data.delivery
           const p=document.createElement("p")
           const p2=document.createElement("p")
           p.innerText=setup;
           p2.innerText=delivery;

           container.appendChild(p);
           container.appendChild(p2)
           
       }else if(data.type==="single"){
        const setup=data.joke;
        const p=document.createElement("p")
        p.innerText=setup;
        container.appendChild(p)

       }
       

       
       
    
}
btn.addEventListener("click",(data)=>{
    const selectedcategories= Array.from(categories.querySelectorAll(".categories input[type=checkbox]:checked")).
    map((checked)=>checked.value)
    
   const url=`https://v2.jokeapi.dev/joke/${selectedcategories.join(",")}`
   call(url)


})