export const chapter = "Chapter - 20: Pandemic-Outbreak in the World";
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
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is a pandemic, and why should the term be used cautiously?",
            options: [
              "a) A term describing any infectious disease",
              "b) A disease with limited impact on society",
              "c) A rapidly spreading disease affecting a large population",
            ],
            answer:
              "c) A rapidly spreading disease affecting a large population",
          },
          {
            question:
              "According to the text, what factors contribute to the background of a pandemic threat?",
            options: [
              "a) Economic, political, and technological factors",
              "b) Biological, environmental, and lifestyle changes",
              "c) Social, cultural, and educational factors",
            ],
            answer: "b) Biological, environmental, and lifestyle changes",
          },
          {
            question:
              "How did the COVID-19 virus likely spread to humans, according to health experts mentioned in the text?",
            options: [
              "a) Through contaminated water sources",
              "b) Human-to-human transmission",
              "c) Transmission from animals, possibly from a market in Wuhan",
            ],
            answer:
              "c) Transmission from animals, possibly from a market in Wuhan",
          },
          {
            question:
              "When did the World Health Organization declare COVID-19 as a pandemic?",
            options: [
              "a) January 11, 2020",
              "b) March 11, 2020",
              "c) June 1, 2020",
            ],
            answer: "b) March 11, 2020",
          },
          {
            question:
              "How did India, under Prime Minister Narendra Modi, respond to the COVID-19 pandemic initially?",
            options: [
              "a) Delayed response with no lockdown measures",
              "b) Implemented a timely lockdown and prepared health infrastructure",
              "c) Ignored the pandemic, leading to widespread infections",
            ],
            answer:
              "b) Implemented a timely lockdown and prepared health infrastructure",
          },
          {
            question:
              "What are some recommended measures to prevent the spread of COVID-19, as mentioned in the text?",
            options: [
              "a) Ignoring personal hygiene and avoiding masks",
              "b) Frequent handwashing, avoiding crowded places, and wearing masks",
              "c) Eating exotic animals and not washing hands",
            ],
            answer:
              "b) Frequent handwashing, avoiding crowded places, and wearing masks",
          },
          {
            question:
              "Why does the text emphasize the importance of a graded response and a holistic approach in fighting COVID-19?",
            options: [
              "a) To demonstrate political leadership",
              "b) To prevent economic challenges",
              "c) To address the complexity of the crisis effectively",
            ],
            answer: "c) To address the complexity of the crisis effectively",
          },
          {
            question:
              "What does the text suggest about the frequency and impact of infectious diseases in the modern world?",
            options: [
              "a) Decreasing occurrences and limited impact",
              "b) Increasing occurrences and widespread impact",
              "c) Stable occurrences with minimal impact",
            ],
            answer: "b) Increasing occurrences and widespread impact",
          },
          {
            question:
              "What does the text propose as a key strategy for preventing the spread of pandemics in the future?",
            options: [
              "a) Guaranteed cure for all infectious diseases",
              "b) Meticulous preparation and rapid response",
              "c) Ignoring global health issues",
            ],
            answer: "b) Meticulous preparation and rapid response",
          },
          {
            question:
              "According to the text, why is prevention considered better than cure in the context of pandemics?",
            options: [
              "a) Cure is unavailable for most pandemics",
              "b) Cure is more expensive than prevention",
              "c) Prevention can save more lives and resources",
            ],
            answer: "c) Prevention can save more lives and resources",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fillInTheBlankQuestions: [
          {
            question:
              "The term 'pandemic' is not to be used lightly as it can cause unreasonable fear, leading to __________ suffering and death.",
            options: ["a) Justified", "b) Unjustified", "c) Limited"],
            answer: "b) Unjustified",
          },
          {
            question:
              "COVID-19 is caused by a newly discovered __________ virus that likely jumped from animals to humans.",
            options: ["a) Influenza", "b) Corona", "c) Bacterial"],
            answer: "b) Corona",
          },
          {
            question:
              "The World Health Organization declared COVID-19 as a pandemic after spreading through __________ countries and infecting over 118,000 people.",
            options: ["a) 50", "b) 114", "c) 200"],
            answer: "b) 114",
          },
          {
            question:
              "India, under the leadership of Prime Minister Narendra Modi, implemented a timely __________ from 24 March to 1 June to prevent the spread of COVID-19.",
            options: ["a) Celebration", "b) Lockdown", "c) Festival"],
            answer: "b) Lockdown",
          },
          {
            question:
              "The text recommends frequent handwashing, avoiding crowded places, and wearing masks as measures to prevent the spread of __________.",
            options: ["a) Influenza", "b) Common cold", "c) COVID-19"],
            answer: "c) COVID-19",
          },
          {
            question:
              "According to the text, India's response to COVID-19 is considered exemplary, particularly due to the observant leadership of Prime Minister __________.",
            options: [
              "a) Rahul Gandhi",
              "b) Narendra Modi",
              "c) Manmohan Singh",
            ],
            answer: "b) Narendra Modi",
          },
          {
            question:
              "To mitigate the effects of a disaster, the text emphasizes the importance of a graded response and a holistic __________.",
            options: ["a) Reaction", "b) Approach", "c) Indifference"],
            answer: "b) Approach",
          },
          {
            question:
              "The text suggests that with meticulous preparation and rapid response, we can prevent most outbreaks from getting out of control and limit the impact of those that spread __________.",
            options: ["a) Nationally", "b) Internationally", "c) Locally"],
            answer: "b) Internationally",
          },
          {
            question:
              "Prevention is considered better than cure in the context of pandemics because it can save more lives and __________.",
            options: ["a) Resources", "b) Money", "c) Infrastructure"],
            answer: "a) Resources",
          },
          {
            question:
              "The text suggests that as infectious diseases occur more often, the world is in the grip of __________, making pandemic outbreaks a fact of life.",
            options: ["a) Normalcy", "b) Control", "c) Chaos"],
            answer: "c) Chaos",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        trueOrFalseQuestions: [
          {
            question:
              "A pandemic is a term that should be used cautiously to avoid causing unreasonable fear and suffering.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "COVID-19 is caused by a newly discovered Influenza virus that originated in China.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "The World Health Organization declared COVID-19 as a pandemic after spreading through 200 countries in three months.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "India's response to COVID-19 under Prime Minister Narendra Modi is not considered exemplary.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "The text recommends avoiding crowded places and frequent handwashing as measures to prevent the spread of COVID-19.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Prevention is considered better than cure in the context of pandemics because it can save more lives and resources.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "The COVID-19 virus likely spread to humans through person-to-person contact.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Infectious diseases are occurring less frequently and spreading slower in the modern world.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "The text suggests that a guaranteed cure for all infectious diseases is possible.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "India's role in the fight against COVID-19 is not mentioned as exemplary in the text.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
        ],
      },
    ],
  };
}

export var activityData;
