

let api_key = "08aa2e045f754ecbaf2121505251001";
const loc=document.querySelector("#Loc")
const btn=document.querySelector("#btn")



btn.addEventListener("click",()=>{
   let location=loc.value;
   let url=`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=no`;
   fetch(url).then((response)=>{
    if(!response.ok)
    {
        return response.json().then((errordata)=>{
            throw errordata.error
          });
    }
    return response.json();
      
   }).then((data)=>{
    const l=document.createElement("p")
    const t=document.createElement("p")
    const w=document.createElement("p")
    
    l.innerText=`Location is:${data.location.name} State is:${data.location.region} Country is ${data.location.country}`
    // console.log(l);
    t.innerText=`Temperature is ${data.current.temp_c}in c`
    w.innerText=`Wind speed is ${data.current.wind_kph}in kph `
    document.body.appendChild(l)
    document.body.appendChild(t)
    document.body.appendChild(w)


   }).catch((error)=>{
    const para=document.createElement("p");
    console.error(error)
      para.innerText=`Oh No Error code${error.code}${error.message}`
      document.body.appendChild(para)
  
   })
})
