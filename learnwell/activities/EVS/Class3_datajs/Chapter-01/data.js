export const chapter = "Chapter - 1: Whom Do I Look Like";
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
        question: "Who lives in Lucknow?",
        optionA: "Piya",
        optionB: "Riya",
        optionC: "Suhani",
        correctAnswer: "Riya",
      }),
      shuffleOptions({
        question: "Riya studies in which school?",
        optionA: "Rockwood Public School",
        optionB: "City Model School",
        optionC: "Bright Star School",
        correctAnswer: "Rockwood Public School",
      }),
      shuffleOptions({
        question: "Who in Riya’s family wears specs all the time?",
        optionA: "Father",
        optionB: "Grandmother",
        optionC: "Mother",
        correctAnswer: "Grandmother",
      }),
      shuffleOptions({
        question: "Which of these is an inherited feature in Riya’s family?",
        optionA: "Poor eyesight",
        optionB: "Playing music",
        optionC: "Dancing",
        correctAnswer: "Poor eyesight",
      }),
      shuffleOptions({
        question: "The process of passing features from parents to children is called ______.",
        optionA: "Heredity",
        optionB: "Generation",
        optionC: "Learning",
        correctAnswer: "Heredity",
      }),
      shuffleOptions({
        question: "Riya and Piya are ______.",
        optionA: "Friends",
        optionB: "Twins",
        optionC: "Neighbours",
        correctAnswer: "Twins",
      }),
      shuffleOptions({
        question: "Who was the first scientist to study inherited traits?",
        optionA: "Darwin",
        optionB: "Gregor Mendal",
        optionC: "Newton",
        correctAnswer: "Gregor Mendal",
      }),
      shuffleOptions({
        question: "What does the word generation mean?",
        optionA: "A group of friends",
        optionB: "People born around the same time",
        optionC: "A school class",
        correctAnswer: "People born around the same time",
      }),
      shuffleOptions({
        question: "The science that studies heredity is called ______.",
        optionA: "Botany",
        optionB: "Genetics",
        optionC: "Physics",
        correctAnswer: "Genetics",
      }),
      shuffleOptions({
        question: "Which quality can also be similar among family members?",
        optionA: "Laughing style",
        optionB: "School uniform",
        optionC: "Favourite toy",
        correctAnswer: "Laughing style",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Riya uses ______ while reading.",
        optionA: "specs",
        optionB: "hat",
        optionC: "bag",
        correctAnswer: "specs",
      }),
      shuffleOptions({
        question: "Her father has been wearing specs since his ______.",
        optionA: "childhood",
        optionB: "old age",
        optionC: "college days",
        correctAnswer: "childhood",
      }),
      shuffleOptions({
        question: "Riya and her mother both have a long ______.",
        optionA: "nose",
        optionB: "hand",
        optionC: "foot",
        correctAnswer: "nose",
      }),
      shuffleOptions({
        question: "Family members may have similar ______ and handwriting.",
        optionA: "voice",
        optionB: "books",
        optionC: "shoes",
        correctAnswer: "voice",
      }),
      shuffleOptions({
        question: "The science that studies traits is called ______.",
        optionA: "genetics",
        optionB: "biology",
        optionC: "chemistry",
        correctAnswer: "genetics",
      }),
      shuffleOptions({
        question: "Two babies born at the same time to the same mother are called ______.",
        optionA: "twins",
        optionB: "friends",
        optionC: "cousins",
        correctAnswer: "twins",
      }),
      shuffleOptions({
        question: "Gregor Mendal discovered that certain traits are ______.",
        optionA: "inherited",
        optionB: "borrowed",
        optionC: "taught",
        correctAnswer: "inherited",
      }),
      shuffleOptions({
        question: "People born about the same time belong to one ______.",
        optionA: "generation",
        optionB: "group",
        optionC: "school",
        correctAnswer: "generation",
      }),
      shuffleOptions({
        question: "Our ______ may resemble our family members.",
        optionA: "eating habits",
        optionB: "games",
        optionC: "books",
        correctAnswer: "eating habits",
      }),
      shuffleOptions({
        question: "The quality of being like someone else is called ______.",
        optionA: "similarity",
        optionB: "difference",
        optionC: "ability",
        correctAnswer: "similarity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Riya’s father and grandmother both wear specs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Riya and Piya are twin sisters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heredity passes traits from parents to children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Twins are always different in appearance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Similarity means being like somebody.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Riya lives in Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gregor Mendal studied the inheritance of traits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People born at about the same time form a generation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All family members always look exactly alike.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The study of heredity is called genetics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
