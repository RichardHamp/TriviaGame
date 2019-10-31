window.onload = function () {

    var time = 5;
    var correct = 0;
    var incorrect = 0;
    var timeUps = 0;
    var q1 = {
        question: "Do you know how to make a Redeye, young Mr. Flannagan?",
        answers: ["I thought this was a game about drink trivia!", "Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time.", "I don't do drinks from movies.", "I dunno...I stick to wine coolers."],
        correct: ["Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time."]
    }
    var q2 = {
        question: "How many fingers in my pocket?",
        answers: ['6', '4', 'none', 'dumb question'],
        correct: ['dumb question'],
    }
    
    //populates questions and answers into appropriate divs
    function question(q) {
        document.getElementById('qDiv').innerText = (q).question;
        for (i = 4; i > 0; i--) {
            document.getElementById('aDiv' + [i]).innerText = (q).answers[i - 1];
            document.getElementById('aDiv' + [i]).style.visibility = "visible";
        }
    }

    function change() {
        function f() {
            i=document.getElementById('qDiv');
            i.parentNode.removeChild(i)
        }
        setInterval(f, 6000);
        i=q2;
        timer();
        question(i);

        $(".test").click(function () {
            i=q1;
            if (this.innerHTML==((i).correct)) {
                true1(i);
            }
            else {
                false1(i);
            }
        });
        document.getElementById('start').style.visibility = "hidden";
        document.getElementById('qDiv').style.visibility = "visible";
    }



    function true1(i) {
        console.log(i);
        correct ++;
        document.getElementById("wins").innerHTML = (correct)
        document.getElementById('time').style.visibility = "hidden"
        document.getElementById('qDiv').innerHTML = '<video width="70%" height="70%" autoplay loop><p></p><source src="assets/images/cocktail.mp4" type="video/mp4" /></video><p>Correct. NICE JOB!!! ... lush</p>'
        for (j = 4; j > 0; j--) { 
              var element = document.getElementById('aDiv' + [j]);
              element.parentNode.removeChild(element);
        }
        change();
    }

    function false1(i) {
        console.log(i);
        incorrect ++;
        document.getElementById("losses").innerHTML = (incorrect)
        document.getElementById('time').style.visibility = "hidden"
        document.getElementById('qDiv').innerHTML = '<video width="70%" height="70%" autoplay loop><p></p><source src="assets/images/cocktail.mp4" type="video/mp4" /></video><p>Wrong. The correct answer was (B) "Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time." Have you not ever seen Cocktail? </p>'
        for (j = 4; j > 0; j--) { 
              var element = document.getElementById('aDiv' + [j]);
              element.parentNode.removeChild(element);
        }
        change();
    }

    function timesUp(i){
        console.log(i);
        timeUps ++;
        document.getElementById("ties").innerHTML = (timeUps);
        document.getElementById('time').style.visibility = "hidden"
        document.getElementById('qDiv').innerHTML = '<video width="70%" height="70%" autoplay loop><p></p><source src="assets/images/cocktail.mp4" type="video/mp4" /></video><p>Time is up. The correct answer was (B) "Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time." Have you not ever seen Cocktail? </p>'
        for (j = 4; j > 0; j--) { 
              var element = document.getElementById('aDiv' + [j]);
              element.parentNode.removeChild(element);
        }
        change();
    }

    //timer counts down from 30
    function timer() {
        document.getElementById('time').style.visibility = "visible";
        function f() {
            if (time > -1) {
                document.getElementById('time').innerHTML = (time);
                if (time === 0) {
                    timesUp();
                }
            }
            time--;
        }
        setInterval(f, 1000);
    }

    $("#start").click(function () {
        i=q1
        timer();
        question(i);

        $(".test").click(function () {
            i=q1;
            if (this.innerHTML==((i).correct)) {
                true1(i);
            }
            else {
                false1(i);
            }
        });
        document.getElementById('start').style.visibility = "hidden";
        document.getElementById('qDiv').style.visibility = "visible";
    });
}