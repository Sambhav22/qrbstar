export const chapter = "Chapter - 19: Pandemic Outbreak";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What defines a pandemic?",
            options: [
              "A. A widespread disease",
              "B. A contagious disease that affects a large number of people across international boundaries in a short time",
              "C. A deadly disease",
            ],
            answer: "B",
          },
          {
            question: "Why is cancer not considered a pandemic?",
            options: [
              "A. It is not deadly",
              "B. It is not widespread",
              "C. It is not contagious",
            ],
            answer: "C",
          },
          {
            question:
              "Where is the believed origin of the novel coronavirus (COVID-19)?",
            options: ["A. New York, USA", "B. Wuhan, China", "C. Tokyo, Japan"],
            answer: "B",
          },
          {
            question:
              "When did the COVID-19 outbreak lead to global lockdowns?",
            options: ["A. 2018", "B. 2019", "C. 2020"],
            answer: "C",
          },
          {
            question:
              "How many people are estimated to have died in India during the 1918 influenza pandemic?",
            options: ["A. 1 crore", "B. 2 crore", "C. 3 crore"],
            answer: "B",
          },
          {
            question:
              "What is identified as the single tool that effectively controlled the spread of COVID-19?",
            options: ["A. Medication", "B. Social distancing", "C. Vaccine"],
            answer: "C",
          },
          {
            question:
              "When was the first COVID-19 positive case reported in India?",
            options: [
              "A. January 30, 2019",
              "B. January 30, 2020",
              "C. January 30, 2021",
            ],
            answer: "B",
          },
          {
            question:
              "What were some of the measures taken by the Indian government to fight COVID-19?",
            options: [
              "A. Shutting down international airports",
              "B. Sealing cross-national borders and suspending railway operations",
              "C. Allowing unrestricted community gatherings",
            ],
            answer: "B",
          },
          {
            question:
              "What is mentioned as a precautionary measure against COVID-19 in crowded places?",
            options: [
              "A. Avoid handshakes",
              "B. Maintain social distancing",
              "C. Wear sunglasses",
            ],
            answer: "B",
          },
          {
            question:
              "What is emphasized as an essential learning from the COVID-19 pandemic?",
            options: [
              "A. The need for a complete lockdown",
              "B. Continuous vaccination drives",
              "C. The unpredictable nature of infectious diseases and the need for precautionary measures",
            ],
            answer: "C",
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
        questions: [
          {
            question:
              "A pandemic is an epidemic that usually affects a large number of people, crossing international boundaries in a short span of time. A disease or condition is not a pandemic merely because it is widespread or kills many people; it must also be __________.",
            options: ["A. Curable", "B. Infectious", "C. Chronic"],
            answer: "B",
          },
          {
            question:
              "In 1918, India faced the outbreak of an unusually deadly influenza pandemic as a part of the worldwide Spanish flu pandemic. It is believed that this pandemic had killed about __________ people in our country.",
            options: ["A. 1 crore", "B. 2 crore", "C. 3 crore"],
            answer: "B",
          },
          {
            question:
              "Corona virus outbreaks in the world around March 2020, and COVID-19 was declared as a global pandemic by the __________.",
            options: [
              "A. United Nations",
              "B. World Health Organization",
              "C. Centers for Disease Control and Prevention",
            ],
            answer: "B",
          },
          {
            question:
              "Corona virus disease has broken down the backbone of the infrastructure, affecting the health and economy. During this global tragedy, not only the economy or the population but also the healthcare professionals on the front line warriors were affected. Food starvation was also seen due to the difficulty in arranging __________.",
            options: ["A. Luxury goods", "B. Daily breads", "C. Exotic foods"],
            answer: "B",
          },
          {
            question:
              "By working round the clock, health experts around the world have developed a number of __________. Vaccine is the single tool that saved the people from this disease.",
            options: ["A. Medications", "B. Vaccines", "C. Treatments"],
            answer: "B",
          },
          {
            question:
              "India, which has the first largest population in the world, suffered severely from COVID-19 disease. The first Covid-19 positive case in India was reported in the state of __________ on January 30th, 2020.",
            options: ["A. Maharashtra", "B. Kerala", "C. Uttar Pradesh"],
            answer: "B",
          },
          {
            question:
              "Social Distancing and lockdown rules were employed in India, which, however, had an additional impact on the economy, human living, and environment. On March 24, 2020, the Prime Minister announced a complete __________ lockdown.",
            options: ["A. 7-day", "B. 14-day", "C. 21-day"],
            answer: "C",
          },
          {
            question:
              "The Government of India launched the largest vaccination drive across the country, riding largely on two vaccines developed by __________ vaccine manufacturers.",
            options: ["A. Chinese", "B. Russian", "C. Indian"],
            answer: "C",
          },
          {
            question:
              "The COVID pandemic may never be over. However, the public health threat of this virus should continue to decline. The need to learn lessons from this pandemic ahead of the inevitable next time is essential. History has shown us that infectious diseases have the capacity to evolve and emerge unpredictably. Some of the precautionary measures that should be strictly followed by all citizens are to frequently clean hands with an alcohol-based hand rub or wash them with soap and water, avoid touching eyes, nose, and mouth, cover mouth and nose with a bent elbow or tissue when coughing or sneezing, clean and disinfect surroundings on a daily basis, and maintain social distancing on __________ places.",
            options: ["A. Quiet", "B. Crowded", "C. Secluded"],
            answer: "B",
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
        questions: [
          {
            question:
              "A pandemic is an epidemic that usually affects a large number of people, crossing international boundaries in a short span of time.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Cancer is considered a pandemic because it is contagious.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "In 1918, India faced the outbreak of a deadly influenza pandemic as a part of the worldwide Spanish flu pandemic, killing about 2 crore people in the country.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The novel coronavirus is believed to have started in the Wuhan seafood market, China, where live wild animals were being traded.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "COVID-19 was declared as a global pandemic by the European Union.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Coronavirus disease severely affected only the population and the economy but not the healthcare professionals.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Food starvation was not observed during the COVID-19 pandemic due to effective government measures.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The only tool that saved people from COVID-19 is medication.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "India reported the first Covid-19 positive case in the state of Maharashtra on January 30th, 2020.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Social Distancing and lockdown rules had an additional impact on the economy, human living, and environment in India during the COVID-19 pandemic.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
