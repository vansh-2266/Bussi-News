const key = "73621a90a09f443b9f4633fcfd5b12f7";

//for new json
const getNews = async (country) => {

    const base = 'https://newsapi.org/v2/top-headlines' ;

    const queery = `?country=${country}&category=business&apiKey=${key}`;
    // const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + queery);
    const data =await response.json();

    return data;
};

// getNews('in').then( data => {
//     for(var i = 0; i <= 10 ; i++){
//     console.log(data.articles[i]);
//     }
// }).catch(err => {
//     console.log(err);
// })
