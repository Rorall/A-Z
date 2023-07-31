// Add your trivia questions here
const triviaQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci",
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const correctAnswersElement = document.getElementById("correct-answers");
  const wrongAnswersElement = document.getElementById("wrong-answers");
  
  function showQuestion() {
    const question = triviaQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
  
    for (const option of question.options) {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", checkAnswer);
      optionsElement.appendChild(button);
    }
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = triviaQuestions[currentQuestionIndex].correctAnswer;
  
    if (selectedOption === correctAnswer) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  
    showScore();
  }
  
  function showScore() {
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < triviaQuestions.length) {
      showQuestion();
    } else {
      questionElement.textContent = "Trivia completed!";
      optionsElement.innerHTML = "";
      nextButton.style.display = "none";
    }
  }
  
  nextButton.addEventListener("click", nextQuestion);
  
  // Show the first question when the page loads
  showQuestion();
  
  