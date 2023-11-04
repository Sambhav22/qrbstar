export const chapter = "Chapter - 15: The Aged Mother  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was the governor's proclamation in the story?",
          optionA: "To harvest more crops",
          optionB: "To execute all the elderly people",
          optionC: "To build a new road in the province",
          correctAnswer: "To execute all the elderly people",
        },
        {
          question:
            "How did the poor farmer and his mother feel about each other?",
          optionA: "They had a strained relationship.",
          optionB: "They loved and respected each other.",
          optionC: "They didn't interact much.",
          correctAnswer: "They loved and respected each other.",
        },
        {
          question:
            "What was the name of the mountain where the aged were supposed to be abandoned?",
          optionA: "Obatsuyama",
          optionB: "Abandonama",
          optionC: "Elders' Summit",
          correctAnswer: "Obatsuyama",
        },
        {
          question:
            "How did the farmer mark the path as he climbed the mountain with his mother?",
          optionA: "By painting symbols on trees",
          optionB: "By dropping twigs along the way",
          optionC: "By singing a specific song",
          correctAnswer: "By dropping twigs along the way",
        },
        {
          question:
            "What was the farmer supposed to make for the governor's order of a 'rope of ashes'?",
          optionA: "A rope of twisted straw",
          optionB: "A rope made of stones",
          optionC: "A rope from the governor's hair",
          correctAnswer: "A rope of twisted straw",
        },
        {
          question: "How did the farmer create the 'rope of ashes'?",
          optionA: "He burned a rope made of straw on a windy night.",
          optionB: "He gathered ashes and twisted them into a rope.",
          optionC: "He used a rope made of stones and set it on fire.",
          correctAnswer: "He burned a rope made of straw on a windy night.",
        },
        {
          question:
            "What did the governor do when he learned the truth about the farmer's wisdom?",
          optionA: "He ordered the farmer to be executed.",
          optionB: "He praised the farmer and abolished the cruel law.",
          optionC: "He banished the farmer from the province.",
          correctAnswer: "He praised the farmer and abolished the cruel law.",
        },
        {
          question:
            "What saying did the governor recall after listening to the farmer's story?",
          optionA: "'With great power comes great responsibility.'",
          optionB: "'With the crown of snow, there cometh wisdom.'",
          optionC: "'The early bird catches the worm.'",
          correctAnswer: "'With the crown of snow, there cometh wisdom.'",
        },
        {
          question:
            "How did the governor change his stance after hearing the farmer's story?",
          optionA: "He became even more despotic.",
          optionB: "He decided to execute all the elderly people.",
          optionC: "He realized the need for wisdom in the province.",
          correctAnswer: "He realized the need for wisdom in the province.",
        },
        {
          question:
            "What was the ultimate outcome of the governor's actions in the story?",
          optionA: "The elderly were executed.",
          optionB: "The province remained the same.",
          optionC: "The elderly could lead a life full of dignity.",
          correctAnswer: "The elderly could lead a life full of dignity.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "The poor farmer and his aged, widowed mother lived at the foot of a mountain and owned a bit of land that supplied them with ___________.",
          options: ["riches", "happiness", "food"],
          correctAnswer: "food",
        },
        {
          question:
            "The despotic governor's proclamation ordered the immediate execution of ___________.",
          options: [
            "all the wealthy people",
            "all the aged people",
            "all the farmers",
          ],
          correctAnswer: "all the aged people",
        },
        {
          question:
            "The farmer's journey up the mountain was towards the high bare summit of ___________.",
          options: ["Abandonama", "Elders' Summit", "___________"],
          correctAnswer: "Abandonama",
        },
        {
          question:
            "The farmer marked the path as he climbed the mountain by dropping ___________ along the way.",
          options: ["rocks", "twigs", "leaves"],
          correctAnswer: "twigs",
        },
        {
          question:
            "To create the 'rope of ashes,' the farmer was instructed to make a rope of twisted ___________ and burn it on a windless night.",
          options: ["straw", "twigs", "cloth"],
          correctAnswer: "straw",
        },
        {
          question:
            "The governor was pleased with the farmer's wit in creating the 'rope of ashes' and demanded to know where he had obtained his ___________.",
          options: ["wealth", "intelligence", "wisdom"],
          correctAnswer: "wisdom",
        },
        {
          question:
            "The governor mentioned a well-known saying, 'With the crown of snow, there cometh ___________.'",
          options: ["hardship", "wealth", "wisdom"],
          correctAnswer: "wisdom",
        },
        {
          question:
            "What did the farmer use to guide him and his mother down the mountain?",
          options: [
            "The stars in the night sky",
            "The twigs they had dropped",
            "A map he had drawn",
          ],
          correctAnswer: "The twigs they had dropped",
        },
        {
          question:
            "What did the governor demand from his subjects in his unreasonable order?",
          options: ["A sack of gold", "A rope of ashes", "A bushel of rice"],
          correctAnswer: "A rope of ashes",
        },
        {
          question:
            "The governor abolished the cruel law, and as a result, the elderly in the province could lead a life full of ___________.",
          options: ["fear", "hardship", "dignity"],
          correctAnswer: "dignity",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "The poor farmer and his mother were wealthy.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The governor's proclamation demanded the execution of the elderly.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The farmer marked the path using stones.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The farmer made the 'rope of ashes' using straw.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The governor was displeased with the farmer's wit.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The governor mentioned a saying about the crown of snow and wisdom.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The farmer used the stars to guide him down the mountain.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The governor demanded a sack of gold from his subjects.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The elderly in the province could lead a life full of fear after the governor's proclamation was abolished.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The farmer's mother helped create the 'rope of ashes.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
