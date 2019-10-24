const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`

// GRAB THE BUTTON ELEMENT FROM THE DOM
let getRandomGiphyButton = document.querySelector('#getRandomGiphyButton');
let getTrendingGiphyButton = document.querySelector('#getTrendingGiphyButton');

getRandomGiphyButton.addEventListener('click', axiosGiphy)
getTrendingGiphyButton.addEventListener('click', axiosGiphy)

function axiosGiphy(event) {
  let axiosUrl = event.target.id === 'getRandomGiphyButton' ? giphyRandomEndpoint : giphyTrendingEndpoint;
  console.log(event.target)
  axios({
    url: axiosUrl,
    method: 'get'
  })
    .then(response => {
      let embededImageUrl = ''
      let giphyTitle = ''
      console.log(event.target)
      if (event.target.id === 'getRandomGiphyButton') {
        embededImageUrl = response.data.data.image_url
        giphyTitle = response.data.data.title
      } else {
        embededImageUrl = response.data.data[0].images.downsized.url
        giphyTitle = response.data.data[0].title
      }
      console.log(response)
      // IN THE .THEN METHOD, CONSOLE.LOG THE JSON RESPONSE OBJECT  
      // AND FIND THE image_url


      // CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url
      let giphyImageTag = document.querySelector('#giphyImageTag')
      giphyImageTag.setAttribute('src', embededImageUrl)

      // CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
      let giphyTitleDiv = document.querySelector('#giphyTitleDiv')
      giphyTitleDiv.innerText = giphyTitle
    })
    .catch(error => console.log(error))
}

// // ADD A CLICK EVENT LISTENER
// getRandomGiphyButton.addEventListener('click', function () {
//   // INSIDE THE EVENT HANDLER, MAKE AN AXIOS GET REQUEST TO THE 
//   // giphyRandomEndpoint ENDPOINT
//   axios({
//     url: giphyRandomEndpoint,
//     method: 'get'
//   })
//     .then(response => {
//       // IN THE .THEN METHOD, CONSOLE.LOG THE JSON RESPONSE OBJECT  
//       // AND FIND THE image_url
//       let embedUrl = response.data.data.image_url
//       let giphyTitle = response.data.data.title
//       console.log(response.data)

//       // CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url
//       let giphyImageTag = document.querySelector('#giphyImageTag')
//       giphyImageTag.setAttribute('src', embedUrl)

//       // CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
//       let giphyTitleDiv = document.querySelector('#giphyTitleDiv')
//       giphyTitleDiv.innerText = giphyTitle
//     })
//     .catch(error => console.log(error))

// })

