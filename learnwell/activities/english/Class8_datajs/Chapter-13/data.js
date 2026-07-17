export const chapter = "Chapter - 13: A Soldier’s Letter to His Wife";
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
        question: "In which year did Kanti write his letter?",
        optionA: "1965",
        optionB: "1971",
        optionC: "1947",
        correctAnswer: "1971",
      }),
      shuffleOptions({
        question: "Who was Sangeeta?",
        optionA: "Kanti’s wife",
        optionB: "Kanti’s sister",
        optionC: "Kanti’s neighbour",
        correctAnswer: "Kanti’s wife",
      }),
      shuffleOptions({
        question: "Where was Kanti stationed when he wrote the letter?",
        optionA: "Delhi",
        optionB: "Udhampur",
        optionC: "Mumbai",
        correctAnswer: "Udhampur",
      }),
      shuffleOptions({
        question: "Whose name would Kanti’s last breath whisper?",
        optionA: "Anita",
        optionB: "Akshay",
        optionC: "Sangeeta",
        correctAnswer: "Sangeeta",
      }),
      shuffleOptions({
        question: "Who among Kanti’s children was “shiny-eyed”?",
        optionA: "Anita",
        optionB: "Akshay",
        optionC: "Both children",
        correctAnswer: "Akshay",
      }),
      shuffleOptions({
        question: "What did Kanti compare his love for the country to?",
        optionA: "A strong wind",
        optionB: "A tall mountain",
        optionC: "A calm river",
        correctAnswer: "A strong wind",
      }),
      shuffleOptions({
        question: "Which fruit did Kanti mention about his childhood?",
        optionA: "Bitter fruit of orphanage",
        optionB: "Sweet fruit of family",
        optionC: "Golden fruit of success",
        correctAnswer: "Bitter fruit of orphanage",
      }),
      shuffleOptions({
        question: "What did Kanti wish to wash away with his tears?",
        optionA: "His country’s sorrows",
        optionB: "His faults and the pains he caused",
        optionC: "His memories",
        correctAnswer: "His faults and the pains he caused",
      }),
      shuffleOptions({
        question: "What did Kanti call the soldiers of the past?",
        optionA: "Enemies",
        optionB: "Our legacy",
        optionC: "Our rivals",
        correctAnswer: "Our legacy",
      }),
      shuffleOptions({
        question: "What blessing did Kanti send for his mother?",
        optionA: "Long life",
        optionB: "God’s blessing",
        optionC: "Good health",
        correctAnswer: "God’s blessing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kanti was at the ______ Camp in Udhampur.",
        optionA: "Army",
        optionB: "Transit",
        optionC: "Training",
        correctAnswer: "Transit",
      }),
      shuffleOptions({
        question: "The letter begins with the words “My very dear ______.”",
        optionA: "Anita",
        optionB: "Akshay",
        optionC: "Sangeeta",
        correctAnswer: "Sangeeta",
      }),
      shuffleOptions({
        question: "Kanti was ready to make the ______ sacrifice.",
        optionA: "Little",
        optionB: "Supreme",
        optionC: "Final",
        correctAnswer: "Supreme",
      }),
      shuffleOptions({
        question: "Kanti described his love for his wife as ______.",
        optionA: "Temporary",
        optionB: "Deathless",
        optionC: "Weak",
        correctAnswer: "Deathless",
      }),
      shuffleOptions({
        question: "He asked his wife not to ______ him dead.",
        optionA: "Celebrate",
        optionB: "Mourn",
        optionC: "Forget",
        correctAnswer: "Mourn",
      }),
      shuffleOptions({
        question: "His children’s names were Akshay and ______.",
        optionA: "Anjali",
        optionB: "Anita",
        optionC: "Sangeeta",
        correctAnswer: "Anita",
      }),
      shuffleOptions({
        question: "He compared his love for wife to mighty ______.",
        optionA: "Cables",
        optionB: "Ropes",
        optionC: "Stones",
        correctAnswer: "Cables",
      }),
      shuffleOptions({
        question: "The memories of moments spent with his wife were called ______.",
        optionA: "Blissful",
        optionB: "Painful",
        optionC: "Forgetful",
        correctAnswer: "Blissful",
      }),
      shuffleOptions({
        question: "He said his spirit would remain near her like a passing ______.",
        optionA: "Cloud",
        optionB: "Breeze",
        optionC: "Flame",
        correctAnswer: "Breeze",
      }),
      shuffleOptions({
        question: "The 1971 conflict mentioned was between India and ______.",
        optionA: "China",
        optionB: "Pakistan",
        optionC: "Nepal",
        correctAnswer: "Pakistan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kanti was confident in the cause of his duty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kanti wrote the letter from Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanti did not care about his family’s future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanti addressed his wife as “Sangeeta”.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The letter mentions two children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kanti believed all countrymen respected soldiers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanti promised his spirit would always be near his wife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Anita was older than Akshay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanti asked his wife to forget him quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The letter is adapted from Sullivan Ballou’s “Letter”.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
