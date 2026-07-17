export const chapter = "Chapter - 19: The Flowering of Regional Cultures";
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
        question: "Which style of painting used tiny illustrations to decorate manuscripts?",
        optionA: "Oil painting",
        optionB: "Miniature painting",
        optionC: "Canvas painting",
        correctAnswer: "Miniature painting",
      }),
      shuffleOptions({
        question: "Which school of painting flourished in the Himalayan region from Jammu to Tehri- Garhwal?",
        optionA: "Deccan school",
        optionB: "Pahari school",
        optionC: "Bengal school",
        correctAnswer: "Pahari school",
      }),
      shuffleOptions({
        question: "Which rulers built monasteries and encouraged Buddhist paintings in Bengal?",
        optionA: "Chalukyas",
        optionB: "Palas dynasty",
        optionC: "Marathas",
        correctAnswer: "Palas dynasty",
      }),
      shuffleOptions({
        question: "Who established a karkhana where painters from different regions worked together?",
        optionA: "Akbar",
        optionB: "Humayun",
        optionC: "Aurangzeb",
        correctAnswer: "Akbar",
      }),
      shuffleOptions({
        question: "Who introduced several Persian–Arabic ragas into Indian music?",
        optionA: "Tulsidas",
        optionB: "Amir Khusrau",
        optionC: "Ibn Battuta",
        correctAnswer: "Amir Khusrau",
      }),
      shuffleOptions({
        question: "The murals of Chola temples mainly depicted which subjects?",
        optionA: "Court scenes",
        optionB: "Gods and goddesses like Shiva and Nataraja",
        optionC: "Village markets",
        correctAnswer: "Gods and goddesses like Shiva and Nataraja",
      }),
      shuffleOptions({
        question: "The Telugu version of the Mahabharata was begun by which poet?",
        optionA: "Nannaya",
        optionB: "Kalhana",
        optionC: "Chandidas",
        correctAnswer: "Nannaya",
      }),
      shuffleOptions({
        question: "Which regional language grew out of a mixture of Persian and Hindi?",
        optionA: "Kannada",
        optionB: "Urdu",
        optionC: "Gujarati",
        correctAnswer: "Urdu",
      }),
      shuffleOptions({
        question: "The bauls of Bengal were known for singing which type of songs?",
        optionA: "War songs",
        optionB: "Devotional folk songs",
        optionC: "Wedding songs",
        correctAnswer: "Devotional folk songs",
      }),
      shuffleOptions({
        question: "Which Mughal emperor’s reign is known for progress in portrait painting and animal studies?",
        optionA: "Shah Jahan",
        optionB: "Jahangir",
        optionC: "Babur",
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
        question: "The themes of Rajasthani paintings were influenced mainly by ________.",
        optionA: "Bhakti culture",
        optionB: "Warfare",
        optionC: "Trade",
        correctAnswer: "Bhakti culture",
      }),
      shuffleOptions({
        question: "Humayun brought two Persian painters, Mir Sayyid Ali and ________, to India.",
        optionA: "Mansur",
        optionB: "Abdus Samad",
        optionC: "Jayadeva",
        correctAnswer: "Abdus Samad",
      }),
      shuffleOptions({
        question: "The Pradikshna paintings of the Rajrajeshwara Temple are examples of ________ art.",
        optionA: "Pala",
        optionB: "Chola",
        optionC: "Mughal",
        correctAnswer: "Chola",
      }),
      shuffleOptions({
        question: "The worship of Krishna strongly influenced the ________ literature of Bengal.",
        optionA: "Marathi",
        optionB: "Bengali",
        optionC: "Kannada",
        correctAnswer: "Bengali",
      }),
      shuffleOptions({
        question: "Amir Khusrau was honoured with the title of ________ for his mastery of music.",
        optionA: "Nayak",
        optionB: "Acharya",
        optionC: "Ustad",
        correctAnswer: "Nayak",
      }),
      shuffleOptions({
        question: "Persian became the ________ language of the Mughal empire.",
        optionA: "religious",
        optionB: "court/official",
        optionC: "regional",
        correctAnswer: "court/official",
      }),
      shuffleOptions({
        question: "The ________ of Akbar contains valuable information about his reign.",
        optionA: "Ramcharitmanas",
        optionB: "Ain-i-Akbari",
        optionC: "Tuhfat-ul-Mujahidin",
        correctAnswer: "Ain-i-Akbari",
      }),
      shuffleOptions({
        question: "The devotional singing tradition called ________ became popular in Bengal.",
        optionA: "Kirtana",
        optionB: "Garba",
        optionC: "Raut nacha",
        correctAnswer: "Kirtana",
      }),
      shuffleOptions({
        question: "The painting known as ________ shows Krishna as a cowherd.",
        optionA: "Ritu Charita",
        optionB: "Gou-Charan",
        optionC: "Govardhan-dharan",
        correctAnswer: "Gou-Charan",
      }),
      shuffleOptions({
        question: "The mixture of Persian and Hindi spoken in military camps came to be known as ________.",
        optionA: "Dakhini",
        optionB: "Urdu",
        optionC: "Rajasthani",
        correctAnswer: "Urdu",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Pahari school of painting often portrayed Radha and Krishna in devotional scenes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chola paintings mainly used bright colours like yellow, green, red and white.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Rajputs showed little interest in art or cultural activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Miniature paintings were used to illustrate manuscripts during medieval times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bhakti saints helped spread regional languages in both North and South India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bauls of Bengal were soldiers who sang war legends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Persian remained the official language in Mughal courts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Akbar discouraged the blending of different painting styles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Many Sanskrit texts like the Upanishads and the Bhagavad Gita were translated into Persian during Shah Jahan’s period by Dara Shikoh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Music gatherings were common in the homes of nobles and rulers during medieval India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
