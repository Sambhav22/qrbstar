export const chapter = "Chapter - 14: Our Environment";
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
        question: "Which of these is NOT part of our environment?",
        optionA: "Air",
        optionB: "Soil",
        optionC: "Television",
        correctAnswer: "Television",
      }),
      shuffleOptions({
        question: "Which one is harmful for environment?",
        optionA: "Cutting trees",
        optionB: "Planting trees",
        optionC: "Saving water",
        correctAnswer: "Cutting trees",
      }),
      shuffleOptions({
        question: "Which of these is a natural resource?",
        optionA: "Mobile",
        optionB: "Plant",
        optionC: "Table",
        correctAnswer: "Plant",
      }),
      shuffleOptions({
        question: "Which one is safe for animals and birds?",
        optionA: "Cloth bags",
        optionB: "Polythene bags",
        optionC: "Burning crackers",
        correctAnswer: "Cloth bags",
      }),
      shuffleOptions({
        question: "Which of these creates smoke?",
        optionA: "Vehicles",
        optionB: "Books",
        optionC: "Rivers",
        correctAnswer: "Vehicles",
      }),
      shuffleOptions({
        question: "Where should we throw polybags?",
        optionA: "Dustbin",
        optionB: "River",
        optionC: "Garden",
        correctAnswer: "Dustbin",
      }),
      shuffleOptions({
        question: "Which one saves trees?",
        optionA: "Wasting paper",
        optionB: "Using less paper",
        optionC: "Burning paper",
        correctAnswer: "Using less paper",
      }),
      shuffleOptions({
        question: "Which of these is clean for environment?",
        optionA: "Dirty water in lakes",
        optionB: "Fresh air",
        optionC: "Smoke",
        correctAnswer: "Fresh air",
      }),
      shuffleOptions({
        question: "Which one wastes resources?",
        optionA: "Saving water",
        optionB: "Wasting electricity",
        optionC: "Planting trees",
        correctAnswer: "Wasting electricity",
      }),
      shuffleOptions({
        question: "Which day is for environment care?",
        optionA: "Teacher’s Day",
        optionB: "World Environment Day",
        optionC: "Children’s Day",
        correctAnswer: "World Environment Day",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cutting of ______ pollutes environment.",
        optionA: "Trees",
        optionB: "Roads",
        optionC: "Bags",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "______ from vehicles pollutes the air.",
        optionA: "Smoke",
        optionB: "Rain",
        optionC: "Sand",
        correctAnswer: "Smoke",
      }),
      shuffleOptions({
        question: "WWF works to save ______.",
        optionA: "Wildlife",
        optionB: "Computers",
        optionC: "Vehicles",
        correctAnswer: "Wildlife",
      }),
      shuffleOptions({
        question: "Garbage should be thrown in ______.",
        optionA: "Dustbin",
        optionB: "Pond",
        optionC: "Road",
        correctAnswer: "Dustbin",
      }),
      shuffleOptions({
        question: "Burning ______ causes air pollution.",
        optionA: "Crackers",
        optionB: "Paper",
        optionC: "Toys",
        correctAnswer: "Crackers",
      }),
      shuffleOptions({
        question: "We should save ______ to avoid wastage.",
        optionA: "Electricity",
        optionB: "Toys",
        optionC: "Clothes",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "______ bags should be avoided.",
        optionA: "Polythene",
        optionB: "Cloth",
        optionC: "Jute",
        correctAnswer: "Polythene",
      }),
      shuffleOptions({
        question: "Water from homes is called ______ water.",
        optionA: "Dirty",
        optionB: "Sweet",
        optionC: "Cold",
        correctAnswer: "Dirty",
      }),
      shuffleOptions({
        question: "To save environment, we should plant more ______.",
        optionA: "Trees",
        optionB: "Roads",
        optionC: "Houses",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "We should not waste ______ while writing.",
        optionA: "Paper",
        optionB: "Colours",
        optionC: "Chalk",
        correctAnswer: "Paper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Our environment includes only water and air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Smoke from vehicles pollutes the air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using jute bags is harmful for nature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wasting electricity is good.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Planting trees helps in saving environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polythene bags are safe for animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "WWF works to save wildlife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Burning crackers makes the air dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dirty water from industries is safe for rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should throw waste in dustbins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
