$(document).ready(function(){
	var clockRefresh = setInterval(displayTime,1000);
	var clicks = 0;
	var timeStop;
	var timeStart;

	function time(){
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		var dT = time.getTime();
		minutes = (minutes < 10 ? "0":"") + minutes;
		seconds = (seconds < 10 ? "0":"") + seconds;
		var antePost = (hours > 12) ? "PM":"AM";
		hours = (hours > 12) ? hours-12 : hours;

		clock = hours + " : " + minutes + " : " + seconds + " " + antePost;
		
		if(minutes === "00" && seconds === "00"){
			colorBlue();
		}else if(seconds === "00"){
			colorRed();
		}
		return [clock, dT] ;
	}

	function displayTime(){	
		$('#time').text(time()[0]);
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

	$('.freeze-button').click(function(){
		clicks++;
		var differential;
		if(clicks%2 === 1){
			clearInterval(clockRefresh);
			timeStop = time()[1];
			$('#freeze-time').text('');
			
		}else{
			clockRefresh = setInterval(displayTime,1000);
			timeStart = time()[1];
			differential = Math.round((10*(timeStart - timeStop)/1000))/10;
			console.log((differential));
			$('#freeze-time').text('The clock was stopped for '+differential+' seconds');
		}
		
	});
});



