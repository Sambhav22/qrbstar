export const chapter = "Chapter - 11: The Twin Trouble";
export const noOfActivities = 3;

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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
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
        question: "Who stood first in his class?",
        optionA: "Nikhil",
        optionB: "Nitin",
        optionC: "Both",
        correctAnswer: "Nitin",
      }),
      shuffleOptions({
        question: "What remark did Nikhil’s report card have?",
        optionA: "Excellent",
        optionB: "Little possibility of passing",
        optionC: "Good",
        correctAnswer: "Little possibility of passing",
      }),
      shuffleOptions({
        question: "Which food was cooked on the day of result?",
        optionA: "Paneer and dal",
        optionB: "Eggs and lady’s finger",
        optionC: "Rice and curry",
        correctAnswer: "Eggs and lady’s finger",
      }),
      shuffleOptions({
        question: "Who emptied the casserole of lady’s finger?",
        optionA: "Father",
        optionB: "Nitin",
        optionC: "Nikhil",
        correctAnswer: "Nitin",
      }),
      shuffleOptions({
        question: "What did Nitin think would make parents love him?",
        optionA: "Failing in tests",
        optionB: "Scoring full marks",
        optionC: "Running away",
        correctAnswer: "Failing in tests",
      }),
      shuffleOptions({
        question: "Who cried during the mathematics test?",
        optionA: "Nikhil",
        optionB: "Nitin",
        optionC: "Father",
        correctAnswer: "Nitin",
      }),
      shuffleOptions({
        question: "Who took Nitin to the principal?",
        optionA: "Mother",
        optionB: "Teacher",
        optionC: "Father",
        correctAnswer: "Teacher",
      }),
      shuffleOptions({
        question: "Who did the father thrash?",
        optionA: "Nitin",
        optionB: "Nikhil",
        optionC: "Both",
        correctAnswer: "Nikhil",
      }),
      shuffleOptions({
        question: "Who promised to treat both sons equally?",
        optionA: "Mother",
        optionB: "Father",
        optionC: "Principal",
        correctAnswer: "Father",
      }),
      shuffleOptions({
        question: "Who said “You are the star of my eyes”?",
        optionA: "Principal",
        optionB: "Father",
        optionC: "Mother",
        correctAnswer: "Father",
      }),
    ]),
  };
}


if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nikhil had failed in ______ subjects.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "three",
      }),
      shuffleOptions({
        question: "Nitin’s father looked at his report card ______.",
        optionA: "happily",
        optionB: "cursorily",
        optionC: "angrily",
        correctAnswer: "cursorily",
      }),
      shuffleOptions({
        question: "Nitin discarded the food in the ______.",
        optionA: "dustbin",
        optionB: "garbage bin",
        optionC: "kitchen",
        correctAnswer: "garbage bin",
      }),
      shuffleOptions({
        question: "Nitin secured ______ position in class when he tried less.",
        optionA: "first",
        optionB: "tenth",
        optionC: "last",
        correctAnswer: "tenth",
      }),
      shuffleOptions({
        question: "During maths test, Nitin decided not to solve even a single ______.",
        optionA: "sum",
        optionB: "question",
        optionC: "problem",
        correctAnswer: "question",
      }),
      shuffleOptions({
        question: "The principal offered Nitin a glass of ______.",
        optionA: "milk",
        optionB: "water",
        optionC: "juice",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Father explained that Nikhil had been weak since his ______.",
        optionA: "childhood",
        optionB: "birth",
        optionC: "illness",
        correctAnswer: "birth",
      }),
      shuffleOptions({
        question: "The principal said the greatest burden on a child’s psyche is his ______.",
        optionA: "friends’ love",
        optionB: "parents’ love",
        optionC: "teacher’s love",
        correctAnswer: "parents’ love",
      }),
      shuffleOptions({
        question: "Nitin realised he was loved greatly and promised to help ______.",
        optionA: "Father",
        optionB: "Mother",
        optionC: "Nikhil",
        correctAnswer: "Nikhil",
      }),
      shuffleOptions({
        question: "The story ‘The Twin Trouble’ is based on a story by ______.",
        optionA: "Ajila Girija Kumar",
        optionB: "George Bernard Shaw",
        optionC: "R.K. Narayan",
        correctAnswer: "Ajila Girija Kumar",
      }),
    ]),
  };
}


if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nikhil stood first in his class.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nitin wanted his parents’ attention.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nikhil’s favourite food was paneer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mother scolded Nitin for wasting food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nitin really wanted to fail in the mathematics test.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The teacher took Nitin to the principal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Father always praised Nitin more than Nikhil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The principal supported Nitin’s feelings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Father admitted he was partial to Nikhil due to his weakness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the end, Nitin realised his parents did not love him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
export var activityData;

