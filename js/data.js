/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var word = localStorage.getItem('javascript-storage-form');
if (word !== null) {
  data = JSON.parse(word);
}

window.addEventListener('beforeunload', function (event) {

  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-storage-form', dataJSON);

});
