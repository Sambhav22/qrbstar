export const chapter = "Chapter - 10: Forests and Forest Life";
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
        question: "What do forests help to prevent?",
        optionA: "Soil erosion",
        optionB: "Volcanoes",
        optionC: "Earthquakes",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Who are the people that live in forests called?",
        optionA: "Urban people",
        optionB: "Tribal people",
        optionC: "Hill people",
        correctAnswer: "Tribal people",
      }),
      shuffleOptions({
        question: "Which movement was started in 1970 in Garhwal for forest protection?",
        optionA: "Green Movement",
        optionB: "Chipko Movement",
        optionC: "Vanamahotsava Movement",
        correctAnswer: "Chipko Movement",
      }),
      shuffleOptions({
        question: "Who initiated the Vanamahotsava movement in 1950?",
        optionA: "K. M. Munshi",
        optionB: "Jawaharlal Nehru",
        optionC: "Indira Gandhi",
        correctAnswer: "K. M. Munshi",
      }),
      shuffleOptions({
        question: "Which trees are considered sacred in India?",
        optionA: "Banyan and Peepal",
        optionB: "Mango and Neem",
        optionC: "Sal and Mahua",
        correctAnswer: "Banyan and Peepal",
      }),
      shuffleOptions({
        question: "What is the main occupation of the Van Gujjars of Punjab hills?",
        optionA: "Hunting",
        optionB: "Herding animals",
        optionC: "Building huts",
        correctAnswer: "Herding animals",
      }),
      shuffleOptions({
        question: "Which act is known as the removal of large areas of forests?",
        optionA: "Deforestation",
        optionB: "Afforestation",
        optionC: "Reforestation",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "Which national park is located in Assam?",
        optionA: "Bandhavgarh",
        optionB: "Kaziranga",
        optionC: "Sunderbans",
        correctAnswer: "Kaziranga",
      }),
      shuffleOptions({
        question: "What do forests absorb from the air?",
        optionA: "Nitrogen",
        optionB: "Carbon dioxide",
        optionC: "Oxygen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What are forests often called because they give out oxygen?",
        optionA: "Heart of the earth",
        optionB: "Lungs of the earth",
        optionC: "Eyes of the earth",
        correctAnswer: "Lungs of the earth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forests are the ______ of the earth.",
        optionA: "lungs",
        optionB: "eyes",
        optionC: "heart",
        correctAnswer: "lungs",
      }),
      shuffleOptions({
        question: "The tribal people are also called ______.",
        optionA: "adivasis",
        optionB: "villagers",
        optionC: "farmers",
        correctAnswer: "adivasis",
      }),
      shuffleOptions({
        question: "Forests prevent ______ of soil.",
        optionA: "erosion",
        optionB: "blowing",
        optionC: "deposition",
        correctAnswer: "erosion",
      }),
      shuffleOptions({
        question: "The act of cutting down trees is called ______.",
        optionA: "deforestation",
        optionB: "irrigation",
        optionC: "farming",
        correctAnswer: "deforestation",
      }),
      shuffleOptions({
        question: "The Vanamahotsava festival is celebrated in the month of ______.",
        optionA: "July",
        optionB: "March",
        optionC: "May",
        correctAnswer: "July",
      }),
      shuffleOptions({
        question: "The government has set up ______ to protect wildlife.",
        optionA: "national parks",
        optionB: "hospitals",
        optionC: "museums",
        correctAnswer: "national parks",
      }),
      shuffleOptions({
        question: "The ______ and Peepal trees are considered sacred.",
        optionA: "Banyan",
        optionB: "Mango",
        optionC: "Coconut",
        correctAnswer: "Banyan",
      }),
      shuffleOptions({
        question: "The forests help in maintaining ______ in the air.",
        optionA: "humidity",
        optionB: "heat",
        optionC: "dryness",
        correctAnswer: "humidity",
      }),
      shuffleOptions({
        question: "The ______ started in Garhwal region in 1970.",
        optionA: "Chipko Movement",
        optionB: "Green Drive",
        optionC: "Save Tree Mission",
        correctAnswer: "Chipko Movement",
      }),
      shuffleOptions({
        question: "Forests give us useful products like fruits, leaves and ______.",
        optionA: "medicines",
        optionB: "stones",
        optionC: "glass",
        correctAnswer: "medicines",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forests cause soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deforestation helps in maintaining ecological balance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tribal people use herbs and shrubs for medicines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Forests absorb carbon dioxide and release oxygen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cutting trees is not a punishable offence in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forests are home to many large and small animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "K. M. Munshi started the Chipko Movement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Social forestry means planting trees on wastelands and roadsides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sunderbans Tiger Sanctuary is in Madhya Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All living beings depend on trees for their life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
