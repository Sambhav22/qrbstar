export const chapter = "Chapter - 11: Medieval Period: Where, When and How";
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
        question: "Who introduced new dishes like biryani and korma to India during the medieval period?",
        optionA: "Abdur Razzaq",
        optionB: "Turks",
        optionC: "Greeks",
        correctAnswer: "Abdur Razzaq",
      }),
      shuffleOptions({
        question: "Which temple is a famous example of medieval South Indian architecture?",
        optionA: "Konark Temple",
        optionB: "Brihadeshwara Temple",
        optionC: "Sun Temple (Odisha)",
        correctAnswer: "Brihadeshwara Temple",
      }),
      shuffleOptions({
        question: "Which group brought items like ice and grapes to India?",
        optionA: "Romans",
        optionB: "Arabs",
        optionC: "Muslims",
        correctAnswer: "Muslims",
      }),
      shuffleOptions({
        question: "Who praised the city of Vijayanagar for its greatness?",
        optionA: "Abdur Razzaq",
        optionB: "Ibn Battuta",
        optionC: "Alberuni",
        correctAnswer: "Abdur Razzaq",
      }),
      shuffleOptions({
        question: "Which fort is a significant example of Mughal military architecture?",
        optionA: "Gwalior Fort",
        optionB: "Agra Fort",
        optionC: "Chittorgarh Fort",
        correctAnswer: "Agra Fort",
      }),
      shuffleOptions({
        question: "Which style of art is known for detailed small-sized paintings in the medieval period?",
        optionA: "Cave painting",
        optionB: "Miniature painting",
        optionC: "Fresco painting",
        correctAnswer: "Miniature painting",
      }),
      shuffleOptions({
        question: "Who used the term Hindustan in the 13th century for the area under Delhi Sultanate?",
        optionA: "Babur",
        optionB: "Minhaj-us-Siraj",
        optionC: "Amir Khusrau",
        correctAnswer: "Minhaj-us-Siraj",
      }),
      shuffleOptions({
        question: "Which monument represents Indo-Islamic architectural influence?",
        optionA: "Meenakshi Temple",
        optionB: "Sanchi Stupa",
        optionC: "Jama Masjid",
        correctAnswer: "Jama Masjid",
      }),
      shuffleOptions({
        question: "Which early medieval Indian kingdom was involved in frequent power struggles?",
        optionA: "Mauryas",
        optionB: "Palas",
        optionC: "Marathas",
        correctAnswer: "Palas",
      }),
      shuffleOptions({
        question: "Which material became widely used for writing during the medieval period?",
        optionA: "Bark",
        optionB: "Paper",
        optionC: "Cloth",
        correctAnswer: "Paper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "During the medieval period, many ______ kingdoms rose and fell.",
        optionA: "regional",
        optionB: "foreign",
        optionC: "tribal",
        correctAnswer: "regional",
      }),
      shuffleOptions({
        question: "The cultural blend that emerged during this time is known as ______ culture.",
        optionA: "Indo-European",
        optionB: "Indo-Islamic",
        optionC: "Indo-Greek",
        correctAnswer: "Indo-Islamic",
      }),
      shuffleOptions({
        question: "The Chinese referred to India as ______.",
        optionA: "Yin Tu",
        optionB: "Aryavarta",
        optionC: "Sindhu",
        correctAnswer: "Yin Tu",
      }),
      shuffleOptions({
        question: "Coins of the medieval period were mostly made of ______.",
        optionA: "clay",
        optionB: "gold, silver and copper",
        optionC: "stone",
        correctAnswer: "gold, silver and copper",
      }),
      shuffleOptions({
        question: "The majestic temple of Brihadeshwara is located in ______.",
        optionA: "Konark",
        optionB: "Tanjore",
        optionC: "Ajmer",
        correctAnswer: "Tanjore",
      }),
      shuffleOptions({
        question: "______ was one of the travellers who wrote honestly about India.",
        optionA: "Kalhana",
        optionB: "Ibn Battuta",
        optionC: "Badayuni",
        correctAnswer: "Ibn Battuta",
      }),
      shuffleOptions({
        question: "The Muslim rule led to growth in ______ and urban centres.",
        optionA: "agriculture",
        optionB: "mining",
        optionC: "trade",
        correctAnswer: "trade",
      }),
      shuffleOptions({
        question: "The interaction between cultures led to new ______ in clothing.",
        optionA: "uniforms",
        optionB: "costumes like sherwani and churidar pyjama",
        optionC: "European coats",
        correctAnswer: "costumes like sherwani and churidar pyjama",
      }),
      shuffleOptions({
        question: "Medieval artists painted scenes from epics like ______.",
        optionA: "Vedas",
        optionB: "Ramayana and Mahabharata",
        optionC: "Panchatantra",
        correctAnswer: "Ramayana and Mahabharata",
      }),
      shuffleOptions({
        question: "The temples of Khajuraho are known for their stunning ______.",
        optionA: "murals",
        optionB: "sculptures and carvings",
        optionC: "stained glass",
        correctAnswer: "sculptures and carvings",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Indo-Islamic culture emerged due to interaction between Hindus and Muslims.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The early medieval period saw the rise of the Mughal Empire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Miniature paintings were used to illustrate manuscripts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chinese term Yin Tu means “the moon.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Abdur Razzaq wrote about the Vijayanagar Empire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The introduction of new foods like biryani and pulao occurred during medieval Muslim influence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Palas ruled mainly in South India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forts such as the Red Fort and Agra Fort belong to the medieval period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Medieval inscriptions were written only on palm leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The use of paper increased record-keeping in the medieval period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
