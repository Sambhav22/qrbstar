export const chapter = "Chapter - 19: Our Culture";
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
        question: "Which language is written from right to left in India?",
        optionA: "Hindi",
        optionB: "Urdu",
        optionC: "Gujarati",
        correctAnswer: "Urdu",
      }),
      shuffleOptions({
        question: "Who among the following is a great classical musician mentioned in the chapter?",
        optionA: "Beethoven",
        optionB: "Pandit Bhimsen Joshi",
        optionC: "Mozart",
        correctAnswer: "Pandit Bhimsen Joshi",
      }),
      shuffleOptions({
        question: "Which dance is performed during festivals in Gujarat?",
        optionA: "Kathak",
        optionB: "Kuchipudi",
        optionC: "Ras Garba",
        correctAnswer: "Ras Garba",
      }),
      shuffleOptions({
        question: "Which of these musical instruments is used in classical music?",
        optionA: "Guitar",
        optionB: "Veena",
        optionC: "Piano",
        correctAnswer: "Veena",
      }),
      shuffleOptions({
        question: "Which region is famous for the folk music ‘Bihugeet’?",
        optionA: "Punjab",
        optionB: "Assam",
        optionC: "Kerala",
        correctAnswer: "Assam",
      }),
      shuffleOptions({
        question: "Which painting style is mentioned as part of Indian art?",
        optionA: "Roman Style",
        optionB: "Mughal Style",
        optionC: "Chinese Style",
        correctAnswer: "Mughal Style",
      }),
      shuffleOptions({
        question: "Which monument is a fine example of modern architecture?",
        optionA: "Sanchi Stupa",
        optionB: "Qutub Minar",
        optionC: "Rashtrapati Bhawan",
        correctAnswer: "Rashtrapati Bhawan",
      }),
      shuffleOptions({
        question: "Which traditional dress is commonly worn by women in India?",
        optionA: "Jeans",
        optionB: "Saree",
        optionC: "Trousers",
        correctAnswer: "Saree",
      }),
      shuffleOptions({
        question: "Which classical dance form belongs to Tamil Nadu?",
        optionA: "Odissi",
        optionB: "Bharatnatyam",
        optionC: "Manipuri",
        correctAnswer: "Bharatnatyam",
      }),
      shuffleOptions({
        question: "In which period was the Ellora Caves built?",
        optionA: "Ancient Period",
        optionB: "Medieval Period",
        optionC: "Modern Period",
        correctAnswer: "Ancient Period",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Classical music in India is performed according to fixed ________.",
        optionA: "stories",
        optionB: "rules",
        optionC: "colours",
        correctAnswer: "rules",
      }),
      shuffleOptions({
        question: "People in different regions of India follow different ________.",
        optionA: "oceans",
        optionB: "cultures",
        optionC: "games",
        correctAnswer: "cultures",
      }),
      shuffleOptions({
        question: "Bhangra is a popular ________ dance.",
        optionA: "folk",
        optionB: "classical",
        optionC: "modern",
        correctAnswer: "folk",
      }),
      shuffleOptions({
        question: "The Shore Temple of Mahabalipuram is famous for its ________.",
        optionA: "stone carvings",
        optionB: "fountains",
        optionC: "paintings",
        correctAnswer: "stone carvings",
      }),
      shuffleOptions({
        question: "Most Indian languages are written from ________ to right.",
        optionA: "left",
        optionB: "top",
        optionC: "bottom",
        correctAnswer: "left",
      }),
      shuffleOptions({
        question: "The Lotus Temple represents ________ architecture.",
        optionA: "medieval",
        optionB: "modern",
        optionC: "ancient",
        correctAnswer: "modern",
      }),
      shuffleOptions({
        question: "Folk dances are usually performed during ________.",
        optionA: "exams",
        optionB: "festivals",
        optionC: "meetings",
        correctAnswer: "festivals",
      }),
      shuffleOptions({
        question: "The instrument ‘sitar’ is used in ________ music.",
        optionA: "classical",
        optionB: "rock",
        optionC: "film",
        correctAnswer: "classical",
      }),
      shuffleOptions({
        question: "Ajanta Caves show the rich tradition of Indian ________.",
        optionA: "agriculture",
        optionB: "sculpture",
        optionC: "sports",
        correctAnswer: "sculpture",
      }),
      shuffleOptions({
        question: "English and Hindi are ________ spoken in India.",
        optionA: "rarely",
        optionB: "widely",
        optionC: "never",
        correctAnswer: "widely",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bihu is the folk dance of Assam.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Classical dances can be performed without any training.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Red Fort belongs to the medieval period of architecture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lavani is a folk music style from Maharashtra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sculpture in India includes rock-cut temples and cave carvings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mughal rulers influenced the medieval architecture of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Saree is the traditional dress of men in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Folk music is generally lively and performed on special occasions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carnatic music is a style of North Indian classical music.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Parliament House is an example of modern Indian architecture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
