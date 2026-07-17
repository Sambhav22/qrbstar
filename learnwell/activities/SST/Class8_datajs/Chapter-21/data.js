export const chapter = "Chapter - 21: The Indian Constitution";
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
        question: "Who chaired the Drafting Committee of the Indian Constitution?",
        optionA: "Jawaharlal Nehru",
        optionB: "Dr. B. R. Ambedkar",
        optionC: "Sardar Patel",
        correctAnswer: "Dr. B. R. Ambedkar",
      }),
      shuffleOptions({
        question: "Who was unanimously elected the permanent chairman of the Constituent Assembly?",
        optionA: "Dr. Rajendra Prasad",
        optionB: "Mahatma Gandhi",
        optionC: "Lal Bahadur Shastri",
        correctAnswer: "Dr. Rajendra Prasad",
      }),
      shuffleOptions({
        question: "Who led the Dandi March to protest against the Salt Law?",
        optionA: "Subhas Chandra Bose",
        optionB: "Mahatma Gandhi",
        optionC: "Rabindranath Tagore",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who served as the first President of independent India?",
        optionA: "Dr. B. R. Ambedkar",
        optionB: "Dr. Rajendra Prasad",
        optionC: "C. Rajagopalachari",
        correctAnswer: "Dr. Rajendra Prasad",
      }),
      shuffleOptions({
        question: "Which leader explained secularism by stating that the Parliament cannot impose any religion?",
        optionA: "Dr. Rajendra Prasad",
        optionB: "Dr. B. R. Ambedkar",
        optionC: "Sardar Patel",
        correctAnswer: "Dr. B. R. Ambedkar",
      }),
      shuffleOptions({
        question: "Who protested constructively against the Salt Law?",
        optionA: "Lala Lajpat Rai",
        optionB: "Mahatma Gandhi",
        optionC: "Bhagat Singh",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who said that secularism means wishing well for all religions?",
        optionA: "Dr. Rajendra Prasad",
        optionB: "Jawaharlal Nehru",
        optionC: "Rajiv Gandhi",
        correctAnswer: "Dr. Rajendra Prasad",
      }),
      shuffleOptions({
        question: "Who wrote that \"secularism was first used in 1851\"?",
        optionA: "George Holyoake",
        optionB: "John Locke",
        optionC: "Voltaire",
        correctAnswer: "George Holyoake",
      }),
      shuffleOptions({
        question: "Who faced lathi-charges during the Dandi March yet asked people to remain peaceful?",
        optionA: "Sardar Patel",
        optionB: "Mahatma Gandhi",
        optionC: "Subhas Chandra Bose",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who protested destructively in 1991 against reservation based on the Mandal Commission?",
        optionA: "Teachers",
        optionB: "Students",
        optionC: "Farmers",
        correctAnswer: "Students",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Constitution of India came into force on ________.",
        optionA: "26 January 1950",
        optionB: "15 August 1947",
        optionC: "2 October 1950",
        correctAnswer: "26 January 1950",
      }),
      shuffleOptions({
        question: "The Preamble describes India as sovereign, socialist, secular and ________.",
        optionA: "feudal",
        optionB: "republic",
        optionC: "communist",
        correctAnswer: "republic",
      }),
      shuffleOptions({
        question: "The Constitution guarantees the right to approach the court through Article ________.",
        optionA: "23",
        optionB: "30",
        optionC: "32",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "The Salt Law was protested by Gandhi through the ________ March.",
        optionA: "Dandi",
        optionB: "Quit India",
        optionC: "Swadeshi",
        correctAnswer: "Dandi",
      }),
      shuffleOptions({
        question: "The right that prohibits forced labour is given under Article ________.",
        optionA: "21",
        optionB: "23",
        optionC: "19",
        correctAnswer: "23",
      }),
      shuffleOptions({
        question: "Domestic violence is addressed under the Protection of Women from ________.",
        optionA: "Child Marriage Act",
        optionB: "Domestic Violence Act 2005",
        optionC: "Property Act",
        correctAnswer: "Domestic Violence Act 2005",
      }),
      shuffleOptions({
        question: "The Constitution divides power among legislature, executive and ________.",
        optionA: "bureaucracy",
        optionB: "judiciary",
        optionC: "monarchy",
        correctAnswer: "judiciary",
      }),
      shuffleOptions({
        question: "The level of government below the state is the ________ level.",
        optionA: "Panchayati Raj",
        optionB: "National",
        optionC: "Zonal",
        correctAnswer: "Panchayati Raj",
      }),
      shuffleOptions({
        question: "The 42nd Amendment was passed in the year ________.",
        optionA: "1949",
        optionB: "1950",
        optionC: "1976",
        correctAnswer: "1976",
      }),
      shuffleOptions({
        question: "The Constitution aims to reduce economic inequality through the ideal of ________.",
        optionA: "monarchy",
        optionB: "socialism",
        optionC: "dictatorship",
        correctAnswer: "socialism",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Constitution allows peaceful dissent through constructive methods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fundamental Rights can be suspended during a national emergency.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The judiciary has the power to interpret laws.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Federalism allows only one level of government to make laws.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A republic means the head of the state is elected.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cultural and Educational Rights protect minority languages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Domestic violence is a social evil addressed by law in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Liberty includes freedom of thought and expression.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Directive Principles are enforceable by courts.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Preamble is legally binding like the rest of the Constitution.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "False",
      }),
    ]),
  };
}
