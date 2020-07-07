const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`;
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`;

// GRAB THE BUTTON ELEMENT FROM THE DOM
let randonBtn = document.querySelector('#getRandomGiphyButton');
console.log(randonBtn);

let trendingBtn = document.querySelector('#getTrendingGiphyButton');
console.log(trendingBtn);



// ADD A CLICK EVENT LISTENER
const getrandomGiphy = () => {
    axios({
        url: giphyRandomEndpoint,
        method: 'GET'
    })
        .then((response) => {
            let image = response.data.data.image_url;
            console.log(image);

            let url = response.data.data.url;
            console.log(url);

            let titleurl = response.data.data.title;
            console.log(titleurl);

            let imgBox = document.querySelector('#giphyImageTag');
            console.log(imgBox);
            imgBox.setAttribute('src', image);

            let title = document.querySelector('#giphyTitleDiv');
            console.log(title);
            title.innerText = titleurl;

        })
        .catch((error) => {
            console.log(error);
        });
};


const getTrendingGiphy = () => {
    axios({
        url: giphyTrendingEndpoint,
        method: 'GET'
    })
        .then((response) => {
            let trendimage = response.data.data[0].images.original.url;
            console.log(trendimage);

            let url = response.data.data.url;
            console.log(url);

            let titleurl = response.data.data.title;
            console.log(titleurl);

            let imgBox = document.querySelector('#giphyImageTag');
            console.log(imgBox);
            imgBox.setAttribute('src', trendimage);

            // let title = document.querySelector('#giphyTitleDiv');
            // console.log(title);
            // title.innerText = titleurl;

        })
        .catch((error) => {
            console.log(error);
        });
};



randonBtn.addEventListener("click", getrandomGiphy);

trendingBtn.addEventListener("click", getTrendingGiphy);



// INSIDE THE EVENT HANDLER, MAKE AN AXIOS GET REQUEST TO THE
// giphyRandomApiUrl ENDPOINT

// let url = response.data.data.url;
// console.log(url);

// IN THE .THEN METHOD, PARSE THE JSON RESPONSE OBJECT AND FIND
// THE image_url key

// let image = response.data.data.image_url;
// console.log(image);

// CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY

// let imgBox = document.querySelector('#giphyImageTag');
// console.log(imgBox);
// imgBox.setAttribute('src', image);

// CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY

// let title = document.querySelector('#giphyTitleDiv');
// console.log(title);
// title.innerText = titleurl;