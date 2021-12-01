$.ajax({
    url :'http://www.omdbapi.com/?i=tt3896198&apikey=82f51e9a&s=pirates',
    success : results =>{
        const movies = results.Search;
        let cards = '';
        movies.forEach(m=>{
            cards += `<div class="col-md-4 my-5">
                        <div class="card" style="width: 18rem;">
                            <img src="${m.Poster}" class="card-img-top" alt=>
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Tahun Rilis : ${m.Year}</h6>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, explicabo!</p>
                            <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>`
        });
        $('.movie-container').html(cards)
    },
    error:(e)=>{
        console.log(e.responseText)
    }
})

// let movieList
// const movie =()=>{
//     return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=82f51e9a&s=pirates')
//         .then(response => response.json())
//         .then (movie => movieList = movie)
// }

// const showMovie = () =>{
//     movieList.map((m)=>{
//         document.getElementById('.movie-container').innerHTML =+ `<div class="col-md-4 my-5">
//         <div class="card" style="width: 18rem;">
//             <img src="${m.Poster}" class="card-img-top" alt=>
//             <div class="card-body">
//             <h5 class="card-title">${m.Title}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">Tahun Rilis : ${m.Year}</h6>
//             <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, explicabo!</p>
//             <a href="#" class="btn btn-primary">Details</a>
//             </div>
//         </div>
//     </div>`
//     })
// }