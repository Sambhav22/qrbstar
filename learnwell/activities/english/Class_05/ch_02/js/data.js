export const chapter = "Chapter - 2: The Ant and the Cricket";
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
        question: "What season was it when the cricket complained?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Spring",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "The cricket asked the ant for:",
        optionA: "Clothes",
        optionB: "Money",
        optionC: "Shelter and food",
        correctAnswer: "Shelter and food",
      }),
      shuffleOptions({
        question: "The cricket’s heart was so light that he:",
        optionA: "Collected food",
        optionB: "Sang day and night",
        optionC: "Slept all day",
        correctAnswer: "Sang day and night",
      }),
      shuffleOptions({
        question: "The cricket went to visit:",
        optionA: "A butterfly",
        optionB: "A miserly ant",
        optionC: "A farmer",
        correctAnswer: "A miserly ant",
      }),
      shuffleOptions({
        question: "What covered the ground in winter?",
        optionA: "Grass",
        optionB: "Snow",
        optionC: "Leaves",
        correctAnswer: "Snow",
      }),
      shuffleOptions({
        question: "The ant never:",
        optionA: "Sleeps",
        optionB: "Works",
        optionC: "Borrows or lends",
        correctAnswer: "Borrows or lends",
      }),
      shuffleOptions({
        question: "The cricket promised to repay the ant:",
        optionA: "Yesterday",
        optionB: "Tomorrow",
        optionC: "Soon",
        correctAnswer: "Tomorrow",
      }),
      shuffleOptions({
        question: "The ant told the cricket to:",
        optionA: "Dance the winter away",
        optionB: "Sleep in his house",
        optionC: "Collect food",
        correctAnswer: "Dance the winter away",
      }),
      shuffleOptions({
        question: "The cricket was dripping with:",
        optionA: "Sweat",
        optionB: "Rain",
        optionC: "Snow",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "The poem “The Ant and the Cricket” is a:",
        optionA: "Story",
        optionB: "Fable",
        optionC: "Novel",
        correctAnswer: "Fable",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cricket was a ____ young insect.",
        optionA: "Clever",
        optionB: "Silly",
        optionC: "Wise",
        correctAnswer: "Silly",
      }),
      shuffleOptions({
        question: "The ground was covered with ____ in winter.",
        optionA: "Grass",
        optionB: "Snow",
        optionC: "Flowers",
        correctAnswer: "Snow",
      }),
      shuffleOptions({
        question: "The ant said, “We ants never ____.”",
        optionA: "Work",
        optionB: "Borrow or lend",
        optionC: "Sleep",
        correctAnswer: "Borrow or lend",
      }),
      shuffleOptions({
        question: "The cricket was trembling with ____.",
        optionA: "Cold",
        optionB: "Anger",
        optionC: "Fear",
        correctAnswer: "Cold",
      }),
      shuffleOptions({
        question: "The cricket wished to borrow a ____ of grain.",
        optionA: "Bag",
        optionB: "Mouthful",
        optionC: "Plate",
        correctAnswer: "Mouthful",
      }),
      shuffleOptions({
        question: "The ant lifted the wicket ____.",
        optionA: "Slowly",
        optionB: "Hastily",
        optionC: "Kindly",
        correctAnswer: "Hastily",
      }),
      shuffleOptions({
        question: "The cricket was bold because of ____.",
        optionA: "Wealth",
        optionB: "Starvation and famine",
        optionC: "Happiness",
        correctAnswer: "Starvation and famine",
      }),
      shuffleOptions({
        question: "The cricket’s cupboard was ____.",
        optionA: "Full",
        optionB: "Empty",
        optionC: "Locked",
        correctAnswer: "Empty",
      }),
      shuffleOptions({
        question: "The cricket wanted the ant’s help for ____.",
        optionA: "Singing",
        optionB: "Shelter from rain",
        optionC: "Travelling",
        correctAnswer: "Shelter from rain",
      }),
      shuffleOptions({
        question: "The ant said he was the cricket’s ____.",
        optionA: "Enemy",
        optionB: "Servant and friend",
        optionC: "Brother",
        correctAnswer: "Servant and friend",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cricket saved food for the winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ant gave food to the cricket.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cricket wanted to borrow food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cricket sang during the warm months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cricket was happy in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ant believed in borrowing and lending.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cricket was trembling with cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story of the ant and the cricket has no moral.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cricket went to the ant because he was hungry and cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem teaches the importance of work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
