export const chapter = "Chapter - 5: All About Leaves";
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
        question: "What part of the tree did all the students colour green?",
        optionA: "Stem",
        optionB: "Trunk",
        optionC: "Leaves",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "What did the teacher ask each child to bring the next day?",
        optionA: "A flower",
        optionB: "A leaf",
        optionC: "A fruit",
        correctAnswer: "A leaf",
      }),
      shuffleOptions({
        question: "What did the teacher tell them not to do while collecting leaves?",
        optionA: "Pluck them from plants",
        optionB: "Wash them",
        optionC: "Colour them",
        correctAnswer: "Pluck them from plants",
      }),
      shuffleOptions({
        question: "What did the teacher make the children do with all the leaves they brought?",
        optionA: "Throw them away",
        optionB: "Make a collage",
        optionC: "Paste them in notebooks",
        correctAnswer: "Make a collage",
      }),
      shuffleOptions({
        question: "What did the teacher do with the leaf she had brought?",
        optionA: "Crushed it and let them smell its aroma",
        optionB: "Dried it in sunlight",
        optionC: "Drew it on the board",
        correctAnswer: "Crushed it and let them smell its aroma",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Leaves of spinach, cabbage and fenugreek are eaten as ______.",
        optionA: "Food",
        optionB: "Toys",
        optionC: "Medicine",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Leaves of ______ vine are used as paan.",
        optionA: "Betel",
        optionB: "Banana",
        optionC: "Cactus",
        correctAnswer: "Betel",
      }),
      shuffleOptions({
        question: "Dry and fallen leaves should never be ______.",
        optionA: "Burnt",
        optionB: "Stored in a box",
        optionC: "Painted",
        correctAnswer: "Burnt",
      }),
      shuffleOptions({
        question: "Fallen leaves change into dark brown ______ after a few weeks.",
        optionA: "Dust",
        optionB: "Compost",
        optionC: "Clay",
        correctAnswer: "Compost",
      }),
      shuffleOptions({
        question: "Leaves of neem, ashoka and eucalyptus are used to make ______.",
        optionA: "Medicines",
        optionB: "Dyes",
        optionC: "Paper",
        correctAnswer: "Medicines",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Leaves are of different colours, shapes and sizes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The teacher asked students to pluck leaves from plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some leaves are red, yellow or green in colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leaves of coriander are used to make medicine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Leaves of banana are used to serve food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
