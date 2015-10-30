$(document).ready(function(){

	setInterval(displayTime,1000);

	function displayTime(){

		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		minutes = (minutes < 10 ? "0":"") + minutes;
		seconds = (seconds < 10 ? "0":"") + seconds;
		var antePost = (hours > 12) ? "PM":"AM";
		hours = (hours > 12) ? hours-12 : hours;

		clock = hours + ":" + minutes + ":" + seconds
		$('#time').text(clock);


		if(minutes == 00 && seconds == 00){
			colorBlue();
		}else if(seconds == 00){
			colorRed();
		}


	}

	function colorBlue(){
		$('.clock').addClass('blue-numbers');
		setInterval(colorBlack,60000);
	}

	function colorRed(){
		$('.clock').addClass('red-numbers');
		setInterval(colorBlack,5000);
	}
	function colorBlack(){
		$('.clock').removeClass('red-numbers blue-numbers');
	}
	})



