
# Web Development Quiz

To view this project, click [here](https://zacandcoder.github.io/web-dev-quiz/).

## Description

Using plain HTML, CSS, and JavaScript, I created a simple quiz. 

There are five questions related to web development. Each rectangular card contains an answer. Below these cards, the current question number is displayed. On either side of the question number, there is an arrow. The left arrow is a back button while the right arrow is a next button. When an answer is clicked, its text will turn black. Answers cannot be changed once selected. At the end of the quiz, all of the correct answers are shown. If you selected a correct answer, it will be green. If you selected an incorrect answer, it will be red.

## GIF

![QuizGif](https://user-images.githubusercontent.com/91081344/160937467-412bbaa9-282e-49a3-a00d-fbdc7cec733c.gif)

## Example Code

```
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
```

This function is executed when the back button is clicked. First, an "if statement" checks if the first question is still being shown. If so, pressing the back button should not do anything, so the function returns undefined. If any question other than the first is currently displayed, an "else statement" disables both the back button and next button with the **disableButtons()** function. They are only disabled for 1.5 seconds while transitional animations play. The **questionNumber** variable matches whatever number is displayed at the bottom of the screen. A **forEach** loop removes the **animate-emerge** class and adds the **animate-sink-in class** to each answer card, triggering some animations. After a delay of 1 second, the current question's display is turned off, and the previous question is displayed instead. Now, the **animate-sink-in** class is removed and the **animate-emerge** class is added to each answer. The **questionNumber** variable decreases by 1 so that the correct question number is shown. Finally, after a total delay of 1.5 seconds, the back button and next button are once again enabled by the **enableButtons()** function.

## License

This project uses the MIT License.
