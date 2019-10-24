const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`

let giphyImageTag = document.querySelector('#giphyImageTag')
let giphyTitleDiv = document.querySelector('#giphyTitleDiv')

// GRAB THE BUTTON ELEMENT FROM THE DOM AND ADD EVENT LISTENERS
let getRandomGiphyButton = document.querySelector('#getRandomGiphyButton');
getRandomGiphyButton.addEventListener('click', axiosGiphy)

let getTrendingGiphyButton = document.querySelector('#getTrendingGiphyButton');
getTrendingGiphyButton.addEventListener('click', axiosGiphy)

function axiosGiphy(event) {
  // WE SET WHICH ENDPOINT TO HIT BASED ON THE ID OF THE CLICKED BUTTON
  let axiosUrl = event.target.id === 'getRandomGiphyButton' ? giphyRandomEndpoint : giphyTrendingEndpoint;

  axios({
    url: axiosUrl,
    method: 'get'
  })
    .then(response => {
      // IN THE .THEN METHOD, CONSOLE.LOG THE JSON RESPONSE OBJECT  
      // AND FIND THE image_url and title
      let trendingGifIndex = Math.floor(Math.random() * 25);
      let giphyData = response.data.data
      let embededImageUrl = giphyData[0] ? giphyData[trendingGifIndex].images.downsized.url : giphyData.image_url;
      let giphyTitle = giphyData[0] ? giphyData[trendingGifIndex].title : giphyData.title;

      // CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url
      giphyImageTag.setAttribute('src', embededImageUrl)

      // CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
      giphyTitleDiv.innerText = giphyTitle
    })
    .catch(error => console.log(error))
}
