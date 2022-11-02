/* global data */

var $form = document.querySelector('form');
var $url = document.querySelector('#Photo-URL');
var $image = document.querySelector('.image');

function handleInput(event) {
  $image.src = $url.value;
}
$url.addEventListener('input', handleInput);

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entries = {};
  entries.title = $form.elements.title.value;
  entries.url = $form.elements.url.value;
  entries.notes = $form.elements.notes.value;
  entries.nextid = data.nextEntryId++;
  data.entries.push(entries);
  $form.reset();
});
