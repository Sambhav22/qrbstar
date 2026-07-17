export const chapter = "Chapter - 8: Be Safe";
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
        question: "What should we use to handle hot utensils in the kitchen?",
        optionA: "Towel",
        optionB: "Tongs",
        optionC: "Paper",
        correctAnswer: "Tongs",
      }),
      shuffleOptions({
        question: "What must we do before treating a wound?",
        optionA: "Wash hands properly",
        optionB: "Apply cream",
        optionC: "Use powder",
        correctAnswer: "Wash hands properly",
      }),
      shuffleOptions({
        question: "Where should we always cross the road?",
        optionA: "Zebra crossing",
        optionB: "Bridge",
        optionC: "Corner of the road",
        correctAnswer: "Zebra crossing",
      }),
      shuffleOptions({
        question: "What should we never take without asking an adult?",
        optionA: "Medicine",
        optionB: "Juice",
        optionC: "Fruit",
        correctAnswer: "Medicine",
      }),
      shuffleOptions({
        question: "What must we do if gas is not in use?",
        optionA: "Leave it on",
        optionB: "Switch it off",
        optionC: "Blow air",
        correctAnswer: "Switch it off",
      }),
      shuffleOptions({
        question: "What should be used to reach something kept at a height?",
        optionA: "Chair",
        optionB: "Step ladder",
        optionC: "Window",
        correctAnswer: "Step ladder",
      }),
      shuffleOptions({
        question: "What should be done before throwing a used matchstick?",
        optionA: "Blow it",
        optionB: "Leave it burning",
        optionC: "Put it off properly",
        correctAnswer: "Put it off properly",
      }),
      shuffleOptions({
        question: "What should we do to stop bleeding in a deeper cut?",
        optionA: "Apply antiseptic cream and bandage",
        optionB: "Rub it",
        optionC: "Cover with paper",
        correctAnswer: "Apply antiseptic cream and bandage",
      }),
      shuffleOptions({
        question: "What should we apply on insect bites for relief?",
        optionA: "Calamine lotion",
        optionB: "Oil",
        optionC: "Perfume",
        correctAnswer: "Calamine lotion",
      }),
      shuffleOptions({
        question: "What should we not do on the staircase?",
        optionA: "Walk carefully",
        optionB: "Run and jump",
        optionC: "Hold the railing",
        correctAnswer: "Run and jump",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We can avoid accidents if we are _______.",
        optionA: "Careful",
        optionB: "Lazy",
        optionC: "Sleepy",
        correctAnswer: "Careful",
      }),
      shuffleOptions({
        question: "_______ should not be taken into the bathroom.",
        optionA: "Electric items",
        optionB: "Soap",
        optionC: "Towel",
        correctAnswer: "Electric items",
      }),
      shuffleOptions({
        question: "We must always walk on the _______ while on the road.",
        optionA: "Footpath",
        optionB: "Street",
        optionC: "Divider",
        correctAnswer: "Footpath",
      }),
      shuffleOptions({
        question: "Gas pipe must be checked regularly to avoid _______.",
        optionA: "Leakage",
        optionB: "Cleaning",
        optionC: "Clogging",
        correctAnswer: "Leakage",
      }),
      shuffleOptions({
        question: "We should not play with sharp objects like _______.",
        optionA: "Knives",
        optionB: "Toys",
        optionC: "Sticks",
        correctAnswer: "Knives",
      }),
      shuffleOptions({
        question: "_______ should be used to prevent slipping in the bathroom.",
        optionA: "Non-slippery mat",
        optionB: "Carpet",
        optionC: "Plastic sheet",
        correctAnswer: "Non-slippery mat",
      }),
      shuffleOptions({
        question: "Always cross the road only when the signal is _______.",
        optionA: "Green",
        optionB: "Red",
        optionC: "Yellow",
        correctAnswer: "Green",
      }),
      shuffleOptions({
        question: "For a minor cut, we should put an _______ bandage.",
        optionA: "Adhesive",
        optionB: "Woollen",
        optionC: "Plastic",
        correctAnswer: "Adhesive",
      }),
      shuffleOptions({
        question: "For relief from burns, apply an _______ ointment.",
        optionA: "Antibiotic",
        optionB: "Oil",
        optionC: "Herbal",
        correctAnswer: "Antibiotic",
      }),
      shuffleOptions({
        question: "In case of bee sting, apply baking soda paste with _______.",
        optionA: "Antiseptic cream",
        optionB: "Water",
        optionC: "Powder",
        correctAnswer: "Antiseptic cream",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should play with matchsticks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Soap should always be kept in a soap dish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should run and push each other at school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Always walk on the footpath while on the road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Do not touch electrical wires with wet hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "First aid should be given only after the doctor arrives.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In case of insect bite, apply calamine lotion on the affected area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ice pack helps to stop bleeding.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Always keep a first aid box ready at home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should be alert and follow safety rules everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
