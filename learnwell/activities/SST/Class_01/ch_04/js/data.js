export const chapter = "Chapter - 4: Our Body";
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
        question: "Which part of the body helps us to see the world around us?",
        optionA: "Nose",
        optionB: "Eyes",
        optionC: "Ears",
        correctAnswer: "Eyes",
      }),
      shuffleOptions({
        question: "Which part of our body helps us to taste food?",
        optionA: "Legs",
        optionB: "Tongue",
        optionC: "Skin",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "Which part of our body helps us feel hot or cold?",
        optionA: "Skin",
        optionB: "Eyes",
        optionC: "Hands",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Which part of the body helps us to run and jump?",
        optionA: "Legs",
        optionB: "Tongue",
        optionC: "Ears",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "Which part of the body helps us hold things?",
        optionA: "Hands",
        optionB: "Nose",
        optionC: "Tongue",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to smell flowers?",
        optionA: "Nose",
        optionB: "Skin",
        optionC: "Legs",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Which organ helps us to listen to music?",
        optionA: "Ears",
        optionB: "Eyes",
        optionC: "Fingers",
        correctAnswer: "Ears",
      }),
      shuffleOptions({
        question: "Which animal has a more sensitive nose than humans?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Cow",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which part of the body works like a wonderful machine?",
        optionA: "Eyes",
        optionB: "Our body",
        optionC: "Skin",
        correctAnswer: "Our body",
      }),
      shuffleOptions({
        question: "Which part of the body helps us to walk to school?",
        optionA: "Tongue",
        optionB: "Legs",
        optionC: "Eyes",
        correctAnswer: "Legs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We taste food with our ______.",
        optionA: "hands",
        optionB: "tongue",
        optionC: "legs",
        correctAnswer: "tongue",
      }),
      shuffleOptions({
        question: "We feel hot and cold with our ______.",
        optionA: "skin",
        optionB: "ears",
        optionC: "nose",
        correctAnswer: "skin",
      }),
      shuffleOptions({
        question: "We can see many things with our ______.",
        optionA: "eyes",
        optionB: "tongue",
        optionC: "legs",
        correctAnswer: "eyes",
      }),
      shuffleOptions({
        question: "A dog’s ______ is more sensitive than ours.",
        optionA: "skin",
        optionB: "ear",
        optionC: "nose",
        correctAnswer: "nose",
      }),
      shuffleOptions({
        question: "We can jump high using our ______.",
        optionA: "hands",
        optionB: "legs",
        optionC: "eyes",
        correctAnswer: "legs",
      }),
      shuffleOptions({
        question: "We smell flowers with our ______.",
        optionA: "ears",
        optionB: "tongue",
        optionC: "nose",
        correctAnswer: "nose",
      }),
      shuffleOptions({
        question: "We hold a pencil with our ______.",
        optionA: "hands",
        optionB: "skin",
        optionC: "legs",
        correctAnswer: "hands",
      }),
      shuffleOptions({
        question: "We run in the playground using our ______.",
        optionA: "legs",
        optionB: "eyes",
        optionC: "nose",
        correctAnswer: "legs",
      }),
      shuffleOptions({
        question: "Our body is like a wonderful ______.",
        optionA: "machine",
        optionB: "animal",
        optionC: "colour",
        correctAnswer: "machine",
      }),
      shuffleOptions({
        question: "We listen to sounds with our ______.",
        optionA: "eyes",
        optionB: "ears",
        optionC: "nose",
        correctAnswer: "ears",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Our body is compared to a wonderful machine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We taste food with our skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Eyes help us see things around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Legs help us to hold things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nose helps us listen to sounds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Skin helps us feel hot or cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A dog’s nose is more sensitive than a human nose.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hands help us eat and smell",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tongue helps us smell things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ears help us hear sounds around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
