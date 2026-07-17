export const chapter = "Chapter - 10: The Monkey's Wedding Party";
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
        question: "Who did Chattery invite first?",
        optionA: "Clet",
        optionB: "Trunky",
        optionC: "Roxy",
        correctAnswer: "Trunky",
      }),
      shuffleOptions({
        question: "Why did Blacky fall from the tree?",
        optionA: "He slipped",
        optionB: "Chattery chattered loudly",
        optionC: "Clet pushed him",
        correctAnswer: "Chattery chattered loudly",
      }),
      shuffleOptions({
        question: "What did Chattery carry?",
        optionA: "Food",
        optionB: "Invitation cards",
        optionC: "Flowers",
        correctAnswer: "Invitation cards",
      }),
      shuffleOptions({
        question: "Who was Roxy?",
        optionA: "A fox",
        optionB: "A crow",
        optionC: "A bear",
        correctAnswer: "A fox",
      }),
      shuffleOptions({
        question: "Who wanted Chattery to say sorry?",
        optionA: "Roxy's friend",
        optionB: "Roxy's mother",
        optionC: "Chattery's cousin",
        correctAnswer: "Roxy's mother",
      }),
      shuffleOptions({
        question: "What did Chattery learn at the end?",
        optionA: "Apologising is important",
        optionB: "Playing is fun",
        optionC: "Jumping is cool",
        correctAnswer: "Apologising is important",
      }),
      shuffleOptions({
        question: "What did Chattery do to Trunky?",
        optionA: "Pulled his wife's tail",
        optionB: "Gave him sweets",
        optionC: "Ignored him",
        correctAnswer: "Pulled his wife's tail",
      }),
      shuffleOptions({
        question: "Who lives in a lair?",
        optionA: "Clet",
        optionB: "Roxy",
        optionC: "Trunky",
        correctAnswer: "Roxy",
      }),
      shuffleOptions({
        question: "What did Chattery's mother say?",
        optionA: "Don't go out",
        optionB: "Apologise to everyone",
        optionC: "Don't play",
        correctAnswer: "Apologise to everyone",
      }),
      shuffleOptions({
        question: "Chattery was once very _______.",
        optionA: "kind",
        optionB: "mischievous",
        optionC: "helpful",
        correctAnswer: "mischievous",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chattery gave ______ cards to the animals.",
        optionA: "game",
        optionB: "wedding",
        optionC: "food",
        correctAnswer: "wedding",
      }),
      shuffleOptions({
        question: "Trunky is an _______.",
        optionA: "elephant",
        optionB: "eagle",
        optionC: "emu",
        correctAnswer: "elephant",
      }),
      shuffleOptions({
        question: "Blacky is a _______.",
        optionA: "bear",
        optionB: "cat",
        optionC: "cow",
        correctAnswer: "bear",
      }),
      shuffleOptions({
        question: "Clet's nest was ______ last year.",
        optionA: "cleaned",
        optionB: "broken",
        optionC: "built",
        correctAnswer: "broken",
      }),
      shuffleOptions({
        question: "Roxy's mother asked Chattery to say ______.",
        optionA: "hello",
        optionB: "sorry",
        optionC: "thank you",
        correctAnswer: "sorry",
      }),
      shuffleOptions({
        question: "The animals were ______ with Chattery.",
        optionA: "pleased",
        optionB: "angry",
        optionC: "surprised",
        correctAnswer: "angry",
      }),
      shuffleOptions({
        question: "Chattery said he is ______-up.",
        optionA: "grown",
        optionB: "locked",
        optionC: "fed",
        correctAnswer: "grown",
      }),
      shuffleOptions({
        question: "Everyone wanted an ______ from Chattery.",
        optionA: "invitation",
        optionB: "apology",
        optionC: "apple",
        correctAnswer: "apology",
      }),
      shuffleOptions({
        question: "Chattery's mother said he must say ______.",
        optionA: "please",
        optionB: "sorry",
        optionC: "later",
        correctAnswer: "sorry",
      }),
      shuffleOptions({
        question: "In the end, Chattery learnt to be ______.",
        optionA: "rude",
        optionB: "kind",
        optionC: "quiet",
        correctAnswer: "kind",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chattery wanted all his forest friends to come to his wedding.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trunky was very happy with Chattery's mischief.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clet said they were going out of town.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roxy's mother forgave Chattery immediately.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chattery gave up inviting guests after meeting Blacky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chattery chattered loudly and made someone fall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Blacky is a crow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story shows how good manners are important.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roxy agreed to come without a problem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saying sorry made Chattery's wedding more successful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;