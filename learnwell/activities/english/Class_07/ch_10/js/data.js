export const chapter = "Chapter - 10: A Defenceless Creature";
export const noOfActivities = 3;
export var activityData;

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
        question: "Who suffered from gout?",
        optionA: "Shukin",
        optionB: "Kistunov",
        optionC: "Nikol",
        correctAnswer: "Kistunov",
      }),
      shuffleOptions({
        question: "Who advised Madam Shukin to meet Kistunov?",
        optionA: "Her husband",
        optionB: "Her son-in-law",
        optionC: "The accountant",
        correctAnswer: "Her son-in-law",
      }),
      shuffleOptions({
        question: "How much money did Madam Shukin finally demand?",
        optionA: "15 roubles",
        optionB: "20 roubles",
        optionC: "24 roubles",
        correctAnswer: "24 roubles",
      }),
      shuffleOptions({
        question: "What did Kistunov use for water?",
        optionA: "A glass",
        optionB: "A decanter",
        optionC: "A jug",
        correctAnswer: "A decanter",
      }),
      shuffleOptions({
        question: "What did Madam Shukin call her husband?",
        optionA: "A general",
        optionB: "A collegiate assessor",
        optionC: "A banker",
        correctAnswer: "A collegiate assessor",
      }),
      shuffleOptions({
        question: "Whom did Kistunov ask to explain the matter first?",
        optionA: "Accountant",
        optionB: "Alexey Nikol",
        optionC: "Porter",
        correctAnswer: "Alexey Nikol",
      }),
      shuffleOptions({
        question: "What did Madam Shukin complain about her health?",
        optionA: "She could not sleep",
        optionB: "She had no appetite",
        optionC: "She had fever",
        correctAnswer: "She had no appetite",
      }),
      shuffleOptions({
        question: "Where did Madam Shukin finally wait for Kistunov?",
        optionA: "In the vestibule",
        optionB: "In the office",
        optionC: "In the church",
        correctAnswer: "In the vestibule",
      }),
      shuffleOptions({
        question: "Who sent for headache pills?",
        optionA: "Madam Shukin",
        optionB: "Alexey Nikol",
        optionC: "Shukin",
        correctAnswer: "Alexey Nikol",
      }),
      shuffleOptions({
        question: "How many roubles did Kistunov give Madam Shukin?",
        optionA: "20",
        optionB: "24",
        optionC: "25",
        correctAnswer: "25",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Madam Shukin approached Kistunov with a ______.",
        optionA: "complaint",
        optionB: "petition",
        optionC: "loan",
        correctAnswer: "petition",
      }),
      shuffleOptions({
        question: "Kistunov compared her petition with sending a divorce case to a ______.",
        optionA: "chemist",
        optionB: "doctor",
        optionC: "lawyer",
        correctAnswer: "chemist",
      }),
      shuffleOptions({
        question: "Madam Shukin said she drank coffee without any ______.",
        optionA: "milk",
        optionB: "relish",
        optionC: "sugar",
        correctAnswer: "relish",
      }),
      shuffleOptions({
        question: "Nikol explained the difference between departments in a ______ voice.",
        optionA: "shrill",
        optionB: "bass",
        optionC: "tenor",
        correctAnswer: "bass",
      }),
      shuffleOptions({
        question: "The accountant later spoke in a ______ voice.",
        optionA: "powerful tenor",
        optionB: "loud bass",
        optionC: "faint whisper",
        correctAnswer: "powerful tenor",
      }),
      shuffleOptions({
        question: "Kistunov was worried about a ______ if the porter forced her out.",
        optionA: "squeal",
        optionB: "fight",
        optionC: "letter",
        correctAnswer: "squeal",
      }),
      shuffleOptions({
        question: "Everything began ______ before Kistunov’s eyes.",
        optionA: "swimming",
        optionB: "shining",
        optionC: "moving",
        correctAnswer: "swimming",
      }),
      shuffleOptions({
        question: "Madam Shukin described herself as a woman in ______ health.",
        optionA: "delicate",
        optionB: "strong",
        optionC: "good",
        correctAnswer: "delicate",
      }),
      shuffleOptions({
        question: "Madam Shukin asked for ______ roubles at least.",
        optionA: "fifteen",
        optionB: "twenty",
        optionC: "twenty-five",
        correctAnswer: "fifteen",
      }),
      shuffleOptions({
        question: "After paying, Kistunov said he had dreadful ______.",
        optionA: "palpitations",
        optionB: "migraine",
        optionC: "gout",
        correctAnswer: "migraine",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Madam Shukin first visited only one office before coming to Kistunov.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Madam Shukin’s husband borrowed money from the club fund.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Madam Shukin claimed she was not healthy at all.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nikol politely called her wise and intelligent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The clerks took headache pills after she left.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kistunov compared her request to a divorce case at a chemist’s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Madam Shukin smiled sweetly after getting money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "She never returned after receiving money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story is adapted from Anton Chekhov.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kistunov remained calm and strong throughout.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
