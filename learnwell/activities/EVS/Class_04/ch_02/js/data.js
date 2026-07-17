export const chapter = "Chapter - 2: Living Together";
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
        question: "Who teaches Shubham Sanskrit mantras?",
        optionA: "His father",
        optionB: "His teacher",
        optionC: "His grandmother",
        correctAnswer: "His grandmother",
      }),
      shuffleOptions({
        question: "Who helps prepare salad for dinner in Madhav’s family?",
        optionA: "His sister",
        optionB: "His friend",
        optionC: "His aunt",
        correctAnswer: "His sister",
      }),
      shuffleOptions({
        question: "In whose family were women earlier not allowed to work outside?",
        optionA: "Shubham’s",
        optionB: "Madhav’s",
        optionC: "Veera’s",
        correctAnswer: "Veera’s",
      }),
      shuffleOptions({
        question: "What value did Pratham show when he gave his food to a beggar?",
        optionA: "Helpfulness",
        optionB: "Neatness",
        optionC: "Punctuality",
        correctAnswer: "Helpfulness",
      }),
      shuffleOptions({
        question: "What does Veera’s father do for a living?",
        optionA: "Works in a bank",
        optionB: "Runs a shop",
        optionC: "Teaches in school",
        correctAnswer: "Works in a bank",
      }),
      shuffleOptions({
        question: "Whose permission did Veera’s mother seek before taking a job?",
        optionA: "Her husband",
        optionB: "Her grandpa",
        optionC: "Her friend",
        correctAnswer: "Her grandpa",
      }),
      shuffleOptions({
        question: "What kind of family includes uncles, aunts and cousins?",
        optionA: "Nuclear",
        optionB: "Extended",
        optionC: "Close",
        correctAnswer: "Extended",
      }),
      shuffleOptions({
        question: "Family values are connected with __________.",
        optionA: "Sports",
        optionB: "Weather",
        optionC: "Culture and traditions",
        correctAnswer: "Culture and traditions",
      }),
      shuffleOptions({
        question: "Why do families have rules?",
        optionA: "To maintain discipline",
        optionB: "To punish children",
        optionC: "To waste time",
        correctAnswer: "To maintain discipline",
      }),
      shuffleOptions({
        question: "After a wedding, who becomes part of each other’s extended family?",
        optionA: "Friends",
        optionB: "Two families",
        optionC: "Classmates",
        correctAnswer: "Two families",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A family gives love, care, warmth and _________.",
        optionA: "Hatred",
        optionB: "Affection",
        optionC: "Anger",
        correctAnswer: "Affection",
      }),
      shuffleOptions({
        question: "A family is the first _________ for every child.",
        optionA: "School",
        optionB: "Playground",
        optionC: "Hospital",
        correctAnswer: "School",
      }),
      shuffleOptions({
        question: "Shubham chants many _________ in Sanskrit.",
        optionA: "Stories",
        optionB: "Mantras",
        optionC: "Poems",
        correctAnswer: "Mantras",
      }),
      shuffleOptions({
        question: "Madhav and his sister work _________ at home.",
        optionA: "Alternatively",
        optionB: "Randomly",
        optionC: "Separately",
        correctAnswer: "Alternatively",
      }),
      shuffleOptions({
        question: "Veera’s mother decided to work in a _________.",
        optionA: "School",
        optionB: "Bank",
        optionC: "Hospital",
        correctAnswer: "School",
      }),
      shuffleOptions({
        question: "Family values change with changes in _________.",
        optionA: "Friends",
        optionB: "Games",
        optionC: "Society and mentality",
        correctAnswer: "Society and mentality",
      }),
      shuffleOptions({
        question: "Our paternal and maternal relatives form our _________ family.",
        optionA: "Small",
        optionB: "Joint",
        optionC: "Extended",
        correctAnswer: "Extended",
      }),
      shuffleOptions({
        question: "A family is a _________ institution.",
        optionA: "Political",
        optionB: "Social",
        optionC: "Commercial",
        correctAnswer: "Social",
      }),
      shuffleOptions({
        question: "We share a close _________ with our relatives.",
        optionA: "Distance",
        optionB: "Relationship",
        optionC: "Competition",
        correctAnswer: "Relationship",
      }),
      shuffleOptions({
        question: "Family members show respect by _________ each other.",
        optionA: "Helping",
        optionB: "Ignoring",
        optionC: "Laughing at",
        correctAnswer: "Helping",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shubham learns mantras from his sister.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Madhav’s family believes rules should be equal for boys and girls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Veera’s grandpa did not allow her mother to work outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A family teaches children to live together happily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Extended family members include cousins and aunts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Family values can never change with time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Family gatherings happen on festivals and special occasions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After a wedding, two families become connected.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Family helps shape our thinking about the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Truthfulness and helpfulness are examples of family values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
