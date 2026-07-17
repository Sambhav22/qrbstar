export const chapter = "Chapter - 6: The Bear";
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
        question: "Who did the poet meet?",
        optionA: "A lion",
        optionB: "A bear",
        optionC: "A tiger",
        correctAnswer: "A bear",
      }),
      shuffleOptions({
        question: "What was ahead of the poet?",
        optionA: "A lake",
        optionB: "A car",
        optionC: "A tree",
        correctAnswer: "A tree",
      }),
      shuffleOptions({
        question: "How high was the lowest branch?",
        optionA: "Ten feet",
        optionB: "Five feet",
        optionC: "Twenty feet",
        correctAnswer: "Ten feet",
      }),
      shuffleOptions({
        question: "What expression did the poet use?",
        optionA: "Oh no!",
        optionB: "Golly gee!",
        optionC: "Oh my God!",
        correctAnswer: "Golly gee!",
      }),
      shuffleOptions({
        question: "What did the poet trust?",
        optionA: "His gun",
        optionB: "His luck",
        optionC: "His shoes",
        correctAnswer: "His luck",
      }),
      shuffleOptions({
        question: "What did the bear ask the poet?",
        optionA: "Do you have food?",
        optionB: "Why don’t you run?",
        optionC: "Where are you going?",
        correctAnswer: "Why don’t you run?",
      }),
      shuffleOptions({
        question: "What did the poet do after seeing the bear?",
        optionA: "Talked to it",
        optionB: "Ran away",
        optionC: "Climbed at once",
        correctAnswer: "Ran away",
      }),
      shuffleOptions({
        question: "Where did the poet try to jump?",
        optionA: "Onto a car",
        optionB: "Into a lake",
        optionC: "Onto a branch",
        correctAnswer: "Onto a branch",
      }),
      shuffleOptions({
        question: "What did the poet miss at first?",
        optionA: "His shoes",
        optionB: "The branch",
        optionC: "The bear",
        correctAnswer: "The branch",
      }),
      shuffleOptions({
        question: "What did the poet catch on the way down?",
        optionA: "The bear",
        optionB: "The tree",
        optionC: "The branch",
        correctAnswer: "The branch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poet met a great big ______.",
        optionA: "dog",
        optionB: "bear",
        optionC: "cat",
        correctAnswer: "bear",
      }),
      shuffleOptions({
        question: "He looked at me, I looked at ______.",
        optionA: "him",
        optionB: "tree",
        optionC: "bear",
        correctAnswer: "him",
      }),
      shuffleOptions({
        question: "The poet had no ______.",
        optionA: "stick",
        optionB: "gun",
        optionC: "bag",
        correctAnswer: "gun",
      }),
      shuffleOptions({
        question: "The lowest branch was ______ feet up.",
        optionA: "five",
        optionB: "ten",
        optionC: "fifteen",
        correctAnswer: "ten",
      }),
      shuffleOptions({
        question: "I had to ______ and trust my luck.",
        optionA: "sit",
        optionB: "jump",
        optionC: "run",
        correctAnswer: "jump",
      }),
      shuffleOptions({
        question: "The poet ______ the branch on the way down.",
        optionA: "hit",
        optionB: "caught",
        optionC: "missed",
        correctAnswer: "caught",
      }),
      shuffleOptions({
        question: "Don't you fret and don't you ______.",
        optionA: "run",
        optionB: "cry",
        optionC: "frown",
        correctAnswer: "frown",
      }),
      shuffleOptions({
        question: "The bear said he saw no ______.",
        optionA: "stick",
        optionB: "gun",
        optionC: "net",
        correctAnswer: "gun",
      }),
      shuffleOptions({
        question: "The poet sized up the ______.",
        optionA: "tree",
        optionB: "bear",
        optionC: "branch",
        correctAnswer: "bear",
      }),
      shuffleOptions({
        question: "That's all there is, there is no ______.",
        optionA: "poem",
        optionB: "fun",
        optionC: "more",
        correctAnswer: "more",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poet had a gun with him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The bear was barking loudly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tree in the poem had a branch at ten feet height.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet jumped and missed the branch at first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet caught the branch after falling on the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The bear and the poet became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poet found a cave ahead of him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poem ends by saying the poet met the bear again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The branch helped save the poet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet was afraid and ran away from the bear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
