export const chapter = "Chapter - 9: How Pratap Became the King";
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
        question: "Who removed Jagmal from the throne?",
        optionA: "Pratap",
        optionB: "Krishnadas",
        optionC: "Mansingh",
        correctAnswer: "Krishnadas",
      }),
      shuffleOptions({
        question: "Who was Pratap's maternal uncle?",
        optionA: "Udai Singh",
        optionB: "Akbar",
        optionC: "Mansingh",
        correctAnswer: "Mansingh",
      }),
      shuffleOptions({
        question: "Who sat on the throne before Pratap?",
        optionA: "Jagmal",
        optionB: "Krishnadas",
        optionC: "Dheerajbai",
        correctAnswer: "Jagmal",
      }),
      shuffleOptions({
        question: "Who was known as an incapable prince?",
        optionA: "Mansingh",
        optionB: "Jagmal",
        optionC: "Pratap",
        correctAnswer: "Jagmal",
      }),
      shuffleOptions({
        question: "Who helped his father in administration?",
        optionA: "Jagmal",
        optionB: "Pratap",
        optionC: "Akbar",
        correctAnswer: "Pratap",
      }),
      shuffleOptions({
        question: "Who made Jagmal the ruler of Jahajpur?",
        optionA: "Krishnadas",
        optionB: "Akbar",
        optionC: "Mansingh",
        correctAnswer: "Akbar",
      }),
      shuffleOptions({
        question: "Who stood at the threshold of the court?",
        optionA: "Jagmal",
        optionB: "Krishnadas",
        optionC: "Pratap",
        correctAnswer: "Pratap",
      }),
      shuffleOptions({
        question: "Who was served day and night by Dheerajbai?",
        optionA: "Krishnadas",
        optionB: "Jagmal",
        optionC: "Udai Singh",
        correctAnswer: "Udai Singh",
      }),
      shuffleOptions({
        question: "What ceremony made Pratap the king?",
        optionA: "Marriage",
        optionB: "Funeral",
        optionC: "Coronation",
        correctAnswer: "Coronation",
      }),
      shuffleOptions({
        question: "Whom did Akbar make fight his own father-in-law?",
        optionA: "Jagmal",
        optionB: "Pratap",
        optionC: "Mansingh",
        correctAnswer: "Jagmal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pratap was the _______ of Udai Singh.",
        optionA: "youngest son",
        optionB: "crown-prince",
        optionC: "minister",
        correctAnswer: "crown-prince",
      }),
      shuffleOptions({
        question: "Jagmal wanted to become the ______.",
        optionA: "Maharana",
        optionB: "teacher",
        optionC: "soldier",
        correctAnswer: "Maharana",
      }),
      shuffleOptions({
        question: "Dheerajbai got the ______ affixed.",
        optionA: "signature",
        optionB: "royal stamp",
        optionC: "sword",
        correctAnswer: "royal stamp",
      }),
      shuffleOptions({
        question: "Krishnadas was the _______ minister.",
        optionA: "chief",
        optionB: "finance",
        optionC: "foreign",
        correctAnswer: "chief",
      }),
      shuffleOptions({
        question: "Jagmal was given the kingdom of ______.",
        optionA: "Mewar",
        optionB: "Gwalior",
        optionC: "Jahajpur",
        correctAnswer: "Jahajpur",
      }),
      shuffleOptions({
        question: "Pratap fought against ______.",
        optionA: "Ashoka",
        optionB: "Akbar",
        optionC: "Chandragupta",
        correctAnswer: "Akbar",
      }),
      shuffleOptions({
        question: "Jagmal walked out with a ______ heart.",
        optionA: "happy",
        optionB: "heavy",
        optionC: "brave",
        correctAnswer: "heavy",
      }),
      shuffleOptions({
        question: "The people began to have _______ about Jagmal.",
        optionA: "respect",
        optionB: "doubts",
        optionC: "hope",
        correctAnswer: "doubts",
      }),
      shuffleOptions({
        question: "Jagmal was killed in a _______.",
        optionA: "race",
        optionB: "battle",
        optionC: "fire",
        correctAnswer: "battle",
      }),
      shuffleOptions({
        question: "Akbar followed a policy of ______ and rule.",
        optionA: "divide",
        optionB: "respect",
        optionC: "control",
        correctAnswer: "divide",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Jagmal was present at the funeral of Udai Singh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Krishnadas forcefully removed Jagmal from the throne.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dheerajbai was the chief queen of Mewar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mansingh was the king of Gwalior.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jagmal became the ruler of Sirohi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Akbar helped Rajput rulers unite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pratap was hesitant to enter the court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Krishnadas called Pratap to his rightful place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jagmal protested loudly in the court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The chapter ends with Jagmal becoming Maharana.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
