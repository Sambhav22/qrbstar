export const chapter = "Chapter - 14: A Dark - Brown Dog";
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
        question: "Where was the child standing when the dog came?",
        optionA: "At the park",
        optionB: "In the street",
        optionC: "In his house",
        correctAnswer: "In the street",
      }),
      shuffleOptions({
        question: "What was dragging from the dog’s neck?",
        optionA: "Chain",
        optionB: "Short rope",
        optionC: "Collar",
        correctAnswer: "Short rope",
      }),
      shuffleOptions({
        question: "The dog stumbled because he—",
        optionA: "stepped on his rope",
        optionB: "slipped on mud",
        optionC: "tripped on stairs",
        correctAnswer: "stepped on his rope",
      }),
      shuffleOptions({
        question: "How did the child first call the dog?",
        optionA: "With food",
        optionB: "By putting out his hand",
        optionC: "By whistling",
        correctAnswer: "By putting out his hand",
      }),
      shuffleOptions({
        question: "What did the child strike the dog with?",
        optionA: "A stone",
        optionB: "His hand",
        optionC: "A stick",
        correctAnswer: "His hand",
      }),
      shuffleOptions({
        question: "What did the child find on the way home?",
        optionA: "A belt",
        optionB: "A small stick",
        optionC: "A rope",
        correctAnswer: "A small stick",
      }),
      shuffleOptions({
        question: "What did the dog chew during the family council?",
        optionA: "A slipper",
        optionB: "End of the child’s dress",
        optionC: "A bone",
        correctAnswer: "End of the child’s dress",
      }),
      shuffleOptions({
        question: "Who got angry at the idea of keeping the dog?",
        optionA: "The neighbour",
        optionB: "The father",
        optionC: "The mother",
        correctAnswer: "The father",
      }),
      shuffleOptions({
        question: "The dog cried at night with a—",
        optionA: "Bark",
        optionB: "Wailing cry",
        optionC: "Growl",
        correctAnswer: "Wailing cry",
      }),
      shuffleOptions({
        question: "What hit the child when he tried to protect the dog?",
        optionA: "Stone",
        optionB: "Saucepan",
        optionC: "Stick",
        correctAnswer: "Saucepan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The child leaned with one ______ against a fence.",
        optionA: "Shoulder",
        optionB: "Hand",
        optionC: "Leg",
        correctAnswer: "Shoulder",
      }),
      shuffleOptions({
        question: "The dog made little advances with his ______.",
        optionA: "Tail",
        optionB: "Paw",
        optionC: "Nose",
        correctAnswer: "Tail",
      }),
      shuffleOptions({
        question: "The dog sank down in ______ when hit.",
        optionA: "Despair",
        optionB: "Anger",
        optionC: "Excitement",
        correctAnswer: "Despair",
      }),
      shuffleOptions({
        question: "The dog held his paws in a ______ manner.",
        optionA: "Peculiar",
        optionB: "Funny",
        optionC: "Straight",
        correctAnswer: "Peculiar",
      }),
      shuffleOptions({
        question: "The child dragged the dog up many long ______.",
        optionA: "Stairways",
        optionB: "Streets",
        optionC: "Alleys",
        correctAnswer: "Stairways",
      }),
      shuffleOptions({
        question: "The dog drooped like a ______ plant.",
        optionA: "Scorched",
        optionB: "Fresh",
        optionC: "Watered",
        correctAnswer: "Scorched",
      }),
      shuffleOptions({
        question: "The child became the dog’s ______.",
        optionA: "Guardian",
        optionB: "Enemy",
        optionC: "Stranger",
        correctAnswer: "Guardian",
      }),
      shuffleOptions({
        question: "The dog showed skill in avoiding ______.",
        optionA: "Missiles",
        optionB: "Water",
        optionC: "Food",
        correctAnswer: "Missiles",
      }),
      shuffleOptions({
        question: "The dog forgave the child with his little red ______.",
        optionA: "Tongue",
        optionB: "Paw",
        optionC: "Ear",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "The child laid his distressed head on the dog’s ______.",
        optionA: "Back",
        optionB: "Paw",
        optionC: "Tail",
        correctAnswer: "Back",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The child was gazing dreamily when the dog arrived.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dog attacked the child on the first meeting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The child sometimes beat the dog without reason.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dog always prayed when beaten.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The child’s family happily welcomed the dog at first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The father threw a saucepan which struck the child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "At night, the dog sang joyfully in the kitchen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The child always defended the dog from harm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dog plotted revenge against the child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dog finally became inseparable from the family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
