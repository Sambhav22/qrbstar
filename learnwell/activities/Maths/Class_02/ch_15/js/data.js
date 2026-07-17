export const chapter = "Chapter - 15: It's Fun to Be";
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
        question: "Who hops in the poem?",
        optionA: "Cat",
        optionB: "Bird",
        optionC: "Frog",
        correctAnswer: "Frog",
      }),
      shuffleOptions({
        question: "Who climbs in the poem?",
        optionA: "Fish",
        optionB: "Cat",
        optionC: "Dog",
        correctAnswer: "Cat",
      }),
      shuffleOptions({
        question: "Who swims in the poem?",
        optionA: "Bird",
        optionB: "Horse",
        optionC: "Fish",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Who trots in the poem?",
        optionA: "Frog",
        optionB: "Horse",
        optionC: "Lamb",
        correctAnswer: "Horse",
      }),
      shuffleOptions({
        question: "Who flies in the poem?",
        optionA: "Fish",
        optionB: "Frog",
        optionC: "Bird",
        correctAnswer: "Bird",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "It's fun to ______ like a lamb.",
        optionA: "climb",
        optionB: "trot",
        optionC: "leap",
        correctAnswer: "leap",
      }),
      shuffleOptions({
        question: "It's fun to ______ like a frog.",
        optionA: "fly",
        optionB: "hop",
        optionC: "swim",
        correctAnswer: "hop",
      }),
      shuffleOptions({
        question: "Copying is good for ______.",
        optionA: "Cheating",
        optionB: "Learning",
        optionC: "Playing",
        correctAnswer: "Learning",
      }),
      shuffleOptions({
        question: "A child learns to ______ by copying.",
        optionA: "Run",
        optionB: "Write",
        optionC: "Sleep",
        correctAnswer: "Write",
      }),
      shuffleOptions({
        question: "Copying is bad for ______.",
        optionA: "Learning",
        optionB: "Cheating",
        optionC: "Pretending",
        correctAnswer: "Cheating",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cat can climb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem talks about studying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pretending is fun in the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bird can swim in the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A lamb leaps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;