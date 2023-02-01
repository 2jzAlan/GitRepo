let quotes=[
  'It does not matter how slowly you go as long as you do not stop.',
  'The only true wisdom is in knowing you know nothing.',
  'Quality is not an act, it is a habit.',
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">
<p>${quotes[index]}</p>
</div>
`;
div.innerHTML=quote;

}