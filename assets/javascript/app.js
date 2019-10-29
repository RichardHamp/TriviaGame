window.onload = function () {

    var time = 29

    var q1 = {
        question: "What's my name?",
        answers: ['bill', 'jake', 'fred', 'rick'],
        correct: ['rick']
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
        console.log("true");
    }

    function false1() {
        console.log("false");
    }

    //timer counts down from 30
    function timer() {
        document.getElementById('time').style.visibility = "visible";
        function f() {
            if (time > -1) {
                document.getElementById('time').innerHTML = (time);
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
        console.log(this);
        console.log(this.innerHTML);
        console.log(i)
        console.log((i).correct);
            if (this.innerHTML==((i).correct)) {
                true1();
            }
            else {
                false1();
            }
        });

    });
}