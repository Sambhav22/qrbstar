export const chapter = "Chapter - 8: Ten Little Teddy Bears";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does Mr Red say he is going to do?",
        optionA: "Go for a swim",
        optionB: "Go to the airport",
        optionC: "Go to the market",
        correctAnswer: "Go to the market",
      },
      {
        question: "Where are nine little teddy bears playing?",
        optionA: "On a train",
        optionB: "In a sink",
        optionC: "In a pot of glue",
        correctAnswer: "In a sink",
      },
      {
        question: "Who declared themselves the winner in a race?",
        optionA: "Mr Green",
        optionB: "Mr Black",
        optionC: "Mr Yellow",
        correctAnswer: "Mr Black",
      },
      {
        question:
          "What mode of transportation is Ms Purple using to go to the airport?",
        optionA: "Turtle",
        optionB: "Train",
        optionC: "Car",
        correctAnswer: "Turtle",
      },
      {
        question: "What did Mr Yellow say he was doing while saying hello?",
        optionA: "Riding on a turtle",
        optionB: "Dancing with the queen",
        optionC: "On a train ride",
        correctAnswer: "On a train ride",
      },
      {
        question: "Who offers to take the other teddy bears out for dinner?",
        optionA: "Mr Blue",
        optionB: "Mr Green",
        optionC: "Mr Yellow",
        correctAnswer: "Mr Green",
      },
      {
        question: "What did Mr Blue say about being stuck in a pot of glue?",
        optionA: "He's free",
        optionB: "He's having a bath",
        optionC: "He's going to the temple",
        correctAnswer: "He's free",
      },
      {
        question: "What does Mr White say it's time for?",
        optionA: "Dinner",
        optionB: "A race",
        optionC: "A bath",
        correctAnswer: "A bath",
      },
      {
        question: "Where is Mr Grey going?",
        optionA: "To a temple",
        optionB: "To the airport",
        optionC: "To the market",
        correctAnswer: "To a temple",
      },
      {
        question: "Who declares themselves 'Ms World'?",
        optionA: "Ms Pink",
        optionB: "Ms Purple",
        optionC: "Ms Brown",
        correctAnswer: "Ms Brown",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "Ten little teddy bears sitting on the bed, 'I'm off to the market,' said Mr ____________.",
        optionA: "Pink",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Red",
      },
      {
        question:
          "Nine little teddy bears playing in the sink, 'I'm off for a swim,' said Ms ____________.",
        optionA: "Brown",
        optionB: "Purple",
        optionC: "Yellow",
        correctAnswer: "Purple",
      },
      {
        question:
          "Eight little teddy bears racing on a track, 'I'm the winner!' said Mr ____________.",
        optionA: "Black",
        optionB: "White",
        optionC: "Grey",
        correctAnswer: "Black",
      },
      {
        question:
          "Seven little teddy bears riding on a turtle, 'I'm off to the airport,' said Ms ____________.",
        optionA: "Red",
        optionB: "Pink",
        optionC: "Purple",
        correctAnswer: "Purple",
      },
      {
        question:
          "Six little teddy bears just said, 'Hello!' 'But, I'm on a train ride,' said Mr ____________.",
        optionA: "Green",
        optionB: "Blue",
        optionC: "Yellow",
        correctAnswer: "Yellow",
      },
      {
        question:
          "Five little teddy bears dancing with the queen, 'I'll take you out for dinner,' said Mr ____________.",
        optionA: "Black",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Green",
      },
      {
        question:
          "Four little teddy bears stuck in a pot of glue, 'But, I'm free!' said Mr ____________.",
        optionA: "Blue",
        optionB: "White",
        optionC: "Brown",
        correctAnswer: "Blue",
      },
      {
        question:
          "Three little teddy bears playing in the night, 'It's time for my bath,' said Mr ____________.",
        optionA: "Grey",
        optionB: "Pink",
        optionC: "Yellow",
        correctAnswer: "Grey",
      },
      {
        question:
          "Two little teddy bears sitting down to pray, 'I'm off to the temple,' said Mr ____________.",
        optionA: "Red",
        optionB: "Grey",
        optionC: "Brown",
        correctAnswer: "Grey",
      },
      {
        question:
          "One little teddy bear wearing a gold crown, 'And I'm Ms ____________!' said snooty Ms ____________.",
        optionA: "Black, Yellow",
        optionB: "Purple, Green",
        optionC: "Brown, Red",
        correctAnswer: "Brown, Red",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Mr Red is going to the market.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Ms Pink is playing in the sink.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Mr Black won the race.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Ms Purple is riding on a train.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mr Yellow is going to the airport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mr Green is dancing with the queen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Mr Blue is stuck in a pot of glue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mr White is playing in the night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mr Grey is going to the temple.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Ms Brown is wearing a gold crown.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
