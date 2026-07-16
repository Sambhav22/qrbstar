export const chapter = "Chapter - 3: Beauty Contest";
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
        question: "Who was the king of the jungle?",
        optionA: "Trumpy",
        optionB: "Roary",
        optionC: "Micky",
        correctAnswer: "Roary",
      }),
      shuffleOptions({
        question: "Who suggested the idea of a beauty contest?",
        optionA: "Micky",
        optionB: "Rabbi",
        optionC: "Hairy",
        correctAnswer: "Rabbi",
      }),
      shuffleOptions({
        question: "Who painted himself white?",
        optionA: "Monkey",
        optionB: "Bear",
        optionC: "Zebra",
        correctAnswer: "Zebra",
      }),
      shuffleOptions({
        question: "What did Mr. Hairy wear?",
        optionA: "Tie",
        optionB: "Clown cap",
        optionC: "Crown",
        correctAnswer: "Clown cap",
      }),
      shuffleOptions({
        question: "Who lifted Master Rabbi with his trunk?",
        optionA: "Camel",
        optionB: "Trumpy",
        optionC: "Cow",
        correctAnswer: "Trumpy",
      }),
      shuffleOptions({
        question: "What did the cow make for her horns?",
        optionA: "Cap",
        optionB: "Garland",
        optionC: "Crown",
        correctAnswer: "Crown",
      }),
      shuffleOptions({
        question: "What did the monkey paint on his body?",
        optionA: "Dots",
        optionB: "Stripes",
        optionC: "Flowers",
        correctAnswer: "Stripes",
      }),
      shuffleOptions({
        question: "What was Master Rabbi proud of?",
        optionA: "His speed",
        optionB: "His silvery coat",
        optionC: "His roar",
        correctAnswer: "His silvery coat",
      }),
      shuffleOptions({
        question: "What did the horse try to look like?",
        optionA: "Lion",
        optionB: "Monkey",
        optionC: "Camel",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Who won the beauty contest?",
        optionA: "Micky",
        optionB: "Rabbi",
        optionC: "Hairy",
        correctAnswer: "Rabbi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "King Roary held a ______.",
        optionA: "birthday party",
        optionB: "race",
        optionC: "beauty contest",
        correctAnswer: "beauty contest",
      }),
      shuffleOptions({
        question: "The ______ won the race last year.",
        optionA: "lion",
        optionB: "tiger",
        optionC: "rabbit",
        correctAnswer: "tiger",
      }),
      shuffleOptions({
        question: "Mr. Micky painted ______ stripes on his body.",
        optionA: "blue",
        optionB: "red",
        optionC: "yellow",
        correctAnswer: "yellow",
      }),
      shuffleOptions({
        question: "Mr. Hairy is a ______.",
        optionA: "zebra",
        optionB: "monkey",
        optionC: "bear",
        correctAnswer: "bear",
      }),
      shuffleOptions({
        question: "The camel wore ______.",
        optionA: "pyjamas",
        optionB: "a hat",
        optionC: "glasses",
        correctAnswer: "pyjamas",
      }),
      shuffleOptions({
        question: "Master Rabbi compared himself to the ______.",
        optionA: "moon",
        optionB: "cloud",
        optionC: "sun",
        correctAnswer: "moon",
      }),
      shuffleOptions({
        question: "The zebra thought he had too many ______.",
        optionA: "dots",
        optionB: "spots",
        optionC: "stripes",
        correctAnswer: "stripes",
      }),
      shuffleOptions({
        question: "The contest was held to celebrate the king's ______.",
        optionA: "coronation",
        optionB: "birthday",
        optionC: "holiday",
        correctAnswer: "birthday",
      }),
      shuffleOptions({
        question: "All animals clapped and stood in ______.",
        optionA: "surprise",
        optionB: "praise",
        optionC: "silence",
        correctAnswer: "praise",
      }),
      shuffleOptions({
        question: "King Roary liked Master Rabbi because he looked ______.",
        optionA: "colourful",
        optionB: "funny",
        optionC: "natural",
        correctAnswer: "natural",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "King Roary held a singing contest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Master Rabbi painted his body with colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr. Hairy wore a colourful cap.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cow made a necklace for herself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr. Zebbi did not like his stripes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The monkey did not change his look.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All animals clapped for the winner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king chose the most decorated animal as winner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The beauty contest was held after the king's birthday.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The horse tried to look like a lion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;