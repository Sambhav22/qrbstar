export const chapter = "Chapter - 4: The Great Northern Plains";
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
        question: "Which rivers bring silt that makes the Northern Plains fertile?",
        optionA: "Himalayan rivers",
        optionB: "Small streams",
        optionC: "Desert rivers",
        correctAnswer: "Himalayan rivers",
      }),
      shuffleOptions({
        question: "Which river of the Northern Plains flows through Arunachal Pradesh before entering Assam?",
        optionA: "Brahmaputra",
        optionB: "Ganga",
        optionC: "Satluj",
        correctAnswer: "Brahmaputra",
      }),
      shuffleOptions({
        question: "Which river divides into the Padma and the Hooghly in West Bengal?",
        optionA: "Lunj",
        optionB: "Satluj",
        optionC: "Ganga",
        correctAnswer: "Ganga",
      }),
      shuffleOptions({
        question: "Which basin is known for producing large quantities of tea?",
        optionA: "Brahmaputra Basin",
        optionB: "Ganga Basin",
        optionC: "Satluj Basin",
        correctAnswer: "Brahmaputra Basin",
      }),
      shuffleOptions({
        question: "Which river’s tributary includes the Beas?",
        optionA: "Satluj",
        optionB: "Brahmaputra",
        optionC: "Ganga",
        correctAnswer: "Satluj",
      }),
      shuffleOptions({
        question: "Which river enters the plains at Haridwar?",
        optionA: "Yamuna",
        optionB: "Alaknanda",
        optionC: "Ganga",
        correctAnswer: "Ganga",
      }),
      shuffleOptions({
        question: "Which river originates in Tibet and later flows into Bangladesh?",
        optionA: "Brahmaputra",
        optionB: "Satluj",
        optionC: "Yamuna",
        correctAnswer: "Brahmaputra",
      }),
      shuffleOptions({
        question: "Which basin receives the heaviest rainfall in India?",
        optionA: "Ganga Basin",
        optionB: "Brahmaputra Basin",
        optionC: "Satluj Basin",
        correctAnswer: "Brahmaputra Basin",
      }),
      shuffleOptions({
        question: "Which of these is an important city in the Satluj Basin?",
        optionA: "Amritsar",
        optionB: "Shillong",
        optionC: "Kolkata",
        correctAnswer: "Amritsar",
      }),
      shuffleOptions({
        question: "Which basin includes states like Uttar Pradesh and Bihar?",
        optionA: "Ganga Basin",
        optionB: "Satluj Basin",
        optionC: "Brahmaputra Basin",
        correctAnswer: "Ganga Basin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Northern Plains stretch over nearly ______ kilometres.",
        optionA: "2500",
        optionB: "500",
        optionC: "1200",
        correctAnswer: "2500",
      }),
      shuffleOptions({
        question: "The Beas River is a tributary of the ______.",
        optionA: "Satluj",
        optionB: "Ganga",
        optionC: "Brahmaputra",
        correctAnswer: "Satluj",
      }),
      shuffleOptions({
        question: "The Ganga begins at the confluence of Bhagirathi and ______.",
        optionA: "Alaknanda",
        optionB: "Yamuna",
        optionC: "Kosi",
        correctAnswer: "Alaknanda",
      }),
      shuffleOptions({
        question: "The Hooghly River flows through ______.",
        optionA: "Kolkata",
        optionB: "Jaipur",
        optionC: "Panipat",
        correctAnswer: "Kolkata",
      }),
      shuffleOptions({
        question: "The Brahmaputra joins the Ganga to form the ______ Delta.",
        optionA: "Sunderban",
        optionB: "Krishna",
        optionC: "Mahanadi",
        correctAnswer: "Sunderban",
      }),
      shuffleOptions({
        question: "The Ganga Basin receives ______ rainfall than the Satluj Basin.",
        optionA: "more",
        optionB: "less",
        optionC: "equal",
        correctAnswer: "more",
      }),
      shuffleOptions({
        question: "The Northern Plains are known as the ______ of India.",
        optionA: "Food Bowl",
        optionB: "Mineral Bowl",
        optionC: "Cotton Belt",
        correctAnswer: "Food Bowl",
      }),
      shuffleOptions({
        question: "The Satluj Basin grows wheat, rice, cotton and ______.",
        optionA: "sugar cane",
        optionB: "tea",
        optionC: "bajra",
        correctAnswer: "sugar cane",
      }),
      shuffleOptions({
        question: "The rivers carry broken bits of rock, sand and ______.",
        optionA: "silt",
        optionB: "coal",
        optionC: "stone",
        correctAnswer: "silt",
      }),
      shuffleOptions({
        question: "The Brahmaputra is called the ______ in Tibet.",
        optionA: "Tsangpo",
        optionB: "Yamuna",
        optionC: "Hooghly",
        correctAnswer: "Tsangpo",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Northern Plains are made fertile by silt brought down from the mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Satluj Basin receives heavy rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Hooghly is a branch of the Ganga that flows into the Bay of Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Brahmaputra enters India through Arunachal Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ganga flows directly into the Arabian Sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Brahmaputra Basin is surrounded by hills and mountains on three sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Beas is the main tributary of the Satluj River.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ganga enters the plains at Haridwar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tea is one of the major crops grown in the Brahmaputra Basin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rivers of the Northern Plains do not help in irrigation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
