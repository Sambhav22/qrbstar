export const chapter = "Chapter - 13: Birthday Party";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was celebrating his birthday?",
        optionA: "Yash",
        optionB: "Naren",
        optionC: "Ansh",
        correctAnswer: "Ansh",
      }),
      shuffleOptions({
        question: "Who brought the birthday cake?",
        optionA: "Ansh's father",
        optionB: "Mr. Khanna",
        optionC: "Yash",
        correctAnswer: "Mr. Khanna",
      }),
      shuffleOptions({
        question: "Why was Ansh excited?",
        optionA: "It was his birthday",
        optionB: "He had a test",
        optionC: "He was going for a picnic",
        correctAnswer: "It was his birthday",
      }),
      shuffleOptions({
        question: "Where did Mother ask Ansh to go?",
        optionA: "Toy shop",
        optionB: "Neighbourhood market",
        optionC: "Book store",
        correctAnswer: "Neighbourhood market",
      }),
      shuffleOptions({
        question: "What did Ansh forget to bring?",
        optionA: "Balloons",
        optionB: "Candle",
        optionC: "Matches",
        correctAnswer: "Matches",
      }),
      shuffleOptions({
        question: "What game were Ansh's friends playing?",
        optionA: "Cricket",
        optionB: "Hide-n-seek",
        optionC: "Chess",
        correctAnswer: "Hide-n-seek",
      }),
      shuffleOptions({
        question: "Who was not at home?",
        optionA: "Ansh's uncle",
        optionB: "Ansh's father",
        optionC: "Ansh's teacher",
        correctAnswer: "Ansh's father",
      }),
      shuffleOptions({
        question: "What time did Ansh return home?",
        optionA: "Afternoon",
        optionB: "Morning",
        optionC: "After dark",
        correctAnswer: "After dark",
      }),
      shuffleOptions({
        question: "What did Mother teach Ansh?",
        optionA: "Play with care",
        optionB: "Always eat cake",
        optionC: "Finish work first",
        correctAnswer: "Finish work first",
      }),
      shuffleOptions({
        question: "What did Ansh say after learning the lesson?",
        optionA: "I will go again",
        optionB: "I'll keep it in mind always",
        optionC: "I forgot again",
        correctAnswer: "I'll keep it in mind always",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ansh woke up early because it was his ______.",
        optionA: "holiday",
        optionB: "birthday",
        optionC: "test",
        correctAnswer: "birthday",
      }),
      shuffleOptions({
        question: "Ansh's father was not in the ______.",
        optionA: "market",
        optionB: "town",
        optionC: "house",
        correctAnswer: "town",
      }),
      shuffleOptions({
        question: "Mother asked Ansh to bring a packet of ______.",
        optionA: "balloons",
        optionB: "candles",
        optionC: "matches",
        correctAnswer: "matches",
      }),
      shuffleOptions({
        question: "The Khanna family was invited for ______.",
        optionA: "breakfast",
        optionB: "dinner",
        optionC: "picnic",
        correctAnswer: "dinner",
      }),
      shuffleOptions({
        question: "Ansh forgot the ______ given by his mother.",
        optionA: "gift",
        optionB: "task",
        optionC: "chocolate",
        correctAnswer: "task",
      }),
      shuffleOptions({
        question: "Ansh played ______ with his friends.",
        optionA: "ludo",
        optionB: "cricket",
        optionC: "hide-n-seek",
        correctAnswer: "hide-n-seek",
      }),
      shuffleOptions({
        question: "The ______ were waiting to cut the cake.",
        optionA: "guests",
        optionB: "Khannas",
        optionC: "shopkeepers",
        correctAnswer: "Khannas",
      }),
      shuffleOptions({
        question: "Ansh said, 'I am sorry, I just ______.'",
        optionA: "shouted",
        optionB: "played",
        optionC: "forgot",
        correctAnswer: "forgot",
      }),
      shuffleOptions({
        question: "The cake was brought by Mr. ______.",
        optionA: "Singh",
        optionB: "Sharma",
        optionC: "Khanna",
        correctAnswer: "Khanna",
      }),
      shuffleOptions({
        question: "Mother said, 'I shall ______ for now.'",
        optionA: "sleep",
        optionB: "manage",
        optionC: "play",
        correctAnswer: "manage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ansh's birthday was a rainy day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mother planned a party with many school friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ansh helped his mother with some shopping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ansh brought the packet of candles from the shop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ansh's friends were Yash, Daksh and Naren.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cake was brought by a neighbour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother was angry but taught Ansh politely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cake cutting happened in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ansh realised his mistake and apologised.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother told him to finish work before playing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;