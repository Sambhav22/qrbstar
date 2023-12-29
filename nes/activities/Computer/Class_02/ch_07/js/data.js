export const chapter = "Chapter - 7: Reasoning and Analytical Thinking";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What are the two main types of clocks mentioned in the text?",
          optionA: "Mechanical and Digital",
          optionB: "Analog and Digital",
          optionC: "Classic and Modern",
          correctAnswer: "Analog and Digital",
        },
        {
          question: "Which hand of an analog clock represents the minutes?",
          optionA: "Longer hand",
          optionB: "Shorter hand",
          optionC: "Ticking hand",
          correctAnswer: "Longer hand",
        },
        {
          question:
            "How many sub-divisions are there between each number on an analog clock to represent minutes?",
          optionA: "10",
          optionB: "5",
          optionC: "15",
          correctAnswer: "5",
        },
        {
          question: "What number does the hour hand represent?",
          optionA: "Hour number",
          optionB: "Minute number",
          optionC: "Both hour and minute number",
          correctAnswer: "Hour number",
        },
        {
          question:
            "In the example given as '3 : 05,' where are the hour and minute hands positioned, respectively?",
          optionA: "Hour hand on 3, minute hand on 1",
          optionB: "Hour hand on 5, minute hand on 3",
          optionC: "Hour hand on 3, minute hand on 5",
          correctAnswer: "Hour hand on 3, minute hand on 1",
        },
        {
          question:
            "What does '4 o'clock' indicate in the context of an analog clock?",
          optionA: "Hour hand on 4, minute hand on 12",
          optionB: "Hour hand on 12, minute hand on 4",
          optionC: "Hour hand on 4, minute hand on 5",
          correctAnswer: "Hour hand on 4, minute hand on 12",
        },
        {
          question: "How many minutes make up one hour?",
          optionA: "60",
          optionB: "100",
          optionC: "45",
          correctAnswer: "60",
        },
        {
          question:
            "What type of information can some clocks, other than time, display according to the text?",
          optionA: "Only temperature",
          optionB: "Weather and temperature",
          optionC: "Time zones",
          correctAnswer: "Weather and temperature",
        },
        {
          question:
            "What kind of movement do the hands of an analog clock have?",
          optionA: "Up and down",
          optionB: "Side to side",
          optionC: "Circular",
          correctAnswer: "Circular",
        },
        {
          question: "Which hand on an analog clock is shorter?",
          optionA: "Minute hand",
          optionB: "Hour hand",
          optionC: "Both hands are of equal length",
          correctAnswer: "Hour hand",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "An analog clock has numbers from 1 to 12 with ____________ subdivisions in between to show minutes.",
          optionA: "3",
          optionB: "5",
          optionC: "8",
          correctAnswer: "5",
        },
        {
          question:
            "The longer hand on an analog clock represents the ____________.",
          optionA: "Seconds",
          optionB: "Hours",
          optionC: "Minutes",
          correctAnswer: "Minutes",
        },
        {
          question:
            "The shorter hand on an analog clock indicates the ____________.",
          optionA: "Hours",
          optionB: "Seconds",
          optionC: "Days",
          correctAnswer: "Hours",
        },
        {
          question:
            "One complete round of the minute hand from 1 to 12 completes ____________ hour(s).",
          optionA: "Half",
          optionB: "One",
          optionC: "Two",
          correctAnswer: "One",
        },
        {
          question:
            "When the hour hand is at 6 and the minute hand is at 12, it indicates ____________.",
          optionA: "6:00",
          optionB: "12:00",
          optionC: "3:00",
          correctAnswer: "6:00",
        },
        {
          question:
            "An analog clock can display time using ____________ hands.",
          optionA: "Four",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        },
        {
          question:
            "The number on which the hour hand rests signifies the ____________.",
          optionA: "Minute number",
          optionB: "Hour number",
          optionC: "Second number",
          correctAnswer: "Hour number",
        },
        {
          question:
            "An analog clock's minute hand moves ____________ than the hour hand.",
          optionA: "Faster",
          optionB: "Slower",
          optionC: "At the same speed",
          correctAnswer: "Faster",
        },
        {
          question: "An analog clock displays time in a ____________ format.",
          optionA: "Numerical",
          optionB: "Digital",
          optionC: "Circular",
          correctAnswer: "Circular",
        },
        {
          question:
            "The space between each hour mark on an analog clock represents ____________ minutes.",
          optionA: "10",
          optionB: "5",
          optionC: "15",
          correctAnswer: "5",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The minute hand on an analog clock is shorter than the hour hand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "An analog clock displays time using only one hand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An analog clock's hour hand moves faster than the minute hand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The number of subdivisions between each hour mark on an analog clock is 10.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An analog clock's minute hand completes one round in 60 minutes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The hour hand on an analog clock represents the seconds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "An analog clock displays time using a digital format.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The minute hand moves slower than the second hand on an analog clock.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Each hour on an analog clock represents 60 minutes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "An analog clock can display time using three hands.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
