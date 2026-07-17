export const chapter = "Chapter - 10: Keeping Fit and Clean";
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
        question: "Which exercise is best to keep our body fit and healthy?",
        optionA: "Yoga",
        optionB: "Sleeping",
        optionC: "Talking",
        correctAnswer: "Yoga",
      }),
      shuffleOptions({
        question: "Which of these makes our body strong?",
        optionA: "Playing outdoor games",
        optionB: "Watching TV",
        optionC: "Sleeping late",
        correctAnswer: "Playing outdoor games",
      }),
      shuffleOptions({
        question: "What should we drink to stay healthy?",
        optionA: "Dirty water",
        optionB: "Clean water",
        optionC: "Cold drinks",
        correctAnswer: "Clean water",
      }),
      shuffleOptions({
        question: "Which of these is a bad habit?",
        optionA: "Writing on walls",
        optionB: "Bathing daily",
        optionC: "Brushing teeth",
        correctAnswer: "Writing on walls",
      }),
      shuffleOptions({
        question: "What gives us rest and makes us feel fresh?",
        optionA: "Proper sleep",
        optionB: "Running",
        optionC: "Eating sweets",
        correctAnswer: "Proper sleep",
      }),
      shuffleOptions({
        question: "Where should we throw waste papers and wrappers?",
        optionA: "On the road",
        optionB: "In the dustbin",
        optionC: "In the garden",
        correctAnswer: "In the dustbin",
      }),
      shuffleOptions({
        question: "What should we cover our mouth with when we sneeze?",
        optionA: "Handkerchief",
        optionB: "Book",
        optionC: "Hands",
        correctAnswer: "Handkerchief",
      }),
      shuffleOptions({
        question: "How many times should we brush our teeth in a day?",
        optionA: "Once",
        optionB: "Twice",
        optionC: "Thrice",
        correctAnswer: "Twice",
      }),
      shuffleOptions({
        question: "What should we do to keep our hair tidy?",
        optionA: "Wash and comb",
        optionB: "Colour",
        optionC: "Cut only",
        correctAnswer: "Wash and comb",
      }),
      shuffleOptions({
        question: "Which type of food should we eat to remain healthy?",
        optionA: "Junk food",
        optionB: "Healthy food",
        optionC: "Spoiled food",
        correctAnswer: "Healthy food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should take a ______ daily.",
        optionA: "nap",
        optionB: "bath",
        optionC: "holiday",
        correctAnswer: "bath",
      }),
      shuffleOptions({
        question: "We should keep our ______ short and clean.",
        optionA: "nails",
        optionB: "pencils",
        optionC: "books",
        correctAnswer: "nails",
      }),
      shuffleOptions({
        question: "Do not ______ on walls of houses or buildings.",
        optionA: "write",
        optionB: "clean",
        optionC: "paint",
        correctAnswer: "write",
      }),
      shuffleOptions({
        question: "We should always get up ______ in the morning.",
        optionA: "late",
        optionB: "early",
        optionC: "midnight",
        correctAnswer: "early",
      }),
      shuffleOptions({
        question: "We should ______ our hair to keep them tidy.",
        optionA: "comb",
        optionB: "colour",
        optionC: "cut",
        correctAnswer: "comb",
      }),
      shuffleOptions({
        question: "We should wash our hands ______ eating.",
        optionA: "before and after",
        optionB: "during",
        optionC: "never",
        correctAnswer: "before and after",
      }),
      shuffleOptions({
        question: "We should not ______ on the floor or road.",
        optionA: "spit",
        optionB: "walk",
        optionC: "clean",
        correctAnswer: "spit",
      }),
      shuffleOptions({
        question: "We should cover our mouth with a ______ while coughing.",
        optionA: "handkerchief",
        optionB: "pillow",
        optionC: "book",
        correctAnswer: "handkerchief",
      }),
      shuffleOptions({
        question: "Brushing teeth twice a day keeps them ______.",
        optionA: "dirty",
        optionB: "clean",
        optionC: "yellow",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "A good habit is to always keep things at their proper ______.",
        optionA: "place",
        optionB: "bag",
        optionC: "road",
        correctAnswer: "place",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should get up early in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spitting on the road is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Playing outdoor games makes our body strong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should never take a bath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Washing and combing hair keeps them tidy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Drinking clean water keeps us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Biting nails is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Throwing wrappers in the dustbin is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Proper sleep gives us rest and makes us fresh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Writing on walls is a bad habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
