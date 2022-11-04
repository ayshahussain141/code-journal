/* global data */

var $form = document.querySelector('form');

var $url = document.querySelector('#photo-url');

var $image = document.querySelector('.image');

function handleInput(event) {
  $image.setAttribute('src', $url.value);
}

$url.addEventListener('input', handleInput);

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var object = {};

  object.title = $form.elements.title.value;
  object.url = $form.elements.url.value;
  object.notes = $form.elements.notes.value;
  object.nextid = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(object);

  renderList(data.entries[0]);
  $form.reset();
  $image.src = 'images/placeholder-image-square.jpg';

});
var $ul = document.querySelector('ul');
function renderList(entry) {

  var list = document.createElement('li');
  $ul.prepend(list);

  var par = document.createElement('p');
  par.textContent = entry.notes;

  var heading = document.createElement('h3');
  heading.textContent = entry.title;

  var newElement = document.createElement('div');
  newElement.setAttribute('class', 'column-half');

  var image = document.createElement('img');
  image.setAttribute('src', entry.url);
  image.setAttribute('class', 'imagesize');
  list.prepend(image);

  list.appendChild(newElement);
  newElement.appendChild(heading);
  newElement.appendChild(par);
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    (renderList(data.entries[i]));
  }

});
var $button = document.querySelector('.new-button');
var hidden = document.querySelector('.hidden');
var view = document.querySelector('.visible');

$button.addEventListener('click', function (event) {
  hidden.className = view;
  view.className = 'hidden';
});

var anchor = document.querySelector('a');

anchor.addEventListener('click', function (event) {
  hidden.className = 'hidden';
  view.className = view;

});

var saveButton = document.querySelector('.button-save');

saveButton.addEventListener('click', function (event) {
  hidden.className = 'hidden';
  view.className = view;
});
