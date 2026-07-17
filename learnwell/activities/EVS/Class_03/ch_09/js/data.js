export const chapter = "Chapter - 9: Games We Play";
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
        question: "Which type of games are played outside the house?",
        optionA: "Indoor games",
        optionB: "Outdoor games",
        optionC: "Mobile games",
        correctAnswer: "Outdoor games",
      }),
      shuffleOptions({
        question: "Which traditional game uses a gilli and a danda?",
        optionA: "Kho-Kho",
        optionB: "Gilli Danda",
        optionC: "Cricket",
        correctAnswer: "Gilli Danda",
      }),
      shuffleOptions({
        question: "What is Stapoo called nowadays?",
        optionA: "Hopscotch",
        optionB: "Tennis",
        optionC: "Football",
        correctAnswer: "Hopscotch",
      }),
      shuffleOptions({
        question: "Which game is similar to cricket?",
        optionA: "Gilli Danda",
        optionB: "Chess",
        optionC: "Snakes and Ladders",
        correctAnswer: "Gilli Danda",
      }),
      shuffleOptions({
        question: "Which of these is played inside the house?",
        optionA: "Football",
        optionB: "Scrabble",
        optionC: "Hockey",
        correctAnswer: "Scrabble",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Games help in ________ and mental development.",
        optionA: "Physical",
        optionB: "Musical",
        optionC: "Artistic",
        correctAnswer: "Physical",
      }),
      shuffleOptions({
        question: "The games which are played ________ the home are called outdoor games.",
        optionA: "Inside",
        optionB: "Outside",
        optionC: "Near",
        correctAnswer: "Outside",
      }),
      shuffleOptions({
        question: "The games played ________ the house are called indoor games.",
        optionA: "Outside",
        optionB: "Inside",
        optionC: "Far",
        correctAnswer: "Inside",
      }),
      shuffleOptions({
        question: "Raghu’s grandpa told him that he played ________ when he was a child.",
        optionA: "Stapoo",
        optionB: "Gilli Danda",
        optionC: "Cricket",
        correctAnswer: "Gilli Danda",
      }),
      shuffleOptions({
        question: "Reading, singing and dancing are examples of ________.",
        optionA: "Work",
        optionB: "Hobbies",
        optionC: "Sports",
        correctAnswer: "Hobbies",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Games are helpful in physical and mental development.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gilli Danda is an outdoor game.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indoor games are played outside the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stapoo is also known as hopscotch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reading and gardening are outdoor games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
