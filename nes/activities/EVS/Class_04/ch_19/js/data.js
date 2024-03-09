export const chapter = "Chapter -19: Pandemic Outbreak";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          "question": "Which disease is not considered a pandemic because it is not contagious?",
          "optionA": "Cancer",
          "optionB": "Influenza",
          "optionC": "COVID-19",
          "correctAnswer": "Cancer"
        },
        {
          "question": "How many people are estimated to have been killed by the 1918 influenza pandemic in India?",
          "optionA": "1 crore",
          "optionB": "2 crore",
          "optionC": "3 crore",
          "correctAnswer": "2 crore"
        },
        {
          "question": "Where is it believed that the novel coronavirus originated?",
          "optionA": "Africa",
          "optionB": "Europe",
          "optionC": "China",
          "correctAnswer": "China"
        },
        {
          "question": "What is the name given by the World Health Organization to the disease caused by the novel coronavirus?",
          "optionA": "COVID-20",
          "optionB": "COVID-19",
          "optionC": "COVID-21",
          "correctAnswer": "COVID-19"
        },
        {
          "question": "When was COVID-19 declared as a global pandemic?",
          "optionA": "2018",
          "optionB": "2019",
          "optionC": "2020",
          "correctAnswer": "2020"
        },
        {
          "question": "What is described as the single tool that saved people from COVID-19 disease?",
          "optionA": "Lockdown",
          "optionB": "Vaccine",
          "optionC": "Social distancing",
          "correctAnswer": "Vaccine"
        },
        {
          "question": "Where was the first COVID-19 positive case reported in India?",
          "optionA": "Mumbai",
          "optionB": "Delhi",
          "optionC": "Kerala",
          "correctAnswer": "Kerala"
        },
        {
          "question": "What was announced by the Prime Minister of India on March 24, 2020?",
          "optionA": "Complete lockdown",
          "optionB": "Partial lockdown",
          "optionC": "Vaccination drive",
          "correctAnswer": "Complete lockdown"
        },
        {
          "question": "What is recommended to be done to prevent the spread of COVID-19?",
          "optionA": "Avoiding social distancing",
          "optionB": "Frequent hand washing",
          "optionC": "Sharing personal items",
          "correctAnswer": "Frequent hand washing"
        },
        {
          "question": "What should be maintained in crowded places to prevent the spread of COVID-19?",
          "optionA": "Social distancing",
          "optionB": "Crowd gathering",
          "optionC": "Close contact",
          "correctAnswer": "Social distancing"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          "question": "The outbreak of an unusually deadly influenza pandemic in 1918 killed about ______ people in India.",
          "optionA": "1 crore",
          "optionB": "2 crore",
          "optionC": "3 crore",
          "correctAnswer": "2 crore"
        },
        {
          "question": "COVID-19 was declared as a global pandemic by the World Health Organization in ______.",
          "optionA": "2018",
          "optionB": "2019",
          "optionC": "2020",
          "correctAnswer": "2020"
        },
        {
          "question": "The disease caused by the novel coronavirus is named ______ by the World Health Organization.",
          "optionA": "COVID-20",
          "optionB": "COVID-19",
          "optionC": "COVID-21",
          "correctAnswer": "COVID-19"
        },
        {
          "question": "The first COVID-19 positive case in India was reported in the state of ______ on January 30th, 2020.",
          "optionA": "Mumbai",
          "optionB": "Delhi",
          "optionC": "Kerala",
          "correctAnswer": "Kerala"
        },
        {
          "question": "The Prime Minister announced a complete 21-day lockdown in India on ______, 2020.",
          "optionA": "January 24",
          "optionB": "March 24",
          "optionC": "April 24",
          "correctAnswer": "March 24"
        },
        {
          "question": "_____ is described as the single tool that saved people from COVID-19 disease.",
          "optionA": "Lockdown",
          "optionB": "Vaccine",
          "optionC": "Social distancing",
          "correctAnswer": "Vaccine"
        },
        {
          "question": "To prevent the spread of COVID-19, frequent ______ is recommended.",
          "optionA": "Hand washing",
          "optionB": "Mask wearing",
          "optionC": "Physical distancing",
          "correctAnswer": "Hand washing"
        },
        {
          "question": "_____ should be maintained in crowded places to prevent the spread of COVID-19.",
          "optionA": "Social gatherings",
          "optionB": "Physical contact",
          "optionC": "Social distancing",
          "correctAnswer": "Social distancing"
        },
        {
          "question": "The COVID-19 pandemic may never be over, but the public health threat of this virus should continue to ______.",
          "optionA": "Increase",
          "optionB": "Decline",
          "optionC": "Stabilize",
          "correctAnswer": "Decline"
        },
        {
          "question": "Infectious diseases have the capacity to evolve and emerge unpredictably, hence, ______ measures are essential.",
          "optionA": "Reactive",
          "optionB": "Proactive",
          "optionC": "Inactive",
          "correctAnswer": "Proactive"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          "question": "Cancer is considered a pandemic because it is infectious.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        },
        {
          "question": "The Spanish flu pandemic of 1918 killed about 2 crore people in India.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        },
        {
          "question": "COVID-19 is caused by a novel coronavirus that originated in Wuhan, China.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        },
        {
          "question": "The WHO named the disease caused by the novel coronavirus 'COVID-19' based on the year the outbreak was first recognized.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        },
        {
          "question": "COVID-19 was declared a global pandemic by the World Health Organization in 2020.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        },
        {
          "question": "COVID-19 primarily affected the economy but had little impact on healthcare professionals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        },
        {
          "question": "Vaccines were ineffective in controlling the spread of COVID-19.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        },
        {
          "question": "India reported its first COVID-19 positive case in the state of Kerala on January 30th, 2020.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        },
        {
          "question": "The Indian government did not implement any measures to combat the spread of COVID-19.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        },
        {
          "question": "Precautionary measures to combat COVID-19 include avoiding touching eyes, nose, and mouth, and maintaining social distancing.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
