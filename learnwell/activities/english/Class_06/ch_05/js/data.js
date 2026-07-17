export const chapter = "Chapter - 5: The Diary of a Mountaineer";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "How many girls were in the camp?",
        optionA: "30",
        optionB: "35",
        optionC: "40",
        correctAnswer: "35",
      }),
      shuffleOptions({
        question: "How many groups were made in the camp?",
        optionA: "Five",
        optionB: "Seven",
        optionC: "Ten",
        correctAnswer: "Five",
      }),
      shuffleOptions({
        question: "What did the writer love to eat?",
        optionA: "Biscuits with butter",
        optionB: "Biscuits with jam",
        optionC: "Chips",
        correctAnswer: "Biscuits with jam",
      }),
      shuffleOptions({
        question: "Who was the director of the camp?",
        optionA: "Brigadier Gyan Singh",
        optionB: "Bachhendri Pal",
        optionC: "Instructor",
        correctAnswer: "Brigadier Gyan Singh",
      }),
      shuffleOptions({
        question: "What was Mona asked to become in her group?",
        optionA: "Monitor",
        optionB: "Leader",
        optionC: "Instructor",
        correctAnswer: "Leader",
      }),
      shuffleOptions({
        question: "Which tablet was given to trekkers?",
        optionA: "Calcium",
        optionB: "Iron",
        optionC: "Vitamin D",
        correctAnswer: "Iron",
      }),
      shuffleOptions({
        question: "Who had thick moustaches?",
        optionA: "Brigadier",
        optionB: "Instructor",
        optionC: "Doctor",
        correctAnswer: "Instructor",
      }),
      shuffleOptions({
        question: "What did Mona regain after crossing the river?",
        optionA: "Confidence",
        optionB: "Rope",
        optionC: "Courage only",
        correctAnswer: "Confidence",
      }),
      shuffleOptions({
        question: "Who congratulated Mona with “God bless you”?",
        optionA: "Brigadier",
        optionB: "Instructor",
        optionC: "Bachhendri Pal",
        correctAnswer: "Bachhendri Pal",
      }),
      shuffleOptions({
        question: "What was the date of the first diary entry?",
        optionA: "4 April",
        optionB: "6 April",
        optionC: "9 April",
        correctAnswer: "4 April",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The camp was at a height of ______ feet.",
        optionA: "2500",
        optionB: "3500",
        optionC: "4500",
        correctAnswer: "4500",
      }),
      shuffleOptions({
        question: "The writer had ______ on her feet.",
        optionA: "Cuts",
        optionB: "Blisters",
        optionC: "Wounds",
        correctAnswer: "Blisters",
      }),
      shuffleOptions({
        question: "The rope was tied across the ______.",
        optionA: "Road",
        optionB: "River",
        optionC: "Bridge",
        correctAnswer: "River",
      }),
      shuffleOptions({
        question: "The rope was fixed with ______.",
        optionA: "Hooks",
        optionB: "Pitons",
        optionC: "Nails",
        correctAnswer: "Pitons",
      }),
      shuffleOptions({
        question: "The river flowed in silent ______.",
        optionA: "Darkness",
        optionB: "Splendour",
        optionC: "Calmness",
        correctAnswer: "Splendour",
      }),
      shuffleOptions({
        question: "The instructor called “Three cheers for ______.”",
        optionA: "Rina",
        optionB: "Mona",
        optionC: "Sunita",
        correctAnswer: "Mona",
      }),
      shuffleOptions({
        question: "The girls played in the ______ during the camp.",
        optionA: "Snow",
        optionB: "Sand",
        optionC: "Rain",
        correctAnswer: "Snow",
      }),
      shuffleOptions({
        question: "The diary entries were written in the month of ______.",
        optionA: "March",
        optionB: "April",
        optionC: "May",
        correctAnswer: "April",
      }),
      shuffleOptions({
        question: "The last evening included ______.",
        optionA: "Sleeping early",
        optionB: "Singing and dancing",
        optionC: "Sports",
        correctAnswer: "Singing and dancing",
      }),
      shuffleOptions({
        question: "The writer was declared the best ______.",
        optionA: "Climber",
        optionB: "Trekker",
        optionC: "Camper",
        correctAnswer: "Trekker",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The writer was in the third group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The brigadier understood Mona’s excuse without her speaking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The leader had to walk behind the group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The instructor himself first crossed the river.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mona crossed the river without slipping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The water was as warm as tea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mona encouraged others after gaining confidence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The camp ended on 9 April.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The guest on the last day was Bachhendri Pal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem “Foolish Questions” was written by William Cole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;
