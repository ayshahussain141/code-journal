/* global data */

var $form = document.querySelector('form');
document.getElementById('title');
// console.log('container', document.querySelector('.container'));

var $url = document.querySelector('#Photo-URL');

document.querySelector('main');

var $image = document.querySelector('.image');

function handleInput(event) {
  $image.src = $url.value;
  Image.src();
}

$url.addEventListener('input', handleInput);

$form.addEventListener('submit', function (event) {

  var entries = {};
  entries.title = $form.elements.title.value;
  entries.url = $form.elements.url.value;
  entries.notes = $form.elements.notes.value;
  entries.nextid = data.nextEntryId++;
  data.entries.push(entries);
  $form.reset();
  $image.src = 'images/placeholder-image-square.jpg';
  event.preventDefault();
});
