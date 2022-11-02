/* global data */

var $form = document.querySelector('form');

var $url = document.querySelector('#Photo-URL');

var $image = document.querySelector('.image');

function handleInput(event) {
  $image.src = $url.value;
}

$url.addEventListener('input', handleInput);

$form.addEventListener('submit', function (event) {

  var entries = {};
  entries.title = $form.elements.title.value;
  entries.url = $form.elements.url.value;
  entries.notes = $form.elements.notes.value;
  entries.nextid = data.nextEntryId++;
  data.entries.unshift(entries);
  $form.reset();
  $image.src = 'images/placeholder-image-square.jpg';
  event.preventDefault();
});

function renderList(entry) {
  var $ul = document.querySelector('ul');
  var list = document.createElement('li');
  list.textContent = entry.notes;
  $ul.prepend(list);

  var heading = document.createElement('h3');
  heading.textContent = entry.title;
  list.prepend(heading);

  var image = document.createElement('img');
  image.setAttribute('src', entry.url);
  image.setAttribute('class', 'imagesize');
  list.prepend(image);
  console.log(entry);
  console.log($ul);
}

var $ul = document.querySelector('ul');
console.log($ul);

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    renderList(data.entries[i]);
  }

});

var $button = document.querySelector('.new-button');
console.log('brotha', $button);

var hidden = document.querySelector('.hidden');
console.log(hidden);

var view = document.querySelector('.visible');
console.log(view);

// var target = event.target.getAttribute('data-view');
$button.addEventListener('click', function (event) {
  hidden.className = view;
  view.className = hidden;
});
