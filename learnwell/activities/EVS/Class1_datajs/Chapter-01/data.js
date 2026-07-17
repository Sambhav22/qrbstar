export const chapter = "Chapter - 1: Myself";
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
        question: "Who is the girl in the chapter?",
        optionA: "Rekha",
        optionB: "Shelja",
        optionC: "AnanyaS",
        correctAnswer: "Shelja",
      }),
      shuffleOptions({
        question: "How old is Shelja?",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "What does Shelja love to do?",
        optionA: "Playing and dancing",
        optionB: "Sleeping",
        optionC: "Reading",
        correctAnswer: "Playing and dancing",
      }),
      shuffleOptions({
        question: "In which class does Shelja study?",
        optionA: "2",
        optionB: "1",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Who makes our life beautiful?",
        optionA: "Parents",
        optionB: "Friends",
        optionC: "Teachers",
        correctAnswer: "Friends",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shelja is a ________.",
        optionA: "boy",
        optionB: "girl",
        optionC: "teacher",
        correctAnswer: "girl",
      }),
      shuffleOptions({
        question: "She studies in class ________.",
        optionA: "2",
        optionB: "1",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "She is ________ years old.",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "She loves ________ and ________.",
        optionA: "playing, dancing",
        optionB: "sleeping, eating",
        optionC: "reading, writing",
        correctAnswer: "playing, dancing",
      }),
      shuffleOptions({
        question: "Friends make our life ________.",
        optionA: "difficult",
        optionB: "beautiful",
        optionC: "boring",
        correctAnswer: "beautiful",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shelja is six years old.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shelja loves playing and dancing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shelja studies in class 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "“Details” means half information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "“Beautiful” means pleasing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
