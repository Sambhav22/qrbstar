export const chapter = "Chapter - 27: Urban Administration";
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
        question: "Who supervises the work of all departments in a Municipal Corporation?",
        optionA: "Mayor",
        optionB: "Chief Executive Officer",
        optionC: "Education Officer",
        correctAnswer: "Chief Executive Officer",
      }),
      shuffleOptions({
        question: "Which urban body is formed in areas that are changing from rural to urban?",
        optionA: "Nagar Panchayat",
        optionB: "Zila Parishad",
        optionC: "Nagar Nigam",
        correctAnswer: "Nagar Panchayat",
      }),
      shuffleOptions({
        question: "Who appoints permanent officers such as the Health Officer and Sanitary Inspector?",
        optionA: "Mayor",
        optionB: "State Government",
        optionC: "Councillors",
        correctAnswer: "State Government",
      }),
      shuffleOptions({
        question: "Who presides over the meetings of a Municipal Council?",
        optionA: "Chairman",
        optionB: "Alderman",
        optionC: "Commissioner",
        correctAnswer: "Chairman",
      }),
      shuffleOptions({
        question: "Which officer is responsible for looking after sanitation and cleanliness?",
        optionA: "Sanitary Inspector",
        optionB: "Chief Engineer",
        optionC: "Executive Officer",
        correctAnswer: "Sanitary Inspector",
      }),
      shuffleOptions({
        question: "Who helps in carrying out different functions like health, education and sanitation in a Municipal Council?",
        optionA: "Executive members",
        optionB: "Tourists",
        optionC: "Traders",
        correctAnswer: "Executive members",
      }),
      shuffleOptions({
        question: "Which body is responsible for the maintenance of cremation grounds?",
        optionA: "Fire Brigade",
        optionB: "Nagar Palika/Nigam",
        optionC: "MLA Office",
        correctAnswer: "Nagar Palika/Nigam",
      }),
      shuffleOptions({
        question: "Which service is used to prevent the loss caused by fires and disasters?",
        optionA: "Education service",
        optionB: "Fire fighting service",
        optionC: "Postal service",
        correctAnswer: "Fire fighting service",
      }),
      shuffleOptions({
        question: "Who elects the members of Nagar Panchayat?",
        optionA: "State Government",
        optionB: "Residents of the town (above 18 years)",
        optionC: "Mayor",
        correctAnswer: "Residents of the town (above 18 years)",
      }),
      shuffleOptions({
        question: "Which urban body maintains parks, schools, hospitals and roads in a town?",
        optionA: "Nagar Panchayat",
        optionB: "Supreme Court",
        optionC: "Gram Sabha",
        correctAnswer: "Nagar Panchayat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A Municipal Corporation provides free ______ to prevent diseases like polio and cholera.",
        optionA: "transportation",
        optionB: "vaccinations",
        optionC: "uniforms",
        correctAnswer: "vaccinations",
      }),
      shuffleOptions({
        question: "The ______ is the elected head who presides over meetings of the Nagar Nigam.",
        optionA: "Councillor",
        optionB: "Mayor",
        optionC: "Clerk",
        correctAnswer: "Mayor",
      }),
      shuffleOptions({
        question: "A town is divided into several ______ during Municipal elections.",
        optionA: "wards",
        optionB: "colonies",
        optionC: "booths",
        correctAnswer: "wards",
      }),
      shuffleOptions({
        question: "A Nagar Palika provides safe ______ water to the people.",
        optionA: "coloured",
        optionB: "mineral",
        optionC: "clean",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "Municipal Councils are meant for cities having a population between 1,00,000 and ______.",
        optionA: "3,00,000",
        optionB: "10,00,000",
        optionC: "20,00,000",
        correctAnswer: "10,00,000",
      }),
      shuffleOptions({
        question: "People show their grievances by writing letters to local ______.",
        optionA: "newspapers",
        optionB: "schools",
        optionC: "banks",
        correctAnswer: "newspapers",
      }),
      shuffleOptions({
        question: "A Nagar Panchayat keeps a record of ______ and deaths.",
        optionA: "roads",
        optionB: "births",
        optionC: "animals",
        correctAnswer: "births",
      }),
      shuffleOptions({
        question: "The state government gives ______ to Municipal Corporations to help them function.",
        optionA: "punishments",
        optionB: "grants",
        optionC: "warnings",
        correctAnswer: "grants",
      }),
      shuffleOptions({
        question: "Octroi is a tax collected on the entry of ______ into a city.",
        optionA: "goods",
        optionB: "buildings",
        optionC: "postcards",
        correctAnswer: "goods",
      }),
      shuffleOptions({
        question: "A Municipal Corporation appoints qualified ______ in hospitals and dispensaries.",
        optionA: "architects",
        optionB: "doctors",
        optionC: "shopkeepers",
        correctAnswer: "doctors",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nagar Palika and Nagar Nigam both provide services such as water supply and sanitation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A Nagar Panchayat is formed only in very large metropolitan cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Residents above 18 years can vote in Nagar Panchayat elections.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only men can become members of urban local bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A Municipal Corporation can be dissolved before 5 years if it fails to function properly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maintenance of parks is an optional function of the local bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A Sanitary Inspector is responsible for the construction of roads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The government must approve new taxes imposed by urban local bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Citizens sometimes show grievances by complaining through newspapers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chief Executive Officer supervises all departments of the Municipal Corporation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
