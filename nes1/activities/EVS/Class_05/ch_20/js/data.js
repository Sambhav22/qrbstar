export const chapter = "Chapter -20: Pandemic-Outbreak in the World";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "What is a pandemic?",
          "optionA": "A disease that spreads slowly within a country",
          "optionB": "A disease that spreads quickly across countries affecting a large number of people",
          "optionC": "A disease that affects only a small group of people",
          "correctAnswer": "A disease that spreads quickly across countries affecting a large number of people"
        }),
      shuffleOptions({
          "question": "What virus causes COVID-19?",
          "optionA": "Influenza",
          "optionB": "Coronavirus",
          "optionC": "Rhinovirus",
          "correctAnswer": "Coronavirus"
        }),
      shuffleOptions({
          "question": "When did the World Health Organization declare COVID-19 as a pandemic?",
          "optionA": "March 11, 2019",
          "optionB": "March 11, 2020",
          "optionC": "December 11, 2019",
          "correctAnswer": "March 11, 2020"
        }),
      shuffleOptions({
          "question": "When did India impose a lockdown to prevent the spread of COVID-19?",
          "optionA": "May 1",
          "optionB": "June 1",
          "optionC": "April 1",
          "correctAnswer": "June 1"
        }),
      shuffleOptions({
          "question": "Which organization is responsible for building a better health condition for everyone worldwide?",
          "optionA": "World Bank",
          "optionB": "World Trade Organization",
          "optionC": "World Health Organization",
          "correctAnswer": "World Health Organization"
        }),
      shuffleOptions({
          "question": "What is one of the measures mentioned to prevent the spread of COVID-19?",
          "optionA": "Avoid washing hands",
          "optionB": "Stay home if you feel unwell",
          "optionC": "Touch surfaces outside with naked hands",
          "correctAnswer": "Stay home if you feel unwell"
        }),
      shuffleOptions({
          "question": "Why are infectious diseases occurring more often and spreading faster according to the text?",
          "optionA": "Global warming",
          "optionB": "Technological advancements",
          "optionC": "Biological, environmental, and lifestyle changes",
          "correctAnswer": "Biological, environmental, and lifestyle changes"
        }),
      shuffleOptions({
          "question": "Can we create a pandemic-free world according to the text?",
          "optionA": "Yes",
          "optionB": "No",
          "optionC": "It's uncertain",
          "correctAnswer": "No"
        }),
      shuffleOptions({
          "question": "According to the text, prevention is _____ than cure.",
          "optionA": "More expensive",
          "optionB": "Cheaper",
          "optionC": "Equal in cost",
          "correctAnswer": "Cheaper"
        }),
      shuffleOptions({
          "question": "How does the text suggest outbreaks can be prevented from getting out of control?",
          "optionA": "Hasty preparation",
          "optionB": "Non-existent response",
          "optionC": "Meticulous preparation and response",
          "correctAnswer": "Meticulous preparation and response"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "What is a pandemic?",
          "optionA": "A disease that spreads slowly within a country",
          "optionB": "A disease that spreads quickly across countries affecting a large number of people",
          "optionC": "A disease that affects only a small group of people",
          "correctAnswer": "A disease that spreads quickly across countries affecting a large number of people"
        }),
      shuffleOptions({
          "question": "COVID-19 is caused by a newly discovered _____ virus.",
          "optionA": "Influenza",
          "optionB": "Corona",
          "optionC": "Rhinovirus",
          "correctAnswer": "Corona"
        }),
      shuffleOptions({
          "question": "When was COVID-19 declared a pandemic by the World Health Organization?",
          "optionA": "March 11, 2019",
          "optionB": "March 11, 2020",
          "optionC": "December 11, 2019",
          "correctAnswer": "March 11, 2020"
        }),
      shuffleOptions({
          "question": "India imposed a lockdown from March 24 to _____ to prevent the spread of COVID-19.",
          "optionA": "May 1",
          "optionB": "June 1",
          "optionC": "April 1",
          "correctAnswer": "June 1"
        }),
      shuffleOptions({
          "question": "According to the text, who is responsible for building a better health condition for everyone worldwide?",
          "optionA": "World Bank",
          "optionB": "World Trade Organization",
          "optionC": "World Health Organization",
          "correctAnswer": "World Health Organization"
        }),
      shuffleOptions({
          "question": "What is one of the measures mentioned to prevent the spread of COVID-19?",
          "optionA": "Avoid washing hands",
          "optionB": "Stay home if you feel unwell",
          "optionC": "Touch surfaces outside with naked hands",
          "correctAnswer": "Stay home if you feel unwell"
        }),
      shuffleOptions({
          "question": "Infectious diseases are occurring more often and spreading faster due to _____.",
          "optionA": "Global warming",
          "optionB": "Technological advancements",
          "optionC": "Biological, environmental, and lifestyle changes",
          "correctAnswer": "Biological, environmental, and lifestyle changes"
        }),
      shuffleOptions({
          "question": "Can we create a pandemic-free world according to the text?",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Prevention is considered _____ than cure according to the text.",
          "optionA": "More expensive",
          "optionB": "Cheaper",
          "optionC": "Equal in cost",
          "correctAnswer": "Cheaper"
        }),
      shuffleOptions({
          "question": "The text suggests that outbreaks can be prevented from getting out of control with _____ preparation and response.",
          "optionA": "Meticulous",
          "optionB": "Hasty",
          "optionC": "Non-existent",
          "correctAnswer": "Meticulous"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "A pandemic spreads slowly within a country.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "COVID-19 is caused by the Zika virus.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The World Health Organization declared COVID-19 as a pandemic on March 11, 2020.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "India imposed a lockdown on May 1, 2020, to prevent the spread of COVID-19.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The World Bank is responsible for building a better health condition worldwide.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Touching surfaces outside with naked hands is a recommended measure to prevent the spread of COVID-19.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Global warming is not mentioned as a factor contributing to the occurrence of infectious diseases.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The text suggests that creating a pandemic-free world is possible.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Prevention is considered more expensive than cure according to the text.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "According to the text, outbreaks can be prevented from getting out of control with hasty preparation and response.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
