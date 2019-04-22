// GitHub Pages URL:
// https://jaybitdesign.github.io/class-assignments/javascript/5/index.html
//
// GitHub Repo URL:
// https://github.com/jaybitdesign/class-assignments/tree/master/javascript/5
//
(function() {
  var questions = [{
    question: "The EM html tag makes text _____.",
    choices: ["Bold", "Bolder", "Listed", "Indented", "Italic"],
    correctAnswer: 4
  }, {
    question: "The Hitchhiker's...",
    choices: ["are dangeous.", "robbed me!", "are cool people.", "got robbed.", "Guide to the Galaxy"],
    correctAnswer: 4
  }, {
    question: "What is 8 X 9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "CSS stands for...",
    choices: ["Computer Styling Service", "Cascading Sassy Stylesheets", "Central Security Service", "Cascading Style Sheets", "Counter Strike: Source"],
    correctAnswer: 3
  }, {
    question: "Which is NOT a real Orc clan?",
    choices: ["Dragonmaw", "Warsong", "Frostwolf", "Marauders", "Bloodbane"],
    correctAnswer: 4
  }];

  // Shuffle Questions
  shuffle(questions);

  // Tracks question number
  var questionCounter = 0;

  // Array containing user choices
  var selections = [];

  // Quiz div object
  var quiz = $('#quiz');

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function(e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if (quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function(e) {
    if (questionCounter != 0) {
      e.preventDefault();

      if (quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    }
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function(e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
  });

  // Creates and returns the div that contains the questions
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ' / ' + questions.length + ' :</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li style="list-style-type:none;padding-left:15px;">');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += " " + questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.prepend(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>', {
      id: 'question'
    });
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    score.append('You got ' + numCorrect + ' out of ' + questions.length + ' questions right.');

    // Perfect Score!
    if (numCorrect == questions.length) {
      score.append('<br><br><h4>Excellent Job!</h4>')
    }
    return score;
  }

  // Durstenfeld Computer-Optimized Shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
})();
