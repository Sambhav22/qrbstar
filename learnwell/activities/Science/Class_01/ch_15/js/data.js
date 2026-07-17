export const chapter = "Chapter - 15: Data Handling";
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
        question: "What do we call a collection of information?",
        optionA: "Drawing",
        optionB: "Colour",
        optionC: "Data",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "What helps us to compare numbers of different things?",
        optionA: "Size",
        optionB: "Data",
        optionC: "Story",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "Who is the youngest among Rahul, Nita, Shyam, Leela, and Manju?",
        optionA: "Leela",
        optionB: "Manju",
        optionC: "Shyam",
        correctAnswer: "Manju",
      }),
      shuffleOptions({
        question: "Who is older than Leela but younger than Nita?",
        optionA: "Rahul",
        optionB: "Manju",
        optionC: "Shyam",
        correctAnswer: "Rahul",
      }),
      shuffleOptions({
        question: "How many colours of beads are used in the classroom activity?",
        optionA: "Three",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "What can we use to show data neatly?",
        optionA: "Poem",
        optionB: "Drawing",
        optionC: "Table",
        correctAnswer: "Table",
      }),
      shuffleOptions({
        question: "How many different kinds of shapes are shown in the table?",
        optionA: "Four",
        optionB: "Three",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "How many years older is Rahul (8 years) than Shyam (6 years)?",
        optionA: "2 years",
        optionB: "1 year",
        optionC: "3 years",
        correctAnswer: "2 years",
      }),
      shuffleOptions({
        question: "Which colour of beads is least in number?",
        optionA: "Red",
        optionB: "Yellow",
        optionC: "Blue",
        correctAnswer: "Yellow",
      }),
      shuffleOptions({
        question: "What does data help us to do?",
        optionA: "Draw pictures",
        optionB: "Count and compare",
        optionC: "Write stories",
        correctAnswer: "Count and compare",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Data is a collection of ______.",
        optionA: "Pictures",
        optionB: "Information",
        optionC: "Colours",
        correctAnswer: "Information",
      }),
      shuffleOptions({
        question: "The ______ coloured beads are the least in number.",
        optionA: "Red",
        optionB: "Yellow",
        optionC: "Green",
        correctAnswer: "Yellow",
      }),
      shuffleOptions({
        question: "There are ______ different types of shapes in the table.",
        optionA: "Four",
        optionB: "Three",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "Rahul is ______ years old.",
        optionA: "8",
        optionB: "6",
        optionC: "9",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "The child who is ______ years old is the youngest.",
        optionA: "5",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "We use a ______ to record and show data neatly.",
        optionA: "Table",
        optionB: "Story",
        optionC: "Poem",
        correctAnswer: "Table",
      }),
      shuffleOptions({
        question: "Counting things helps us to collect ______.",
        optionA: "Colours",
        optionB: "Data",
        optionC: "Songs",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "There are ______ colours of beads used in the activity.",
        optionA: "Four",
        optionB: "Three",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "If two colours have the same number, they are ______ in number.",
        optionA: "Equal",
        optionB: "Different",
        optionC: "Opposite",
        correctAnswer: "Equal",
      }),
      shuffleOptions({
        question: "Data helps us to find which thing is ______ or less in number.",
        optionA: "Light",
        optionB: "More",
        optionC: "Heavy",
        correctAnswer: "More",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Data helps us to understand information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manju is 8 years old.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Yellow beads are least in number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A table helps us show data neatly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Counting things is not part of data handling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rahul is younger than Shyam.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All students’ names have the same number of letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Data handling means throwing things away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If two colours have the same count, they are equal in number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Data helps us to compare things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
