export const chapter = "Chapter - 14: Good Habits";
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
        question: "Who should we help at home to show good habits?",
        optionA: "Strangers",
        optionB: "Parents",
        optionC: "Pets",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "When should we greet people to show good manners?",
        optionA: "At midnight",
        optionB: "In the morning",
        optionC: "In the afternoon",
        correctAnswer: "In the morning",
      }),
      shuffleOptions({
        question: "How should we speak with others?",
        optionA: "Politely",
        optionB: "Rudely",
        optionC: "Loudly",
        correctAnswer: "Politely",
      }),
      shuffleOptions({
        question: "Where should we throw garbage?",
        optionA: "On the floor",
        optionB: "In the garden",
        optionC: "In the dustbin",
        correctAnswer: "In the dustbin",
      }),
      shuffleOptions({
        question: "What should we do when someone gives us something?",
        optionA: "Say “Thank you”",
        optionB: "Say nothing",
        optionC: "Walk away",
        correctAnswer: "Say “Thank you”",
      }),
      shuffleOptions({
        question: "How should we behave in school?",
        optionA: "Shout in class",
        optionB: "Listen to the teacher attentively",
        optionC: "Fight with friends",
        correctAnswer: "Listen to the teacher attentively",
      }),
      shuffleOptions({
        question: "What should we do before and after sleeping?",
        optionA: "Make our own bed",
        optionB: "Jump on the bed",
        optionC: "Leave the bed messy",
        correctAnswer: "Make our own bed",
      }),
      shuffleOptions({
        question: "How should we keep our uniform?",
        optionA: "Dirty",
        optionB: "Neat and clean",
        optionC: "Not ironed",
        correctAnswer: "Neat and clean",
      }),
      shuffleOptions({
        question: "What should we do when we make a mistake?",
        optionA: "Laugh",
        optionB: "Say “Sorry”",
        optionC: "Ignore it",
        correctAnswer: "Say “Sorry”",
      }),
      shuffleOptions({
        question: "How should we treat animals?",
        optionA: "Hurt them",
        optionB: "Tease them",
        optionC: "Treat them kindly",
        correctAnswer: "Treat them kindly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should keep our house neat and ______.",
        optionA: "colourful",
        optionB: "clean",
        optionC: "noisy",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "We should share our ______ with friends.",
        optionA: "things",
        optionB: "secrets",
        optionC: "shoes",
        correctAnswer: "things",
      }),
      shuffleOptions({
        question: "We must listen to our ______ attentively.",
        optionA: "friends",
        optionB: "teacher",
        optionC: "neighbours",
        correctAnswer: "teacher",
      }),
      shuffleOptions({
        question: "We should respect our ______.",
        optionA: "toys",
        optionB: "elders",
        optionC: "books",
        correctAnswer: "elders",
      }),
      shuffleOptions({
        question: "We should keep our hair ______.",
        optionA: "messy",
        optionB: "tidy",
        optionC: "coloured",
        correctAnswer: "tidy",
      }),
      shuffleOptions({
        question: "We should make our own ______ every morning.",
        optionA: "lunch",
        optionB: "bed",
        optionC: "bag",
        correctAnswer: "bed",
      }),
      shuffleOptions({
        question: "We must be on ______ to school.",
        optionA: "vacation",
        optionB: "time",
        optionC: "duty",
        correctAnswer: "time",
      }),
      shuffleOptions({
        question: "We should wear neat and clean ______.",
        optionA: "uniform",
        optionB: "pyjamas",
        optionC: "caps",
        correctAnswer: "uniform",
      }),
      shuffleOptions({
        question: "We should speak to everyone ______.",
        optionA: "loudly",
        optionB: "angrily",
        optionC: "politely",
        correctAnswer: "politely",
      }),
      shuffleOptions({
        question: "We must not ______ animals.",
        optionA: "hurt",
        optionB: "hug",
        optionC: "feed",
        correctAnswer: "hurt",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should talk politely with others.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our house dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should help our parents at home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should tease animals for fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should listen to our teacher in class.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should throw garbage anywhere we want.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should make our bed every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should respect our elders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should come late to school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should be kind and helpful to everyone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
