const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '58877674c6mshb589f99622db941p17e603jsn143522d83fde'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=batman', options)
	.then(response => response.json())
	.then(data => {
        const list=data.d;

        list.map((item) =>
        {
            const name=item.l;
            const poster=item.i.imageUrl;
            const movie=` <li><img src="${poster}"> <h2>${name}</h2></li>` 
            document.querySelector('.movies').innerHTML +=movie;
        })
    })
	.catch(err => {
        console.error(err);

    });