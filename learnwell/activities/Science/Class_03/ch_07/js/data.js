export const chapter = "Chapter - 7: Safety and First Aid";
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
        question: "Which help is given to an injured person before a doctor arrives?",
        optionA: "Surgery",
        optionB: "Exercise",
        optionC: "First aid",
        correctAnswer: "First aid",
      }),
      shuffleOptions({
        question: "What should you do if a classmate slips on a wet floor?",
        optionA: "Help and call a teacher",
        optionB: "Laugh",
        optionC: "Walk away",
        correctAnswer: "Help and call a teacher",
      }),
      shuffleOptions({
        question: "Which of these can cause a burn?",
        optionA: "Hot utensil",
        optionB: "Cold water",
        optionC: "Paper",
        correctAnswer: "Hot utensil",
      }),
      shuffleOptions({
        question: "What should you do first for a small cut?",
        optionA: "Tie it tightly with a rope",
        optionB: "Wash the wound",
        optionC: "Rub powder on it",
        correctAnswer: "Wash the wound",
      }),
      shuffleOptions({
        question: "What protects your head while cycling?",
        optionA: "Helmet",
        optionB: "Cap",
        optionC: "Scarf",
        correctAnswer: "Helmet",
      }),
      shuffleOptions({
        question: "Where should you stand while boarding the school bus?",
        optionA: "In a queue",
        optionB: "Close to the road edge",
        optionC: "On the steps before the bus stops",
        correctAnswer: "In a queue",
      }),
      shuffleOptions({
        question: "Before crossing the road, you must look ______.",
        optionA: "right–left–right",
        optionB: "left–right–left only once",
        optionC: "only straight",
        correctAnswer: "right–left–right",
      }),
      shuffleOptions({
        question: "Which action is unsafe in a moving vehicle?",
        optionA: "Sitting quietly",
        optionB: "Putting head/arms outside",
        optionC: "Wearing a seat belt",
        correctAnswer: "Putting head/arms outside",
      }),
      shuffleOptions({
        question: "Which behaviour is unsafe in the classroom?",
        optionA: "Listening to the teacher",
        optionB: "Throwing things",
        optionC: "Sitting at your desk",
        correctAnswer: "Throwing things",
      }),
      shuffleOptions({
        question: "What gives quick relief in a minor burn?",
        optionA: "Hot oil",
        optionB: "Cold water",
        optionC: "Warm cloth",
        correctAnswer: "Cold water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "First aid is the ______ help given to an injured person.",
        optionA: "final",
        optionB: "immediate",
        optionC: "delayed",
        correctAnswer: "immediate",
      }),
      shuffleOptions({
        question: "Do not get down from a ______ vehicle.",
        optionA: "parked",
        optionB: "moving",
        optionC: "repaired",
        correctAnswer: "moving",
      }),
      shuffleOptions({
        question: "Do not run down the ______ at school.",
        optionA: "corridor",
        optionB: "staircase",
        optionC: "playground",
        correctAnswer: "staircase",
      }),
      shuffleOptions({
        question: "Always wear a ______ while riding a bicycle.",
        optionA: "helmet",
        optionB: "jacket",
        optionC: "belt",
        correctAnswer: "helmet",
      }),
      shuffleOptions({
        question: "Do not go near a ______ stove or hot utensils.",
        optionA: "gas",
        optionB: "wooden",
        optionC: "plastic",
        correctAnswer: "gas",
      }),
      shuffleOptions({
        question: "Do not leave toys and ______ lying on the floor.",
        optionA: "bottles",
        optionB: "shoes",
        optionC: "books",
        correctAnswer: "shoes",
      }),
      shuffleOptions({
        question: "After washing a wound, apply ______.",
        optionA: "powder",
        optionB: "medicine",
        optionC: "paint",
        correctAnswer: "medicine",
      }),
      shuffleOptions({
        question: "A ______ carries injured people to the hospital.",
        optionA: "scooter",
        optionB: "ambulance",
        optionC: "tractor",
        correctAnswer: "ambulance",
      }),
      shuffleOptions({
        question: "We should not play with ______ like knives and scissors.",
        optionA: "soft toys",
        optionB: "sharp objects",
        optionC: "rulers",
        correctAnswer: "sharp objects",
      }),
      shuffleOptions({
        question: "A first aid ______ contains items for minor injuries.",
        optionA: "basket",
        optionB: "box",
        optionC: "pouch",
        correctAnswer: "box",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should never play with matchsticks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is safe to stand in front of swings if you are careful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You should not put your arms out of a moving bus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pouring cold water on a minor burn can help.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We must look right–left–right before crossing the road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should talk to strangers if they offer sweets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Do not get down from a moving vehicle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In class, we must not throw things at others.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You should play barefoot in the playground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should wash a wound before applying medicine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
