$('#map').css('height', $(window).height());
$('.content').css('height', $(window).height());

var minimumShowLoadingTimeReached = false;
setTimeout(function() {minimumShowLoadingTimeReached = true;}, 3000);
function preloader() {
	if (minimumShowLoadingTimeReached) {
		showContent();
	} else {
		setTimeout(function() {
			preloader();
		}, 500);
	}
}
function showContent(){
	$('html').addClass('loaded');
	$('body').addClass('loaded');
}
window.onload = preloader;

$('#send').click(function(event) {
	var name = $('#name').val();
	var email = $('#email').val();
	var contact = $('#contact').val();
	var message = $('#message').val();

	$.ajax({
		url: 'mail.php',
		type: 'POST',
		data: {name: name, email: email, contact: contact, message: message},
		success: function(data){
			console.log("dkjsnd");
			if (data == "done"){
				Snarl.addNotification({
					title: 'Message Recorded.',
					text: 'Thank you for your feedback. We will get back to you shortly.'
				});
			} else{
				Snarl.addNotification({
					title: 'Error.',
					text: 'There was an error processing your request. Please try again later.'
				});
			}
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});