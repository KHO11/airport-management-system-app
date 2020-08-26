


function renderTime() {

    document.getElementById("firstRunway").disabled = true;
    document.getElementById("secondRunway").disabled = true;
    document.getElementById("thirdRunway").disabled = true;
    document.getElementById("fourthRunway").disabled = true;
    document.getElementById("fifthRunway").disabled = true;

    // it finds out the current day and month 
    var myDate = new Date();
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    var year = myDate.getFullYear();
    var dayArray=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthArray =new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    // collects the hour, minute, second and day from current date
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var d = currentTime.getDay();

    //Runways
    /*class Runway {
        constructor(timeRemaining, isFull){
            this.timeRemaining = timeRemaining,
            this.isFull = isFull
        }
            unavailable(){
                this.isFull = true
            }
    }

    let Runway1 = new Runway(0, false);
    let Runway2 = new Runway(0, false);
    let Runway3 = new Runway(0, false);
    let Runway4 = new Runway(0, false);*/



    // to make midnight have its hour number 00 on display instead of 24
    if (h == 24) {
        h =0;
    }

    // adds the string zero to the number
    if (h < 10) {
        h= "0" + h;
    }

    if (m<10) {
        m ="0" + m;
    }

    if(s<10) {
        s = "0" +s;
    }



    // allow input box to be usable within the time frame
    if (h >=7 && h<=22 && d!=0) {
        document.getElementById("mySelect").disabled = false;
        document.getElementById("taken").disabled = false;
        document.getElementById("land").disabled = false;
    }

    else if (h>=8 && h<=18 && d ==0) {
        document.getElementById("mySelect").disabled=false;
        document.getElementById("taken").disabled = false;
        document.getElementById("land").disabled = false;
    }

    //prevents the user from using the input box 
    else {
        document.getElementById("mySelect").disabled=true;
        document.getElementById("mySelect2").disabled=true;
        document.getElementById("taken").disabled=true;
        document.getElementById("land").disabled=true;
    }

    var myclock = document.getElementById("demo");
    //prints the current time in a specific format
    myclock.textContent= " " + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m +":" + s;

    myclock.innerText = " " + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m +":" + s;


    

    setTimeout("renderTime()", 1000);
 

}


//creating a constructor for aircrafts along with its properties
function aircrafts(code,takeOff,landing) {
    this.code = code;
    this.takeOff = takeOff;
    this.landing = landing;
}

//created objects
var aircraft1 = new aircrafts("DC35", 16,23);
var aircraft2 = new aircrafts("AB330",12,20);
var aircraft3 = new aircrafts("LH456", 19,21);
var aircraft4 = new aircrafts("AB300",22,28);



var timer = null;

