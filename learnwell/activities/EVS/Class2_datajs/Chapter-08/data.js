export const chapter = "Chapter - 8: Health and Hygiene";
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
        question: "What keeps our body clean and free from germs?",
        optionA: "Taking bath every day",
        optionB: "Sleeping late",
        optionC: "Playing on mobile phones",
        correctAnswer: "Taking bath every day",
      }),
      shuffleOptions({
        question: "How many times should we brush our teeth in a day?",
        optionA: "Once",
        optionB: "Twice",
        optionC: "Thrice",
        correctAnswer: "Twice",
      }),
      shuffleOptions({
        question: "What should we use to wash our hair?",
        optionA: "Soap",
        optionB: "Shampoo",
        optionC: "Oil",
        correctAnswer: "Shampoo",
      }),
      shuffleOptions({
        question: "What should we do after taking bath?",
        optionA: "Wear dirty clothes",
        optionB: "Wipe body with a clean towel",
        optionC: "Go to bed",
        correctAnswer: "Wipe body with a clean towel",
      }),
      shuffleOptions({
        question: "What should we drink every day to stay healthy?",
        optionA: "Cold drinks",
        optionB: "Enough water",
        optionC: "Coffee",
        correctAnswer: "Enough water",
      }),
      shuffleOptions({
        question: "Why should we wash our hands before and after meals?",
        optionA: "To remove germs",
        optionB: "To play games",
        optionC: "To make them wet",
        correctAnswer: "To remove germs",
      }),
      shuffleOptions({
        question: "What should we do to make our body fit and strong?",
        optionA: "Do regular exercise",
        optionB: "Eat junk food",
        optionC: "Watch television",
        correctAnswer: "Do regular exercise",
      }),
      shuffleOptions({
        question: "What type of food should we eat to be healthy?",
        optionA: "Fresh and healthy food",
        optionB: "Stale food",
        optionC: "Spicy food",
        correctAnswer: "Fresh and healthy food",
      }),
      shuffleOptions({
        question: "What kind of games should we play to stay active?",
        optionA: "Mobile games",
        optionB: "Outdoor games",
        optionC: "Board games",
        correctAnswer: "Outdoor games",
      }),
      shuffleOptions({
        question: "What happens when we keep our body clean?",
        optionA: "We stay healthy and happy",
        optionB: "We fall sick",
        optionC: "We become tire",
        correctAnswer: "We stay healthy and happy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should brush our teeth ______ a day.",
        optionA: "once",
        optionB: "twice",
        optionC: "thrice",
        correctAnswer: "twice",
      }),
      shuffleOptions({
        question: "Bathing keeps our body ______ and germ-free.",
        optionA: "dirty",
        optionB: "fresh",
        optionC: "tired",
        correctAnswer: "fresh",
      }),
      shuffleOptions({
        question: "We should wash our hands before and after ______.",
        optionA: "meals",
        optionB: "play",
        optionC: "sleep",
        correctAnswer: "meals",
      }),
      shuffleOptions({
        question: "We should wash our hair regularly with good ______.",
        optionA: "shampoo",
        optionB: "soap",
        optionC: "powder",
        correctAnswer: "shampoo",
      }),
      shuffleOptions({
        question: "We should drink enough ______ every day.",
        optionA: "water",
        optionB: "juice",
        optionC: "milk",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "A healthy mind lives in a healthy ______.",
        optionA: "room",
        optionB: "body",
        optionC: "bag",
        correctAnswer: "body",
      }),
      shuffleOptions({
        question: "We should play ______ games to stay strong.",
        optionA: "mobile",
        optionB: "outdoor",
        optionC: "card",
        correctAnswer: "outdoor",
      }),
      shuffleOptions({
        question: "To relax our body, we should take proper ______.",
        optionA: "rest",
        optionB: "walk",
        optionC: "work",
        correctAnswer: "rest",
      }),
      shuffleOptions({
        question: "We should wipe our body with a ______ towel after bath.",
        optionA: "clean and dry",
        optionB: "dirty",
        optionC: "wet",
        correctAnswer: "clean and dry",
      }),
      shuffleOptions({
        question: "Eating ______ food helps us stay fit.",
        optionA: "fresh and healthy",
        optionB: "junk",
        optionC: "uncovered",
        correctAnswer: "fresh and healthy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Good health is the source of happiness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should brush our teeth only once a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bathing every day keeps us germ-free.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should wash our hands after using the toilet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Playing outdoor games makes us lazy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Personal hygiene means keeping ourselves clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should drink less water to stay healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A clean body keeps us away from diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Taking proper rest helps our body relax.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should never eat fresh and healthy food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
