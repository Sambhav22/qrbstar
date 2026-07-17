export const chapter = "Chapter - 8: Caring the Environment";
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
        question: "Where did the crocodile live?",
        optionA: "Cave",
        optionB: "Water",
        optionC: "Hills",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "What tree did the robin live on?",
        optionA: "Mango",
        optionB: "Neem",
        optionC: "Banyan",
        correctAnswer: "Mango",
      }),
      shuffleOptions({
        question: "What did the robin give the crocodile first?",
        optionA: "A flower",
        optionB: "A mango",
        optionC: "A seed",
        correctAnswer: "A mango",
      }),
      shuffleOptions({
        question: "What did the crocodile eat usually?",
        optionA: "Fruits",
        optionB: "Meat",
        optionC: "Grains",
        correctAnswer: "Meat",
      }),
      shuffleOptions({
        question: "Why did the robin feel restless sometimes?",
        optionA: "The crocodile didn’t come",
        optionB: "She lost her fruits",
        optionC: "She saw hunters",
        correctAnswer: "The crocodile didn’t come",
      }),
      shuffleOptions({
        question: "Who told the robin about fishes and water animals?",
        optionA: "Crocodile",
        optionB: "Sparrow",
        optionC: "Tortoise",
        correctAnswer: "Crocodile",
      }),
      shuffleOptions({
        question: "Who polluted the river?",
        optionA: "Animals",
        optionB: "City people",
        optionC: "Birds",
        correctAnswer: "City people",
      }),
      shuffleOptions({
        question: "What happened to many animals in the river?",
        optionA: "They died",
        optionB: "They grew",
        optionC: "They flew away",
        correctAnswer: "They died",
      }),
      shuffleOptions({
        question: "What did the robin see at the end?",
        optionA: "Crocodile motionless",
        optionB: "River dried",
        optionC: "Mango tree cut",
        correctAnswer: "Crocodile motionless",
      }),
      shuffleOptions({
        question: "What is the message of the story?",
        optionA: "Don’t pollute rivers",
        optionB: "Don’t eat fruits",
        optionC: "Don’t make friends",
        correctAnswer: "Don’t pollute rivers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The crocodile looked ______ but was kind.",
        optionA: "Furious",
        optionB: "Happy",
        optionC: "Small",
        correctAnswer: "Furious",
      }),
      shuffleOptions({
        question: "The robin was very ______ by the crocodile.",
        optionA: "Impressed",
        optionB: "Angry",
        optionC: "Scared",
        correctAnswer: "Impressed",
      }),
      shuffleOptions({
        question: "The crocodile loved to lie in the ______.",
        optionA: "Sun",
        optionB: "Shade",
        optionC: "Cave",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "The robin gave the crocodile a ripe ______.",
        optionA: "Mango",
        optionB: "Banana",
        optionC: "Guava",
        correctAnswer: "Mango",
      }),
      shuffleOptions({
        question: "The crocodile called people in the city ______.",
        optionA: "Stupid",
        optionB: "Curious",
        optionC: "Clever",
        correctAnswer: "Stupid",
      }),
      shuffleOptions({
        question: "The polluted water made the crocodile ______.",
        optionA: "Sick",
        optionB: "Strong",
        optionC: "Restless",
        correctAnswer: "Sick",
      }),
      shuffleOptions({
        question: "The robin’s eyes were full of ______.",
        optionA: "Tears",
        optionB: "Joy",
        optionC: "Sleep",
        correctAnswer: "Tears",
      }),
      shuffleOptions({
        question: "The crocodile became very ______ in the end.",
        optionA: "Weak",
        optionB: "Strong",
        optionC: "Lazy",
        correctAnswer: "Weak",
      }),
      shuffleOptions({
        question: "The robin perched on the crocodile’s ______.",
        optionA: "Body",
        optionB: "Tail",
        optionC: "Mouth",
        correctAnswer: "Body",
      }),
      shuffleOptions({
        question: "The crocodile said there is need to spread ______.",
        optionA: "Awareness",
        optionB: "Happiness",
        optionC: "Fruits",
        correctAnswer: "Awareness",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The crocodile hunted all the time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The robin lived on a mango tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The robin and crocodile became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "City people kept the river clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pollution killed many animals in the river.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crocodile said city people were very wise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The robin grew restless when crocodile didn’t come.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crocodile grew weak because of polluted water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The robin consoled the crocodile with fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crocodile survived till the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
