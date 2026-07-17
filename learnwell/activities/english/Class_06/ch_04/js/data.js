export const chapter = "Chapter - 4: Einstein at School";
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
        question: "Who was Einstein’s history teacher?",
        optionA: "Mr. Braun",
        optionB: "Mr. Yuri",
        optionC: "Mr. Pasteur",
        correctAnswer: "Mr. Braun",
      }),
      shuffleOptions({
        question: "What did Einstein believe was more important than facts?",
        optionA: "Ideas",
        optionB: "Dates",
        optionC: "Names",
        correctAnswer: "Ideas",
      }),
      shuffleOptions({
        question: "Where did Einstein’s father live?",
        optionA: "France",
        optionB: "Italy",
        optionC: "Germany",
        correctAnswer: "Italy",
      }),
      shuffleOptions({
        question: "What did Mr. Braun call Einstein after scolding him?",
        optionA: "A disgrace",
        optionB: "A brilliant student",
        optionC: "A hero",
        correctAnswer: "A disgrace",
      }),
      shuffleOptions({
        question: "What kind of place did Einstein call his school?",
        optionA: "Hateful",
        optionB: "Noble",
        optionC: "Joyful",
        correctAnswer: "Hateful",
      }),
      shuffleOptions({
        question: "Which subject was Einstein reading in his spare time?",
        optionA: "Biology",
        optionB: "Geology",
        optionC: "Astronomy",
        correctAnswer: "Geology",
      }),
      shuffleOptions({
        question: "What kind of boys did Yuri say also passed exams?",
        optionA: "Stupid",
        optionB: "Clever",
        optionC: "Honest",
        correctAnswer: "Stupid",
      }),
      shuffleOptions({
        question: "Einstein wanted a certificate for—",
        optionA: "Fever",
        optionB: "Nervous breakdown",
        optionC: "Weak eyesight",
        correctAnswer: "Nervous breakdown",
      }),
      shuffleOptions({
        question: "Who was ready to take Einstein to a doctor friend?",
        optionA: "His teacher",
        optionB: "Yuri",
        optionC: "His father",
        correctAnswer: "Yuri",
      }),
      shuffleOptions({
        question: "The play “Einstein at School” is based on a work by—",
        optionA: "Patrick Pringle",
        optionB: "Stephen Hawking",
        optionC: "Louis Pasteur",
        correctAnswer: "Patrick Pringle",
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
        question: "Einstein said, “It’s not facts that matter, but ________.”",
        optionA: "Ideas",
        optionB: "Dates",
        optionC: "Facts",
        correctAnswer: "Ideas",
      }),
      shuffleOptions({
        question: "Mr. Braun punished Einstein with an extra ________.",
        optionA: "Period",
        optionB: "Day",
        optionC: "Week",
        correctAnswer: "Period",
      }),
      shuffleOptions({
        question: "Yuri noticed Einstein always carried a ________ under his arm.",
        optionA: "Book",
        optionB: "Bag",
        optionC: "File",
        correctAnswer: "Book",
      }),
      shuffleOptions({
        question: "Einstein said memorising was like a ________.",
        optionA: "Parrot",
        optionB: "Soldier",
        optionC: "Teacher",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Einstein called school a ________ place.",
        optionA: "Hateful",
        optionB: "Happy",
        optionC: "Noble",
        correctAnswer: "Hateful",
      }),
      shuffleOptions({
        question: "Einstein said staying in school would ________ his father’s money.",
        optionA: "Waste",
        optionB: "Save",
        optionC: "Earn",
        correctAnswer: "Waste",
      }),
      shuffleOptions({
        question: "Yuri’s doctor friend specialised in the ________ system.",
        optionA: "Nervous",
        optionB: "Heart",
        optionC: "Lung",
        correctAnswer: "Nervous",
      }),
      shuffleOptions({
        question: "Einstein’s father wanted him to somehow get a ________.",
        optionA: "Diploma",
        optionB: "Job",
        optionC: "Medal",
        correctAnswer: "Diploma",
      }),
      shuffleOptions({
        question: "Einstein found facts boring and ________.",
        optionA: "Unreasonable",
        optionB: "Noble",
        optionC: "Useful",
        correctAnswer: "Unreasonable",
      }),
      shuffleOptions({
        question: "Einstein was reading a book on ________.",
        optionA: "Geology",
        optionB: "Astronomy",
        optionC: "History",
        correctAnswer: "Geology",
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
        question: "Einstein enjoyed memorising facts by heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr. Braun praised Einstein’s ideas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Einstein’s father insisted he get a diploma.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yuri refused to help Einstein.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Einstein said most days at school were bad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Einstein valued ideas more than facts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Einstein loved reading even outside school subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Einstein wanted to happily continue in school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Einstein thought geology was interesting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Einstein left school with the help of a medical certificate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;
