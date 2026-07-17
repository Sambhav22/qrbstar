export const chapter = "Chapter - 3: My Family";
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
        question: "Who lives happily together in the lesson?",
        optionA: "Ram’s family",
        optionB: "Neha’s family",
        optionC: "Rani’s family",
        correctAnswer: "Ram’s family",
      }),
      shuffleOptions({
        question: "Who is a teacher in Ram’s family?",
        optionA: "Ram’s uncle",
        optionB: "Ram’s father",
        optionC: "Ram’s mother",
        correctAnswer: "Ram’s father",
      }),
      shuffleOptions({
        question: "Who is a homemaker in Ram’s family?",
        optionA: "Ram’s aunt",
        optionB: "Ram’s sister",
        optionC: "Ram’s mother",
        correctAnswer: "Ram’s mother",
      }),
      shuffleOptions({
        question: "Who is younger to Ram?",
        optionA: "His brother",
        optionB: "His cousin",
        optionC: "His sister",
        correctAnswer: "His sister",
      }),
      shuffleOptions({
        question: "Who makes a small family?",
        optionA: "Parents and one or two children",
        optionB: "Parents and many children",
        optionC: "Parents, uncles and aunts",
        correctAnswer: "Parents and one or two children",
      }),
      shuffleOptions({
        question: "Who makes a big family?",
        optionA: "Parents and one child",
        optionB: "Parents and more than two children",
        optionC: "Parents only",
        correctAnswer: "Parents and more than two children",
      }),
      shuffleOptions({
        question: "Who makes a joint family?",
        optionA: "Parents and children only",
        optionB: "Parents, grandparents, uncles, aunts and cousins",
        optionC: "Only cousins",
        correctAnswer: "Parents, grandparents, uncles, aunts and cousins",
      }),
      shuffleOptions({
        question: "Who teaches us good things first?",
        optionA: "Our teachers",
        optionB: "Our family",
        optionC: "Our friends",
        correctAnswer: "Our family",
      }),
      shuffleOptions({
        question: "Who should we give respect to?",
        optionA: "Elders",
        optionB: "Strangers",
        optionC: "Classmates",
        correctAnswer: "Elders",
      }),
      shuffleOptions({
        question: "Who helps and loves each other in a family?",
        optionA: "Family members",
        optionB: "Neighbours",
        optionC: "Classmates",
        correctAnswer: "Family members",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ram’s father is a ______.",
        optionA: "doctor",
        optionB: "teacher",
        optionC: "driver",
        correctAnswer: "teacher",
      }),
      shuffleOptions({
        question: "Ram’s mother is a ______.",
        optionA: "homemaker",
        optionB: "tailor",
        optionC: "nurse",
        correctAnswer: "homemaker",
      }),
      shuffleOptions({
        question: "Ram’s family lives ______.",
        optionA: "sadly",
        optionB: "happily",
        optionC: "alone",
        correctAnswer: "happily",
      }),
      shuffleOptions({
        question: "Family is our first ______.",
        optionA: "playground",
        optionB: "school",
        optionC: "garden",
        correctAnswer: "school",
      }),
      shuffleOptions({
        question: "We learn ______ things from our family.",
        optionA: "good",
        optionB: "bad",
        optionC: "funny",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "A small family has ______ children.",
        optionA: "one or two",
        optionB: "three",
        optionC: "none",
        correctAnswer: "one or two",
      }),
      shuffleOptions({
        question: "A big family has ______ children.",
        optionA: "more than two",
        optionB: "one",
        optionC: "none",
        correctAnswer: "more than two",
      }),
      shuffleOptions({
        question: "A joint family includes ______.",
        optionA: "grandparents, uncles and cousins",
        optionB: "neighbours",
        optionC: "friends",
        correctAnswer: "grandparents, uncles and cousins",
      }),
      shuffleOptions({
        question: "We should ______ our elders.",
        optionA: "respect",
        optionB: "tease",
        optionC: "ignore",
        correctAnswer: "respect",
      }),
      shuffleOptions({
        question: "The word “live” means ______.",
        optionA: "to stay",
        optionB: "to sleep",
        optionC: "to eat",
        correctAnswer: "to stay",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ram’s family lives happily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ram’s father is a policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ram’s mother is a homemaker.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ram’s sister is younger to him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A small family has many children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Family is our first school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should respect and help our elders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should fight with our family members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "“Younger” means smaller.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep things at proper place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
