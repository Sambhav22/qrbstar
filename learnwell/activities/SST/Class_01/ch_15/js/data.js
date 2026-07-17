export const chapter = "Chapter - 15: Our Safety and Security";
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
        question: "What should we keep away from because it can burn us?",
        optionA: "Fire",
        optionB: "Water",
        optionC: "Sand",
        correctAnswer: "Fire",
      }),
      shuffleOptions({
        question: "What should we not touch with wet hands?",
        optionA: "Books",
        optionB: "Electrical switches",
        optionC: "Pencils",
        correctAnswer: "Electrical switches",
      }),
      shuffleOptions({
        question: "Where should we sit properly while travelling?",
        optionA: "On the bus steps",
        optionB: "On the window",
        optionC: "On the seat",
        correctAnswer: "On the seat",
      }),
      shuffleOptions({
        question: "What should we avoid playing with because it can hurt us?",
        optionA: "Toys",
        optionB: "Sharp things",
        optionC: "Balls",
        correctAnswer: "Sharp things",
      }),
      shuffleOptions({
        question: "Where should we walk to stay safe on the road?",
        optionA: "Middle of the road",
        optionB: "Footpath",
        optionC: "Parking area",
        correctAnswer: "Footpath",
      }),
      shuffleOptions({
        question: "What should we never take from strangers?",
        optionA: "Toys",
        optionB: "Anything",
        optionC: "Books",
        correctAnswer: "Anything",
      }),
      shuffleOptions({
        question: "What should we not lean out of?",
        optionA: "Classroom door",
        optionB: "Vehicle window",
        optionC: "Cupboard",
        correctAnswer: "Vehicle window",
      }),
      shuffleOptions({
        question: "What should we not touch if we find it lying on the road?",
        optionA: "Unknown objects",
        optionB: "Leaves",
        optionC: "Stones",
        correctAnswer: "Unknown objects",
      }),
      shuffleOptions({
        question: "Which signal allows people and vehicles to move?",
        optionA: "Red",
        optionB: "Green",
        optionC: "Yellow",
        correctAnswer: "Green",
      }),
      shuffleOptions({
        question: "What should we never do on a wet floor?",
        optionA: "Walk slowly",
        optionB: "Run",
        optionC: "Stand still",
        correctAnswer: "Run",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should not play near _____.",
        optionA: "the board",
        optionB: "fire",
        optionC: "books",
        correctAnswer: "fire",
      }),
      shuffleOptions({
        question: "We should walk on the ____ side of the road.",
        optionA: "right",
        optionB: "left",
        optionC: "middle",
        correctAnswer: "left",
      }),
      shuffleOptions({
        question: "We must sit properly in a moving ____.",
        optionA: "vehicle",
        optionB: "cupboard",
        optionC: "garden",
        correctAnswer: "vehicle",
      }),
      shuffleOptions({
        question: "We should keep our hands ____ before touching switches.",
        optionA: "dirty",
        optionB: "wet",
        optionC: "dry",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "We should not take anything from ____.",
        optionA: "strangers",
        optionB: "friends",
        optionC: "teachers",
        correctAnswer: "strangers",
      }),
      shuffleOptions({
        question: "A wet floor can make us ____.",
        optionA: "slip",
        optionB: "dance",
        optionC: "jump",
        correctAnswer: "slip",
      }),
      shuffleOptions({
        question: "We should not lean out of the ____.",
        optionA: "window",
        optionB: "chair",
        optionC: "door",
        correctAnswer: "window",
      }),
      shuffleOptions({
        question: "We should never touch unknown ____ on the road.",
        optionA: "objects",
        optionB: "flowers",
        optionC: "toys",
        correctAnswer: "objects",
      }),
      shuffleOptions({
        question: "A red light tells us to ____.",
        optionA: "stop",
        optionB: "go",
        optionC: "wait",
        correctAnswer: "stop",
      }),
      shuffleOptions({
        question: "We should fly kites only in an open ____.",
        optionA: "roof",
        optionB: "ground",
        optionC: "room",
        correctAnswer: "ground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "It is safe to touch switches with wet hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should sit properly when we are in a vehicle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fire is safe to play with.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should always walk on the footpath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should not run on a wet floor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is safe to take gifts from strangers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should not touch unknown things lying on the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green light tells us to stop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should not lean out of a bus window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We must always follow safety rules everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
