export const chapter = "Chapter - 16: The First Empire";
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
        question: "Who guided Chandragupta Maurya to overthrow the Nandas?",
        optionA: "Megasthenes",
        optionB: "Kautilya",
        optionC: "Bindusara",
        correctAnswer: "Kautilya",
      }),
      shuffleOptions({
        question: "Which ruler’s cruelty made the people support Chandragupta against him?",
        optionA: "Last Nanda ruler",
        optionB: "Seleucus",
        optionC: "Seleucus",
        correctAnswer: "Last Nanda ruler",
      }),
      shuffleOptions({
        question: "Who invaded north-western India in 326 BCE?",
        optionA: "Darius",
        optionB: "Alexander",
        optionC: "Xerxes",
        correctAnswer: "Alexander",
      }),
      shuffleOptions({
        question: "Whose insult made Kautilya vow to destroy the Nanda dynasty?",
        optionA: "Nanda king",
        optionB: "Ashoka",
        optionC: "Bindusara",
        correctAnswer: "Nanda king",
      }),
      shuffleOptions({
        question: "Which region did Chandragupta extend his empire to in the south?",
        optionA: "Kerala",
        optionB: "Karnataka",
        optionC: "Bengal",
        correctAnswer: "Karnataka",
      }),
      shuffleOptions({
        question: "Who succeeded Chandragupta Maurya on the throne?",
        optionA: "Ashoka",
        optionB: "Bindusara",
        optionC: "Susima",
        correctAnswer: "Bindusara",
      }),
      shuffleOptions({
        question: "Which state lay between the rivers Mahanadi and Godavari?",
        optionA: "Kalinga",
        optionB: "Taxila",
        optionC: "Ujjain",
        correctAnswer: "Kalinga",
      }),
      shuffleOptions({
        question: "Who were sent as Buddhist messengers by Ashoka?",
        optionA: "Susima and Kunal",
        optionB: "Mahendra and Sanghmitra",
        optionC: "Chandragupta and Bindusara",
        correctAnswer: "Mahendra and Sanghmitra",
      }),
      shuffleOptions({
        question: "Which rock edict of Ashoka describes the horrors of the Kalinga War?",
        optionA: "Rock Edict I",
        optionB: "Rock Edict XIII",
        optionC: "Rock Edict V",
        correctAnswer: "Rock Edict XIII",
      }),
      shuffleOptions({
        question: "Which script was used for Ashoka’s edicts in north-western India?",
        optionA: "Brahmi",
        optionB: "Kharoshthi",
        optionC: "Pali",
        correctAnswer: "Kharoshthi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chandragupta established his capital at ______.",
        optionA: "Taxila",
        optionB: "Patliputra",
        optionC: "Broach",
        correctAnswer: "Patliputra",
      }),
      shuffleOptions({
        question: "Alexander’s soldiers refused to cross the river ______.",
        optionA: "Ganga",
        optionB: "Beas",
        optionC: "Godavari",
        correctAnswer: "Beas",
      }),
      shuffleOptions({
        question: "Ashoka embraced ______ after the Kalinga War.",
        optionA: "Jainism",
        optionB: "Hinduism",
        optionC: "Buddhism",
        correctAnswer: "Buddhism",
      }),
      shuffleOptions({
        question: "The officials appointed to spread Dhamma were called ______.",
        optionA: "Rajukas",
        optionB: "Dhammamahamatras",
        optionC: "Yuktas",
        correctAnswer: "Dhammamahamatras",
      }),
      shuffleOptions({
        question: "The Mauryan pillars were made of polished ______.",
        optionA: "Granite",
        optionB: "Sandstone",
        optionC: "Marble",
        correctAnswer: "Sandstone",
      }),
      shuffleOptions({
        question: "Prakrit was written in the ______ script.",
        optionA: "Brahmi",
        optionB: "Tamil",
        optionC: "Kharoshthi",
        correctAnswer: "Brahmi",
      }),
      shuffleOptions({
        question: "The caves at Barabar were built for the ______.",
        optionA: "Soldiers",
        optionB: "Monks",
        optionC: "Traders",
        correctAnswer: "Monks",
      }),
      shuffleOptions({
        question: "Trade flourished with countries like Rome, Sri Lanka and ______.",
        optionA: "Egypt",
        optionB: "Japan",
        optionC: "Arabia",
        correctAnswer: "Egypt",
      }),
      shuffleOptions({
        question: "Chandragupta spent his last years at ______ hill.",
        optionA: "Sarnath",
        optionB: "Chandragiri",
        optionC: "Nagarjuna",
        correctAnswer: "Chandragiri",
      }),
      shuffleOptions({
        question: "The Sanchi Stupa was enlarged during the ______ period.",
        optionA: "Sunga",
        optionB: "Gupta",
        optionC: "Mughal",
        correctAnswer: "Sunga",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chandragupta Maurya ruled for nearly 25 years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The people of Kalinga fought bravely against Ashoka.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ashoka forced his subjects to accept Buddhism.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ashoka practised simple living after accepting Buddhism.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Megasthenes stayed in India for five years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Mauryan army also included a small navy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lion capital at Sarnath has three lions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Most common people spoke Prakrit during Mauryan times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Mauryan trade routes connected northern and southern cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After Ashoka’s death, the Mauryan Empire grew stronger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
