export const chapter = "Chapter - 24: Notice and Messages  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "Which event is being announced in the first notice?",
          optionA: "Science Fair",
          optionB: "Inauguration of New School Building",
          optionC: "Sports Day",
          correctAnswer: "B) Inauguration of New School Building",
        },
        {
          question:
            "Who will inaugurate the new school building according to the notice?",
          optionA: "Mr. Sharma",
          optionB: "Mr. Deepchand",
          optionC: "Mr. Singh",
          correctAnswer: "B) Mr. Deepchand",
        },
        {
          question:
            "What is the name of the professional group mentioned in the first notice?",
          optionA: "Fromo Dance Group",
          optionB: "Musical Harmony Ensemble",
          optionC: "Dramatic Arts Collective",
          correctAnswer: "A) Fromo Dance Group",
        },
        {
          question:
            "When is the history quiz proposed to be held according to the notice?",
          optionA: "First week of August",
          optionB: "Second week of August",
          optionC: "Third week of August",
          correctAnswer: "B) Second week of August",
        },
        {
          question:
            "Who can participate in the history quiz according to the notice?",
          optionA: "Only secondary class students",
          optionB: "Only students from the science stream",
          optionC: "All students",
          correctAnswer: "C) All students",
        },
        {
          question:
            "What rewards are mentioned for the winners of the history quiz?",
          optionA: "Certificates",
          optionB: "Attractive gifts",
          optionC: "Extra homework",
          correctAnswer: "B) Attractive gifts",
        },
        {
          question:
            "What message is Sharma Uncle passing to the father in the message example?",
          optionA: "Foreign businessmen are coming",
          optionB: "Some relatives are visiting",
          optionC: "A party is being planned",
          correctAnswer: "A) Foreign businessmen are coming",
        },
        {
          question: "Where is Kabir going in the message example?",
          optionA: "To the market",
          optionB: "To a friend's house for a project",
          optionC: "To the library",
          correctAnswer: "B) To a friend's house for a project",
        },
        {
          question:
            "What is Rishi's reason for visiting his friend in the message example?",
          optionA: "To return a borrowed book",
          optionB: "To invite him/her for a treat",
          optionC: "To study together for an exam",
          correctAnswer: "B) To invite him/her for a treat",
        },
        {
          question:
            "What does Rishi mention all friends will do at 6 pm in the message example?",
          optionA: "Study together",
          optionB: "Play games",
          optionC: "Gather at the restaurant",
          correctAnswer: "C) Gather at the restaurant",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "The ________ of the new school building will be conducted by Mr. Deepchand.",
          options: ["inauguration", "construction", "demolition"],
          correctAnswer: "inauguration",
        },
        {
          question:
            "All students are required to attend the function in their best ________ dress.",
          options: ["casual", "formal", "traditional"],
          correctAnswer: "formal",
        },
        {
          question:
            "The history quiz is proposed to be held in the ________ week of August.",
          options: ["first", "second", "third"],
          correctAnswer: "second",
        },
        {
          question:
            "________ students interested in participating can submit their names for the history quiz.",
          options: ["Only secondary class", "Only senior class", "All"],
          correctAnswer: "All",
        },
        {
          question:
            "Attractive gifts will be awarded to the ________ of the history quiz.",
          options: ["organizers", "participants", "audience"],
          correctAnswer: "participants",
        },
        {
          question:
            "Sharma Uncle conveyed a message about the visit of ________ businessmen.",
          options: ["foreign", "local", "domestic"],
          correctAnswer: "foreign",
        },
        {
          question:
            "Kabir mentioned he is going to his friend's house for a school ________.",
          options: ["project", "party", "exam"],
          correctAnswer: "project",
        },
        {
          question:
            "Rishi came to invite his friend for a treat on the occasion of his ________.",
          options: ["birthday", "anniversary", "graduation"],
          correctAnswer: "birthday",
        },
        {
          question:
            "All friends are expected to gather at the restaurant ________ 6 pm.",
          options: ["by", "after", "during"],
          correctAnswer: "by",
        },
        {
          question:
            "The notice instructs all students to attend the function in their best school ________.",
          options: ["uniform", "dress", "attire"],
          correctAnswer: "uniform",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Rules give certainty and uniformity to conduct, ensuring that a player or team excels or improves.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to the text, a rule becomes a law when it can be enforced by the judiciary.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Laws should be flexible by nature, which is why laws are often written down to alleviate any uncertainty about them.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The government's power to punish rests in the legislature.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Laws provide for the maximum punishment or fine, which the judge cannot determine.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An accused possesses the right to appeal to a state court if they are not satisfied with the judgment of the judge.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Constitution is the guardian of all laws in the country, and all laws must be in accordance with its provisions and spirit.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Dissent is an important part of life, and it is expressed against the majority.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When dissent is expressed in a constructive manner, it should result in disagreement.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The right to vote gives common people a powerful tool to express their dissent in a constructive manner during protests.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
