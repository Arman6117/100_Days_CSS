//!ELEMENTS
const $dropzone = $(".dropzone");
const $button = $(".upload-btn");
const $bar = $(".bar");
const $syncing = $(".syncing");
const $done = $(".done");

//!PROPS
let droppedFiles = false;
let timeout;
let uploading = false;
let filename = "";

$dropzone
  .on("drag dragstart dragend dragover dragenter dragleave drop", function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on("dragover dragenter", function() {
    $dropzone.addClass("is-dragover");
  })	.on('dragleave dragend drop', function() {
    $dropzone.removeClass('is-dragover');
  })
 .on('drop', function(e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
    fileName = droppedFiles[0]['name'];
    $('.filename').html(fileName);
    $('.dropzone .upload').hide();
  });
  
  $button.bind('click', function() {
    startUpload();
  });
  
  $("input:file").change(function (){
    fileName = $(this)[0].files[0].name;
    $('.filename').html(fileName);
    $('.dropzone .upload').hide();
  });
  
  function startUpload() {
    if (!uploading && fileName != '' ) {
      uploading = true;
      $button.html('Uploading...');
      $dropzone.fadeOut();
      $syncing.addClass('active');
      $done.addClass('active');
      $bar.addClass('active');
      timeoutID = window.setTimeout(showDone, 3200);
    }
  }
  
  function showDone() {
    $button.html('Done');
  }