$(document).ready(function () {
    $('#question').hide();
    $("#remaining-time").hide();
    $("#start").on('click', bartender.startGame);
    $(document).on('click', '.option', bartender.guessChecker);
  })
  
  var bartender = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',
  
    questions: {
      q1: "Do you know how to make a Redeye, young Mr. Flannagan?",
      q2: "Hey, man, can you make me a White Russian?",
      q3: "Of all the gin-joints in all the towns, in all the world, you come into mine and order a French 75.",
      q4: "Hey, Moe, can you pour me another ______ Beer? Barney took my last one.",
      q5: "What's in a Jagerbomb?",
    },
    answers: {
      q1: ["I thought this was a game about drink trivia!", "Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time.", "I don't do drinks from movies.", "I dunno...I stick to wine coolers."],
      q2: ["Bit less than a shot of Kahlua, shot and a half of vodka, shot of cream", "The dude made it with non-dairy creamer, so I do that too.", "Shot of vodka, splash of creme de cacao, fill the rest of a tumbler with half and half", "I'm not a red commie, so don't drink that stuff."],
      q3: ["Make it again, Sam. Just one last time.", "Shot of gin, less than a shot of lemon, shot of simple syrup, fill rest of glass with champagne", "Drink me. Drink me as if it were the last time.", "3 oz red wine. Shot of peppermint schnapps. Shot of grenadine."],   q4: ["Boba", "Duff", "Sorry, kid, we only make keys here.", "Flannigan's"],
      q4: ["Boba", "Duff", "Sorry, kid, we only make keys here.", "Flannigan's"],
      q5: ["Shot of desperation and a dash of bro sweat", "Angel tears and ground up unicorn horn for the bite at the end", "Mostly a parent's waste of hard work and sweat saving up a college fund.", "Bra! Don't care! Bottoms up before heading back to the frat. Bros forevah!"],
    },
   correctA: {
      q1: "Half a beer, shot of vodka, tomato juice, and a raw egg. Quit wasting my time.",
      q2: "Bit less than a shot of Kahlua, shot and a half of vodka, shot of cream",
      q3: "Shot of gin, less than a shot of lemon, shot of simple syrup, fill rest of glass with champagne",
      q4: "Duff",
      q5: "Mostly a parent's waste of hard work and sweat saving up a college fund.",
    },
  
    startGame: function () {
      bartender.currentSet = 0;
      bartender.correct = 0;
      bartender.incorrect = 0;
      bartender.unanswered = 0;
      clearInterval(bartender.timerId);
      $('#game').show();
      $('#final').html('');
      $('#timer').text(bartender.timer);
      $('#start').hide();
      $('#countdown').show();
      $('#question').show();
      bartender.nextQuestion();
    },
  
    nextQuestion: function () {
  
      bartender.timer = 10;
      $('#timer').removeClass('last-seconds');
      $('#timer').text(bartender.timer);
  
      if (!bartender.timerOn) {
        bartender.timerId = setInterval(bartender.timerRunning, 1000);
      }
  
      var barQuestions = Object.values(bartender.questions)[bartender.currentSet];
      $('#question').text(barQuestions);
  
      var possAnswers = Object.values(bartender.answers)[bartender.currentSet];
  
      $.each(possAnswers, function (index, key) {
        $('#answersH').append($('<button class="option btn btn-info btn-lg test">' + key + '</button>'));
      })
  
    },
  
    timerRunning: function () {
      if (bartender.timer > -1 && bartender.currentSet < Object.keys(bartender.questions).length) {
        $('#timer').text(bartender.timer);
        bartender.timer--;
        if (bartender.timer === 4) {
          $('#timer').addClass('last-seconds');
        }
      }
  
      else if (bartender.timer === -1) {
        bartender.unanswered++;
        bartender.result = false;
        clearInterval(bartender.timerId);
        resultId = setTimeout(bartender.guessResult, 1000);
        $('#final').html('<h3>Out of time! The answer was ' + Object.values(bartender.correctA)[bartender.currentSet] + '</h3>');
      }
  
      else if (bartender.currentSet === Object.keys(bartender.questions).length) {
        $('#final')
          .html('<h1>You are all boozed up!</h3>' +
            '<h3>Correct: ' + bartender.correct + '</h3>' +
            '<h3>Incorrect: ' + bartender.incorrect + '</h3>' +
            '<h3>Unaswered: ' + bartender.unanswered + '</h3>' +
            '<h4>Go ahead. Hit the sauce again.</h3>');
        $('#game').hide();
        $('#start').show();
      }
    },
  
    guessChecker: function () {
      var resultId;
      var currentAnswer = Object.values(bartender.correctA)[bartender.currentSet];
      if ($(this).text() === currentAnswer) {
        $(this).addClass('btn-success').removeClass('btn-info');
        bartender.correct++;
        clearInterval(bartender.timerId);
        resultId = setTimeout(bartender.guessResult, 1000);
        $('#final').html('<h3>Nicely done! Another round!</h3>');
      }
      else {
        $(this).addClass('btn-danger').removeClass('btn-info');
        bartender.incorrect++;
        clearInterval(bartender.timerId);
        resultId = setTimeout(bartender.guessResult, 2000);
        $('#final').html('<h3>You ain' + "'" + 't much of a bartender! The real answer is :" ' + currentAnswer + '</h3>');
      }
    },
  
    guessResult: function () {
      bartender.currentSet++;
      $('.option').remove();
      $('#final h3').remove();
      bartender.nextQuestion();
    }
  }