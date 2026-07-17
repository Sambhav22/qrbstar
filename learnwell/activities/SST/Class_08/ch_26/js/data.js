export const chapter = "Chapter - 26: Social Justice and the Marginalised";
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
        question: "Who are described as groups pushed to the edge of society with little importance?",
        optionA: "Scientists",
        optionB: "Marginalised groups",
        optionC: "Industrialists",
        correctAnswer: "Marginalised groups",
      }),
      shuffleOptions({
        question: "Who were forced to live outside the main village in earlier times?",
        optionA: "Traders",
        optionB: "Dalits / Scheduled Castes",
        optionC: "Teachers",
        correctAnswer: "Dalits / Scheduled Castes",
      }),
      shuffleOptions({
        question: "Which group is spread across states like Odisha, Madhya Pradesh and Jharkhand?",
        optionA: "Minorities",
        optionB: "Scheduled Tribes (Adivasis)",
        optionC: "OBCs",
        correctAnswer: "Scheduled Tribes (Adivasis)",
      }),
      shuffleOptions({
        question: "Which ministry looks after the welfare of Scheduled Castes?",
        optionA: "Ministry of Social Justice and Empowerment",
        optionB: "Ministry of Culture",
        optionC: "Ministry of Commerce",
        correctAnswer: "Ministry of Social Justice and Empowerment",
      }),
      shuffleOptions({
        question: "Who carried out non-violent campaigns for the rights of the untouchables between 1927–32?",
        optionA: "Jawaharlal Nehru",
        optionB: "Dr B. R. Ambedkar",
        optionC: "Rabindranath Tagore",
        correctAnswer: "Dr B. R. Ambedkar",
      }),
      shuffleOptions({
        question: "Which commission looks into the issues of minority communities in India?",
        optionA: "Election Commission",
        optionB: "Minority Commission",
        optionC: "Planning Commission",
        correctAnswer: "Minority Commission",
      }),
      shuffleOptions({
        question: "Which practice involved carrying human excreta manually for disposal?",
        optionA: "Craftwork",
        optionB: "Fishing",
        optionC: "Manual scavenging",
        correctAnswer: "Manual scavenging",
      }),
      shuffleOptions({
        question: "Which act punishes the employment of manual scavengers?",
        optionA: "Wildlife Protection Act",
        optionB: "Manual Scavengers and Dry Latrines (Prohibition) Act, 1993",
        optionC: "Panchayati Raj Act",
        correctAnswer: "Manual Scavengers and Dry Latrines (Prohibition) Act, 1993",
      }),
      shuffleOptions({
        question: "Who are referred to as “night soil workers” in the chapter?",
        optionA: "Doctors",
        optionB: "Scavengers cleaning human excreta manually",
        optionC: "Engineers",
        correctAnswer: "Scavengers cleaning human excreta manually",
      }),
      shuffleOptions({
        question: "Which community can the President nominate to the Lok Sabha if not adequately represented?",
        optionA: "Anglo-Indian community",
        optionB: "Sikh community",
        optionC: "Jain community",
        correctAnswer: "Anglo-Indian community",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The people who clean streets and toilets are known as ________.",
        optionA: "farmers",
        optionB: "scavengers",
        optionC: "guards",
        correctAnswer: "scavengers",
      }),
      shuffleOptions({
        question: "Tribal groups often live in ________ and forest areas.",
        optionA: "deserts",
        optionB: "hilly",
        optionC: "coastal",
        correctAnswer: "hilly",
      }),
      shuffleOptions({
        question: "Many Adivasis converted to ________ during the 19th century.",
        optionA: "Christianity",
        optionB: "Islam",
        optionC: "Sikhism",
        correctAnswer: "Christianity",
      }),
      shuffleOptions({
        question: "The Constitution forbids discrimination based on ________.",
        optionA: "wealth",
        optionB: "untouchability",
        optionC: "height",
        correctAnswer: "untouchability",
      }),
      shuffleOptions({
        question: "Dalits were earlier called ________ Classes.",
        optionA: "Forward",
        optionB: "Depressed",
        optionC: "Mixed",
        correctAnswer: "Depressed",
      }),
      shuffleOptions({
        question: "The Mandal Commission reported that OBCs make up about ________ of the population.",
        optionA: "14%",
        optionB: "52%",
        optionC: "70%",
        correctAnswer: "52%",
      }),
      shuffleOptions({
        question: "Marginalised groups often do not get access to essential ________.",
        optionA: "luxuries",
        optionB: "opportunities",
        optionC: "games",
        correctAnswer: "opportunities",
      }),
      shuffleOptions({
        question: "The Ministry of Tribal Affairs was established in ________.",
        optionA: "1947",
        optionB: "1999",
        optionC: "1980",
        correctAnswer: "1999",
      }),
      shuffleOptions({
        question: "The Constitution aims to secure ________ justice for all citizens.",
        optionA: "social, economic and political justice",
        optionB: "only political justice",
        optionC: "only economic justice",
        correctAnswer: "social, economic and political justice",
      }),
      shuffleOptions({
        question: "Some seats are reserved in educational institutions for the upliftment of ________.",
        optionA: "businessmen",
        optionB: "Scheduled Castes and Scheduled Tribes (SCs & STs)",
        optionC: "tourists",
        correctAnswer: "Scheduled Castes and Scheduled Tribes (SCs & STs)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adivasis have distinct cultural and religious practices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dalits were allowed to use public wells in earlier times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manual scavenging is still found in some parts of India despite legal bans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Minorities in India include Sikhs, Parsis, Muslims and Jains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Scheduled Tribes form about 16.6% of India’s population.",
        optionA: "True",
        optionB: "False  (They are 8.6%)",
        correctAnswer: "False  (They are 8.6%)",
      }),
      shuffleOptions({
        question: "The Constitution promotes a social order where justice is central.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "95% of manual scavengers are men.",
        optionA: "True",
        optionB: "False  (Most are women and girls)",
        correctAnswer: "False  (Most are women and girls)",
      }),
      shuffleOptions({
        question: "Book banks provide free books for SC and ST students.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The government does not organise fairs to promote tribal handicrafts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Untouchability has been legally abolished in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
