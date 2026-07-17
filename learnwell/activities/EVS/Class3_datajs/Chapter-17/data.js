export const chapter = "Chapter - 17: Pottery";
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
        question: "Who makes beautiful vessels from clay?",
        optionA: "Carpenter",
        optionB: "Potter",
        optionC: "Mason",
        correctAnswer: "Potter",
      }),
      shuffleOptions({
        question: "What is used by potters to shape the clay?",
        optionA: "Potter’s wheel",
        optionB: "Spoon",
        optionC: "Knife",
        correctAnswer: "Potter’s wheel",
      }),
      shuffleOptions({
        question: "What does the potter do after shaping the pot?",
        optionA: "Breaks it",
        optionB: "Bakes it in the furnace",
        optionC: "Paints it before drying",
        correctAnswer: "Bakes it in the furnace",
      }),
      shuffleOptions({
        question: "Who among the following was fond of clay art?",
        optionA: "Archit",
        optionB: "Aradhya",
        optionC: "Aditi",
        correctAnswer: "Aradhya",
      }),
      shuffleOptions({
        question: "What did Aradhya use to give shape to her bowl?",
        optionA: "Steel bowl",
        optionB: "Plastic cup",
        optionC: "Glass jar",
        correctAnswer: "Steel bowl",
      }),
      shuffleOptions({
        question: "Who showed Aradhya another way to make pots?",
        optionA: "Archit",
        optionB: "Amit",
        optionC: "Aryan",
        correctAnswer: "Archit",
      }),
      shuffleOptions({
        question: "What happens to a pot after baking?",
        optionA: "It becomes soft",
        optionB: "It becomes strong",
        optionC: "It melts",
        correctAnswer: "It becomes strong",
      }),
      shuffleOptions({
        question: "What did people use earthen pots for in olden times?",
        optionA: "Storage of grains",
        optionB: "Keeping clothes",
        optionC: "Making toys",
        correctAnswer: "Storage of grains",
      }),
      shuffleOptions({
        question: "Why are potters becoming poor these days?",
        optionA: "People prefer fancy lights instead of diyas",
        optionB: "They stopped working",
        optionC: "They don’t know pottery",
        correctAnswer: "People prefer fancy lights instead of diyas",
      }),
      shuffleOptions({
        question: "What is the art of making pots from clay called?",
        optionA: "Pottery",
        optionB: "Sculpture",
        optionC: "Cooking",
        correctAnswer: "Pottery",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Potters earn their ______ by selling clay pots.",
        optionA: "money",
        optionB: "livelihood",
        optionC: "fame",
        correctAnswer: "livelihood",
      }),
      shuffleOptions({
        question: "Clay is first ______ before shaping it into a pot.",
        optionA: "kneaded",
        optionB: "broken",
        optionC: "painted",
        correctAnswer: "kneaded",
      }),
      shuffleOptions({
        question: "Pots are dried in the bright ______.",
        optionA: "moonlight",
        optionB: "sunlight",
        optionC: "fire",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "After baking, the pot becomes ______.",
        optionA: "strong",
        optionB: "weak",
        optionC: "soft",
        correctAnswer: "strong",
      }),
      shuffleOptions({
        question: "Archit rolled the clay like a ______ to make the pot.",
        optionA: "snake",
        optionB: "rope",
        optionC: "wire",
        correctAnswer: "snake",
      }),
      shuffleOptions({
        question: "Aradhya did not have a furnace, so she kept her pot in the ______ to dry.",
        optionA: "sunlight",
        optionB: "oven",
        optionC: "shade",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "The potter decorates the pot to make it ______.",
        optionA: "beautiful",
        optionB: "heavy",
        optionC: "plain",
        correctAnswer: "beautiful",
      }),
      shuffleOptions({
        question: "In olden times, earthen pots were used to store ______.",
        optionA: "grains",
        optionB: "stones",
        optionC: "water only",
        correctAnswer: "grains",
      }),
      shuffleOptions({
        question: "People now buy fancy ______ instead of earthen lamps.",
        optionA: "lights",
        optionB: "bowls",
        optionC: "toys",
        correctAnswer: "lights",
      }),
      shuffleOptions({
        question: "The art of pottery is ______ nowadays.",
        optionA: "declining",
        optionB: "improving",
        optionC: "beginning",
        correctAnswer: "declining",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Potters make vessels from clay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aradhya used a plastic bowl to shape her pot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The potter’s wheel helps in shaping the pot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pots become strong after baking in a furnace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fancy lights have helped potters earn more money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Archit taught Aradhya another method of making pots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clay is first kneaded to make it soft and smooth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pottery means the art of making pots from clay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Potters decorate pots to make them look beautiful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The art of pottery is improving every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
