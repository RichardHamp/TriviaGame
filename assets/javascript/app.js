window.onload = function () {

    var time = 29

    var qOne = {
        question: "What's my name, bitch?",
        answers: ['bill', 'jake', 'fred', 'rick'],
    }

    var qTwo = {
        question: "How many fingers in my pocket?",
        answers: ['6', '4', 'none', 'dumb question'],
    }

    //populates questions and answers into appropriate divs
    function question(q) {
        document.getElementById('qDiv').innerText = (q).question;
        for (i = 4; i > 0; i--) {
            document.getElementById('aDiv' + [i]).innerText = (q).answers[i - 1];
        }
    }

    //timer counts down from 30
    function timer() {
        function f() {
            if (time > 0) {
                document.getElementById('time').innerHTML = (time);
            }
            time--;
        }
        setInterval(f, 1000);
    }
timer();
question(qTwo);

}