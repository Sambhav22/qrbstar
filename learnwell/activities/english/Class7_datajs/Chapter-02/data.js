export const chapter = "Chapter - 2: Knocked Thirty in One Blow";
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
        question: "Who was the tailor’s first customer?",
        optionA: "King",
        optionB: "Honey-seller",
        optionC: "Giant",
        correctAnswer: "Honey-seller",
      }),
      shuffleOptions({
        question: "The tailor carried with him –",
        optionA: "Cheese and bird",
        optionB: "Sword and shield",
        optionC: "Rope and stick",
        correctAnswer: "Cheese and bird",
      }),
      shuffleOptions({
        question: "The giant crushed –",
        optionA: "Cheese",
        optionB: "Stone",
        optionC: "Twig",
        correctAnswer: "Stone",
      }),
      shuffleOptions({
        question: "The tailor freed –",
        optionA: "A bird",
        optionB: "A horse",
        optionC: "A butterfly",
        correctAnswer: "A bird",
      }),
      shuffleOptions({
        question: "The tailor slapped the giants while they were –",
        optionA: "Eating",
        optionB: "Sleeping",
        optionC: "Fighting",
        correctAnswer: "Sleeping",
      }),
      shuffleOptions({
        question: "The unicorn chased –",
        optionA: "The king",
        optionB: "The tailor",
        optionC: "Soldiers",
        correctAnswer: "The tailor",
      }),
      shuffleOptions({
        question: "The tailor gave the bear –",
        optionA: "Nuts and pebbles",
        optionB: "Meat and bones",
        optionC: "Honey and bread",
        correctAnswer: "Nuts and pebbles",
      }),
      shuffleOptions({
        question: "The princess told the truth to –",
        optionA: "The soldiers",
        optionB: "Her father",
        optionC: "The giant",
        correctAnswer: "Her father",
      }),
      shuffleOptions({
        question: "The soldiers heard the tailor’s words through –",
        optionA: "The door",
        optionB: "The window",
        optionC: "The roof",
        correctAnswer: "The window",
      }),
      shuffleOptions({
        question: "At last the tailor fled with –",
        optionA: "Jewels",
        optionB: "Gold coins",
        optionC: "Silver bars",
        correctAnswer: "Gold coins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tailor bought ______ spoonfuls of honey.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "The tailor counted ______ flies dead.",
        optionA: "10",
        optionB: "20",
        optionC: "30",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "The tailor squeezed ______ instead of a stone.",
        optionA: "bread",
        optionB: "cheese",
        optionC: "butter",
        correctAnswer: "cheese",
      }),
      shuffleOptions({
        question: "The bird flew away into the ______.",
        optionA: "sky",
        optionB: "forest",
        optionC: "cave",
        correctAnswer: "sky",
      }),
      shuffleOptions({
        question: "The giants fought until they both ______.",
        optionA: "ran",
        optionB: "fell dead",
        optionC: "slept",
        correctAnswer: "fell dead",
      }),
      shuffleOptions({
        question: "The unicorn was trapped in a ______.",
        optionA: "wall",
        optionB: "tree",
        optionC: "stone",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "The bear broke his teeth biting ______.",
        optionA: "walnuts",
        optionB: "pebbles",
        optionC: "bones",
        correctAnswer: "pebbles",
      }),
      shuffleOptions({
        question: "The tailor tricked the bear by sewing his ______.",
        optionA: "teeth",
        optionB: "nails",
        optionC: "ears",
        correctAnswer: "nails",
      }),
      shuffleOptions({
        question: "The tailor muttered in his ______.",
        optionA: "dream",
        optionB: "sleep",
        optionC: "story",
        correctAnswer: "sleep",
      }),
      shuffleOptions({
        question: "The princess wanted to leave her ______.",
        optionA: "father",
        optionB: "husband",
        optionC: "kingdom",
        correctAnswer: "husband",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tailor spread honey on rice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tailor killed flies by blowing them away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The giant threw a stone far away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tailor tricked the giant with cheese.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The unicorn pierced its horn into a tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bear enjoyed cracking pebbles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tailor played a violin for the bear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The princess informed her father about the tailor’s muttering.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The soldiers ran away hearing the tailor’s boasts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tailor became king of the whole kingdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
