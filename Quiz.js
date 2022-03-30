var currentQuestion = document.querySelector("#current-question"),
    nextButton = document.querySelector("#next-button"),
    backButton = document.querySelector("#back-button"),
    questions = document.querySelectorAll(".question"),
    answers = document.querySelectorAll(".answer"),
    numCorrectAnswers = 0,
    numIncorrectAnswers = 5;

//This function will be used to disable buttons while transitional animations are playing
const disableButtons = function() {
  nextButton.disabled = true;
  backButton.disabled = true;
}

//This function will be used to enable buttons after animations have finished
const enableButtons = function() {
  nextButton.disabled = false;
  backButton.disabled = false;
}

nextButton.addEventListener("click", function() {
  disableButtons();
  if (currentQuestion.innerText == "Question 5 of 5") {
    let animateFinishQuiz = setTimeout(function() {
      document.querySelector("body").classList.add("animate-body-color");
      nextButton.classList.add("animate-body-color");
      backButton.classList.add("animate-body-color");
      answers.forEach(item => {
        item.classList.add("animate-finish-quiz");
      });
    }, 0);
    let animateShowResults = setTimeout(function() {
      questions[4].style.display = "none";
      document.querySelector("#results").style.display = "block";
      document.querySelector("#results").classList.add("animate-fade-in");
      nextButton.style.display = "none";
      backButton.style.display = "none";
      currentQuestion.style.display = "none";
      document.querySelector("p").innerText = "You correctly answered " + numCorrectAnswers + " out of 5 questions.";
    }, 1000);
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
    let allowButtonClick = setTimeout(function() {
      enableButtons();
    }, 1500);
  }
});

backButton.addEventListener("click", function() {
  if (currentQuestion.innerText == "Question 1 of 5" || currentQuestion.innerText == "Results") {
    return;
  } else {
    disableButtons();
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
      questions[questionNumber - 2].style.display = "block";
      answers.forEach(item => {
        item.classList.add("animate-emerge");
        item.classList.remove("animate-sink-in");
      });  
      questionNumber--;
      currentQuestion.innerText = "Question " + questionNumber + " of 5";
    }, 1000);
    let allowButtonClick = setTimeout(function() {
      enableButtons();
    }, 1500);
  }
});

const correctAnswers = ["Application Programming Interface", "version control system", "2", "JavaScript Object Notation", "back-end"];
var chosenAnswers = [];
var answerResults = document.querySelectorAll("b");

//Add chosen answer to array
answers.forEach(item => {
  item.addEventListener("click", function() {
    item.style.textDecoration = "underline";
    if (correctAnswers.includes(item.innerHTML)) {
      numCorrectAnswers++;
      numIncorrectAnswers--;
      chosenAnswers.push(item.innerHTML);
    }
    answerResults.forEach(item => {
      if (chosenAnswers.includes(item.innerHTML)) {
        item.style.color = "green";
      } else {
        item.style.color = "red";
      }
    });
    item.parentNode.childNodes.forEach(item => {
      item.disabled = true;
    });
    return false;
  });
});

const leftArrow = d3.symbol().type(d3.symbolTriangle).size(350);

d3.select("#left-arrow")
  .append("path")
  .attr("d", leftArrow)
  .attr("fill", "#121212")
  .attr("transform", "translate(32, 25) rotate(-90)");

const rightArrow = d3.symbol().type(d3.symbolTriangle).size(350);

d3.select("#right-arrow")
  .append("path")
  .attr("d", rightArrow)
  .attr("fill", "#121212")
  .attr("transform", "translate(13, 25) rotate(90)");
