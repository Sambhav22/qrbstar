export const chapter = "Chapter - 16: The Contest";
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
        question: "What were the sun and wind arguing about?",
        optionA: "The sky",
        optionB: "Their strength",
        optionC: "The rain",
        correctAnswer: "Their strength",
      }),
      shuffleOptions({
        question: "Why was the man holding the shawl tightly?",
        optionA: "Because of strong wind",
        optionB: "He liked the shawl",
        optionC: "He was sleeping",
        correctAnswer: "Because of strong wind",
      }),
      shuffleOptions({
        question: "What happened after the sun started shining?",
        optionA: "It rained",
        optionB: "It became cold",
        optionC: "It became hot",
        correctAnswer: "It became hot",
      }),
      shuffleOptions({
        question: "Why did the man remove the shawl?",
        optionA: "It was old",
        optionB: "He got hot",
        optionC: "It flew away",
        correctAnswer: "He got hot",
      }),
      shuffleOptions({
        question: "Who gave up first in the contest?",
        optionA: "The man",
        optionB: "The wind",
        optionC: "The sun",
        correctAnswer: "The wind",
      }),
      shuffleOptions({
        question: "What did the sun use to make the man hot?",
        optionA: "Clouds",
        optionB: "Bright rays",
        optionC: "Rain",
        correctAnswer: "Bright rays",
      }),
      shuffleOptions({
        question: "What did the man do when the wind blew harder?",
        optionA: "Let go of shawl",
        optionB: "Held shawl tighter",
        optionC: "Fell asleep",
        correctAnswer: "Held shawl tighter",
      }),
      shuffleOptions({
        question: "What kind of story is this?",
        optionA: "A funny story",
        optionB: "A moral story",
        optionC: "A scary story",
        correctAnswer: "A moral story",
      }),
      shuffleOptions({
        question: "What did the sun prove by removing the shawl?",
        optionA: "That he is smarter",
        optionB: "That he is weaker",
        optionC: "That heat is bad",
        correctAnswer: "That he is smarter",
      }),
      shuffleOptions({
        question: "What does the story teach us?",
        optionA: "That kindness works better",
        optionB: "That fighting is good",
        optionC: "That shouting is strong",
        correctAnswer: "That kindness works better",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The wind ______ harder and harder.",
        optionA: "Blew",
        optionB: "Cried",
        optionC: "Shouted",
        correctAnswer: "Blew",
      }),
      shuffleOptions({
        question: "The man ______ when it became hot.",
        optionA: "Jumped",
        optionB: "Perspired",
        optionC: "Slept",
        correctAnswer: "Perspired",
      }),
      shuffleOptions({
        question: "The sun shone as ______ as possible.",
        optionA: "Gently",
        optionB: "Brightly",
        optionC: "Quickly",
        correctAnswer: "Brightly",
      }),
      shuffleOptions({
        question: "The shawl was removed because the man felt ______.",
        optionA: "Cold",
        optionB: "Hot",
        optionC: "Scared",
        correctAnswer: "Hot",
      }),
      shuffleOptions({
        question: "The wind's strength made the man hold the shawl ______.",
        optionA: "Loosely",
        optionB: "Tighter",
        optionC: "Openly",
        correctAnswer: "Tighter",
      }),
      shuffleOptions({
        question: "At the end, both agreed to use their ______ to help.",
        optionA: "Time",
        optionB: "Strength",
        optionC: "Light",
        correctAnswer: "Strength",
      }),
      shuffleOptions({
        question: "The man ______ at the change in temperature.",
        optionA: "Wondered",
        optionB: "Danced",
        optionC: "Slept",
        correctAnswer: "Wondered",
      }),
      shuffleOptions({
        question: "The story shows ______ works better than force.",
        optionA: "Talking",
        optionB: "Intelligence",
        optionC: "Shouting",
        correctAnswer: "Intelligence",
      }),
      shuffleOptions({
        question: "The contest was about removing the man's ______.",
        optionA: "Shoes",
        optionB: "Shawl",
        optionC: "Hat",
        correctAnswer: "Shawl",
      }),
      shuffleOptions({
        question: "The wind blew but could not ______ the shawl.",
        optionA: "Hold",
        optionB: "Blow off",
        optionC: "Fix",
        correctAnswer: "Blow off",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun used heat to make the man remove the shawl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wind succeeded in the contest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The man never removed his shawl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun and the wind decided to never fight again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man felt comfortable with the cold wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wind gave up and the sun tried next.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story shows how to solve problems by force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun grew hotter slowly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man laughed at the wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "At the end, both accepted they were strong in their own ways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;