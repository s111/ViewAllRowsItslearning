// ==UserScript==
// @name        ViewAllRowsItslearning
// @namespace   https://github.com/s111
// @description Adds an option to view all rows when correcting assigments on itslearning
// @include     https://*.itslearning.com/essay/read_essay.aspx?EssayID=*
// @version     1
// @grant       none
// ==/UserScript==

// String on the form '[start] to [end] of [maxSize]'.
var selectionInfo = $('.page-size-chooser span');

// Selector for the page size drop-down.
var select = $('#EssayAnswers_PageSizeSelect');

if (selectionInfo.length && select.length) {
  var info = selectionInfo.text().split(" ");

  var start = info[0];
  var end = info[2];
  var maxSize = info[4];

  select.append('<option value="' + maxSize + '">View all</option>');

  // Set the correct value in the drop-down
  var currentSize = end - start + 1;
  select.val(currentSize);
}
