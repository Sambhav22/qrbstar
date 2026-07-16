export const chapter = "Chapter - 7: Good Touch, Bad Touch";
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
        question: "Who should you talk to if touched wrongly in school?",
        optionA: "A stranger",
        optionB: "Principal",
        optionC: "Shopkeeper",
        correctAnswer: "Principal",
      }),
      shuffleOptions({
        question: "A good touch makes you feel –",
        optionA: "Happy",
        optionB: "Sad",
        optionC: "Scared",
        correctAnswer: "Happy",
      }),
      shuffleOptions({
        question: "What kind of talk is like a bad touch?",
        optionA: "Sweet",
        optionB: "Dirty",
        optionC: "Loud",
        correctAnswer: "Dirty",
      }),
      shuffleOptions({
        question: "Who gives a good touch?",
        optionA: "Your vendor",
        optionB: "Your neighbour",
        optionC: "Your parents",
        correctAnswer: "Your parents",
      }),
      shuffleOptions({
        question: "If a visitor hugs you, it is a –",
        optionA: "good touch",
        optionB: "bad touch",
        optionC: "kind touch",
        correctAnswer: "bad touch",
      }),
      shuffleOptions({
        question: "What should you do if someone gives you a bad touch?",
        optionA: "Keep quiet",
        optionB: "Tell your parents",
        optionC: "Ignore it",
        correctAnswer: "Tell your parents",
      }),
      shuffleOptions({
        question: "Which part should not be touched by anyone?",
        optionA: "Head",
        optionB: "Lips",
        optionC: "Hand",
        correctAnswer: "Lips",
      }),
      shuffleOptions({
        question: "What is 'make out'?",
        optionA: "To hide",
        optionB: "To fight",
        optionC: "To distinguish",
        correctAnswer: "To distinguish",
      }),
      shuffleOptions({
        question: "What is the touch of a vendor?",
        optionA: "Good",
        optionB: "Bad",
        optionC: "Lovely",
        correctAnswer: "Bad",
      }),
      shuffleOptions({
        question: "If your granny kisses you, it is a –",
        optionA: "Bad touch",
        optionB: "Scary touch",
        optionC: "Good touch",
        correctAnswer: "Good touch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Your _______ kissing you is a good touch.",
        optionA: "bus driver",
        optionB: "teacher",
        optionC: "mother",
        correctAnswer: "mother",
      }),
      shuffleOptions({
        question: "A dirty talk is just like a _______ touch.",
        optionA: "good",
        optionB: "bad",
        optionC: "soft",
        correctAnswer: "bad",
      }),
      shuffleOptions({
        question: "If someone touches your body wrongly, _______ loudly.",
        optionA: "laugh",
        optionB: "shout",
        optionC: "whisper",
        correctAnswer: "shout",
      }),
      shuffleOptions({
        question: "_______ should not touch children without good reason.",
        optionA: "Parents",
        optionB: "Teachers",
        optionC: "Strangers",
        correctAnswer: "Strangers",
      }),
      shuffleOptions({
        question: "Your friend of same age touching your hand is a _______ touch.",
        optionA: "bad",
        optionB: "good",
        optionC: "strange",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "The school _______ should be informed about bad touch.",
        optionA: "peon",
        optionB: "guard",
        optionC: "teacher",
        correctAnswer: "teacher",
      }),
      shuffleOptions({
        question: "Don't allow _______ to touch you.",
        optionA: "parents",
        optionB: "anyone",
        optionC: "anyone wrongly",
        correctAnswer: "anyone wrongly",
      }),
      shuffleOptions({
        question: "Someone touching your thigh is a _______ touch.",
        optionA: "strange",
        optionB: "friendly",
        optionC: "bad",
        correctAnswer: "bad",
      }),
      shuffleOptions({
        question: "If touched in the bus, tell the _______.",
        optionA: "conductor",
        optionB: "teacher",
        optionC: "friend",
        correctAnswer: "teacher",
      }),
      shuffleOptions({
        question: "If someone gives a bad touch, go and tell your _______.",
        optionA: "friend",
        optionB: "parents",
        optionC: "driver",
        correctAnswer: "parents",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A kiss from your granny is a bad touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You should never speak about bad touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A neighbour's touch is a good touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If someone talks dirty, you should inform elders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Your teacher patting your head is a good touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Someone touching your lips is a bad touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A stranger can touch you without reason.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can stop someone by saying 'Don't touch me'.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If touched wrongly, you should keep quiet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Telling your parents is the right step after a bad touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;