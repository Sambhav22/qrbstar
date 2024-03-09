export const chapter = "Chapter -08: Solitude";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What does the text suggest about sharing joy and sorrow?",
          optionA: "Joy is shared widely, while sorrow is isolated.",
          optionB: "Both joy and sorrow are shared equally.",
          optionC: "Sorrow is welcomed more than joy.",
          correctAnswer: "A) Joy is shared widely, while sorrow is isolated.",
        },
        {
          question: "According to the text, what happens when you sing?",
          optionA: "The hills respond with joy.",
          optionB: "The air absorbs the sound.",
          optionC: "The echoes convey a sense of care.",
          correctAnswer: "A) The hills respond with joy.",
        },
        {
          question: "What is the outcome of being glad, according to the text?",
          optionA: "You gain numerous friends.",
          optionB: "You lose all your friends.",
          optionC: "Your friends become indifferent.",
          correctAnswer: "A) You gain numerous friends.",
        },
        {
          question: "How is the reaction of people to someone who is grieving?",
          optionA: "They seek the person.",
          optionB: "They turn away and leave.",
          optionC: "They join in the sorrow.",
          correctAnswer: "B) They turn away and leave.",
        },
        {
          question: "What does the text suggest about success and generosity?",
          optionA: "Success and giving contribute to a fulfilling life.",
          optionB: "Success is irrelevant to living a fulfilling life.",
          optionC: "Generosity is not appreciated in life.",
          correctAnswer:
            "A) Success and giving contribute to a fulfilling life.",
        },
        {
          question: "How is feasting contrasted with fasting in the text?",
          optionA:
            "Feasting leads to a crowded hall, while fasting is ignored.",
          optionB: "Feasting attracts attention, while fasting is overlooked.",
          optionC: "Feasting and fasting have the same impact on the world.",
          correctAnswer:
            "B) Feasting attracts attention, while fasting is overlooked.",
        },
        {
          question:
            "What does the text imply about the nature of friendships during sad times?",
          optionA: "Friends are supportive during sad times.",
          optionB: "True friends remain during both joy and sorrow.",
          optionC: "Friendships dissolve during sad times.",
          correctAnswer: "C) Friendships dissolve during sad times.",
        },
        {
          question:
            "According to the text, what is the consequence of being sad?",
          optionA: "You gain more friends.",
          optionB: "You lose all your friends.",
          optionC: "Your friends become indifferent.",
          correctAnswer: "B) You lose all your friends.",
        },
        {
          question: "What happens when you weep, according to the text?",
          optionA: "Others weep with you.",
          optionB: "You weep in solitude.",
          optionC: "The earth borrows its mirth from you.",
          correctAnswer: "B) You weep in solitude.",
        },
        {
          question: "How is the theme of life's journey presented in the text?",
          optionA: "Life is a joyous celebration.",
          optionB: "Life involves both pleasure and pain.",
          optionC: "Life is a solitary experience.",
          correctAnswer: "B) Life involves both pleasure and pain.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Laugh, and the world laughs with you; Weep, and you weep alone; For the sad old earth must borrow its __________.",
          optionA: "Joy",
          optionB: "Mirth",
          optionC: "Sorrow",
          correctAnswer: "B) Mirth",
        },
        {
          question:
            "Sing, and the hills will __________; Sigh, it is lost on the air; The echoes bound to a joyful sound, But shrink from voicing __________.",
          optionA: "Respond / Care",
          optionB: "Answer / Sorrow",
          optionC: "Echo / Joy",
          correctAnswer: "C) Echo / Joy",
        },
        {
          question:
            "Rejoice, and men will seek you; Grieve, and they turn and go; They want full measure of all your __________ But they do not need your __________.",
          optionA: "Pleasure / Woe",
          optionB: "Sorrow / Joy",
          optionC: "Success / Happiness",
          correctAnswer: "A) Pleasure / Woe",
        },
        {
          question:
            "Be glad, and your friends are many; Be sad, and you lose them all; There are none to decline your __________, But alone you must drink life's __________.",
          optionA: "Hesitation / Elation",
          optionB: "Nectared wine / Gall",
          optionC: "Invitation / Pleasure",
          correctAnswer: "B) Nectared wine / Gall",
        },
        {
          question:
            "Feast, and your halls are crowded; Fast, and the world goes __________. Succeed and give, and it helps you __________,",
          optionA: "By / Die",
          optionB: "Fly / Live",
          optionC: "By / Live",
          correctAnswer: "C) By / Live",
        },
        {
          question:
            "There is room in the halls of __________ For a large and lordly train, But one by one we must all file on Through the narrow __________ of pain.",
          optionA: "Joy / Aisles",
          optionB: "Pleasure / Paths",
          optionC: "Pain / Aisles",
          correctAnswer: "A) Joy / Aisles",
        },
        {
          question:
            "Laugh, and the world laughs with you; Weep, and you weep __________; For the sad old earth must borrow its mirth, But has __________ enough of its own.",
          optionA: "Alone / Happiness",
          optionB: "Alone / Trouble",
          optionC: "Together / Joy",
          correctAnswer: "B) Alone / Trouble",
        },
        {
          question:
            "Sing, and the hills will __________; Sigh, it is lost on the __________; The echoes bound to a joyful sound, But shrink from voicing __________.",
          optionA: "Cry / Sea / Sadness",
          optionB: "Answer / Air / Care",
          optionC: "Echo / Ground / Happiness",
          correctAnswer: "B) Answer / Air / Care",
        },
        {
          question:
            "Be glad, and your friends are __________; Be sad, and you lose them all; There are none to __________ your nectared wine, But alone you must drink life's __________.",
          optionA: "Many / Accept / Joy",
          optionB: "Few / Decline / Gall",
          optionC: "Happy / Share / Sorrow",
          correctAnswer: "B) Few / Decline / Gall",
        },
        {
          question:
            "Feast, and your halls are crowded; Fast, and the __________ goes by. Succeed and give, and it helps you __________, But no man can help you __________.",
          optionA: "Time / Survive / Cry",
          optionB: "World / Live / Die",
          optionC: "Life / Thrive / Fly",
          correctAnswer: "B) World / Live / Die",
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
            "Jimmy Scarecrow's greatest grief in the winter was his lack of occupation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "On Christmas Eve, Santa Claus came in his sledge heaped high with toys for the children in the farmhouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Betsey gave Jimmy Scarecrow a pair of mittens as a Christmas present.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "To keep the doll-baby dry, Betsey suggested that Jimmy Scarecrow should keep her under his hat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Aunt Hannah spread her crazy quilt over the sofa with an air of regret.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Aunt Hannah went out through the snow to carry a slice of plum-pudding to her sister Mary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Betsey's doll-baby grew an inch and could walk and talk after a year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Santa Claus suggested that Jimmy Scarecrow should scare away crows at the North Pole.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Santa Claus wrote a notice to crows to keep the cornfield safe next summer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Aunt Hannah and Betsey thought their presents were spoiled because they got wet in the rain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
