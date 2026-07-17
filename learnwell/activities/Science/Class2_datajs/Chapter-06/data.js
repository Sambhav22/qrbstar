export const chapter = "Chapter - 6: Bones and Muscles";
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
        question: "Which part of our body is stiff and hard?",
        optionA: "Bones",
        optionB: "Muscles",
        optionC: "Skin",
        correctAnswer: "Bones",
      }),
      shuffleOptions({
        question: "How many muscles are in our body?",
        optionA: "100",
        optionB: "600",
        optionC: "300",
        correctAnswer: "600",
      }),
      shuffleOptions({
        question: "What covers our bones and muscles?",
        optionA: "Skin",
        optionB: "Posture",
        optionC: "Exercise",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Which exercise is good for bones?",
        optionA: "Running",
        optionB: "Eating chips",
        optionC: "Sleeping",
        correctAnswer: "Running",
      }),
      shuffleOptions({
        question: "Which posture is correct while walking?",
        optionA: "Bend head down",
        optionB: "Swing arms freely",
        optionC: "Bend shoulders",
        correctAnswer: "Swing arms freely",
      }),
      shuffleOptions({
        question: "Without skeleton, we cannot:",
        optionA: "Play",
        optionB: "Stand straight",
        optionC: "Eat food",
        correctAnswer: "Stand straight",
      }),
      shuffleOptions({
        question: "Which exercise is specially good for arms?",
        optionA: "Swimming",
        optionB: "Sleeping",
        optionC: "Watching TV",
        correctAnswer: "Swimming",
      }),
      shuffleOptions({
        question: "Which food keeps muscles strong?",
        optionA: "Junk food",
        optionB: "Healthy food",
        optionC: "Cold drink",
        correctAnswer: "Healthy food",
      }),
      shuffleOptions({
        question: "Which part of the body bends when we sit on a chair?",
        optionA: "Elbow",
        optionB: "Knee joint",
        optionC: "Shoulder",
        correctAnswer: "Knee joint",
      }),
      shuffleOptions({
        question: "What helps the bones to move?",
        optionA: "Muscles",
        optionB: "Posture",
        optionC: "Skin",
        correctAnswer: "Muscles",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Muscles are ______ parts under skin.",
        optionA: "hard",
        optionB: "fleshy",
        optionC: "stiff",
        correctAnswer: "fleshy",
      }),
      shuffleOptions({
        question: "______ help us to bend our body.",
        optionA: "Skeleton",
        optionB: "Muscles",
        optionC: "Joints",
        correctAnswer: "Joints",
      }),
      shuffleOptions({
        question: "Skeleton gives ______ to our body.",
        optionA: "shape",
        optionB: "colour",
        optionC: "weight",
        correctAnswer: "shape",
      }),
      shuffleOptions({
        question: "To smile, we use about ______ muscles.",
        optionA: "14",
        optionB: "20",
        optionC: "43",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "To frown, we use ______ muscles.",
        optionA: "14",
        optionB: "43",
        optionC: "20",
        correctAnswer: "43",
      }),
      shuffleOptions({
        question: "Bones protect our ______ parts.",
        optionA: "soft",
        optionB: "hard",
        optionC: "outer",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "Sleeping on a ______ bed is good for posture.",
        optionA: "soft",
        optionB: "hard",
        optionC: "bouncy",
        correctAnswer: "hard",
      }),
      shuffleOptions({
        question: "We must drink plenty of ______.",
        optionA: "milk",
        optionB: "juice",
        optionC: "cold drink",
        correctAnswer: "milk",
      }),
      shuffleOptions({
        question: "The chest should be kept ______ while standing.",
        optionA: "down",
        optionB: "up",
        optionC: "bent",
        correctAnswer: "up",
      }),
      shuffleOptions({
        question: "______ keeps our body in proper shape.",
        optionA: "posture",
        optionB: "skeleton",
        optionC: "skin",
        correctAnswer: "posture",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Muscles are attached to bones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Our body can bend only because of joints.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Skeleton covers our body from outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Running is a bad exercise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Correct posture makes us look smart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are 206 muscles in our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bones and muscles give shape and support to our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Swinging arms freely is part of correct posture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We need more muscles to smile than to frown.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drinking milk keeps our bones healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
