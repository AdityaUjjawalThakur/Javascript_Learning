// const url=https://www.omdbapi.com/77502be5?i=0172684
// http://www.omdbapi.com/?apikey=77502be5&i=tt0172684
// http://www.omdbapi.com/?apikey=77502be5&t=f&y=1998&plot=full

// const titie="KuchKuchHotaHai"
// const year=1998

// const plot="full"

// const url=`http://www.omdbapi.com/?apikey=77502be5&t=${titie}&y=${year}&plot=${plot}`

const container=document.querySelector(".container")
const Title=document.querySelector(".name");
const Year=document.querySelector(".year")
const Plot=document.querySelector(".plot")
const btn=document.querySelector(".btn")
const img=document.querySelector(".img")

// const title = "Kuch Kuch Hota Hai"; // Correct spelling of the variable
// const year = 1998;

// const plot = "full"; // Wrap "full" in quotes to make it a valid string


// const urlposter=`http://img.omdbapi.com/?apikey=77502be5&${title}&y=${year}&plot=${plot}`

// const url = `http://www.omdbapi.com/?apikey=77502be5&t=${title}&y=${year}&plot=${plot}`;
let title;
let year;
let plot;

btn.addEventListener("click",()=>{
     title =Title.value;
  
      year = Year.value;
      plot=Plot.value;
    const url = `https://www.omdbapi.com/?apikey=77502be5&t=${title}&y=${year}&plot=${plot}`;
  
    

    
    fetch(url).then((response)=>{
 return response.json();
}).then((data)=>{
  console.log(data)
  const content=`<h2>Title: ${data.Title}</h2>
    <p>Genre: ${data.Genre}</p>
  <p>Release Year: ${data.Year}</p>
  <p>Director: ${data.Director}</p>
  <p>Actor: ${data.Actors}</p>
  <p>Country:${data.Country}</p>
  <p>Language:${data.Language}</p>
  <p>plot :${data.Plot}</p>
  <p>Rating:${data.Ratings[0].Value}</p>
  `
  container.innerHTML=content;
  
  const urlposter=`http://img.omdbapi.com/?apikey=77502be5&i=${data.imdbID}`
  return urlposter;

}).then((data)=>{
  img.innerHTML=""
 const i=document.createElement("img")
 i.src=data
 img.appendChild(i)

})




})


