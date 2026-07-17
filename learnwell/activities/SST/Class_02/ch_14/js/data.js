export const chapter = "Chapter - 14: Directions and Time";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In which direction does the sun rise?",
        optionA: "North",
        optionB: "East",
        optionC: "South",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "What do we call the time when the sun sets?",
        optionA: "Afternoon",
        optionB: "Evening",
        optionC: "Midnight",
        correctAnswer: "Evening",
      }),
      shuffleOptions({
        question: "Which direction is behind you when you face east?",
        optionA: "West",
        optionB: "North",
        optionC: "South",
        correctAnswer: "West",
      }),
      shuffleOptions({
        question: "When do we wake up according to the chapter pictures?",
        optionA: "At 6 o’clock in the morning",
        optionB: "At 10 o’clock",
        optionC: "At 2 o’clock",
        correctAnswer: "At 6 o’clock in the morning",
      }),
      shuffleOptions({
        question: "Which time of the day is in the middle?",
        optionA: "Morning",
        optionB: "Noon",
        optionC: "Evening",
        correctAnswer: "Noon",
      }),
      shuffleOptions({
        question: "When does the day begin?",
        optionA: "Afternoon",
        optionB: "Morning",
        optionC: "Night",
        correctAnswer: "Morning",
      }),
      shuffleOptions({
        question: "Which month has only 28 days in a normal year?",
        optionA: "April",
        optionB: "February",
        optionC: "June",
        correctAnswer: "February",
      }),
      shuffleOptions({
        question: "After evening, what comes next?",
        optionA: "Night",
        optionB: "Afternoon",
        optionC: "Noon",
        correctAnswer: "Night",
      }),
      shuffleOptions({
        question: "How many hours make one full day?",
        optionA: "10",
        optionB: "20",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "What comes after morning?",
        optionA: "Afternoon",
        optionB: "Midnight",
        optionC: "Sunrise",
        correctAnswer: "Afternoon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun sets in the ______.",
        optionA: "North",
        optionB: "West",
        optionC: "East",
        correctAnswer: "West",
      }),
      shuffleOptions({
        question: "Twelve months together make one ______.",
        optionA: "Week",
        optionB: "Year",
        optionC: "Day",
        correctAnswer: "Year",
      }),
      shuffleOptions({
        question: "After sunset, evening turns into ______.",
        optionA: "Morning",
        optionB: "Night",
        optionC: "Noon",
        correctAnswer: "Night",
      }),
      shuffleOptions({
        question: "There are ______ minutes in one hour.",
        optionA: "40",
        optionB: "50",
        optionC: "60",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "A week has ______ days.",
        optionA: "5",
        optionB: "7",
        optionC: "10",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "The direction on your left when you face the rising sun is ______.",
        optionA: "North",
        optionB: "South",
        optionC: "West",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "There are ______ seconds in one hour.",
        optionA: "3600",
        optionB: "360",
        optionC: "300",
        correctAnswer: "3600",
      }),
      shuffleOptions({
        question: "Four weeks make a ______.",
        optionA: "Month",
        optionB: "Year",
        optionC: "Day",
        correctAnswer: "Month",
      }),
      shuffleOptions({
        question: "The time after morning and before evening is called ______.",
        optionA: "Afternoon",
        optionB: "Midnight",
        optionC: "Sunrise",
        correctAnswer: "Afternoon",
      }),
      shuffleOptions({
        question: "When the sun rises, it is ______.",
        optionA: "Night",
        optionB: "Afternoon",
        optionC: "Morning",
        correctAnswer: "Morning",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Evening comes after afternoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "February normally has 28 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Noon is at 12 o’clock in the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Night comes before evening.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are 24 hours in one day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A leap year has 366 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "East is the direction of sunrise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Afternoon comes after night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We go to school at 8 o’clock according to the chapter pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
