export const chapter = "Chapter - 8: Ten Little Teddy Bears";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What does Mr Red say he is going to do?",
        optionA: "Go for a swim",
        optionB: "Go to the airport",
        optionC: "Go to the market",
        correctAnswer: "Go to the market",
     }),
      shuffleOptions({
        question: "Where are nine little teddy bears playing?",
        optionA: "On a train",
        optionB: "In a sink",
        optionC: "In a pot of glue",
        correctAnswer: "In a sink",
     }),
      shuffleOptions({
        question: "Who declared themselves the winner in a race?",
        optionA: "Mr Green",
        optionB: "Mr Black",
        optionC: "Mr Yellow",
        correctAnswer: "Mr Black",
     }),
      shuffleOptions({
        question:
          "What mode of transportation is Ms Purple using to go to the airport?",
        optionA: "Turtle",
        optionB: "Train",
        optionC: "Car",
        correctAnswer: "Turtle",
     }),
      shuffleOptions({
        question: "What did Mr Yellow say he was doing while saying hello?",
        optionA: "Riding on a turtle",
        optionB: "Dancing with the queen",
        optionC: "On a train ride",
        correctAnswer: "On a train ride",
     }),
      shuffleOptions({
        question: "Who offers to take the other teddy bears out for dinner?",
        optionA: "Mr Blue",
        optionB: "Mr Green",
        optionC: "Mr Yellow",
        correctAnswer: "Mr Green",
     }),
      shuffleOptions({
        question: "What did Mr Blue say about being stuck in a pot of glue?",
        optionA: "He's free",
        optionB: "He's having a bath",
        optionC: "He's going to the temple",
        correctAnswer: "He's free",
     }),
      shuffleOptions({
        question: "What does Mr White say it's time for?",
        optionA: "Dinner",
        optionB: "A race",
        optionC: "A bath",
        correctAnswer: "A bath",
     }),
      shuffleOptions({
        question: "Where is Mr Grey going?",
        optionA: "To a temple",
        optionB: "To the airport",
        optionC: "To the market",
        correctAnswer: "To a temple",
     }),
      shuffleOptions({
        question: "Who declares themselves 'Ms World'?",
        optionA: "Ms Pink",
        optionB: "Ms Purple",
        optionC: "Ms Brown",
        correctAnswer: "Ms Brown",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Ten little teddy bears sitting on the bed, 'I'm off to the market,' said Mr ____________.",
        optionA: "Pink",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Red",
     }),
      shuffleOptions({
        question:
          "Nine little teddy bears playing in the sink, 'I'm off for a swim,' said Ms ____________.",
        optionA: "Brown",
        optionB: "Purple",
        optionC: "Yellow",
        correctAnswer: "Purple",
     }),
      shuffleOptions({
        question:
          "Eight little teddy bears racing on a track, 'I'm the winner!' said Mr ____________.",
        optionA: "Black",
        optionB: "White",
        optionC: "Grey",
        correctAnswer: "Black",
     }),
      shuffleOptions({
        question:
          "Seven little teddy bears riding on a turtle, 'I'm off to the airport,' said Ms ____________.",
        optionA: "Red",
        optionB: "Pink",
        optionC: "Purple",
        correctAnswer: "Purple",
     }),
      shuffleOptions({
        question:
          "Six little teddy bears just said, 'Hello!' 'But, I'm on a train ride,' said Mr ____________.",
        optionA: "Green",
        optionB: "Blue",
        optionC: "Yellow",
        correctAnswer: "Yellow",
     }),
      shuffleOptions({
        question:
          "Five little teddy bears dancing with the queen, 'I'll take you out for dinner,' said Mr ____________.",
        optionA: "Black",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Green",
     }),
      shuffleOptions({
        question:
          "Four little teddy bears stuck in a pot of glue, 'But, I'm free!' said Mr ____________.",
        optionA: "Blue",
        optionB: "White",
        optionC: "Brown",
        correctAnswer: "Blue",
     }),
      shuffleOptions({
        question:
          "Three little teddy bears playing in the night, 'It's time for my bath,' said Mr ____________.",
        optionA: "Grey",
        optionB: "Pink",
        optionC: "Yellow",
        correctAnswer: "Grey",
     }),
      shuffleOptions({
        question:
          "Two little teddy bears sitting down to pray, 'I'm off to the temple,' said Mr ____________.",
        optionA: "Red",
        optionB: "Grey",
        optionC: "Brown",
        correctAnswer: "Grey",
     }),
      shuffleOptions({
        question:
          "One little teddy bear wearing a gold crown, 'And I'm Ms ____________!' said snooty Ms ____________.",
        optionA: "Black, Yellow",
        optionB: "Purple, Green",
        optionC: "Brown, Red",
        correctAnswer: "Brown, Red",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mr Red is going to the market.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Ms Pink is playing in the sink.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mr Black won the race.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Ms Purple is riding on a train.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mr Yellow is going to the airport.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mr Green is dancing with the queen.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mr Blue is stuck in a pot of glue.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mr White is playing in the night.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mr Grey is going to the temple.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Ms Brown is wearing a gold crown.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
