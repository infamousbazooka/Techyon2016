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
	$('body').addClass('loaded');
}
window.onload = preloader;