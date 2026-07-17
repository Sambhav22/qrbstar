export const chapter = "Chapter - 14: The Mughal Empire";
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
        question: "Who defeated Medini Rao and captured Malwa in 1528?",
        optionA: "Babur",
        optionB: "Sher Shah",
        optionC: "Akbar",
        correctAnswer: "Babur",
      }),
      shuffleOptions({
        question: "Who ruled Gondwana and fought bravely before her death in battle?",
        optionA: "Rani Laxmi Bai",
        optionB: "Rani Durgawati",
        optionC: "Rani Jindan",
        correctAnswer: "Rani Durgawati",
      }),
      shuffleOptions({
        question: "Who became a powerful political figure during Jahangir’s later years?",
        optionA: "Mumtaz Mahal",
        optionB: "Nur Jahan",
        optionC: "Jodha Bai",
        correctAnswer: "Nur Jahan",
      }),
      shuffleOptions({
        question: "Who was ordered by Jahangir to suppress Malik Amber of Ahmadnagar?",
        optionA: "Dara Shikoh",
        optionB: "Prince Khurram (Shah Jahan)",
        optionC: "Prince Murad",
        correctAnswer: "Prince Khurram (Shah Jahan)",
      }),
      shuffleOptions({
        question: "Which European gained trading rights from Jahangir by presenting a royal letter?",
        optionA: "Vasco da Gama",
        optionB: "Sir Thomas Roe",
        optionC: "William Hawkins",
        correctAnswer: "Sir Thomas Roe",
      }),
      shuffleOptions({
        question: "Which ruler annexed Chittor and Ranthambore after defeating the Rajputs?",
        optionA: "Akbar",
        optionB: "Babur",
        optionC: "Sher Shah",
        correctAnswer: "Akbar",
      }),
      shuffleOptions({
        question: "Who led the Marathas using guerrilla tactics against the Mughals?",
        optionA: "Sambhaji",
        optionB: "Aurangzeb",
        optionC: "Shivaji",
        correctAnswer: "Shivaji",
      }),
      shuffleOptions({
        question: "Who was the ruler of Golconda defeated and imprisoned by Aurangzeb?",
        optionA: "Adil Shah",
        optionB: "Abul Hasan",
        optionC: "Malik Amber",
        correctAnswer: "Abul Hasan",
      }),
      shuffleOptions({
        question: "Which ruler’s death in Marwar triggered a long conflict with Aurangzeb?",
        optionA: "Rana Pratap",
        optionB: "Rana Sanga",
        optionC: "Raja Jaswant Singh",
        correctAnswer: "Raja Jaswant Singh",
      }),
      shuffleOptions({
        question: "Who captured the fort of Kangra during his reign?",
        optionA: "Akbar",
        optionB: "Shah Jahan",
        optionC: "Jahangir",
        correctAnswer: "Jahangir",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Babur introduced ______ in Indian warfare to create panic among enemy forces.",
        optionA: "artillery fire",
        optionB: "camel charge",
        optionC: "trench digging",
        correctAnswer: "artillery fire",
      }),
      shuffleOptions({
        question: "Humayun slipped and died at the ______ in Delhi.",
        optionA: "Ibadat Khana",
        optionB: "Sher Mandal",
        optionC: "Red Fort",
        correctAnswer: "Sher Mandal",
      }),
      shuffleOptions({
        question: "Sher Shah built more than 1700 ______ for the safety and rest of travellers.",
        optionA: "forts",
        optionB: "sarais",
        optionC: "schools",
        correctAnswer: "sarais",
      }),
      shuffleOptions({
        question: "The Rajput queen who resisted Mughal expansion in Gondwana was ______.",
        optionA: "Rani Durgawati",
        optionB: "Rani Karnavati",
        optionC: "Rani Padmavati",
        correctAnswer: "Rani Durgawati",
      }),
      shuffleOptions({
        question: "Akbar held religious discussions in the ______ at Fatehpur Sikri.",
        optionA: "Diwan-i-Khas",
        optionB: "Panch Mahal",
        optionC: "Ibadat Khana",
        correctAnswer: "Ibadat Khana",
      }),
      shuffleOptions({
        question: "Jahangir imprisoned his rebellious son ______.",
        optionA: "Khurram",
        optionB: "Khusrau",
        optionC: "Murad",
        correctAnswer: "Khusrau",
      }),
      shuffleOptions({
        question: "The Portuguese angered the Mughals by fortifying ______ in Bengal.",
        optionA: "Surat",
        optionB: "Hugli",
        optionC: "Chittor",
        correctAnswer: "Hugli",
      }),
      shuffleOptions({
        question: "Aurangzeb finally defeated and imprisoned the Golconda ruler ______.",
        optionA: "Adil Shah",
        optionB: "Abul Hasan",
        optionC: "Malik Amber",
        correctAnswer: "Abul Hasan",
      }),
      shuffleOptions({
        question: "The Mughal land revenue system based on 10-year averages was called ______.",
        optionA: "Khalisa",
        optionB: "Primogeniture",
        optionC: "Dashala",
        correctAnswer: "Dashala",
      }),
      shuffleOptions({
        question: "The Mughals exported goods such as textiles, ornaments, and ______.",
        optionA: "indigo",
        optionB: "oils",
        optionC: "rice",
        correctAnswer: "indigo",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Babur captured Malwa after defeating Medini Rao in 1528.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Humayun spent fifteen years in exile after losing his kingdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Akbar encouraged slaughter of animals for religious rituals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Din-i-ilahi discouraged the custom of Sati.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jahangir allowed the English to trade after meeting Sir Thomas Roe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shah Jahan was unsuccessful in all attempts to expand the empire into Central Asia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aurangzeb successfully crushed the Maratha power permanently.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Later Mughals were strong rulers who expanded the empire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Mansabdari system required nobles to maintain soldiers, horses, and elephants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nadir Shah plundered Delhi and carried away the Peacock Throne.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
