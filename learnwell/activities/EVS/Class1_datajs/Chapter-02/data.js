export const chapter = "Chapter - 2: Our Body";
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
        question: "Which part of our body helps us to see things around us?",
        optionA: "Nose",
        optionB: "Eyes",
        optionC: "Hands",
        correctAnswer: "Eyes",
      }),
      shuffleOptions({
        question: "Which body part helps us to run and walk?",
        optionA: "Legs",
        optionB: "Hands",
        optionC: "Eyes",
        correctAnswer: "Legs",
      }),
      shuffleOptions({
        question: "Which part of our body helps us to hold things?",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Eyes",
        correctAnswer: "Hands",
      }),
      shuffleOptions({
        question: "Which body part helps us to kick a ball?",
        optionA: "Feet",
        optionB: "Nose",
        optionC: "Tongue",
        correctAnswer: "Feet",
      }),
      shuffleOptions({
        question: "Which part of our body helps us to read a book?",
        optionA: "Eyes",
        optionB: "Ears",
        optionC: "Hands",
        correctAnswer: "Eyes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We hear with our ______.",
        optionA: "eyes",
        optionB: "ears",
        optionC: "nose",
        correctAnswer: "ears",
      }),
      shuffleOptions({
        question: "We see with our ______.",
        optionA: "eyes",
        optionB: "legs",
        optionC: "hands",
        correctAnswer: "eyes",
      }),
      shuffleOptions({
        question: "We taste food with our ______.",
        optionA: "tongue",
        optionB: "eyes",
        optionC: "ear",
        correctAnswer: "tongue",
      }),
      shuffleOptions({
        question: "We smell with our ______.",
        optionA: "hands",
        optionB: "tongue",
        optionC: "nose",
        correctAnswer: "nose",
      }),
      shuffleOptions({
        question: "We walk with our ______.",
        optionA: "legs",
        optionB: "ears",
        optionC: "mouth",
        correctAnswer: "legs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We smell with our tongue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We see with our eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can count all our hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We hear with our ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We taste food with our hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