//a method for the aircrafts constructor
aircrafts.prototype.startTimer = function(duration,display) {

        let start = Date.now();
        let diff, min, sec;

        let timer = () => {
            //  time difference from current date to zero
            diff = duration - (((Date.now() - start) /        1000) | 0);
            //use bitwise to truncate the float
            min = (diff / 60) | 0;
            sec = (diff % 60) | 0;

            min = min < 10 ? '0' + min : min;
            sec = sec < 10 ? '0' + sec : sec;

            display.textContent = min + ':' + sec;


            // determines whether the timer has reached zero or not
            if (diff < 0) {
                
                stopTimer();
                display.textContent ="";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                
                if(document.getElementById("firstRunway").disabled == true) {
                    document.getElementById("mySelect2").selectedIndex = "0";
                }

                else if(document.getElementById("secondRunway").disabled == true) {
                    document.getElementById("mySelect2").selectedIndex = "1";
                }

                else if(document.getElementById("thirdRunway").disabled == true) {
                    document.getElementById("mySelect2").selectedIndex = "2";
                }

                else if(document.getElementById("fourthRunway").disabled == true) {
                    document.getElementById("mySelect2").selectedIndex = "3";
                }

                else if(document.getElementById("fifthRunway").disabled == true) {
                    document.getElementById("mySelect2").selectedIndex = "4";
                }
            
            
            
                
                
            }
            


        };

        //call timer immediately otherwise we wait a      full second
        timer();
        timer = setInterval(timer, 1000);
        
        //stops the countdown
        function stopTimer() {
            clearInterval(timer);
        console.log("time's up", diff);
    };
}


    
        

        function takeOff() {
            var input = document.getElementById("mySelect").value;

            var input2 = document.getElementById("mySelect2").value;

            if (input == aircraft1.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes = 60 *aircraft1.takeOff;
                
                //total timer with the take off time and 7 minute added together
                aircraft1.startTimer(60*23,display);
                //take off time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "1";
                
                
                
                
                
            }

            else if (input == aircraft1.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft1.takeOff;

                //total timer with the take off time and 7 minute added together
                aircraft1.startTimer(60*23,display);
                //take off time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "2";

            }

            else if (input == aircraft1.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft1.takeOff;

                //total timer with the take off time and 7 minute added together
                aircraft1.startTimer(60*23,display);
                //take off time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "3";
            }

            else if (input == aircraft1.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft1.takeOff;

                //total timer with the take off time and 7 minute added together
                aircraft1.startTimer(60*23,display);
                //take off time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft1.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft1.takeOff;

                //total timer with the take off time and 7 minute added together
                aircraft1.startTimer(60*23,display);
                //take off time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }




            else if (input == aircraft2.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft2.takeOff;

                //total timer with the take off time and 7 minute added together
                aircraft2.startTimer(60*19,display);
                //take off time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "1";
            }

            else if (input == aircraft2.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft2.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft2.startTimer(60*19,display);
                //take off time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "2"; 
            }

            else if (input == aircraft2.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft2.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft2.startTimer(60*19,display);
                //take off time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "3"; 
            }

            else if (input == aircraft2.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft2.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft2.startTimer(60*19,display);
                //take off time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "4"; 
            }

            else if (input == aircraft2.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft2.takeOff;

                aircraft2.startTimer(60*19,display);
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
                
            }




            else if (input == aircraft3.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft3.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft3.startTimer(60*26,display);
                //take off time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "1";
            }

            else if (input == aircraft3.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft3.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft3.startTimer(60*26,display);
                //take off time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "2";
            }

            else if (input == aircraft3.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft3.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft3.startTimer(60*26,display);
                //take off time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "3";
            }

            else if (input == aircraft3.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft3.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft3.startTimer(60*26,display);
                //take off time
                aircraft3.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "4"; 
            }

            else if (input == aircraft3.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft3.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft3.startTimer(60*26,display);
                //take off time
                aircraft3.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
               
            }





            else if (input == aircraft4.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft4.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft4.startTimer(60*29,display);
                //take off time
                aircraft4.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "1"; 
            }

            else if (input == aircraft4.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft4.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft4.startTimer(60*29,display);
                //take off time
                aircraft4.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "2"; 
            }

            else if (input == aircraft4.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft4.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft4.startTimer(60*29,display);
                //take off time
                aircraft4.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "3"; 
            }

            else if (input == aircraft4.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft4.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft4.startTimer(60*29,display);
                //take off time
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft4.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft4.takeOff;

                //total timer with the take off time and 7 minute added together 
                aircraft4.startTimer(60*29,display);
                //take off time
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }
          

        }

        function landing() {
            var input = document.getElementById("mySelect").value;

            var input2 = document.getElementById("mySelect2").value;

            if (input == aircraft1.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft1.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft1.startTimer(60*30,display);
                //landing time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "1";
                 
            }

            else if (input == aircraft1.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft1.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft1.startTimer(60*30,display);
                //landing time
                aircraft1.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "2";
            }

            else if (input == aircraft1.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft1.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft1.startTimer(60*30,display);
                //landing time
                aircraft1.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "3";
            }

            else if (input == aircraft1.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft1.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft1.startTimer(60*30,display);
                //landing time
                aircraft1.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft1.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft1.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft1.startTimer(60*30,display);
                //landing time
                aircraft1.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "0"; 
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }




            else if (input == aircraft2.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft2.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft2.startTimer(60*27,display);
                //landing time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "1"; 
            }

            else if (input == aircraft2.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft2.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft2.startTimer(60*27,display);
                //landing time
                aircraft2.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "2";
            }

            else if (input == aircraft2.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft2.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft2.startTimer(60*27,display);
                //landing time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "3"; 
            }

            else if (input == aircraft2.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft2.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft2.startTimer(60*27,display);
                //landing time
                aircraft2.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft2.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft2.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft2.startTimer(60*27,display);
                //landing time
                aircraft2.startTimer(firstMinutes, display);
                document.getElementById("mySelect2").selectedIndex = "0"; 
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }




            else if (input == aircraft3.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft3.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft3.startTimer(60*28,display);
                //landing time
                aircraft3.startTimer(fir2stMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "1";
            }

            else if (input == aircraft3.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft3.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft3.startTimer(60*28,display);
                //landing time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "2";
            }

            else if (input == aircraft3.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft3.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft3.startTimer(60*28,display);
                //landing time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "3";
            }

            else if (input == aircraft3.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft3.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft3.startTimer(60*28,display);
                //landing time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft3.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft3.landing;

                //total timer with the landing time and 7 minute added together 
                aircraft3.startTimer(60*28,display);
                //landing time
                aircraft3.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }





            else if (input == aircraft4.code && input2 == 1) {
                var display = document.getElementById('r1');   
                var firstMinutes =60 *aircraft4.landing;

                aircraft4.startTimer(60*35,display);
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "1";
            }

            else if (input == aircraft4.code && input2 == 2) {
                var display = document.getElementById('r2');   
                var firstMinutes =60 *aircraft4.landing;

                aircraft4.startTimer(60*35,display);
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "2";
            }

            else if (input == aircraft4.code && input2 == 3) {
                var display = document.getElementById('r3');   
                var firstMinutes =60 *aircraft4.landing;

                aircraft4.startTimer(60*35,display);
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "3";
            }

            else if (input == aircraft4.code && input2 == 4) {
                var display = document.getElementById('r4');   
                var firstMinutes =60 *aircraft4.landing;

                aircraft4.startTimer(60*35,display);
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "4";
            }

            else if (input == aircraft4.code && input2 == 5) {
                var display = document.getElementById('r5');   
                var firstMinutes =60 *aircraft4.landing;

                aircraft4.startTimer(60*35,display);
                aircraft4.startTimer(firstMinutes, display); 
                document.getElementById("mySelect2").selectedIndex = "0";
                document.getElementById("taken").disabled = false;
                document.getElementById("land").disabled = false;
                setTimeout(function(){document.getElementById("taken").disabled = true;},1000);
                setTimeout(function(){document.getElementById("land").disabled = true;},1000);
            }
           
            

        }

        



        
       

    