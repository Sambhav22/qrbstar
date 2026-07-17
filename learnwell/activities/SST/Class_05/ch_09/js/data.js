export const chapter = "Chapter - 9: Transport and Communication";
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
        question: "Which invention first changed the way people travelled long distances?",
        optionA: "Steam engine",
        optionB: "Wheel",
        optionC: "Aeroplane",
        correctAnswer: "Wheel",
      }),
      shuffleOptions({
        question: "Which Indian road connects Delhi, Mumbai, Kolkata and Chennai?",
        optionA: "Grand Trunk Road",
        optionB: "Golden Quadrilateral Road System",
        optionC: "Indo-Tibet Road",
        correctAnswer: "Golden Quadrilateral Road System",
      }),
      shuffleOptions({
        question: "Which river in India is used as an inland waterway?",
        optionA: "Ganga",
        optionB: "Brahmaputra",
        optionC: "Yamuna",
        correctAnswer: "Brahmaputra",
      }),
      shuffleOptions({
        question: "Which airline is India’s international carrier?",
        optionA: "Jet Airways",
        optionB: "Air India",
        optionC: "GoAir",
        correctAnswer: "Air India",
      }),
      shuffleOptions({
        question: "Who invented the telephone?",
        optionA: "Alexander Graham Bell",
        optionB: "Guglielmo Marconi",
        optionC: "Wright Brothers",
        correctAnswer: "Alexander Graham Bell",
      }),
      shuffleOptions({
        question: "Which trains in India are known as superfast trains?",
        optionA: "Duronto and Jan Shatabdi",
        optionB: "Shatabdi Express and Rajdhani Express",
        optionC: "Deccan Queen and Konark Express",
        correctAnswer: "Shatabdi Express and Rajdhani Express",
      }),
      shuffleOptions({
        question: "Which means of transport is known to be the fastest?",
        optionA: "Railways",
        optionB: "Roadways",
        optionC: "Airways",
        correctAnswer: "Airways",
      }),
      shuffleOptions({
        question: "Which Italian scientist invented the radio?",
        optionA: "Guglielmo Marconi",
        optionB: "Alexander Bell",
        optionC: "Wilbur Wright",
        correctAnswer: "Guglielmo Marconi",
      }),
      shuffleOptions({
        question: "Which is a famous luxurious train in India?",
        optionA: "Palace on Wheels",
        optionB: "Rajdhani Express",
        optionC: "Vande Bharat Express",
        correctAnswer: "Palace on Wheels",
      }),
      shuffleOptions({
        question: "Which mode of transport is considered one of the cheapest?",
        optionA: "Water transport",
        optionB: "Air transport",
        optionC: "Cable cars",
        correctAnswer: "Water transport",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India’s first metro rail started in ______.",
        optionA: "Delhi",
        optionB: "Kolkata",
        optionC: "Chennai",
        correctAnswer: "Kolkata",
      }),
      shuffleOptions({
        question: "The Grand Trunk Road connects India with ______.",
        optionA: "China",
        optionB: "Pakistan",
        optionC: "Nepal",
        correctAnswer: "Pakistan",
      }),
      shuffleOptions({
        question: "A ______ helps send printed messages through telephone lines.",
        optionA: "Fax machine",
        optionB: "Smartphone",
        optionC: "Radio",
        correctAnswer: "Fax machine",
      }),
      shuffleOptions({
        question: "______ are the latest and fastest means of transport.",
        optionA: "Railways",
        optionB: "Airways",
        optionC: "Waterways",
        correctAnswer: "Airways",
      }),
      shuffleOptions({
        question: "The ______ and the Amazon are major navigable rivers of the world.",
        optionA: "Nile",
        optionB: "Thames",
        optionC: "Congo",
        correctAnswer: "Nile",
      }),
      shuffleOptions({
        question: "A ______ enables us to send SMS anytime.",
        optionA: "Smartphone",
        optionB: "Fax",
        optionC: "Landline",
        correctAnswer: "Smartphone",
      }),
      shuffleOptions({
        question: "The official broadcaster of India is ______.",
        optionA: "All India Radio",
        optionB: "Doordarshan",
        optionC: "BBC",
        correctAnswer: "Doordarshan",
      }),
      shuffleOptions({
        question: "A ______ is used to send money through the postal system.",
        optionA: "Money order",
        optionB: "Telegram",
        optionC: "E-mail",
        correctAnswer: "Money order",
      }),
      shuffleOptions({
        question: "______ is a global system of interconnected computer networks.",
        optionA: "Television",
        optionB: "Internet",
        optionC: "Radio",
        correctAnswer: "Internet",
      }),
      shuffleOptions({
        question: "India’s first artificial satellite was ______.",
        optionA: "Bhaskara",
        optionB: "INSAT",
        optionC: "Aryabhata",
        correctAnswer: "Aryabhata",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Expressways allow vehicles to travel fast without bends or crossroads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water transport is the most expensive form of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Wright brothers invented the world’s first aeroplane.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A local call is made when you call someone in another city.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Newspapers and magazines are examples of mass communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The internet is known as the information superhighway.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cargo ships are used mainly for carrying passengers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Telegraph messages were decoded at the telegraph office.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Satellites can relay signals to any part of the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indian Airlines is an international airline.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
