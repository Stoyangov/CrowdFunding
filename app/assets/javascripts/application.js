// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require semantic-ui
// require ./lib/googlecharts
//= require select2
//= require zebra-datepicker/core
//= require jquery
//= require campaigns
// require chartkick
//= require jquery.rambling.slider
//= require bank_account_submission
//= require credit_card_submission

$(function(){
	$('.ui.dropdown').dropdown({
		on: 'hover'
	});
	$('.ui.pop-up').popup();
	$('.ui.checkbox').checkbox();

	$('.ui.message .close.icon').click(function() { $(this).parent().fadeOut(); });

  $('#voteup').click(function(e){
    //add ajac call to increament vote
    $(this).toggleClass('voted');
  })
});

  $(window).load(function(){
    $('#slider').ramblingSlider();
  });
