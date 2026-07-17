export const chapter = "Chapter - 6: Our School";
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
        question: "Where do all the students gather in the morning for prayer?",
        optionA: "Library",
        optionB: "Assembly ground",
        optionC: "Canteen",
        correctAnswer: "Assembly ground",
      }),
      shuffleOptions({
        question: "Who keeps a strict watch at the school gate?",
        optionA: "Security guard",
        optionB: "Gardener",
        optionC: "Peon",
        correctAnswer: "Security guard",
      }),
      shuffleOptions({
        question: "Which place in school has chairs, tables, a blackboard, chalk and a duster?",
        optionA: "Classroom",
        optionB: "Canteen",
        optionC: "Playground",
        correctAnswer: "Classroom",
      }),
      shuffleOptions({
        question: "Who takes care of the plants in the school compound?",
        optionA: "Sweeper",
        optionB: "Gardener",
        optionC: "Peon",
        correctAnswer: "Gardener",
      }),
      shuffleOptions({
        question: "Where do children play different games?",
        optionA: "Playground",
        optionB: "Library",
        optionC: "Assembly ground",
        correctAnswer: "Playground",
      }),
      shuffleOptions({
        question: "Who rings the bell after every period?",
        optionA: "Principal",
        optionB: "Teacher",
        optionC: "Peon",
        correctAnswer: "Peon",
      }),
      shuffleOptions({
        question: "In which place do children take lunch and enjoy recess?",
        optionA: "Library",
        optionB: "Canteen",
        optionC: "Classroom",
        correctAnswer: "Canteen",
      }),
      shuffleOptions({
        question: "Where do students read several books of their interest?",
        optionA: "Office",
        optionB: "Library",
        optionC: "Playground",
        correctAnswer: "Library",
      }),
      shuffleOptions({
        question: "Who maintains discipline and solves problems in the school?",
        optionA: "Teacher",
        optionB: "Principal",
        optionC: "Gardener",
        correctAnswer: "Principal",
      }),
      shuffleOptions({
        question: "Who keeps the school clean?",
        optionA: "Sweeper",
        optionB: "Peon",
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
        question: "Children enjoy their ______ during school hours.",
        optionA: "recess",
        optionB: "exam",
        optionC: "homework",
        correctAnswer: "recess",
      }),
      shuffleOptions({
        question: "The ______ records the details of all visitors at the gate.",
        optionA: "teacher",
        optionB: "security guard",
        optionC: "principal",
        correctAnswer: "security guard",
      }),
      shuffleOptions({
        question: "The school ______ keeps plants healthy and green.",
        optionA: "gardener",
        optionB: "sweeper",
        optionC: "librarian",
        correctAnswer: "gardener",
      }),
      shuffleOptions({
        question: "Students read books in the school ______.",
        optionA: "playground",
        optionB: "classroom",
        optionC: "library",
        correctAnswer: "library",
      }),
      shuffleOptions({
        question: "Children eat lunch in the ______.",
        optionA: "canteen",
        optionB: "office",
        optionC: "laboratory",
        correctAnswer: "canteen",
      }),
      shuffleOptions({
        question: "The ______ helps maintain cleanliness in the school.",
        optionA: "principal",
        optionB: "peon",
        optionC: "sweeper",
        correctAnswer: "sweeper",
      }),
      shuffleOptions({
        question: "The ______ rings the bell after every period.",
        optionA: "peon",
        optionB: "gardener",
        optionC: "teacher",
        correctAnswer: "peon",
      }),
      shuffleOptions({
        question: "The school ______ is the head of the school.",
        optionA: "principal",
        optionB: "student",
        optionC: "sweeper",
        correctAnswer: "principal",
      }),
      shuffleOptions({
        question: "A school has many ______ for children to study in.",
        optionA: "shelves",
        optionB: "classrooms",
        optionC: "gardens",
        correctAnswer: "classrooms",
      }),
      shuffleOptions({
        question: "We gather in the ______ for morning prayer.",
        optionA: "assembly ground",
        optionB: "canteen",
        optionC: "playground",
        correctAnswer: "assembly ground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The library contains many books for students to read.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The canteen is the place where children play games.",
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
        question: "The sweeper keeps the school clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children take lunch in the library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Students gather in the assembly ground for morning prayer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The gardener looks after the plants in the school compound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Students read interesting books in the library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The peon rings the bell after each period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The playground is the place where children study.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
