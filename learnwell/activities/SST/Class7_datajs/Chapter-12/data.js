export const chapter = "Chapter - 12: New Kings and Kingdoms (AD 700 – AD 1200)";
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
        question: "Who expanded trade with Southeast Asia during the Pala rule?",
        optionA: "Gopala",
        optionB: "Dharmapala",
        optionC: "Mihira Bhoja",
        correctAnswer: "Dharmapala",
      }),
      shuffleOptions({
        question: "Who founded the city of Dhillika, the early form of Delhi?",
        optionA: "Tomars",
        optionB: "Solankis",
        optionC: "Pratiharas",
        correctAnswer: "Tomars",
      }),
      shuffleOptions({
        question: "Who defeated Muhammad Ghori in the first Battle of Tarain in 1191?",
        optionA: "Jaichand",
        optionB: "Prithviraj Chauhan",
        optionC: "Dantidurga",
        correctAnswer: "Prithviraj Chauhan",
      }),
      shuffleOptions({
        question: "Who built the Kailash Temple at Ellora?",
        optionA: "Rashtrakutas",
        optionB: "Cholas",
        optionC: "Palas",
        correctAnswer: "Rashtrakutas",
      }),
      shuffleOptions({
        question: "Who among the following ruled over Bundelkhand with capital at Khajuraho?",
        optionA: "Solankis",
        optionB: "Chandelas",
        optionC: "Paramaras",
        correctAnswer: "Chandelas",
      }),
      shuffleOptions({
        question: "Who beautified the city of Ghazni with wealth taken from India?",
        optionA: "Muhammad Ghori",
        optionB: "Mahmud of Ghazni",
        optionC: "Nagabhata I",
        correctAnswer: "Mahmud of Ghazni",
      }),
      shuffleOptions({
        question: "Who was regarded as the most important Chauhan ruler?",
        optionA: "Prithviraj Chauhan",
        optionB: "Jaichand",
        optionC: "Krishna I",
        correctAnswer: "Prithviraj Chauhan",
      }),
      shuffleOptions({
        question: "Who built Gangaikonda Cholapuram after conquering territories up to the Ganga?",
        optionA: "Rajaraja Chola",
        optionB: "Rajendra Chola",
        optionC: "Parantaka",
        correctAnswer: "Rajendra Chola",
      }),
      shuffleOptions({
        question: "Who wrote about India in the work Kitab-al-Hind?",
        optionA: "Al-Biruni",
        optionB: "Panini",
        optionC: "Kalhana",
        correctAnswer: "Al-Biruni",
      }),
      shuffleOptions({
        question: "Who among the following was a famous Kannada poet of the Chola period?",
        optionA: "Ponna",
        optionB: "Ranna",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Chola king often toured his kingdom in ________.",
        optionA: "disguise",
        optionB: "armour",
        optionC: "festive attire",
        correctAnswer: "disguise",
      }),
      shuffleOptions({
        question: "The Rajputs believed they were descendants of the ________ race.",
        optionA: "Solar and Lunar",
        optionB: "Fire and Water",
        optionC: "Desert and Mountain",
        correctAnswer: "Solar and Lunar",
      }),
      shuffleOptions({
        question: "The Chola assembly found in towns was known as ________.",
        optionA: "sabha",
        optionB: "ur",
        optionC: "nagaram",
        correctAnswer: "nagaram",
      }),
      shuffleOptions({
        question: "The Chandelas built beautiful temples at ________.",
        optionA: "Somnath",
        optionB: "Khajuraho",
        optionC: "Thanjavur",
        correctAnswer: "Khajuraho",
      }),
      shuffleOptions({
        question: "Mahmud of Ghazni conducted multiple raids to acquire ________.",
        optionA: "land",
        optionB: "wealth",
        optionC: "soldiers",
        correctAnswer: "wealth",
      }),
      shuffleOptions({
        question: "The Rashtrakutas were originally subordinates of the ________.",
        optionA: "Cholas",
        optionB: "Chalukyas of Karnataka",
        optionC: "Palas",
        correctAnswer: "Chalukyas of Karnataka",
      }),
      shuffleOptions({
        question: "The Rajput women sometimes participated in local administration as a ________.",
        optionA: "village head",
        optionB: "priest",
        optionC: "merchant",
        correctAnswer: "village head",
      }),
      shuffleOptions({
        question: "The Chola irrigation system included ________ and tanks.",
        optionA: "palaces",
        optionB: "canals",
        optionC: "forts",
        correctAnswer: "canals",
      }),
      shuffleOptions({
        question: "The Pratiharas defended western India from ________ invaders.",
        optionA: "Turkish",
        optionB: "Arab",
        optionC: "Mongol",
        correctAnswer: "Arab",
      }),
      shuffleOptions({
        question: "Rajendra Chola defeated the Pala ruler and extended power up to the River ________.",
        optionA: "Yamuna",
        optionB: "Ganga",
        optionC: "Sutlej",
        correctAnswer: "Ganga",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Tomars were the first to establish control over the region of Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Cholas encouraged the study of both Tamil and Sanskrit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rajput clans never fought amongst themselves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Chola navy helped extend Indian influence to Southeast Asia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mahmud of Ghazni wanted to build a large empire in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Chola sabha was the assembly found in Brahmin settlements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chandelas were known for constructing the Sun Temple at Konark.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Varna system was the foundation of Rajput social life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rajput women were always uneducated and never held positions of authority.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Tripartite struggle lasted nearly 100 years for control over Kannauj.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
