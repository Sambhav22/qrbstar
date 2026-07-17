export const chapter = "Chapter - 5: Going to School";
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
        question: "Who was the first student to arrive at school?",
        optionA: "Billi",
        optionB: "Kachua",
        optionC: "Medak",
        correctAnswer: "Kachua",
      }),
      shuffleOptions({
        question: "Who was teaching in the jungle school?",
        optionA: "Vanar",
        optionB: "Hathi",
        optionC: "Chuha",
        correctAnswer: "Hathi",
      }),
      shuffleOptions({
        question: "What was Billi staring at?",
        optionA: "The ground",
        optionB: "The sun",
        optionC: "The beehive",
        correctAnswer: "The beehive",
      }),
      shuffleOptions({
        question: "What did the animals say about school at first?",
        optionA: "It is fun",
        optionB: "It is boring",
        optionC: "It is easy",
        correctAnswer: "It is boring",
      }),
      shuffleOptions({
        question: "What comes before thunder?",
        optionA: "Rain",
        optionB: "Sound",
        optionC: "Lightning",
        correctAnswer: "Lightning",
      }),
      shuffleOptions({
        question: "Who eats carrots?",
        optionA: "Gilhari",
        optionB: "Khargosh",
        optionC: "Medak",
        correctAnswer: "Khargosh",
      }),
      shuffleOptions({
        question: "Who taught about the need for plants?",
        optionA: "Hathi",
        optionB: "Kachua",
        optionC: "Vanar",
        correctAnswer: "Kachua",
      }),
      shuffleOptions({
        question: "Who said: “Because I love grass”?",
        optionA: "Vanar",
        optionB: "Chuha",
        optionC: "Khargosh",
        correctAnswer: "Khargosh",
      }),
      shuffleOptions({
        question: "Who eats meat?",
        optionA: "Billi",
        optionB: "Gilhari",
        optionC: "Chidia",
        correctAnswer: "Billi",
      }),
      shuffleOptions({
        question: "What did the animals decide at the end?",
        optionA: "To eat more",
        optionB: "To study daily",
        optionC: "To fight",
        correctAnswer: "To study daily",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gilhari was eating ______.",
        optionA: "bananas",
        optionB: "walnuts",
        optionC: "flies",
        correctAnswer: "walnuts",
      }),
      shuffleOptions({
        question: "Chuha was gnawing at ______.",
        optionA: "grains",
        optionB: "meat",
        optionC: "insects",
        correctAnswer: "grains",
      }),
      shuffleOptions({
        question: "Medak was gobbling up ______.",
        optionA: "grains",
        optionB: "flies",
        optionC: "carrots",
        correctAnswer: "flies",
      }),
      shuffleOptions({
        question: "Chidia was pecking at ______.",
        optionA: "nuts",
        optionB: "insects",
        optionC: "grass",
        correctAnswer: "insects",
      }),
      shuffleOptions({
        question: "Vanar was eating ______.",
        optionA: "bananas",
        optionB: "grass",
        optionC: "flies",
        correctAnswer: "bananas",
      }),
      shuffleOptions({
        question: "Khargosh was biting into ______.",
        optionA: "walnuts",
        optionB: "carrots",
        optionC: "meat",
        correctAnswer: "carrots",
      }),
      shuffleOptions({
        question: "The beehive was being watched by ______.",
        optionA: "Gilhari",
        optionB: "Chidia",
        optionC: "Billi",
        correctAnswer: "Billi",
      }),
      shuffleOptions({
        question: "The teacher of the jungle school was ______.",
        optionA: "Kachua",
        optionB: "Hathi",
        optionC: "Billi",
        correctAnswer: "Hathi",
      }),
      shuffleOptions({
        question: "Kachua’s classmates were enjoying under a ______.",
        optionA: "rock",
        optionB: "tree",
        optionC: "bridge",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "Plants are necessary for ______.",
        optionA: "only plant-eaters",
        optionB: "all animals",
        optionC: "only humans",
        correctAnswer: "all animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Children were sitting and watching TV in the park.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Billi eats grains in the story.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kachua was the only student who came on the second day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals were excited about school at the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Vanar eats bananas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Khargosh eats meat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hathi taught why the sky is blue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The animals already knew why lightning comes first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "At the end, animals agreed to attend school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants are necessary only for plant-eating animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
