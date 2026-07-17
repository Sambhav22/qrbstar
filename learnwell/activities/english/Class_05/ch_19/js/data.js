export const chapter = "Chapter - 19: The Fox’s Wedding";
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
        question: "Whose wedding was taking place?",
        optionA: "Lion",
        optionB: "Fox",
        optionC: "Camel",
        correctAnswer: "Fox",
      }),
      shuffleOptions({
        question: "What natural event is believed to be the time of the fox’s marriage?",
        optionA: "Snowfall",
        optionB: "Rain during the sun",
        optionC: "A thunderstorm",
        correctAnswer: "Rain during the sun",
      }),
      shuffleOptions({
        question: "Who brought a bowl from China?",
        optionA: "Camel",
        optionB: "Hyena",
        optionC: "Monkey",
        correctAnswer: "Hyena",
      }),
      shuffleOptions({
        question: "Who gifted a mirror of African gold?",
        optionA: "Lion",
        optionB: "Crocodile",
        optionC: "Jackal",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What was the crocodile’s gift?",
        optionA: "A golden mirror",
        optionB: "A silver cup",
        optionC: "A diamond ring",
        correctAnswer: "A silver cup",
      }),
      shuffleOptions({
        question: "What did the camel bring?",
        optionA: "A chair",
        optionB: "A scarf",
        optionC: "A casket of Indian enamel",
        correctAnswer: "A casket of Indian enamel",
      }),
      shuffleOptions({
        question: "Who gifted the Arabian Nights book?",
        optionA: "Hyena",
        optionB: "Monkey",
        optionC: "Jackal",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "What was the polar bear’s gift?",
        optionA: "A Spanish scarf",
        optionB: "A Russian chair",
        optionC: "A Chinese bowl",
        correctAnswer: "A Russian chair",
      }),
      shuffleOptions({
        question: "What did the horse bring to the wedding?",
        optionA: "A two-wheeled cart",
        optionB: "A five-wheeled carriage",
        optionC: "A golden mirror",
        correctAnswer: "A five-wheeled carriage",
      }),
      shuffleOptions({
        question: "Who came uninvited to the fox’s wedding?",
        optionA: "Bear",
        optionB: "Man",
        optionC: "Wolf",
        correctAnswer: "Man",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fox’s wedding is believed to happen when it _____.",
        optionA: "Rains in the sun",
        optionB: "Snows at night",
        optionC: "Storms heavily",
        correctAnswer: "Rains in the sun",
      }),
      shuffleOptions({
        question: "The hyena was ____ widely.",
        optionA: "Sleeping",
        optionB: "Grinning",
        optionC: "Shouting",
        correctAnswer: "Grinning",
      }),
      shuffleOptions({
        question: "The lion gifted a mirror made of ____ gold.",
        optionA: "Indian",
        optionB: "African",
        optionC: "Russian",
        correctAnswer: "African",
      }),
      shuffleOptions({
        question: "The crocodile’s gift came from the _____.",
        optionA: "Nile",
        optionB: "Amazon",
        optionC: "Yamuna",
        correctAnswer: "Nile",
      }),
      shuffleOptions({
        question: "The camel brought a casket of Indian _____.",
        optionA: "Enamel",
        optionB: "Diamond",
        optionC: "Silk",
        correctAnswer: "Enamel",
      }),
      shuffleOptions({
        question: "The she-wolf brought a scarf from _____.",
        optionA: "Russia",
        optionB: "Spain",
        optionC: "France",
        correctAnswer: "Spain",
      }),
      shuffleOptions({
        question: "The jackal brought two diamond _____.",
        optionA: "Rings",
        optionB: "Necklaces",
        optionC: "Earrings",
        correctAnswer: "Rings",
      }),
      shuffleOptions({
        question: "The fox told the guests, “Let us be _____.”",
        optionA: "Angry",
        optionB: "Pleasant",
        optionC: "Loud",
        correctAnswer: "Pleasant",
      }),
      shuffleOptions({
        question: "The guests of a sudden ceased to _____.",
        optionA: "Eat",
        optionB: "Complain",
        optionC: "Dance",
        correctAnswer: "Complain",
      }),
      shuffleOptions({
        question: "The sun came out both gay and _____.",
        optionA: "Splendid",
        optionB: "Dark",
        optionC: "Sad",
        correctAnswer: "Splendid",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox’s wedding began when it rained during the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hyena brought a mirror of African gold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The monkey’s gift was a book.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The camel brought a casket of Indian enamel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The she-wolf’s gift was a scarf from France.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The polar bear brought a Russian chair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The horse gave a five-wheeled carriage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The jackal gave two diamond necklaces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The man came invited to the wedding.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wedding ended happily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
