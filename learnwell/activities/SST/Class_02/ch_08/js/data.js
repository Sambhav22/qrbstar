export const chapter = "Chapter - 8: Places of Worship";
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
        question: "Which place do Hindus visit to offer prayers?",
        optionA: "Church",
        optionB: "Temple",
        optionC: "Synagogue",
        correctAnswer: "Temple",
      }),
      shuffleOptions({
        question: "Who offers their prayer in the form of Namaz?",
        optionA: "Muslims",
        optionB: "Sikhs",
        optionC: "Christians",
        correctAnswer: "Muslims",
      }),
      shuffleOptions({
        question: "Which holy book do Sikhs read in the gurudwara?",
        optionA: "Bible",
        optionB: "Guru Granth Sahib",
        optionC: "Quran",
        correctAnswer: "Guru Granth Sahib",
      }),
      shuffleOptions({
        question: "Who offer special prayers on Sundays?",
        optionA: "Christians",
        optionB: "Parsis",
        optionC: "Jews",
        correctAnswer: "Christians",
      }),
      shuffleOptions({
        question: "In which place do Parsis worship?",
        optionA: "Fire Temple",
        optionB: "Mosque",
        optionC: "Church",
        correctAnswer: "Fire Temple",
      }),
      shuffleOptions({
        question: "Which group sings Gurbani as part of their prayer?",
        optionA: "Muslims",
        optionB: "Sikhs",
        optionC: "Hindus",
        correctAnswer: "Sikhs",
      }),
      shuffleOptions({
        question: "In which place do Christians pray?",
        optionA: "Church",
        optionB: "Monastery",
        optionC: "Fire Temple",
        correctAnswer: "Church",
      }),
      shuffleOptions({
        question: "In which place do Jews pray?",
        optionA: "Synagogue",
        optionB: "Gurudwara",
        optionC: "Temple",
        correctAnswer: "Synagogue",
      }),
      shuffleOptions({
        question: "Which religion has many Gods and Goddesses?",
        optionA: "Hindus",
        optionB: "Buddhists",
        optionC: "Parsis",
        correctAnswer: "Hindus",
      }),
      shuffleOptions({
        question: "Where do Buddhists pray?",
        optionA: "Mosque",
        optionB: "Monastery",
        optionC: "Church",
        correctAnswer: "Monastery",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sikhs sing ______ in the gurudwara.",
        optionA: "Gurbani",
        optionB: "Aarti",
        optionC: "Bhajan",
        correctAnswer: "Gurbani",
      }),
      shuffleOptions({
        question: "Christians pray to ______ Christ.",
        optionA: "Jesus",
        optionB: "Krishna",
        optionC: "Shiva",
        correctAnswer: "Jesus",
      }),
      shuffleOptions({
        question: "The holy book of the Muslims is the ______.",
        optionA: "Ramayana",
        optionB: "Quran",
        optionC: "Bible",
        correctAnswer: "Quran",
      }),
      shuffleOptions({
        question: "Buddhists pray in a ______.",
        optionA: "Mosque",
        optionB: "Monastery",
        optionC: "Church",
        correctAnswer: "Monastery",
      }),
      shuffleOptions({
        question: "Hindus offer ______ to God in temples.",
        optionA: "Fruits and flowers",
        optionB: "Clothes",
        optionC: "Coins",
        correctAnswer: "Fruits and flowers",
      }),
      shuffleOptions({
        question: "The holy book of Christians is the ______.",
        optionA: "Bible",
        optionB: "Guru Granth Sahib",
        optionC: "Bhagwad Gita",
        correctAnswer: "Bible",
      }),
      shuffleOptions({
        question: "Sikhs read from the ______.",
        optionA: "Quran",
        optionB: "Ramayana",
        optionC: "Guru Granth Sahib",
        correctAnswer: "Guru Granth Sahib",
      }),
      shuffleOptions({
        question: "Parsis worship in the ______ Temple.",
        optionA: "Fire",
        optionB: "Stone",
        optionC: "Water",
        correctAnswer: "Fire",
      }),
      shuffleOptions({
        question: "Jews pray in a ______.",
        optionA: "Synagogue",
        optionB: "Gurudwara",
        optionC: "Church",
        correctAnswer: "Synagogue",
      }),
      shuffleOptions({
        question: "All religions teach us to be ______.",
        optionA: "Kind",
        optionB: "Loud",
        optionC: "Angry",
        correctAnswer: "Kind",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hindus pray in temples.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Muslims pray in a church.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sikhs have ten Sikh gurus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Christians offer special prayers on Sundays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bible is the holy book of Christians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All religions teach us to respect one another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sikhs sing from their holy book in the gurudwara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buddhists pray in a synagogue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Quran is the holy book of Muslims.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parsis worship in the Fire Temple.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
