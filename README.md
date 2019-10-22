## Axios AJAX Giphy Homework

For homework, you'll practice what we learned today ad return a random gif from the [Giphy API](https://developers.giphy.com/explorer).

Giphy requires an API key (it's free). However, I've given you the random endpoint with a working API key in the `script.js` file.

```js
const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`
```

Read the `script.js` file for instructions. 

## Deliverable

When I click on the `Get Random Giphy!` button I should see a random gif.

  ![](https://i.imgur.com/YP7wU3M.png)

Make sure that you turn on GitHub Pages for your repo so we can test it out!

## Bonus

Add a 2nd button to hit the Giphy trending endpoint:

```js
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`
```

