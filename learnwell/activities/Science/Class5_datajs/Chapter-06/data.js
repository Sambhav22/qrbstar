export const chapter = "Chapter - 6: Safety and First Aid";
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
        question: "Which side of the road should we walk on if there is no footpath?",
        optionA: "Right-hand side",
        optionB: "Left-hand side",
        optionC: "Middle of the road",
        correctAnswer: "Left-hand side",
      }),
      shuffleOptions({
        question: "Where should we cross the road safely?",
        optionA: "Bridge",
        optionB: "Zebra crossing",
        optionC: "Park",
        correctAnswer: "Zebra crossing",
      }),
      shuffleOptions({
        question: "What should we never play with at home?",
        optionA: "Sharp objects like knives and blades",
        optionB: "Soft toys",
        optionC: "Books",
        correctAnswer: "Sharp objects like knives and blades",
      }),
      shuffleOptions({
        question: "What type of clothes should we avoid wearing near fire?",
        optionA: "Cotton",
        optionB: "Nylon",
        optionC: "Woollen",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "Which number should we call to get help from the fire brigade?",
        optionA: "101",
        optionB: "100",
        optionC: "108",
        correctAnswer: "101",
      }),
      shuffleOptions({
        question: "What should be done first in case of a small burn?",
        optionA: "Apply butter",
        optionB: "Put the area under cold water",
        optionC: "Tie a bandage tightly",
        correctAnswer: "Put the area under cold water",
      }),
      shuffleOptions({
        question: "What should we use to put off fire caused by electricity?",
        optionA: "Sand",
        optionB: "Water",
        optionC: "Kerosene",
        correctAnswer: "Sand",
      }),
      shuffleOptions({
        question: "What should we apply on a sprain?",
        optionA: "Butter",
        optionB: "Rub ice",
        optionC: "Cream",
        correctAnswer: "Rub ice",
      }),
      shuffleOptions({
        question: "What should we do if a dog bites us?",
        optionA: "Ignore it",
        optionB: "Wash the wound and take anti-rabies vaccine",
        optionC: "Cover it with cloth only",
        correctAnswer: "Wash the wound and take anti-rabies vaccine",
      }),
      shuffleOptions({
        question: "What should we do if we see a crack in an electric wire?",
        optionA: "Touch it carefully",
        optionB: "Get it replaced",
        optionC: "Ignore it",
        correctAnswer: "Get it replaced",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Accidents are caused due to our _________.",
        optionA: "Carelessness",
        optionB: "Kindness",
        optionC: "Playfulness",
        correctAnswer: "Carelessness",
      }),
      shuffleOptions({
        question: "We must follow _________ rules to stay safe.",
        optionA: "Safety",
        optionB: "Food",
        optionC: "Game",
        correctAnswer: "Safety",
      }),
      shuffleOptions({
        question: "Never touch electrical appliances with _________ hands.",
        optionA: "Wet",
        optionB: "Dry",
        optionC: "Clean",
        correctAnswer: "Wet",
      }),
      shuffleOptions({
        question: "A crack or break in a bone is called a _________.",
        optionA: "Fracture",
        optionB: "Sprain",
        optionC: "Wound",
        correctAnswer: "Fracture",
      }),
      shuffleOptions({
        question: "A twist in the ankle or wrist is called a _________.",
        optionA: "Sprain",
        optionB: "Fracture",
        optionC: "Cut",
        correctAnswer: "Sprain",
      }),
      shuffleOptions({
        question: "A _________ is tied above the wound to stop bleeding.",
        optionA: "Tourniquet",
        optionB: "Sling",
        optionC: "Bandage",
        correctAnswer: "Tourniquet",
      }),
      shuffleOptions({
        question: "The _________ is the immediate help given to an injured person.",
        optionA: "First aid",
        optionB: "Exercise",
        optionC: "Medicine",
        correctAnswer: "First aid",
      }),
      shuffleOptions({
        question: "Fire caused by electricity should be put off with _________.",
        optionA: "Sand",
        optionB: "Water",
        optionC: "Oil",
        correctAnswer: "Sand",
      }),
      shuffleOptions({
        question: "The saliva of dogs or cats may carry the _________ virus.",
        optionA: "Rabies",
        optionB: "Flu",
        optionC: "Cold",
        correctAnswer: "Rabies",
      }),
      shuffleOptions({
        question: "In case of a snake bite, the patient should be taken to a _________.",
        optionA: "Doctor",
        optionB: "Fireman",
        optionC: "Teacher",
        correctAnswer: "Doctor",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should always walk on the footpath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can play on the road safely if there is less traffic.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nylon clothes are safe to wear near fire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sand is used to put off electrical fires.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water should be poured on burning kerosene or petrol.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sling is used to support a fractured arm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rubbing ice helps to reduce swelling in a sprain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dog or cat bites can cause rabies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Snake poison affects the heart and nervous system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Following safety rules helps us avoid accidents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
