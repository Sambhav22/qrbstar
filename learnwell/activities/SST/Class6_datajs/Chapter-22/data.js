export const chapter = "Chapter - 22: Prejudice and Discrimination";
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
        question: "Who faced racial discrimination under the apartheid system?",
        optionA: "Nelson Mandela",
        optionB: "Mahatma Gandhi",
        optionC: "Martin Luther King",
        correctAnswer: "Nelson Mandela",
      }),
      shuffleOptions({
        question: "What leads people to form unfair negative opinions about others?",
        optionA: "Prejudice",
        optionB: "Confidence",
        optionC: "Friendship",
        correctAnswer: "Prejudice",
      }),
      shuffleOptions({
        question: "Which practice in India was legally abolished because it treated people unfairly?",
        optionA: "Partition",
        optionB: "Untouchability",
        optionC: "Citizenship",
        correctAnswer: "Untouchability",
      }),
      shuffleOptions({
        question: "Which system divided ancient Indian society into four groups?",
        optionA: "Military system",
        optionB: "Trade system",
        optionC: "Varna system",
        correctAnswer: "Varna system",
      }),
      shuffleOptions({
        question: "Which group was considered the lowest in the ancient caste hierarchy?",
        optionA: "Brahmins",
        optionB: "Vaishyas",
        optionC: "Shudras",
        correctAnswer: "Shudras",
      }),
      shuffleOptions({
        question: "Which country had separate facilities for whites and blacks?",
        optionA: "Japan",
        optionB: "South Africa",
        optionC: "France",
        correctAnswer: "South Africa",
      }),
      shuffleOptions({
        question: "What prevents us from judging people as individuals?",
        optionA: "Stereotypes",
        optionB: "Empathy",
        optionC: "Discipline",
        correctAnswer: "Stereotypes",
      }),
      shuffleOptions({
        question: "Which feeling weakens unity and harmony in society?",
        optionA: "Cooperation",
        optionB: "Prejudice and discrimination",
        optionC: "Team spirit",
        correctAnswer: "Prejudice and discrimination",
      }),
      shuffleOptions({
        question: "Who struggled for many years to end apartheid in South Africa?",
        optionA: "Jawaharlal Nehru",
        optionB: "Nelson Mandela",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Nelson Mandela",
      }),
      shuffleOptions({
        question: "What type of behaviour is caused by ignorance and lack of awareness?",
        optionA: "Respectful",
        optionB: "Discriminatory",
        optionC: "Cooperative",
        correctAnswer: "Discriminatory",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Prejudice means having a ______ opinion about someone.",
        optionA: "positive",
        optionB: "negative",
        optionC: "neutral",
        correctAnswer: "negative",
      }),
      shuffleOptions({
        question: "Treating someone unfairly because of prejudice is called ______.",
        optionA: "discrimination",
        optionB: "celebration",
        optionC: "cooperation",
        correctAnswer: "discrimination",
      }),
      shuffleOptions({
        question: "A fixed idea or image about a group of people is known as a ______.",
        optionA: "classification",
        optionB: "stereotype",
        optionC: "summary",
        correctAnswer: "stereotype",
      }),
      shuffleOptions({
        question: "Under apartheid, blacks lived in separate ______.",
        optionA: "countries",
        optionB: "localities",
        optionC: "families",
        correctAnswer: "localities",
      }),
      shuffleOptions({
        question: "Gender disparity means treating boys and girls ______.",
        optionA: "equally",
        optionB: "differently",
        optionC: "politely",
        correctAnswer: "differently",
      }),
      shuffleOptions({
        question: "The Constitution declares India a ______ country.",
        optionA: "religious",
        optionB: "secular",
        optionC: "military",
        correctAnswer: "secular",
      }),
      shuffleOptions({
        question: "People from poor families are often treated ______.",
        optionA: "kindly",
        optionB: "respectfully",
        optionC: "unfairly",
        correctAnswer: "unfairly",
      }),
      shuffleOptions({
        question: "The Varna system was originally based on ______.",
        optionA: "food habits",
        optionB: "occupations",
        optionC: "festivals",
        correctAnswer: "occupations",
      }),
      shuffleOptions({
        question: "The Directive Principles aim to improve people’s ______.",
        optionA: "living standards",
        optionB: "celebrations",
        optionC: "holidays",
        correctAnswer: "living standards",
      }),
      shuffleOptions({
        question: "The Constitution guarantees ______ Rights to protect citizens.",
        optionA: "accidental",
        optionB: "Fundamental",
        optionC: "temporary",
        correctAnswer: "Fundamental",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Stereotypes allow us to understand everyone’s true abilities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Differences in language can sometimes lead to prejudice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Economic inequality never causes discrimination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Blacks and whites enjoyed equal facilities under apartheid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gender disparity still exists in society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Constitution of India promotes equality for all citizens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Prejudice strengthens unity in a society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Discrimination can weaken national harmony.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People belonging to different sects may discriminate among themselves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Untouchability is still legally permitted in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
