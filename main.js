var isRunning = false,
startTime,
currentTime,
elapsedTime=0,
clockInterval,
hour,
minutes,
seconds,
formattedTime,
remainder;

document.getElementById("start_stop").onclick = function() {
    if(!isRunning) {

        //start the clock               
        isRunning = true;

        if(elapsedTime == 0 ){
            startTime = new Date().getTime();
        }
        else{
            startTime = new Date().getTime() - elapsedTime;
        }
        
        clockInterval = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapsedTime = currentTime-startTime;

            // per hour --> 3600000 
            // per minutes --> 60000
            // per seconds --> 1000 
            hour = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hour * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder = remainder - (minutes*60000);

            /* console.log("remainder before sec"+remainder); */
            
            seconds = Math.floor(remainder / 1000);
            remainder = remainder - (seconds*1000);

          /*   console.log("elapsed time"+elapsedTime);
            console.log("seconds"+seconds);
            console.log("remainder after sec"+remainder);
            console.log("-----------------------------"); */
            
            formattedTime = "<span id= 'hr-min-sec'>"+leadingZero(hour)+":"+leadingZero(minutes)+":"+leadingZero(seconds)+"</span>" +" "+ "<span id='vl'>"+ " " +"</span> " + "<span id= 'leadingZero'>" + leadingZero(remainder)+"</span>";

            document.getElementById("time").innerHTML = formattedTime;   
        },10);
    } else {
        
        //stop the clock
        isRunning = false;
        window.clearInterval(clockInterval);
    }
};

document.getElementById("reset").onclick = function(){
    if(!isRunning){
        elapsedTime = 0
        document.getElementById("time").innerHTML = "<span id='hr-min-sec'>"+"00:00:00 "+ "</span>" +" "+ "<span id='vl'>"+ " " +"</span> "+"<span id = 'leadingZero'>"+"000"+"</span>";
    }
    else{
        startTime = new Date().getTime();
    }
      
};



//Leading Zero Function

function leadingZero(number){
    if(number<10){
        return "0"+number.toString();
    }
    else{
        return number;
    }
}
