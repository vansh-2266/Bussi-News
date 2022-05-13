
const btn = document.querySelector('.btn');
const contentNew = document.querySelector('.news-content');

const updateUI = (data) => {

    for(var i =0 ; i < data.articles.length ; i++){

        var date = new Date(data.articles[i].publishedAt);
        var time = date.toLocaleString();

        contentNew.innerHTML += `
        
         <div class = "single-news">
           <h3 class = "news-title" >${data.articles[i].title}</h3>
           <a class= "news-link" href="${data.articles[i].url}" target="_blank">View Full Aritle Here</a>
           <p class = "news-date"> <strong> Date & Time: </strong> ${time}</p>
         </div>  

        `
     
    }

}

const getallNew = async (country) => {
    const newlist = await getNews(country);

    return newlist;
};



// click event for button

btn.addEventListener("click" , () => {

    getallNew('in').then((data) => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    })

})


