export const chapter = "Chapter - 13: Delhi: The Heart of India";
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
        question: "Who rebuilt Delhi during the Mughal rule and renamed it Shahjahanabad?",
        optionA: "Akbar",
        optionB: "Shah Jahan",
        optionC: "Aurangzeb",
        correctAnswer: "Shah Jahan",
      }),
      shuffleOptions({
        question: "Who designed the new city called New Delhi?",
        optionA: "Edwin Lutyens",
        optionB: "Vikram Sarabhai",
        optionC: "Frank Lloyd",
        correctAnswer: "Edwin Lutyens",
      }),
      shuffleOptions({
        question: "What kind of climate does Delhi experience?",
        optionA: "Moderate",
        optionB: "Extreme",
        optionC: "Rainy",
        correctAnswer: "Extreme",
      }),
      shuffleOptions({
        question: "What type of winds blow in Delhi during summers?",
        optionA: "Monsoon",
        optionB: "Thunderstorm",
        optionC: "Loo",
        correctAnswer: "Loo",
      }),
      shuffleOptions({
        question: "What makes Delhi a cosmopolitan city?",
        optionA: "Only one state lives there",
        optionB: "People from many states live together",
        optionC: "Only tourists live there",
        correctAnswer: "People from many states live together",
      }),
      shuffleOptions({
        question: "Which building is surrounded by the Mughal Gardens?",
        optionA: "Red Fort",
        optionB: "Rashtrapati Bhawan",
        optionC: "Jantar Mantar",
        correctAnswer: "Rashtrapati Bhawan",
      }),
      shuffleOptions({
        question: "Which part of Delhi has embassies and major government offices?",
        optionA: "Old Delhi",
        optionB: "New Delhi",
        optionC: "South Delhi",
        correctAnswer: "New Delhi",
      }),
      shuffleOptions({
        question: "What is the main purpose of India Gate’s eternal flame?",
        optionA: "To welcome tourists",
        optionB: "To remember brave soldiers who sacrificed their lives",
        optionC: "To show the time",
        correctAnswer: "To remember brave soldiers who sacrificed their lives",
      }),
      shuffleOptions({
        question: "Which type of food is also enjoyed by the people of Delhi?",
        optionA: "Only Punjabi",
        optionB: "Only Indian",
        optionC: "Chinese food as well as Italian and South Indian food",
        correctAnswer: "Chinese food as well as Italian and South Indian food",
      }),
      shuffleOptions({
        question: "What major transport system has made travel easier in Delhi?",
        optionA: "Horse carts",
        optionB: "Metro Railway System",
        optionC: "Ropeway",
        correctAnswer: "Metro Railway System",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shah Jahan rebuilt Delhi and named it ________.",
        optionA: "Indraprastha",
        optionB: "Shahjahanabad",
        optionC: "Lucknow",
        correctAnswer: "Shahjahanabad",
      }),
      shuffleOptions({
        question: "Delhi has ________ types of food enjoyed by people.",
        optionA: "many",
        optionB: "few",
        optionC: "no",
        correctAnswer: "many",
      }),
      shuffleOptions({
        question: "The beautiful gardens around Rashtrapati Bhawan are called ________.",
        optionA: "Royal Gardens",
        optionB: "Mughal Gardens",
        optionC: "City Gardens",
        correctAnswer: "Mughal Gardens",
      }),
      shuffleOptions({
        question: "Delhi attracts tourists from all over the ________.",
        optionA: "state",
        optionB: "world",
        optionC: "village",
        correctAnswer: "world",
      }),
      shuffleOptions({
        question: "People of Delhi celebrate ________ kinds of festivals.",
        optionA: "only religious",
        optionB: "all types of festivals together",
        optionC: "only local",
        correctAnswer: "all types of festivals together",
      }),
      shuffleOptions({
        question: "Delhi has places of worship for ________ religions.",
        optionA: "all",
        optionB: "two",
        optionC: "only one",
        correctAnswer: "all",
      }),
      shuffleOptions({
        question: "During July and August, Delhi receives ________.",
        optionA: "snow",
        optionB: "monsoon rain",
        optionC: "strong winds",
        correctAnswer: "monsoon rain",
      }),
      shuffleOptions({
        question: "People in Delhi now mostly wear ________ dresses.",
        optionA: "western-style clothes",
        optionB: "royal robes",
        optionC: "traditional costumes",
        correctAnswer: "western-style clothes",
      }),
      shuffleOptions({
        question: "Delhi has many ________ places like Red Fort and Qutub Minar.",
        optionA: "farming",
        optionB: "historical",
        optionC: "market",
        correctAnswer: "historical",
      }),
      shuffleOptions({
        question: "Delhi is well connected by roadways, railways and ________.",
        optionA: "cable cars",
        optionB: "airways",
        optionC: "boats",
        correctAnswer: "airways",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Delhi was originally built by the Pandavas and called Indraprastha.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi’s winters are very warm and humid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Delhi is home to people from different states and cultures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Mughal Gardens are located around Red Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Delhi Metro has made travel more convenient for people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi has an international airport named Indira Gandhi International Airport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only Hindi is spoken in Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Delhi celebrates national, regional and religious festivals with equal enthusiasm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi is not connected to other parts of India by railway.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tourists visit Delhi to see beautiful places like Qutub Minar, India Gate and Red Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
