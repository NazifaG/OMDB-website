const apiKey = '8be7f24f'

const searchBtn = document.querySelector('#searchBtn')
const input = document.querySelector('.input')
const card = document.querySelector('.cards')

async function movie(url){
    try{
       const response = await fetch(url)
       const data = await response.json()
       console.log(data.Search);
   
       movieInfo(data)

    }catch(err){
        console.log(err);
    }
}

function act(){
    const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`
    movie(mov)
}

act()

searchBtn.addEventListener('click',act)

input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        act()
    }
})


function movieInfo(data){
    const arr = data.Search
    card.innerHTML = ""
    // if (arr && arr.length > 0) {
        card.innerHTML = ""
        arr.forEach((element) => {
          card.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.Title} <p class="year">(${element.Year})</p></h5>
              <p class="card-type type">${element.Type}</p>
              <p class="card-text imdb-id">IMDB ID: ${element.imdbID}</p>
            </div>
            </div>
          `
          
         })
    //      document.querySelector('.not-found').style.display = 'none'
    // }else{
    //     card.innerHTML = ""
    //     document.querySelector('.not-found').style.display = 'block'
    // }
   


 }