// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
         .then(res => {
             console.log(res)
             res.data.articles['javascript'].forEach(article => {
                cardContainer.appendChild(cardComponent(article.headline, article.authorPhoto, article.authorName))
             })
             res.data.articles['node'].forEach(article => {
                cardContainer.appendChild(cardComponent(article.headline, article.authorPhoto, article.authorName))
             })
             res.data.articles['jquery'].forEach(article => {
                cardContainer.appendChild(cardComponent(article.headline, article.authorPhoto, article.authorName))
             })
             res.data.articles['bootstrap'].forEach(article => {
                cardContainer.appendChild(cardComponent(article.headline, article.authorPhoto, article.authorName))
             })
             res.data.articles['technology'].forEach(article => {
                cardContainer.appendChild(cardComponent(article.headline, article.authorPhoto, article.authorName))
             })
         })
         .catch(err => {
             console.log(err)
         });

const cardContainer = document.querySelector('.cards-container');
         
function cardComponent(headline, authorPhoto, authorName) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span);
    imgDiv.appendChild(img);

    headlineDiv.textContent = headline;
    img.src = authorPhoto
    span.textContent = authorName;

    return cardDiv

}