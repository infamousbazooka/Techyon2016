$(document).ready(function() {
	var trans = $(window).width() - $('.social h2').outerWidth();
	trans = 'translate(' + trans + 'px)';
	$('.social').css('transform', trans);
	$('.social').mouseover(function(event) {
		var trans = $(window).width() - $('.social').outerWidth();
		trans = 'translate(' + trans + 'px)';
		$(this).css('transform', trans);
	})
	.mouseout(function(event) {
		var trans = $(window).width() - $('.social h2').outerWidth();
		trans = 'translate(' + trans + 'px)';
		$(this).css('transform', trans);
	});


	init();
});
$(window).resize(function() {
});


function init () {
	$('#events').click(function(event) {
		$('body').load('events/');
	});
	$('#contact').click(function(event) {
		$('body').load('contact/');
	});
	$('#team').click(function(event) {
		$('body').load('team/');
	});
}