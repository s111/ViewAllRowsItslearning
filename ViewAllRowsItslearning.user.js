// ==UserScript==
// @name        ViewAllRowsItslearning
// @namespace   https://github.com/s111
// @description Adds an option to view all rows when correcting assigments on itslearning
// @include     https://*.itslearning.com/essay/read_essay.aspx?EssayID=*
// @include     https://*.itslearning.com/AssessmentRecord/Grades.aspx?CourseID=*
// @include     https://*.itslearning.com/AssessmentRecord/Assignments.aspx?CourseID=*
// @version     1
// @grant       none
// ==/UserScript==

// String on the form '[start] to [end] of [maxSize]'.
var sizeInfo = $('.page-size-chooser span');

// Selectors for the page size drop-downs.
var pageSelect = $('#EssayAnswers_PageSizeSelect');
var gridSelect = $('#ctl00_ContentPlaceHolder_GridPager_PagerDropdown');

if (sizeInfo.length) {
  if (pageSelect.length) {
    appendOption(pageSelect, sizeInfo);
  } else if (gridSelect.length) {
    appendOption(gridSelect, sizeInfo);
  }
}

function appendOption(selectElement, sizeInfo) {
  var info = sizeInfo.text().split(" ");

  var start = info[0];
  var end = info[2];
  var maxSize = info[4];

  selectElement.append('<option value="' + maxSize + '">View all</option>');

  // Set the correct value in the drop-down
  var currentSize = end - start + 1;
  selectElement.val(currentSize);
}
