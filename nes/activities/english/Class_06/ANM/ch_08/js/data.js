export const chapter = "Chapter - 8: A Legend ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "According to the legend, how did God initially create humans?",
          optionA: "With the need for work and tools",
          optionB: "Without the need for houses, clothes, or food",
          optionC: "With the ability to live for hundreds of years",
          correctAnswer: "Without the need for houses, clothes, or food",
        },
        {
          question: "Why did God change the way humans lived in the legend?",
          optionA: "They were too happy and content.",
          optionB: "They were constantly fighting and unhappy.",
          optionC: "God wanted them to work together.",
          correctAnswer: "They were constantly fighting and unhappy.",
        },
        {
          question: "How did God try to unite people through work?",
          optionA: "By forcing them to work alone",
          optionB: "By making work a common endeavor",
          optionC: "By eliminating work altogether",
          correctAnswer: "By making work a common endeavor",
        },
        {
          question:
            "In the legend, what did God do to make people value life more?",
          optionA: "He increased their lifespans.",
          optionB: "He made them immortal.",
          optionC: "He made it uncertain when they would die.",
          correctAnswer: "He made it uncertain when they would die.",
        },
        {
          question:
            "What was the result of God's decision to make the time of death uncertain?",
          optionA: "People started enjoying life more.",
          optionB: "Strong individuals oppressed weaker ones.",
          optionC: "Everyone worked together harmoniously.",
          correctAnswer: "Strong individuals oppressed weaker ones.",
        },
        {
          question: "Why did God send sickness among humans in the legend?",
          optionA: "To unite them through compassion",
          optionB: "To separate the healthy from the sick",
          optionC: "To punish those who didn't work",
          correctAnswer: "To unite them through compassion",
        },
        {
          question: "How did sickness affect the rich and poor in the legend?",
          optionA: "The rich provided care for the poor.",
          optionB: "The poor were left without help.",
          optionC: "Both the rich and poor cared for each other.",
          correctAnswer: "The poor were left without help.",
        },
        {
          question:
            "What was the consequence of people fearing infectious illnesses in the legend?",
          optionA: "They isolated themselves from the sick.",
          optionB: "They provided better care for the sick.",
          optionC: "They all lived in the same community.",
          correctAnswer: "They isolated themselves from the sick.",
        },
        {
          question:
            "What did God ultimately do in the legend to teach people how to be happy?",
          optionA: "He made everyone immortal.",
          optionB: "He left humans to figure it out on their own.",
          optionC: "He punished them with more sickness.",
          correctAnswer: "He left humans to figure it out on their own.",
        },
        {
          question:
            "In the end, what have a few people begun to understand in the legend?",
          optionA: "Work should be a source of division.",
          optionB: "Sickness should be avoided at all costs.",
          optionC: "Unity and love are essential for happiness.",
          correctAnswer: "Unity and love are essential for happiness.",
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
            "In the legend, God initially created humans without the need for _______, _______, or _______.",
          options: ["work", "houses", "clothes"],
          correctAnswer: "food, shelter, tools",
        },
        {
          question:
            "God changed the way humans lived in the legend because they had quarreled with one another and brought matters to such a pass that far from enjoying life, they ______ it.",
          options: ["cherished", "celebrated", "cursed"],
          correctAnswer: "cursed",
        },
        {
          question:
            "God believed that making people work together would make them understand that the more heartily they work together, the more they will have and the better they will ______.",
          options: ["survive", "prosper", "rest"],
          correctAnswer: "prosper",
        },
        {
          question:
            "To make people value life more, God made it uncertain when they would ______.",
          options: ["die", "age", "work"],
          correctAnswer: "die",
        },
        {
          question:
            "The consequence of God making the time of death uncertain was that strong individuals oppressed weaker ones, killing some and threatening others with ______.",
          options: ["punishment", "disease", "death"],
          correctAnswer: "death",
        },
        {
          question:
            "The very sickness that was supposed to unite people had divided them more than ever. Those who were strong enough to make others work forced them to wait on them in times of sickness, but they did not, in their turn, look after ______ who were ill.",
          options: ["themselves", "the wealthy", "others"],
          correctAnswer: "themselves",
        },
        {
          question:
            "People considered many of the illnesses ______, and, fearing to catch them, not only avoided the sick but even separated themselves from those who attended the sick.",
          options: ["dangerous", "infectious", "deadly"],
          correctAnswer: "infectious",
        },
        {
          question:
            "Ultimately, God decided to make use of one last means; he sent all kinds of ______ among men.",
          options: ["wealth", "happiness", "sickness"],
          correctAnswer: "sickness",
        },
        {
          question:
            "Those who were forced to work for others and to look after them when sick were so worn with work that they had no time to look after their own ______.",
          options: ["families", "possessions", "sick"],
          correctAnswer: "sick",
        },
        {
          question:
            "The text concludes that only in the very latest times have a few people begun to understand that work ought not to be a bugbear to some and like ______ for others, but should be a common and happy occupation, uniting all men.",
          options: ["drudgery", "leisure", "idleness"],
          correctAnswer: "drudgery",
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
          question:
            "Slippery surfaces are responsible for accidents in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The speaker wishes they could continue slipping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The speaker wears slippers to prevent slipping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The speaker tumbled into space when slipping on a banana peel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Slipping incidents occurred in only one location in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The speaker slipped on a roller skate and hit their head.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The speaker wishes they could stop slipping anymore.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The speaker's solution to avoid slipping is to wear socks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Slippers are the best footwear to prevent slipping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The common theme in the poem is about conquering obstacles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
