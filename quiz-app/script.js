const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is Pi?',
    answers: [
      { text: '4.14', correct: true },
      { text: '6.14', correct: false }
    ]
  },
  {
    question: 'In which year did the United Nations come into existence?',
    answers: [
      { text: '1945', correct: true },
      { text: '1946',correct: false },
      { text: '1957', correct: false },
      { text: '1947', correct: false }
    ]
  },
  {
    question: 'What is the sixth of the Ten Commandments? ',
    answers: [
      { text: 'Thou shalt not steal', correct: false },
      { text: 'Thou shalt not kill', correct: true },
      { text: 'Honor thy father and thy mother', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is the collective noun for bears?',
    answers: [
      { text: 'Sloth', correct: true },
      { text: 'Herd', correct: false }
    ]
  },
   {
    question: 'What is the maximum number of times you can fold any piece of paper?',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '5', correct: false },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'What is chevre?',
    answers: [
      { text: 'type of fruit', correct: false },
      { text: 'type of wine', correct: false },
      { text: 'type of cheese', correct: true },
      { text: 'type of vegetable', correct: false }
    ]
  },
  {
    question: 'Who wrote the book Great Expectations?',
    answers: [
      { text: 'Charles Dickens', correct: true },
      { text: 'Emily Bronte', correct: false },
      { text: 'Rudyard Kipling', correct: false },
      { text: 'Oscar Wilde', correct: false }
    ]
  },
  {
    question: 'Who wrote the poem The Road Not Taken?',
    answers: [
      { text: 'Edgar Allan Poe', correct: false },
      { text: 'Emily Dickinson', correct: false },
      { text: 'Rudyard Kipling', correct: false },
      { text: 'Robert Frost', correct: true }
    ]
  },
  {
    question: 'Who directed the movie Titanic?',
    answers: [
      { text: 'Christopher Nolan', correct: false },
      { text: 'Steven Spielberg', correct: false },
      { text: 'Martin Scorsese', correct: false },
      { text: 'James Cameron', correct: true }
    ]
  },
  {
    question: 'How many hearts does an octopus have?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false }
    ]
  },
  {
    question: 'In the periodic table, which element is As?',
    answers: [
      { text: 'Astetine', correct: false },
      { text: 'Silver', correct: false },
      { text: 'Gold', correct: false },
      { text: 'Arsenic', correct: true }
    ]
  },
  {
    question: 'How many countries are there in the world?',
    answers: [
      { text: '195', correct: true },
      { text: '190', correct: false }
    ]
  },
  {
    question: 'Is Handball an Olympic Sport?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'What is the smallest country the world by population?',
    answers: [
      { text: 'Vatican City State', correct: true },
      { text: 'Monaco', correct: false },
      { text: 'San Marino', correct: false },
      { text: 'Nauru', correct: false }

    ]
  },
  {
    question: 'Who painted Wanderer above the Sea of Fog?',
    answers: [
      { text: 'Casper David Friedrich', correct: true },
      { text: 'Pierre-Auguste Renoir', correct: false },
      { text: 'Paul Cézanne', correct: false },
      { text: 'Vincent van Gogh', correct: false }

    ]
  },
  {
    question: 'Who sang the 1980 hit single Ride Like Wind?',
    answers: [
      { text: 'Cristopher Cross', correct: true },
      { text: 'The Manhattans', correct: false },
      { text: 'Kenny Loggins', correct: false },
      { text: 'Rupert Holmes', correct: false }

    ]
  },
  {
    question: 'In Greek mythology who is Athena?',
    answers: [
      { text: 'the godess of agriculture and grain', correct: false },
      { text: 'the godess of hunting, animals and childbirth',correct: false },
      { text: 'the godess of wisdom and defense', correct: true },
      { text: 'the queen of the gods and goddess of women', correct: false }

    ]
  }
  
  
]