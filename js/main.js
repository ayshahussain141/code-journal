/* global data */

document.querySelector('form');
document.getElementById('title');
// console.log('container', document.querySelector('.container'));

var $url = document.querySelector('#Photo-URL');

document.querySelector('main');

var $image = document.querySelector('.image');

function handleInput(bruv) {
  $image.src = $url.value;
}

$url.addEventListener('input', handleInput);
