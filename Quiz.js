window.addEventListener("load", function() {
  document.querySelector("body").classList.add("animate-page-load");
});

var currentQuestion = document.querySelector("#current-question"),
    nextButton = document.querySelector("#next-button"),
    backButton = document.querySelector("#back-button"),
    questions = document.querySelectorAll(".question"),
    answers = document.querySelectorAll(".answer"),
    correctAnswers = 0;

nextButton.addEventListener("click", function() {
  if (currentQuestion.innerText == "Question 5 of 5") {
    chosenAnswers.forEach(item => {
      if (item.className == "correct") {
        correctAnswers++;
      }
    });
    currentQuestion.innerText = "Results";
  } else {
    //Execute animation and display different question
    let questionNumber = currentQuestion.innerHTML.match(/\d/);
    let animateSinkIn = setTimeout(function() {
      answers.forEach(item => {
        item.classList.remove("animate-emerge");
        item.classList.add("animate-sink-in");
      });
    }, 0);
    let animateEmerge = setTimeout(function() {
      questions[questionNumber - 1].style.display = "none";
      questions[questionNumber].style.display = "block";
      answers.forEach(item => {
        item.classList.add("animate-emerge");
        item.classList.remove("animate-sink-in");
      });  
      questionNumber++;
      currentQuestion.innerText = "Question " + questionNumber + " of 5";
    }, 1000);
  }
});

var chosenAnswers = [];

//Add chosen answer to array
answers.forEach(item => {
  item.addEventListener("click", function() {
    chosenAnswers.push(item);
    item.style.border = "2px solid orange";
  });
});