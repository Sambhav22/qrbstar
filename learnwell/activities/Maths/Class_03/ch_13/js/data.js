export const chapter = "Chapter - 13: Data Handling";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Data is used to help us",
        optionA: "Sing songs",
        optionB: "Make decisions",
        optionC: "Paint pictures",
        correctAnswer: "Make decisions",
      }),
      shuffleOptions({
        question: "A pictograph represents information using",
        optionA: "Pictures or symbols",
        optionB: "Paragraphs",
        optionC: "Maps",
        correctAnswer: "Pictures or symbols",
      }),
      shuffleOptions({
        question: "The key in a pictograph tells the value of",
        optionA: "One symbol",
        optionB: "One word",
        optionC: "One sentence",
        correctAnswer: "One symbol",
      }),
      shuffleOptions({
        question: "In a pictograph, all pictures should be",
        optionA: "Different sizes",
        optionB: "Same size and neat rows",
        optionC: "Drawn in circles",
        correctAnswer: "Same size and neat rows",
      }),
      shuffleOptions({
        question: "In a tally chart, each line represents",
        optionA: "2",
        optionB: "5",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "If 1 picture = 20 students, then 7 pictures represent ______ students.",
        optionA: "140",
        optionB: "100",
        optionC: "60",
        correctAnswer: "140",
      }),
      shuffleOptions({
        question: "Which month has 5000 batteries produced (from the table)?",
        optionA: "March",
        optionB: "April",
        optionC: "May",
        correctAnswer: "April",
      }),
      shuffleOptions({
        question: "In the vehicles tally table, 10 persons like the",
        optionA: "Car",
        optionB: "Van",
        optionC: "Scooter",
        correctAnswer: "Van",
      }),
      shuffleOptions({
        question: "The bird liked by 25 children is the",
        optionA: "Duck",
        optionB: "Peacock",
        optionC: "Ostrich",
        correctAnswer: "Peacock",
      }),
      shuffleOptions({
        question: "In the cars table, the maximum number of cars were parked on",
        optionA: "Wednesday",
        optionB: "Friday",
        optionC: "Thursday",
        correctAnswer: "Thursday",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A pictograph must have a title, labels and a ______.",
        optionA: "chapter",
        optionB: "key",
        optionC: "paragraph",
        correctAnswer: "key",
      }),
      shuffleOptions({
        question: "Tally marks help us in quick ______.",
        optionA: "colouring",
        optionB: "counting",
        optionC: "measuring",
        correctAnswer: "counting",
      }),
      shuffleOptions({
        question: "The tally for number 8 is ______.",
        optionA: "|||| / ||",
        optionB: "|||| / ||||",
        optionC: "||||",
        correctAnswer: "|||| / ||||",
      }),
      shuffleOptions({
        question: "In the garden trees example, there are ______ mango trees.",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "The battery table shows ______ batteries in March.",
        optionA: "3000",
        optionB: "4000",
        optionC: "5000",
        correctAnswer: "4000",
      }),
      shuffleOptions({
        question: "The number of children who like Pigeon is ______.",
        optionA: "7",
        optionB: "17",
        optionC: "25",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "In the colour tally chart, Red has ______ tally marks.",
        optionA: "1",
        optionB: "3",
        optionC: "7",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "One symbol in the food pictograph represents ______ boys.",
        optionA: "2",
        optionB: "5",
        optionC: "10",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The vehicles tally chart shows ______ persons like the Rickshaw.",
        optionA: "14",
        optionB: "10",
        optionC: "6",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "The month with 6000 batteries produced is ______.",
        optionA: "February",
        optionB: "May",
        optionC: "June",
        correctAnswer: "June",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tally marks make counting large groups easier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the pictograph, all symbols must be the same size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the birds table, Duck is liked by 17 children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The month with the least batteries is February.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the vehicles table, Van is liked by 10 persons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bird liked by the maximum number of children is Peacock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pictograph does not need a key.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In tally marks, the 5th mark crosses the first four.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The apples and oranges in the tree table are equal in number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All data in the chapter is shown using tally marks or pictographs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
