export const chapter = "Chapter - 17: Ashoka The Great";
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
        question: "Who was the father of Ashoka?",
        optionA: "Chandragupta Maurya",
        optionB: "Bindusara",
        optionC: "Ranjit Singh",
        correctAnswer: "Bindusara",
      }),
      shuffleOptions({
        question: "Who was Ashoka’s grandfather?",
        optionA: "Chandragupta Maurya",
        optionB: "Samudragupta",
        optionC: "Akbar",
        correctAnswer: "Chandragupta Maurya",
      }),
      shuffleOptions({
        question: "What was the main capital of the Mauryan Empire?",
        optionA: "Ujjain",
        optionB: "Delhi",
        optionC: "Patliputra",
        correctAnswer: "Patliputra",
      }),
      shuffleOptions({
        question: "Kalinga is known today as which Indian state?",
        optionA: "Gujarat",
        optionB: "Punjab",
        optionC: "Odisha",
        correctAnswer: "Odisha",
      }),
      shuffleOptions({
        question: "Why did Ashoka decide to attack Kalinga?",
        optionA: "Because it was not part of his empire",
        optionB: "Because Kalinga was very weak",
        optionC: "Because Kalinga attacked first",
        correctAnswer: "Because it was not part of his empire",
      }),
      shuffleOptions({
        question: "Which religion did Ashoka embrace after the Kalinga war?",
        optionA: "Jainism",
        optionB: "Hinduism",
        optionC: "Buddhism",
        correctAnswer: "Buddhism",
      }),
      shuffleOptions({
        question: "Where is the famous Ashokan lion capital located?",
        optionA: "Allahabad",
        optionB: "Taxila",
        optionC: "Sarnath",
        correctAnswer: "Sarnath",
      }),
      shuffleOptions({
        question: "How many lions are shown in the Ashokan lion capital?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "To which country did Ashoka send emissaries to spread Buddhism?",
        optionA: "Russia",
        optionB: "Sri Lanka",
        optionC: "France",
        correctAnswer: "Sri Lanka",
      }),
      shuffleOptions({
        question: "What does the Ashokan Chakra in the National Flag represent?",
        optionA: "War",
        optionB: "Wealth",
        optionC: "Dharma",
        correctAnswer: "Dharma",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "About how many years ago did Ashoka rule India?",
        optionA: "500 years ago",
        optionB: "2,200 years ago",
        optionC: "5,000 years ago",
        correctAnswer: "2,200 years ago",
      }),
      shuffleOptions({
        question: "Who established the Maurya Empire?",
        optionA: "Ashoka",
        optionB: "Bindusara",
        optionC: "Chandragupta Maurya",
        correctAnswer: "Chandragupta Maurya",
      }),
      shuffleOptions({
        question: "What was the outcome of the Kalinga war?",
        optionA: "Peace",
        optionB: "Massive destruction",
        optionC: "Wealth",
        correctAnswer: "Massive destruction",
      }),
      shuffleOptions({
        question: "Approximately how many soldiers died in the Kalinga war?",
        optionA: "Ten thousand",
        optionB: "One lakh",
        optionC: "Five hundred",
        correctAnswer: "One lakh",
      }),
      shuffleOptions({
        question: "How did Ashoka feel after seeing the destruction of the Kalinga war?",
        optionA: "Proud",
        optionB: "Angry",
        optionC: "Guilty",
        correctAnswer: "Guilty",
      }),
      shuffleOptions({
        question: "What practice did Ashoka give up after becoming a Buddhist?",
        optionA: "Farming",
        optionB: "Reading",
        optionC: "Hunting animals",
        correctAnswer: "Hunting animals",
      }),
      shuffleOptions({
        question: "What did Ashoka build for Buddhist monks?",
        optionA: "Shops",
        optionB: "Palaces",
        optionC: "Monasteries",
        correctAnswer: "Monasteries",
      }),
      shuffleOptions({
        question: "To which Asian country did Ashoka’s efforts spread Buddhism?",
        optionA: "America",
        optionB: "China",
        optionC: "Egypt",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "How many years after Ashoka’s death did the Mauryan Empire collapse?",
        optionA: "500 years",
        optionB: "100 years",
        optionC: "50 years",
        correctAnswer: "50 years",
      }),
      shuffleOptions({
        question: "According to Mahatma Gandhi, peace is the ornament of the ______.",
        optionA: "Weak",
        optionB: "Strong",
        optionC: "Poor",
        correctAnswer: "Strong",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ashoka was the son of Bindusara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The people of Kalinga surrendered meekly to Ashoka.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ashoka was happy after winning the Kalinga war.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ashoka carved his messages on stones and pillars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ashoka spread Buddhism outside India also.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ashokan lion capital is at Taxila.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Dharma Chakra in the Indian Flag stands for Dharma (piety).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ashoka gave up hunting animals after embracing Buddhism.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After Ashoka’s death, the Mauryan Empire became stronger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Kalinga war caused misery and destruction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
