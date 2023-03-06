function getMovies() {
	thePromise=fetch(" http://localhost:3000/movies");
        thePromise.then(function(response){
            textPromise=response.json();
            textPromise.then(function(names){
                let list=" ";
					for(let i=0;i<names.length;i++){
                        list+="<li>"+names[i].title+"  "+names[i].releaseYear+"   "+"<button onclick='addFavourite("+JSON.stringify(names[i])+")'>Add to Favourites</button>"+"</li>";
                    }
					alert(list);
					let main=document.getElementById("moviesList");
					main.innerHTML=list;

            }).catch(function(error){
                document.getElementById("main").innerHTML=error;
            });    
        }).catch(function(error){
            console.log(error);
        });
       
}

function getFavourites() {
	thePromise=fetch(" http://localhost:3000/favourites");
        thePromise.then(function(response){
            textPromise=response.json();
            textPromise.then(function(names){
                let list=" ";
					for(let i=0;i<names.length;i++){
                        list+="<li>"+names[i].title+" "+names[i].releaseYear+"</li>";
                    }
	
					let main=document.getElementById("favouritesList");
					main.innerHTML=list;

            }).catch(function(error){
                document.getElementById("main").innerHTML=error;
            });    
        }).catch(function(error){
            console.log(error);
        });
}

function addFavourite(movie) {
	alert("Do you want add Movie in Favourite list!!!");
	let obj={
		method:"POST",
		// body:movie,
		body: JSON.stringify(movie),

		headers:{
			"Content-type":"application/json"
		}
	}
	thePromise=fetch("http://localhost:3000/favourites",obj);
	thePromise.then(function(response){
		getFavourites();
	}).catch(function(error){
		console.log(error);
	});
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
}