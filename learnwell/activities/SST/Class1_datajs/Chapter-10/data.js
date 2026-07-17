export const chapter = "Chapter - 10: Our Helpers";
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
        question: "Who brings newspapers to our homes every morning?",
        optionA: "Barber",
        optionB: "Newspaper vendor",
        optionC: "Grocer",
        correctAnswer: "Newspaper vendor",
      }),
      shuffleOptions({
        question: "Who repairs our torn shoes?",
        optionA: "Cobbler",
        optionB: "Tailor",
        optionC: "Watchman",
        correctAnswer: "Cobbler",
      }),
      shuffleOptions({
        question: "Who brings milk to our house every day?",
        optionA: "Policeman",
        optionB: "Milkman",
        optionC: "Farmer",
        correctAnswer: "Milkman",
      }),
      shuffleOptions({
        question: "Who guards our houses at night?",
        optionA: "Gardener",
        optionB: "Watchman",
        optionC: "Barber",
        correctAnswer: "Watchman",
      }),
      shuffleOptions({
        question: "Who cuts our hair?",
        optionA: "Sweeper",
        optionB: "Grocer",
        optionC: "Barber",
        correctAnswer: "Barber",
      }),
      shuffleOptions({
        question: "Who grows food crops for us?",
        optionA: "Farmer",
        optionB: "Tailor",
        optionC: "Doctor",
        correctAnswer: "Farmer",
      }),
      shuffleOptions({
        question: "Who stitches clothes for us?",
        optionA: "Cobbler",
        optionB: "Tailor",
        optionC: "Newspaper vendor",
        correctAnswer: "Tailor",
      }),
      shuffleOptions({
        question: "Who keeps our surroundings safe from thieves?",
        optionA: "Policeman",
        optionB: "Gardener",
        optionC: "Sweeper",
        correctAnswer: "Policeman",
      }),
      shuffleOptions({
        question: "Who delivers letters and parcels to our homes?",
        optionA: "Postman",
        optionB: "Watchman",
        optionC: "Doctor",
        correctAnswer: "Postman",
      }),
      shuffleOptions({
        question: "Who sells cereals and pulses?",
        optionA: "Grocer",
        optionB: "Farmer",
        optionC: "Sweeper",
        correctAnswer: "Grocer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A tailor stitches our ______.",
        optionA: "shoes",
        optionB: "clothes",
        optionC: "roads",
        correctAnswer: "clothes",
      }),
      shuffleOptions({
        question: "A postman brings letters and ______.",
        optionA: "parcels",
        optionB: "vegetables",
        optionC: "books",
        correctAnswer: "parcels",
      }),
      shuffleOptions({
        question: "A gardener looks after the ______.",
        optionA: "garden",
        optionB: "market",
        optionC: "school",
        correctAnswer: "garden",
      }),
      shuffleOptions({
        question: "A grocer sells cereals and ______.",
        optionA: "pulses",
        optionB: "toys",
        optionC: "clothes",
        correctAnswer: "pulses",
      }),
      shuffleOptions({
        question: "A watchman guards our ______.",
        optionA: "shoes",
        optionB: "houses",
        optionC: "clothes",
        correctAnswer: "houses",
      }),
      shuffleOptions({
        question: "A milkman brings ______ every day.",
        optionA: "milk",
        optionB: "bread",
        optionC: "fruits",
        correctAnswer: "milk",
      }),
      shuffleOptions({
        question: "A barber cuts our ______.",
        optionA: "hair",
        optionB: "vegetables",
        optionC: "slippers",
        correctAnswer: "hair",
      }),
      shuffleOptions({
        question: "A cobbler repairs our ______.",
        optionA: "flowers",
        optionB: "shoes",
        optionC: "books",
        correctAnswer: "shoes",
      }),
      shuffleOptions({
        question: "A sweeper keeps the ______ clean.",
        optionA: "roads",
        optionB: "gardens",
        optionC: "kitchens",
        correctAnswer: "roads",
      }),
      shuffleOptions({
        question: "A policeman keeps us ______ from thieves.",
        optionA: "safe",
        optionB: "hungry",
        optionC: "busy",
        correctAnswer: "safe",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cobbler repairs shoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A watchman guards the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A grocer sells newspapers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sweeper cleans the streets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A barber brings milk every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A tailor stitches our clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A postman delivers letters and parcels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A gardener looks after the garden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A policeman treats sick people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A milkman brings milk every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
