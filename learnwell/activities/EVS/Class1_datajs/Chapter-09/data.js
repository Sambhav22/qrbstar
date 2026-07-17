export const chapter = "Chapter - 9: Be Safe";
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
        question: "What should we never light on our own?",
        optionA: "Torch",
        optionB: "Gas stove",
        optionC: "Lamp",
        correctAnswer: "Gas stove",
      }),
      shuffleOptions({
        question: "Where should we walk to stay safe on the road?",
        optionA: "Footpath",
        optionB: "Middle of road",
        optionC: "Grass",
        correctAnswer: "Footpath",
      }),
      shuffleOptions({
        question: "What does a red light tell us to do?",
        optionA: "Stop",
        optionB: "Go",
        optionC: "Wait",
        correctAnswer: "Stop",
      }),
      shuffleOptions({
        question: "What does a green light mean?",
        optionA: "Stop",
        optionB: "Go",
        optionC: "Wait",
        correctAnswer: "Go",
      }),
      shuffleOptions({
        question: "What should we not open for strangers?",
        optionA: "Gift",
        optionB: "Door",
        optionC: "Bag",
        correctAnswer: "Door",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Do not play with _____ and sharp things.",
        optionA: "Tools",
        optionB: "Balls",
        optionC: "Toys",
        correctAnswer: "Tools",
      }),
      shuffleOptions({
        question: "A first-aid box has _____ and cotton.",
        optionA: "Bandage",
        optionB: "Colours",
        optionC: "Pencils",
        correctAnswer: "Bandage",
      }),
      shuffleOptions({
        question: "We should walk on the _____ to avoid accidents.",
        optionA: "Footpath",
        optionB: "Road",
        optionC: "Ground",
        correctAnswer: "Footpath",
      }),
      shuffleOptions({
        question: "The colour of light that means ‘Stop’ is _____.",
        optionA: "Red",
        optionB: "Yellow",
        optionC: "Green",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "We should help a person who is _____.",
        optionA: "Hurt",
        optionB: "Sleeping",
        optionC: "Running",
        correctAnswer: "Hurt",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should run on the road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A first-aid box is used when we get hurt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should open the door for strangers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should walk on the footpath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Red light means ‘Go’.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
