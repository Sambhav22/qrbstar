export const chapter = "Chapter - 20: Ancient India: Culture and Science";
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
        question: "Which ancient civilisation produced the famous bronze statue of the dancing girl?",
        optionA: "Harappan civilisation",
        optionB: "Gupta empire",
        optionC: "Chola dynasty",
        correctAnswer: "Harappan civilisation",
      }),
      shuffleOptions({
        question: "Who built 84,000 stupas across India?",
        optionA: "Chandragupta Maurya",
        optionB: "Ashoka",
        optionC: "Harsha",
        correctAnswer: "Ashoka",
      }),
      shuffleOptions({
        question: "Which South Indian dynasty built the Ratha temples at Mahabalipuram?",
        optionA: "Chalukyas",
        optionB: "Pallavas",
        optionC: "Pandyas",
        correctAnswer: "Pallavas",
      }),
      shuffleOptions({
        question: "Which temple is famous for its shadow not falling on the ground?",
        optionA: "Shore Temple",
        optionB: "Meenakshi Temple",
        optionC: "Brihadeshwara Temple",
        correctAnswer: "Brihadeshwara Temple",
      }),
      shuffleOptions({
        question: "Which school of art produced Buddha statues resembling Greek gods?",
        optionA: "Mathura School",
        optionB: "Gandhara School",
        optionC: "Chola School",
        correctAnswer: "Gandhara School",
      }),
      shuffleOptions({
        question: "Which Veda is considered the oldest among the four Vedas?",
        optionA: "Samaveda",
        optionB: "Rigveda",
        optionC: "Yajurveda",
        correctAnswer: "Rigveda",
      }),
      shuffleOptions({
        question: "Who wrote the famous drama Malavikagnimitra?",
        optionA: "Vishakhadatta",
        optionB: "Valmiki",
        optionC: "Kalidasa",
        correctAnswer: "Kalidasa",
      }),
      shuffleOptions({
        question: "Which Tamil literary work is called the “Bible of the South”?",
        optionA: "Tolkappiyam",
        optionB: "Kural (written by Thiruvalluvar)",
        optionC: "Silappadikaram",
        correctAnswer: "Kural (written by Thiruvalluvar)",
      }),
      shuffleOptions({
        question: "Which scholar first explained why day and night occur?",
        optionA: "Brahmagupta",
        optionB: "Aryabhatta",
        optionC: "Varahamihira",
        correctAnswer: "Aryabhatta",
      }),
      shuffleOptions({
        question: "Which ancient medical scholar was known for performing plastic surgery?",
        optionA: "Charak",
        optionB: "Sushruta",
        optionC: "Vagbhatta",
        correctAnswer: "Sushruta",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cave temples at Ajanta are famous for their ________.",
        optionA: "brick domes",
        optionB: "bright paintings",
        optionC: "copper doors",
        correctAnswer: "bright paintings",
      }),
      shuffleOptions({
        question: "The cave temples of Badami were built by the ________.",
        optionA: "Guptas",
        optionB: "Chalukyas",
        optionC: "Mauryas",
        correctAnswer: "Chalukyas",
      }),
      shuffleOptions({
        question: "The Puranas speak of four ages called Krita, Treta, Dvapara and ________.",
        optionA: "Rohini",
        optionB: "Kali",
        optionC: "Surya",
        correctAnswer: "Kali",
      }),
      shuffleOptions({
        question: "The Sangam poets assembled at ________.",
        optionA: "Bodh Gaya",
        optionB: "Ellora",
        optionC: "Madurai",
        correctAnswer: "Madurai",
      }),
      shuffleOptions({
        question: "The Buddhist ________ contain stories of the previous births of Buddha.",
        optionA: "Pitakas",
        optionB: "Jataka Tales",
        optionC: "Kavyas",
        correctAnswer: "Jataka Tales",
      }),
      shuffleOptions({
        question: "The temple courtyard used for gatherings is called the ________.",
        optionA: "mandapa",
        optionB: "garbhagriha",
        optionC: "chaitya",
        correctAnswer: "mandapa",
      }),
      shuffleOptions({
        question: "The Pallavas built the magnificent ________ Temple at Ellora.",
        optionA: "Kailashnath Temple",
        optionB: "Brihadeshwara Temple",
        optionC: "Surya Temple",
        correctAnswer: "Kailashnath Temple",
      }),
      shuffleOptions({
        question: "The ancient Indians contributed greatly to mathematics by developing the decimal system and the use of ________.",
        optionA: "pi",
        optionB: "zero",
        optionC: "square roots",
        correctAnswer: "zero",
      }),
      shuffleOptions({
        question: "In his works, Varahamihira described the movement of ________.",
        optionA: "planets and stars",
        optionB: "clouds",
        optionC: "oceans",
        correctAnswer: "planets and stars",
      }),
      shuffleOptions({
        question: "The Sangam age grammar work produced is known as ________.",
        optionA: "Arthashastra",
        optionB: "Tolkappiyam",
        optionC: "Brihat Samhita",
        correctAnswer: "Tolkappiyam",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ajanta paintings are still bright even after many centuries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhara art was influenced by Greek sculpture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Cholas built the Ratha temples at Mahabalipuram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Tripitakas contain rules for the daily life of Buddhist monks and nuns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Puranas describe stories about gods and goddesses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Brihadeshwara Temple was built by Rajaraja I of the Chola dynasty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rigveda is the most recent of the four Vedas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sushruta Samhita describes methods of surgical operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sangam literature was written in Sanskrit language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Varahamihira wrote Brihat Samhita.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
