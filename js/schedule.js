var mainvar = true;
var dept = 1;


function turbulence(){
	$('#mech').addClass('active');
	$('#it').removeClass('active');
	$('#comp').removeClass('active');
	$('#etc').removeClass('active');

	if (mainvar){
		$('#turbulence').show();
	} else{
		$('#turbulence1').show();
	}
	$('#mindspark').hide();
	$('#dotslash').hide();
	$('#avishkar').hide();
	$('#mindspark1').hide();
	$('#dotslash1').hide();
	$('#avishkar1').hide();
}

function mindspark() {
	$('#it').addClass('active');
	$('#mech').removeClass('active');
	$('#comp').removeClass('active');
	$('#etc').removeClass('active');

	if (mainvar){
		$('#mindspark').show();
	} else{
		$('#mindspark1').show();
	}

	$('#turbulence').hide();
	$('#dotslash').hide();
	$('#avishkar').hide();
	$('#turbulence1').hide();
	$('#dotslash1').hide();
	$('#avishkar1').hide();
}

function dotslash(){
	$('#comp').addClass('active');
	$('#it').removeClass('active');
	$('#mech').removeClass('active');
	$('#etc').removeClass('active');

	if (mainvar){
		$('#dotslash').show();
	} else{
		$('#dotslash1').show();
	}
	$('#mindspark').hide();
	$('#turbulence').hide();
	$('#avishkar').hide();
	$('#mindspark1').hide();
	$('#turbulence1').hide();
	$('#avishkar1').hide();
}

function avishkar(){
	$('#etc').addClass('active');
	$('#it').removeClass('active');
	$('#comp').removeClass('active');
	$('#mech').removeClass('active');

	if (mainvar){
		$('#avishkar').show();
	} else{
		$('#avishkar1').show();
	}
	$('#mindspark').hide();
	$('#dotslash').hide();
	$('#turbulence').hide();
	$('#mindspark1').hide();
	$('#dotslash1').hide();
	$('#turbulence1').hide();
}

function changeView(day, department) {
	if (day == 1){
		turbulence();
		$('#dayonecontent').show();
		$('#daytwocontent').hide();
		mainvar = true;
		$('#dayone').addClass('active');
		$('#daytwo').removeClass('active');
	} else if(day == 2){
		turbulence();
		mainvar = false;
		$('#dayonecontent').hide();
		$('#daytwocontent').show();
		$('#daytwo').addClass('active');
		$('#dayone').removeClass('active');
	}

	switch(department){
		case 1:
			turbulence();
			break;
		case 2:
			mindspark();
			break;
		case 3:
			dotslash();
			break;
		case 4:
			avishkar();
			break;
		default:
			break;
	}
}

var minimumShowLoadingTimeReached = false;
setTimeout(function() {minimumShowLoadingTimeReached = true;}, 2000);
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
	changeView(1, 1);
}
window.onload = preloader;