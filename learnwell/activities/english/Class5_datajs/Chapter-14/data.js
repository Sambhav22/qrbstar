export const chapter = "Chapter - 14: The Fox and the Rabbit";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What was the weather like?",
        optionA: "Cloudy",
        optionB: "Bright and sunny",
        optionC: "Rainy",
        correctAnswer: "Bright and sunny",
      }),
      shuffleOptions({
        question: "Who wanted to take a nap in the well?",
        optionA: "Fox",
        optionB: "Rabbit",
        optionC: "Farmer",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "What struck the water with a splash?",
        optionA: "Rabbit",
        optionB: "Bucket",
        optionC: "Fox",
        correctAnswer: "Bucket",
      }),
      shuffleOptions({
        question: "Who ran to the well after seeing the rabbit?",
        optionA: "Farmer",
        optionB: "Fox",
        optionC: "Hunter",
        correctAnswer: "Fox",
      }),
      shuffleOptions({
        question: "Where were the farmers working?",
        optionA: "Forest",
        optionB: "Fields",
        optionC: "Village",
        correctAnswer: "Fields",
      }),
      shuffleOptions({
        question: "What did the fox hope to eat along with fish?",
        optionA: "Rabbit",
        optionB: "Deer",
        optionC: "Squirrel",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Who dirtied the drinking water?",
        optionA: "Rabbit",
        optionB: "Fox",
        optionC: "Farmer",
        correctAnswer: "Fox",
      }),
      shuffleOptions({
        question: "Where did the rabbit laugh secretly?",
        optionA: "Tree",
        optionB: "Bush",
        optionC: "Rock",
        correctAnswer: "Bush",
      }),
      shuffleOptions({
        question: "What did the story show?",
        optionA: "Cleverness saves",
        optionB: "Cruelty is good",
        optionC: "Silence is power",
        correctAnswer: "Cleverness saves",
      }),
      shuffleOptions({
        question: "What did the fox call the rabbit?",
        optionA: "Clever",
        optionB: "Not clever",
        optionC: "Kind",
        correctAnswer: "Not clever",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The rabbit went to the well because he was ______.",
        optionA: "Hungry",
        optionB: "Thirsty",
        optionC: "Sleepy",
        correctAnswer: "Thirsty",
      }),
      shuffleOptions({
        question: "The buckets in the well must be quite ______.",
        optionA: "Cold",
        optionB: "Cool",
        optionC: "Hot",
        correctAnswer: "Cool",
      }),
      shuffleOptions({
        question: "The fox almost ______ when he saw the rabbit in the well.",
        optionA: "Ran",
        optionB: "Walked",
        optionC: "Slept",
        correctAnswer: "Ran",
      }),
      shuffleOptions({
        question: "The rabbit told the fox to come ______.",
        optionA: "Immediately",
        optionB: "Tomorrow",
        optionC: "Never",
        correctAnswer: "Immediately",
      }),
      shuffleOptions({
        question: "The fox believed he would have a nice ______.",
        optionA: "Nap",
        optionB: "Meal",
        optionC: "Bath",
        correctAnswer: "Meal",
      }),
      shuffleOptions({
        question: "The fox was ______ than the rabbit.",
        optionA: "Lighter",
        optionB: "Heavier",
        optionC: "Smaller",
        correctAnswer: "Heavier",
      }),
      shuffleOptions({
        question: "The buckets met ______.",
        optionA: "At the top",
        optionB: "Halfway",
        optionC: "At the bottom",
        correctAnswer: "Halfway",
      }),
      shuffleOptions({
        question: "The rabbit laughed while standing behind a thick ______.",
        optionA: "Bush",
        optionB: "Rock",
        optionC: "Wall",
        correctAnswer: "Bush",
      }),
      shuffleOptions({
        question: "The rabbit told farmers the fox was ______ their drinking water.",
        optionA: "Dirtying",
        optionB: "Cleaning",
        optionC: "Guarding",
        correctAnswer: "Dirtying",
      }),
      shuffleOptions({
        question: "The farmers pulled the fox out of the ______.",
        optionA: "Bucket",
        optionB: "House",
        optionC: "Field",
        correctAnswer: "Bucket",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The rabbit saw a pond at the edge of the forest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rabbit jumped into one of the buckets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rabbit felt happy at the bottom of the well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fox wanted both fishes and the rabbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox sat in the bucket to go up.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rabbit jumped out as soon as he reached the top.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox remained in the well until farmers came.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rabbit told the truth about fishes in the well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The farmers beat the fox before letting him go.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rabbit’s cleverness saved him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
