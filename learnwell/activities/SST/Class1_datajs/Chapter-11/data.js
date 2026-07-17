export const chapter = "Chapter - 11: Our School";
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
        question: "Which place in the school has many books for reading?",
        optionA: "Playground",
        optionB: "Library",
        optionC: "Staff room",
        correctAnswer: "Library",
      }),
      shuffleOptions({
        question: "Who looks after the plants and trees in the school garden?",
        optionA: "Principal",
        optionB: "Gardener",
        optionC: "Teacher",
        correctAnswer: "Gardener",
      }),
      shuffleOptions({
        question: "Where do children go to learn and study every day?",
        optionA: "Park",
        optionB: "School",
        optionC: "Market",
        correctAnswer: "School",
      }),
      shuffleOptions({
        question: "Who serves water in the school?",
        optionA: "Peon",
        optionB: "Librarian",
        optionC: "Driver",
        correctAnswer: "Peon",
      }),
      shuffleOptions({
        question: "Where can we learn to use computers in the school?",
        optionA: "Classroom",
        optionB: "Computer room",
        optionC: "Garden",
        correctAnswer: "Computer room",
      }),
      shuffleOptions({
        question: "Which place in the school is used for playing games?",
        optionA: "Playground",
        optionB: "Library",
        optionC: "Office",
        correctAnswer: "Playground",
      }),
      shuffleOptions({
        question: "Who teaches children different subjects?",
        optionA: "Teacher",
        optionB: "Gardener",
        optionC: "Peon",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "Which place in the school is big enough for many students to sit and enjoy functions?",
        optionA: "Auditorium",
        optionB: "Storeroom",
        optionC: "Canteen",
        correctAnswer: "Auditorium",
      }),
      shuffleOptions({
        question: "What is the school also known as?",
        optionA: "House of games",
        optionB: "Temple of knowledge",
        optionC: "Home of food",
        correctAnswer: "Temple of knowledge",
      }),
      shuffleOptions({
        question: "Whose building is usually very big?",
        optionA: "Market",
        optionB: "School building",
        optionC: "Library",
        correctAnswer: "School building",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A gardener takes care of the ______.",
        optionA: "plants and trees",
        optionB: "bell",
        optionC: "shoes",
        correctAnswer: "plants and trees",
      }),
      shuffleOptions({
        question: "Computers are kept in the ______.",
        optionA: "computer room",
        optionB: "classroom",
        optionC: "playground",
        correctAnswer: "computer room",
      }),
      shuffleOptions({
        question: "The ______ rings the bell at school.",
        optionA: "principal",
        optionB: "librarian",
        optionC: "peon",
        correctAnswer: "peon",
      }),
      shuffleOptions({
        question: "We read many books in the ______.",
        optionA: "auditorium",
        optionB: "library",
        optionC: "playground",
        correctAnswer: "library",
      }),
      shuffleOptions({
        question: "Children learn good values in ______.",
        optionA: "school",
        optionB: "market",
        optionC: "theatre",
        correctAnswer: "school",
      }),
      shuffleOptions({
        question: "My school has many ______.",
        optionA: "cars",
        optionB: "classrooms",
        optionC: "gardens",
        correctAnswer: "classrooms",
      }),
      shuffleOptions({
        question: "A school building is usually very ______.",
        optionA: "big",
        optionB: "broken",
        optionC: "tiny",
        correctAnswer: "big",
      }),
      shuffleOptions({
        question: "Teachers teach ______ subjects.",
        optionA: "many",
        optionB: "no",
        optionC: "only one",
        correctAnswer: "many",
      }),
      shuffleOptions({
        question: "School functions are held in the ______.",
        optionA: "storeroom",
        optionB: "classroom",
        optionC: "auditorium",
        correctAnswer: "auditorium",
      }),
      shuffleOptions({
        question: "We play games in the ______.",
        optionA: "library",
        optionB: "playground",
        optionC: "office",
        correctAnswer: "playground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The computer room is the place where we learn to use computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The gardener rings the school bell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We can read books in the library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The playground is used for school functions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Teachers help us learn many things in school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The peon serves water in the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Students play games in the classroom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The principal is the head of the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The school is also known as the temple of knowledge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We learn good manners in school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
