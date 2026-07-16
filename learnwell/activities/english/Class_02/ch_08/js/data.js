export const chapter = "Chapter - 8: The Natural Enemy";
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
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was the cat a danger to?",
        optionA: "Rabbit and Pigeon",
        optionB: "Crow",
        optionC: "Tree",
        correctAnswer: "Rabbit and Pigeon",
      }),
      shuffleOptions({
        question: "Who was the first to notice the hollow?",
        optionA: "Rabbit",
        optionB: "Pigeon",
        optionC: "Crow",
        correctAnswer: "Crow",
      }),
      shuffleOptions({
        question: "Where was the cat sitting?",
        optionA: "On the branch",
        optionB: "In the wood",
        optionC: "Near the tree",
        correctAnswer: "Near the tree",
      }),
      shuffleOptions({
        question: "What did the cat say it eats now?",
        optionA: "Fruits",
        optionB: "Mice",
        optionC: "Birds",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "Who had gone away for a few days?",
        optionA: "Rabbit",
        optionB: "Pigeon",
        optionC: "Crow",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "Who occupied the hollow during the absence?",
        optionA: "Rabbit",
        optionB: "Crow",
        optionC: "Cat",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "What kind of animal was the cat?",
        optionA: "Gentle",
        optionB: "Wily",
        optionC: "Friendly",
        correctAnswer: "Wily",
      }),
      shuffleOptions({
        question: "Who said, 'We can go to her for justice'?",
        optionA: "Crow",
        optionB: "Rabbit",
        optionC: "Pigeon",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "How did the cat try to convince them?",
        optionA: "By shouting",
        optionB: "By being quiet",
        optionC: "By saying she became a saint",
        correctAnswer: "By saying she became a saint",
      }),
      shuffleOptions({
        question: "Who is described as the natural enemy?",
        optionA: "Pigeon",
        optionB: "Crow",
        optionC: "Cat",
        correctAnswer: "Cat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rabbit said the hollow is _______.",
        optionA: "mine now",
        optionB: "yours",
        optionC: "cat's",
        correctAnswer: "mine now",
      }),
      shuffleOptions({
        question: "The cat pretended to be _______.",
        optionA: "a teacher",
        optionB: "a saint",
        optionC: "a cook",
        correctAnswer: "a saint",
      }),
      shuffleOptions({
        question: "Pigeon had gone for a _______.",
        optionA: "few days",
        optionB: "long walk",
        optionC: "trip",
        correctAnswer: "few days",
      }),
      shuffleOptions({
        question: "Crow advised them to keep _______.",
        optionA: "talking",
        optionB: "distance",
        optionC: "quiet",
        correctAnswer: "distance",
      }),
      shuffleOptions({
        question: "Cat claimed she eats only _______.",
        optionA: "leaves",
        optionB: "fruits",
        optionC: "meat",
        correctAnswer: "fruits",
      }),
      shuffleOptions({
        question: "Crow told them that the cat was their _______.",
        optionA: "friend",
        optionB: "helper",
        optionC: "enemy",
        correctAnswer: "enemy",
      }),
      shuffleOptions({
        question: "The hollow was a hole in a _______.",
        optionA: "wall",
        optionB: "tree",
        optionC: "cave",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "The rabbit did not want to _______ the hollow.",
        optionA: "eat",
        optionB: "vacate",
        optionC: "clean",
        correctAnswer: "vacate",
      }),
      shuffleOptions({
        question: "The cat said she had _______ violence.",
        optionA: "embraced",
        optionB: "shunned",
        optionC: "watched",
        correctAnswer: "shunned",
      }),
      shuffleOptions({
        question: "They thought if they go near, the cat would _______ them.",
        optionA: "love",
        optionB: "feed",
        optionC: "kill",
        correctAnswer: "kill",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cat was very friendly with everyone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crow helped Rabbit and Pigeon to be alert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hollow originally belonged to Rabbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cat promised she would not eat them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pigeon and Rabbit believed the cat quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crow informed that cat is a natural enemy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cat asked them to come closer to hear properly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hollow was under the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cat said she eats only fruits now.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rabbit agreed to vacate the hollow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;