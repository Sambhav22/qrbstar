export const chapter = "Chapter - 1: Living and Non-living Things";
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
        question: "What do living things need to live and grow?",
        optionA: "toys",
        optionB: "clothes",
        optionC: "food",
        correctAnswer: "food",
      }),
      shuffleOptions({
        question: "Which source helps plants to make their own food?",
        optionA: "sunlight",
        optionB: "stones",
        optionC: "fire",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Which organ helps fish to breathe in water?",
        optionA: "lungs",
        optionB: "gills",
        optionC: "skin",
        correctAnswer: "gills",
      }),
      shuffleOptions({
        question: "What does a fawn grow into?",
        optionA: "dog",
        optionB: "cow",
        optionC: "deer",
        correctAnswer: "deer",
      }),
      shuffleOptions({
        question: "How do birds reproduce?",
        optionA: "by seeds",
        optionB: "by laying eggs",
        optionC: "by fruits",
        correctAnswer: "by laying eggs",
      }),
      shuffleOptions({
        question: "Which sense is strongest in dogs?",
        optionA: "smell",
        optionB: "sight",
        optionC: "taste",
        correctAnswer: "smell",
      }),
      shuffleOptions({
        question: "Through which organ do human beings breathe?",
        optionA: "lungs",
        optionB: "gills",
        optionC: "skin",
        correctAnswer: "lungs",
      }),
      shuffleOptions({
        question: "What can plants feel in their surroundings?",
        optionA: "wind",
        optionB: "sunlight",
        optionC: "rain",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Why can’t non-living things move on their own?",
        optionA: "because they have no life",
        optionB: "because they have legs",
        optionC: "because they sleep",
        correctAnswer: "because they have no life",
      }),
      shuffleOptions({
        question: "Which of these are examples of living things?",
        optionA: "plants and animals",
        optionB: "chairs and tables",
        optionC: "rocks and clouds",
        correctAnswer: "plants and animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All the things around us can be classified into ______ and non-living things.",
        optionA: "moving",
        optionB: "living",
        optionC: "flying",
        correctAnswer: "living",
      }),
      shuffleOptions({
        question: "A car cannot move without our ______.",
        optionA: "push",
        optionB: "sound",
        optionC: "clap",
        correctAnswer: "push",
      }),
      shuffleOptions({
        question: "Plants make their food using sunlight, air, water and ______.",
        optionA: "stones",
        optionB: "soil",
        optionC: "chlorophyll",
        correctAnswer: "chlorophyll",
      }),
      shuffleOptions({
        question: "Human beings and animals get their food from ______ or other animals.",
        optionA: "toys",
        optionB: "plants",
        optionC: "dust",
        correctAnswer: "plants",
      }),
      shuffleOptions({
        question: "Plants breathe through small pores called ______.",
        optionA: "lungs",
        optionB: "nostrils",
        optionC: "stomata",
        correctAnswer: "stomata",
      }),
      shuffleOptions({
        question: "The process by which living things produce young ones is called ______.",
        optionA: "reproduction",
        optionB: "breathing",
        optionC: "resting",
        correctAnswer: "reproduction",
      }),
      shuffleOptions({
        question: "A baby grows into an ______.",
        optionA: "animal",
        optionB: "adult",
        optionC: "apple",
        correctAnswer: "adult",
      }),
      shuffleOptions({
        question: "Living things can feel with the help of their ______.",
        optionA: "toys",
        optionB: "sense organs",
        optionC: "plants",
        correctAnswer: "sense organs",
      }),
      shuffleOptions({
        question: "Non-living things do not need ______.",
        optionA: "sun",
        optionB: "paint",
        optionC: "food",
        correctAnswer: "food",
      }),
      shuffleOptions({
        question: "Dogs and cats are examples of ______ things.",
        optionA: "broken",
        optionB: "living",
        optionC: "made-up",
        correctAnswer: "living",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Living things can move, eat, grow, breathe, feel and reproduce.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-living things can move on their own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants can make their own food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Human beings breathe through lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-living things need food to live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Birds reproduce by laying eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dolls can feel pain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fish breathe through gills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants can feel sunlight and grow towards it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A table can grow like a plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
