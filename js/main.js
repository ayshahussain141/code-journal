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

  $ul.prepend((renderList(object)));
  viewSwap('entries');
  $form.reset();
  $image.src = 'images/placeholder-image-square.jpg';

});
var $ul = document.querySelector('ul');
function renderList(entry) {

  var list = document.createElement('li');
  list.setAttribute('data-next-id', entry.nextid);

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

  return list;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderList(data.entries[i]));
  }

});
var $button = document.querySelector('.new-button');
var form1 = document.querySelector('#form-1');
var entryform = document.querySelector('#entry-1');

$button.addEventListener('click', function (event) {
  viewSwap('entry-form');
});

var anchor = document.querySelector('a');

anchor.addEventListener('click', function (event) {
  viewSwap('entries');

});

function viewSwap(string) {
  data.view = string;
  if (string === 'entry-form') {
    form1.className = 'visible';
    entryform.className = 'hidden';
  } else if (string === 'entries') {
    entryform.className = 'visible';
    form1.className = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  viewSwap(data.view);
}
);
