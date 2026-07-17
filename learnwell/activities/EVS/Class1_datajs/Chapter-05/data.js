export const chapter = "Chapter - 5: My School";
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
        question: "Who is the head of your school?",
        optionA: "Teacher",
        optionB: "Principal",
        optionC: "Peon",
        correctAnswer: "Principal",
      }),
      shuffleOptions({
        question: "Who teaches you in the classroom?",
        optionA: "Sweeper",
        optionB: "Teacher",
        optionC: "Guard",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "Who rings the school bell every day?",
        optionA: "Peon",
        optionB: "Clerk",
        optionC: "Principal",
        correctAnswer: "Peon",
      }),
      shuffleOptions({
        question: "Who keeps our school safe and secure?",
        optionA: "Guard",
        optionB: "Sweeper",
        optionC: "Clerk",
        correctAnswer: "Guard",
      }),
      shuffleOptions({
        question: "Who keeps the records of fees and papers?",
        optionA: "Clerk",
        optionB: "Peon",
        optionC: "Teacher",
        correctAnswer: "Clerk",
      }),
      shuffleOptions({
        question: "In which place do we read storybooks?",
        optionA: "Library",
        optionB: "Canteen",
        optionC: "Playground",
        correctAnswer: "Library",
      }),
      shuffleOptions({
        question: "Where do we eat our lunch in school?",
        optionA: "Library",
        optionB: "Canteen",
        optionC: "Office",
        correctAnswer: "Canteen",
      }),
      shuffleOptions({
        question: "Where do we play games and run around?",
        optionA: "Classroom",
        optionB: "Playground",
        optionC: "Medical Room",
        correctAnswer: "Playground",
      }),
      shuffleOptions({
        question: "Where do we get first aid if we are hurt?",
        optionA: "Staff room",
        optionB: "Medical room",
        optionC: "Library",
        correctAnswer: "Medical room",
      }),
      shuffleOptions({
        question: "Who keeps our school clean and tidy?",
        optionA: "Sweeper",
        optionB: "Guard",
        optionC: "Clerk",
        correctAnswer: "Sweeper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ is the head of the school.",
        optionA: "Teacher",
        optionB: "Principal",
        optionC: "Guard",
        correctAnswer: "Principal",
      }),
      shuffleOptions({
        question: "The ______ teaches us many good things.",
        optionA: "Teacher",
        optionB: "Sweeper",
        optionC: "Peon",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "The ______ rings the bell.",
        optionA: "Peon",
        optionB: "Clerk",
        optionC: "Teacher",
        correctAnswer: "Peon",
      }),
      shuffleOptions({
        question: "The ______ keeps our school safe.",
        optionA: "Guard",
        optionB: "Sweeper",
        optionC: "Teacher",
        correctAnswer: "Guard",
      }),
      shuffleOptions({
        question: "The ______ keeps records of fees.",
        optionA: "Clerk",
        optionB: "Principal",
        optionC: "Guard",
        correctAnswer: "Clerk",
      }),
      shuffleOptions({
        question: "We eat food in the ______.",
        optionA: "Canteen",
        optionB: "Library",
        optionC: "Office",
        correctAnswer: "Canteen",
      }),
      shuffleOptions({
        question: "We read books in the ______.",
        optionA: "Library",
        optionB: "Canteen",
        optionC: "Playground",
        correctAnswer: "Library",
      }),
      shuffleOptions({
        question: "We play games in the ______.",
        optionA: "Playground",
        optionB: "Library",
        optionC: "Staff room",
        correctAnswer: "Playground",
      }),
      shuffleOptions({
        question: "We study in the ______.",
        optionA: "Classroom",
        optionB: "Playground",
        optionC: "Office",
        correctAnswer: "Classroom",
      }),
      shuffleOptions({
        question: "We get first aid in the ______.",
        optionA: "Medical room",
        optionB: "Canteen",
        optionC: "Playground",
        correctAnswer: "Medical room",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The principal teaches all the students.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The teacher helps us to learn good things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The guard looks after the school’s security.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The clerk keeps our school clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The peon rings the bell in the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We read books in the canteen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We play in the playground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sweeper cleans the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We eat food in the library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "School is like our second home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
