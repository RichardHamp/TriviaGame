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
    }
    
    //populates questions and answers into appropriate divs
    function question(q) {

        document.getElementById('qDiv').innerText = (q).question;
        for (i = 4; i > 0; i--) {
            document.getElementById('aDiv' + [i]).innerText = (q).answers[i - 1];
            document.getElementById('aDiv' + [i]).style.visibility = "visible";
        }
    }

    //true and false 
    function true1() {
        correct ++;
        document.getElementById("wins").innerHTML = (correct)
    }

    function false1() {
        incorrect ++;
        document.getElementById("losses").innerHTML = (incorrect)
        
    }

    function timesUp(){
        timeUps ++;
        document.getElementById("ties").innerHTML = (timeUps)
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
                true1();
            }
            else {
                false1();
            }
        });
        document.getElementById('start').style.visibility = "hidden";
        document.getElementById('startB').style.height = 0;
        document.getElementById('qDiv').style.visibility = "visible";
    });
}