export const chapter = "Chapter - 1: Our Family";
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
        question: "Who are the people we live with in our home?",
        optionA: "Strangers",
        optionB: "Family members",
        optionC: "Teachers",
        correctAnswer: "Family members",
      }),
      shuffleOptions({
        question: "Which family includes grandparents, parents, uncles and aunts living together?",
        optionA: "Small family",
        optionB: "Joint family",
        optionC: "Single family",
        correctAnswer: "Joint family",
      }),
      shuffleOptions({
        question: "What do we sometimes do with our siblings?",
        optionA: "Fly aeroplanes",
        optionB: "Repair cars",
        optionC: "Read books or do painting",
        correctAnswer: "Read books or do painting",
      }),
      shuffleOptions({
        question: "With whom do we usually go for shopping on Sundays?",
        optionA: "Friends",
        optionB: "Parents",
        optionC: "Teachers",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "What do we call the children of our uncles and aunts?",
        optionA: "Siblings",
        optionB: "Cousins",
        optionC: "Neighbours",
        correctAnswer: "Cousins",
      }),
      shuffleOptions({
        question: "What teaches us good values and morals of life?",
        optionA: "Family",
        optionB: "Market",
        optionC: "Television",
        correctAnswer: "Family",
      }),
      shuffleOptions({
        question: "What activity do we sometimes do at home with family?",
        optionA: "Watch T.V. or listen to music",
        optionB: "Fly kites indoors",
        optionC: "Ride bicycles in rooms",
        correctAnswer: "Watch T.V. or listen to music",
      }),
      shuffleOptions({
        question: "During which time do we sometimes go for picnics with our family?",
        optionA: "Winter or summer vacations",
        optionB: "School exam days",
        optionC: "Evenings only",
        correctAnswer: "Winter or summer vacations",
      }),
      shuffleOptions({
        question: "What do we call brothers and sisters together?",
        optionA: "Siblings",
        optionB: "Cousins",
        optionC: "Elders",
        correctAnswer: "Siblings",
      }),
      shuffleOptions({
        question: "Who is the head of a typical family?",
        optionA: "Pets",
        optionB: "Parents",
        optionC: "Shopkeepers",
        correctAnswer: "Parents",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Parents and children living together form a ______.",
        optionA: "team",
        optionB: "family",
        optionC: "market",
        correctAnswer: "family",
      }),
      shuffleOptions({
        question: "A family with more than two children is called a ______.",
        optionA: "small family",
        optionB: "large family",
        optionC: "tiny family",
        correctAnswer: "large family",
      }),
      shuffleOptions({
        question: "We show ______ to each other in our family.",
        optionA: "love",
        optionB: "anger",
        optionC: "noise",
        correctAnswer: "love",
      }),
      shuffleOptions({
        question: "Our father’s brother is our ______.",
        optionA: "cousin",
        optionB: "uncle",
        optionC: "neighbour",
        correctAnswer: "uncle",
      }),
      shuffleOptions({
        question: "We sometimes watch ______ with our family.",
        optionA: "rain",
        optionB: "T.V.",
        optionC: "clouds",
        correctAnswer: "T.V.",
      }),
      shuffleOptions({
        question: "Our uncle’s and aunt’s children are our ______.",
        optionA: "cousins",
        optionB: "siblings",
        optionC: "elders",
        correctAnswer: "cousins",
      }),
      shuffleOptions({
        question: "Our father’s and mother’s parents are our ______.",
        optionA: "teachers",
        optionB: "grandparents",
        optionC: "classmates",
        correctAnswer: "grandparents",
      }),
      shuffleOptions({
        question: "Brothers and sisters together are called ______.",
        optionA: "siblings",
        optionB: "neighbours",
        optionC: "elders",
        correctAnswer: "siblings",
      }),
      shuffleOptions({
        question: "We sometimes go for ______ with our parents on Sundays.",
        optionA: "shopping",
        optionB: "swimming",
        optionC: "studying",
        correctAnswer: "shopping",
      }),
      shuffleOptions({
        question: "In winter or summer vacations, we sometimes go for a ______.",
        optionA: "meeting",
        optionB: "picnic",
        optionC: "parade",
        correctAnswer: "picnic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A joint family includes grandparents, uncles, aunts and cousins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A small family has only parents and one or two children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cousins are our brothers and sisters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We sometimes go for a picnic with our family during vacations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Our mother’s parents are not part of our family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We celebrate birthdays and festivals with our family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Watching T.V. with family is mentioned as one activity in the chapter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Uncles and aunts live in every small family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Family members care and help each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Brothers and sisters are called cousins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
