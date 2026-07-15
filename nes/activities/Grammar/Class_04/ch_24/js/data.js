export const chapter = "Chapter -24: Comprehension Passage";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What does the text emphasize as the most precious gift of God?",
          optionA: "Wealth",
          optionB: "Good health",
          optionC: "Education",
          correctAnswer: "Good health",
        },
        {
          question:
            "According to the passage, why is good health essential for various aspects of life?",
          optionA: "To travel well",
          optionB: "To work and study effectively",
          optionC: "To accumulate wealth quickly",
          correctAnswer: "To work and study effectively",
        },
        {
          question:
            "What is mentioned as a crucial element for maintaining good health in the text?",
          optionA: "Irregular sleep",
          optionB: "Balanced diet",
          optionC: "Fast food consumption",
          correctAnswer: "Balanced diet",
        },
        {
          question:
            "Which activities are suggested for maintaining good health in the passage?",
          optionA: "Watching TV",
          optionB: "Playing video games",
          optionC: "Morning walk and regular exercise",
          correctAnswer: "Morning walk and regular exercise",
        },
        {
          question:
            "What bad habits are specifically mentioned to be avoided for maintaining good health?",
          optionA: "Reading too much",
          optionB: "Drinking, smoking, and excessive junk food",
          optionC: "Sleeping too little",
          correctAnswer: "Drinking, smoking, and excessive junk food",
        },
        {
          question:
            "What does the author consider a part of fashion but advises to ignore for maintaining good health?",
          optionA: "Wearing stylish clothes",
          optionB: "Consuming cold drinks",
          optionC: "Exercising regularly",
          correctAnswer: "Consuming cold drinks",
        },
        {
          question: "How does the author describe childhood in the passage?",
          optionA: "Stressful",
          optionB: "Carefree and enjoyable",
          optionC: "Challenging",
          correctAnswer: "Carefree and enjoyable",
        },
        {
          question:
            "Why was the author the focus of attention during childhood, according to the text?",
          optionA: "Because the author was a dictator",
          optionB: "Because the author was the youngest",
          optionC: "Because the author was the oldest",
          correctAnswer: "Because the author was the youngest",
        },
        {
          question:
            "What does the passage mention about the sky and the mood of the people?",
          optionA: "Bright and cheerful",
          optionB: "Grey and grumbling",
          optionC: "Sunny and delightful",
          correctAnswer: "Grey and grumbling",
        },
        {
          question:
            "What unexpected event brings a positive change in the mood of the people in the second passage?",
          optionA: "A surprise gift",
          optionB: "Daddy falling into the pond",
          optionC: "A sudden storm",
          correctAnswer: "Daddy falling into the pond",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "The most precious gift of God is _______________.",
          options: ["Wealth", "Good health", "Knowledge"],
          correctAnswer: "Good health",
        },
        {
          question:
            "A healthy man can study well, work well, and earn well, enabling success in _______________.",
          options: ["Socializing", "Any work", "Entertainment"],
          correctAnswer: "Any work",
        },
        {
          question:
            "Green vegetables, fruits, curd, and milk are essential components of a _______________ diet.",
          options: ["Strict", "Proper and balanced", "Vegetarian"],
          correctAnswer: "Proper and balanced",
        },
        {
          question:
            "Having food on time is an integral part of maintaining _______________.",
          options: ["Wealth", "Discipline", "Good health"],
          correctAnswer: "Good health",
        },
        {
          question:
            "Morning walk and regular exercise contribute to the maintenance of _______________.",
          options: ["Mental health", "Physical health", "Financial health"],
          correctAnswer: "Physical health",
        },
        {
          question:
            "Swimming and cycling are mentioned as components of _______________.",
          options: ["Leisure activities", "Exercise", "Work routine"],
          correctAnswer: "Exercise",
        },
        {
          question:
            "It is advised to keep away from bad habits such as drinking, smoking, and excessive consumption of _______________.",
          options: ["Sweets", "Healthy food", "Junk food"],
          correctAnswer: "Junk food",
        },
        {
          question:
            "The text suggests ignoring the fashion trend of having _______________ and cold drinks.",
          options: [
            "Healthy snacks",
            "Fresh fruits",
            "Junk food and cold drinks",
          ],
          correctAnswer: "Junk food and cold drinks",
        },
        {
          question:
            "Childhood was described as a great period, where the author was like a _______________ in the world.",
          options: ["Busy bee", "Free bird", "Wise owl"],
          correctAnswer: "Free bird",
        },
        {
          question:
            "Daddy's fall into the pond brought a positive change, and everyone's face grew merry and bright, leading to sheer _______________.",
          options: ["Sadness", "Delight", "Frustration"],
          correctAnswer: "Delight",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Health is the most precious gift of God.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A healthy person can perform any task successfully.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A proper and balanced diet includes green vegetables, fruits, curd, and milk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Morning walk and regular exercise are not helpful for maintaining good health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Swimming and cycling are not considered part of exercise.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "It is advisable to indulge in bad habits such as drinking, smoking, and excessive junk food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Childhood is described as a stressful and challenging period.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Being the youngest, the author was the focus of attention during childhood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The text mentions that the sky was bright and cheerful during a dismal day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Daddy falling into the pond brought sadness and frustration to everyone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
