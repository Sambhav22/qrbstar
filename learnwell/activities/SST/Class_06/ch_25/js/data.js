export const chapter = "Chapter - 25: Panchayati Raj";
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
        question: "Who presides over the meetings of the Gram Sabha?",
        optionA: "Up-Pradhan",
        optionB: "Sarpanch",
        optionC: "Secretary",
        correctAnswer: "Sarpanch",
      }),
      shuffleOptions({
        question: "Who is the permanent employee who keeps records of the Gram Panchayat?",
        optionA: "Block Pramukh",
        optionB: "Secretary",
        optionC: "Sarpanch",
        correctAnswer: "Secretary",
      }),
      shuffleOptions({
        question: "Which body deals with petty civil and minor criminal cases in villages?",
        optionA: "Nyaya Panchayat",
        optionB: "Zila Parishad",
        optionC: "Block Samiti",
        correctAnswer: "Nyaya Panchayat",
      }),
      shuffleOptions({
        question: "Who ensures that Block Samiti plans are properly implemented?",
        optionA: "District Collector",
        optionB: "Block Development Officer (BDO)",
        optionC: "MLA",
        correctAnswer: "Block Development Officer (BDO)",
      }),
      shuffleOptions({
        question: "Which is the highest tier in the Panchayati Raj system?",
        optionA: "Gram Panchayat",
        optionB: "Block Samiti",
        optionC: "Zila Parishad",
        correctAnswer: "Zila Parishad",
      }),
      shuffleOptions({
        question: "Who coordinates the activities of various Block Samitis?",
        optionA: "Nyaya Panchayat",
        optionB: "Zila Parishad",
        optionC: "Gram Sabha",
        correctAnswer: "Zila Parishad",
      }),
      shuffleOptions({
        question: "Who can be removed by a vote of no-confidence if people are not satisfied?",
        optionA: "Sarpanch",
        optionB: "MP",
        optionC: "SDM",
        correctAnswer: "Sarpanch",
      }),
      shuffleOptions({
        question: "Who signs important documents of the Gram Panchayat?",
        optionA: "Up-Pradhan",
        optionB: "Sarpanch",
        optionC: "Secretary",
        correctAnswer: "Sarpanch",
      }),
      shuffleOptions({
        question: "Which system gives villagers the right to participate in their own administration?",
        optionA: "Panchayati Raj System",
        optionB: "Judicial System",
        optionC: "Central Government System",
        correctAnswer: "Panchayati Raj System",
      }),
      shuffleOptions({
        question: "Who supervises the work of patwari, chowkidar and other village-level employees?",
        optionA: "Gram Panchayat",
        optionB: "MLA",
        optionC: "State Government",
        correctAnswer: "Gram Panchayat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Gram Sabha includes all adults above ______ years.",
        optionA: "20",
        optionB: "25",
        optionC: "18",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "A Panchayat usually has ______ to 31 members.",
        optionA: "3",
        optionB: "7",
        optionC: "7 to 31",
        correctAnswer: "7 to 31",
      }),
      shuffleOptions({
        question: "The judicial wing of the Panchayat is called the ______.",
        optionA: "Nyaya Panchayat",
        optionB: "Village Court",
        optionC: "Zila Samiti",
        correctAnswer: "Nyaya Panchayat",
      }),
      shuffleOptions({
        question: "The Secretary keeps an account of the Gram Panchayat’s ______.",
        optionA: "income and expenditure",
        optionB: "crops",
        optionC: "schools",
        correctAnswer: "income and expenditure",
      }),
      shuffleOptions({
        question: "A Block Samiti usually consists of ______.",
        optionA: "1–5 villages",
        optionB: "20–60 villages",
        optionC: "only one village",
        correctAnswer: "20–60 villages",
      }),
      shuffleOptions({
        question: "The Gram Panchayat supervises the work of village-level ______.",
        optionA: "employees",
        optionB: "MLAs",
        optionC: "ministers",
        correctAnswer: "employees",
      }),
      shuffleOptions({
        question: "The Zila Parishad prepares development ______ for the district.",
        optionA: "songs",
        optionB: "plans",
        optionC: "slogans",
        correctAnswer: "plans",
      }),
      shuffleOptions({
        question: "A Nyaya Panchayat can only impose ______.",
        optionA: "fines",
        optionB: "jail terms",
        optionC: "suspension",
        correctAnswer: "fines",
      }),
      shuffleOptions({
        question: "The Gram Panchayat finalises the list of families ______ poverty line.",
        optionA: "above",
        optionB: "below",
        optionC: "outside",
        correctAnswer: "below",
      }),
      shuffleOptions({
        question: "Block Samiti helps villagers obtain improved seeds and ______.",
        optionA: "clothes",
        optionB: "fertilisers",
        optionC: "furniture",
        correctAnswer: "fertilisers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A person cannot be a member of both the Village Panchayat and Nyaya Panchayat at the same time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Gram Sabha meets once a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Zila Parishad is responsible for development work of the entire district.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nyaya Panchayat can send a person to jail if required.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Block Samiti cannot be dissolved before the end of its term.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sarpanch signs important documents of the Gram Panchayat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gram Panchayat has the power to levy taxes on property and markets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Block Development Officer is an ex-officio member of the Block Samiti.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zila Parishad encourages the development of cottage industries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gram Panchayat is not responsible for village sanitation and safe drinking water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
