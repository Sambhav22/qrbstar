export const chapter = "Chapter - 2: My Family";
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
        question: "Who loves to read the newspaper in his free time?",
        optionA: "Mother",
        optionB: "Father",
        optionC: "Grandfather",
        correctAnswer: "Father",
      }),
      shuffleOptions({
        question: "Who loves and cares for the child in the story?",
        optionA: "Mother",
        optionB: "Friend",
        optionC: "Neighbour",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Who is introduced as a homemaker or working lady?",
        optionA: "Aunt",
        optionB: "Grandmother",
        optionC: "Mother",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Who takes care of the child’s needs?",
        optionA: "Father",
        optionB: "Cousin",
        optionC: "Uncle",
        correctAnswer: "Father",
      }),
      shuffleOptions({
        question: "Whom does the child play with in free time?",
        optionA: "Neighbour",
        optionB: "Brother or Sister",
        optionC: "Teacher",
        correctAnswer: "Brother or Sister",
      }),
      shuffleOptions({
        question: "Who is described as “very ____” in the chapter?",
        optionA: "Brother or Sister",
        optionB: "Aunt",
        optionC: "Mother",
        correctAnswer: "Brother or Sister",
      }),
      shuffleOptions({
        question: "Who loves the child very much according to the chapter?",
        optionA: "Friends",
        optionB: "Grandparents",
        optionC: "Shopkeeper",
        correctAnswer: "Grandparents",
      }),
      shuffleOptions({
        question: "Whose name is written in the space next to “This is my father”?",
        optionA: "Brother’s",
        optionB: "Father’s",
        optionC: "Mother’s",
        correctAnswer: "Father’s",
      }),
      shuffleOptions({
        question: "Where does the family go to enjoy together during free time?",
        optionA: "Picnic or zoo",
        optionB: "Market",
        optionC: "Hospital",
        correctAnswer: "Picnic or zoo",
      }),
      shuffleOptions({
        question: "Who are shown in the chapter with photographs to be affixed?",
        optionA: "Classmates",
        optionB: "Family members",
        optionC: "Neighbours",
        correctAnswer: "Family members",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "My father loves to read ______ in his free time.",
        optionA: "newspaper",
        optionB: "comic",
        optionC: "storybook",
        correctAnswer: "newspaper",
      }),
      shuffleOptions({
        question: "My mother ______ me.",
        optionA: "scolds",
        optionB: "loves",
        optionC: "ignores",
        correctAnswer: "loves",
      }),
      shuffleOptions({
        question: "My brother or sister is very ______.",
        optionA: "angry",
        optionB: "tall",
        optionC: "kind",
        correctAnswer: "kind",
      }),
      shuffleOptions({
        question: "My brother or sister is ______ years old.",
        optionA: "many",
        optionB: "some",
        optionC: "child fills",
        correctAnswer: "child fills",
      }),
      shuffleOptions({
        question: "My grandparents ______ me very much.",
        optionA: "love",
        optionB: "dislike",
        optionC: "forget",
        correctAnswer: "love",
      }),
      shuffleOptions({
        question: "My father is a ______.",
        optionA: "businessman",
        optionB: "dancer",
        optionC: "farmer",
        correctAnswer: "businessman",
      }),
      shuffleOptions({
        question: "My mother is a ______.",
        optionA: "magician",
        optionB: "homemaker",
        optionC: "soldier",
        correctAnswer: "homemaker",
      }),
      shuffleOptions({
        question: "During free time, I play with my ______.",
        optionA: "grandfather",
        optionB: "brother/sister",
        optionC: "shopkeeper",
        correctAnswer: "brother/sister",
      }),
      shuffleOptions({
        question: "My family spends time with each other during the ______.",
        optionA: "evenings",
        optionB: "holidays",
        optionC: "weekend",
        correctAnswer: "weekend",
      }),
      shuffleOptions({
        question: "We often go out to visit a ______ with family.",
        optionA: "zoo",
        optionB: "bank",
        optionC: "hospital",
        correctAnswer: "zoo",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mother loves and cares for the child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Father reads the newspaper in his free time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The child plays with grandparents in free time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grandparents love the child very much.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The chapter shows spaces to affix family photographs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The child’s father ignores his needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The chapter mentions going for a picnic with family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother is either a homemaker or a working lady.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The chapter says “Families are always large.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The child introduces each family member one by one in the chapter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
