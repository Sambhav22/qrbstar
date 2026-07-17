export const chapter = "Chapter - 24: Functioning of the State Government";
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
        question: "Which service in India works to provide healthcare at low or no cost to all citizens?",
        optionA: "Private health service",
        optionB: "Public health service",
        optionC: "Insurance companies",
        correctAnswer: "Public health service",
      }),
      shuffleOptions({
        question: "Who supervises the functioning of health centres in rural and urban areas?",
        optionA: "Private firms",
        optionB: "Government-appointed doctors",
        optionC: "Village panchayats",
        correctAnswer: "Government-appointed doctors",
      }),
      shuffleOptions({
        question: "Which group faces the greatest difficulty in accessing proper healthcare?",
        optionA: "Industrial workers",
        optionB: "Foreign tourists",
        optionC: "Tribals and rural poor",
        correctAnswer: "Tribals and rural poor",
      }),
      shuffleOptions({
        question: "What is one major reason many rural people fall sick frequently?",
        optionA: "Overeating",
        optionB: "Lack of nutritious food and clean water",
        optionC: "Long school hours",
        correctAnswer: "Lack of nutritious food and clean water",
      }),
      shuffleOptions({
        question: "Which type of hospitals are profit-oriented in India?",
        optionA: "Government hospitals",
        optionB: "Private hospitals and clinics",
        optionC: "Village dispensaries",
        correctAnswer: "Private hospitals and clinics",
      }),
      shuffleOptions({
        question: "Why do many medical tourists come to India for treatment?",
        optionA: "Low cost and world-class facilities",
        optionB: "Free medical tests",
        optionC: "Free accommodation",
        correctAnswer: "Low cost and world-class facilities",
      }),
      shuffleOptions({
        question: "Which disease kills around 5,00,000 people every year in India?",
        optionA: "Dengue",
        optionB: "Tuberculosis (TB)",
        optionC: "Chickenpox",
        correctAnswer: "Tuberculosis (TB)",
      }),
      shuffleOptions({
        question: "Why do many families borrow money during illness?",
        optionA: "To travel for fun",
        optionB: "Because private treatment is expensive",
        optionC: "To buy school books",
        correctAnswer: "Because private treatment is expensive",
      }),
      shuffleOptions({
        question: "What is one aim of land reforms according to the chapter?",
        optionA: "To build shopping malls",
        optionB: "To increase land taxes",
        optionC: "To remove exploitation of the poor farmers",
        correctAnswer: "To remove exploitation of the poor farmers",
      }),
      shuffleOptions({
        question: "Under which act must no child be denied admission or asked to take an admission test?",
        optionA: "Health Awareness Act",
        optionB: "Right to Education Act (RTE)",
        optionC: "Child Development Act",
        correctAnswer: "Right to Education Act (RTE)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Public health services work to prevent the spread of diseases such as ________.",
        optionA: "measles",
        optionB: "dengue",
        optionC: "TB and polio",
        optionD: "all of these",
        correctAnswer: "all of these",
      }),
      shuffleOptions({
        question: "The government trains ________ to support health programmes in every village.",
        optionA: "engineers",
        optionB: "health workers",
        optionC: "shopkeepers",
        correctAnswer: "health workers",
      }),
      shuffleOptions({
        question: "Many rural areas have very few ________ compared to urban regions.",
        optionA: "doctors",
        optionB: "buses",
        optionC: "markets",
        correctAnswer: "doctors",
      }),
      shuffleOptions({
        question: "Healthcare services also include measures for ________.",
        optionA: "population control",
        optionB: "transport",
        optionC: "agriculture",
        correctAnswer: "population control",
      }),
      shuffleOptions({
        question: "Poor families often suffer from diseases due to ________.",
        optionA: "over-exercise",
        optionB: "malnutrition",
        optionC: "frequent travel",
        correctAnswer: "malnutrition",
      }),
      shuffleOptions({
        question: "A PHC provides medical support mainly to ________ people.",
        optionA: "rural",
        optionB: "astronauts",
        optionC: "businessmen",
        correctAnswer: "rural",
      }),
      shuffleOptions({
        question: "The government supplies essential medicines and ________ to health centres.",
        optionA: "toys",
        optionB: "books",
        optionC: "equipment",
        correctAnswer: "equipment",
      }),
      shuffleOptions({
        question: "Private hospitals are mostly found in ________ areas.",
        optionA: "remote forests",
        optionB: "urban areas",
        optionC: "deserts",
        correctAnswer: "urban areas",
      }),
      shuffleOptions({
        question: "Public hospitals are meant for ________.",
        optionA: "rich people",
        optionB: "only students",
        optionC: "all citizens",
        correctAnswer: "all citizens",
      }),
      shuffleOptions({
        question: "Many people fall sick due to unsafe drinking water and poor ________.",
        optionA: "sanitation",
        optionB: "furniture",
        optionC: "entertainment",
        correctAnswer: "sanitation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Public hospitals offer treatment at very low cost or free of cost.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rural healthcare centres are fully staffed and equipped.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clean drinking water and good sanitation help improve health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Private hospitals usually provide specialised and costly medical services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Many poor families cannot afford private medical treatment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Public health services are responsible for preventing the spread of diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Medical tourists come to India because the treatment here is very expensive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Women and tribal communities often face neglected health conditions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "According to the chapter, health includes physical, mental and social well-being.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Under the Right to Education Act, no child can be denied admission.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
