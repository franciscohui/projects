// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function() {
  
  var header1 = document.getElementById('header1');
  
  $(header1).blur(function() {
    localStorage.setItem('header1Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('header1Data') ) {
    header1.innerHTML = localStorage.getItem('header1Data'); 
  }

  var article1 = document.getElementById('article1');
  
  $(article1).blur(function() {
    localStorage.setItem('article1Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('article1Data') ) {
    article1.innerHTML = localStorage.getItem('article1Data'); 
  }

// ---- module 2
  var header2 = document.getElementById('header2');
  
  $(header2).blur(function() {
    localStorage.setItem('header2Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('header2Data') ) {
    header2.innerHTML = localStorage.getItem('header2Data'); 
  }

  var article2 = document.getElementById('article2');
  
  $(article2).blur(function() {
    localStorage.setItem('article2Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('article2Data') ) {
    article2.innerHTML = localStorage.getItem('article2Data'); 
  }

// ---- module 3
  var header3 = document.getElementById('header3');
  
  $(header3).blur(function() {
    localStorage.setItem('header3Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('header3Data') ) {
    header3.innerHTML = localStorage.getItem('header3Data'); 
  }

  var article3 = document.getElementById('article3');
  
  $(article3).blur(function() {
    localStorage.setItem('article3Data', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('article3Data') ) {
    article3.innerHTML = localStorage.getItem('article3Data'); 
  }







// SORTABLE
  $(function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  });



  
  // to reset
  // localStorage.clear();
  
});