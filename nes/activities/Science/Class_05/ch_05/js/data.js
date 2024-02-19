export const chapter = "Chapter - 5: Health and Hygiene";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is defined as a positive state of well-being where every part of the body and mind is in harmony and proper functioning balance with every other part?",
          optionA: "Happiness",
          optionB: "Health",
          optionC: "Hygiene",
          correctAnswer: "Health",
        },
        {
          question:
            "What are the conditions and practices that help maintain health and prevent the spread of diseases referred to as?",
          optionA: "Fitness",
          optionB: "Hygiene",
          optionC: "Diet",
          correctAnswer: "Hygiene",
        },
        {
          question:
            "How does regular bathing contribute to maintaining good health?",
          optionA: "It increases body odor",
          optionB: "It helps to keep the body free from odors and germs",
          optionC: "It causes allergies and serious skin problems",
          correctAnswer: "It helps to keep the body free from odors and germs",
        },
        {
          question:
            "Why is frequent washing of hands important for maintaining hygiene?",
          optionA: "To make hands softer",
          optionB: "To prevent illnesses and remove dirt and germs",
          optionC: "To improve hand-eye coordination",
          correctAnswer: "To prevent illnesses and remove dirt and germs",
        },
        {
          question:
            "What is recommended to keep the hair clean as mentioned in the text?",
          optionA: "Regular shaving",
          optionB: "Regular washing with shampoo and combing",
          optionC: "Applying oil every day",
          correctAnswer: "Regular washing with shampoo and combing",
        },
        {
          question:
            "How often should teeth and gums be cleaned according to the text?",
          optionA: "Once a day",
          optionB: "Twice a day",
          optionC: "Thrice a day",
          correctAnswer: "Twice a day",
        },
        {
          question: "What is the importance of a balanced diet?",
          optionA: "It leads to a good financial health",
          optionB:
            "It helps in proper growth, increases capacity to work, and improves the ability to resist diseases",
          optionC: "It enhances memory power",
          correctAnswer:
            "It helps in proper growth, increases capacity to work, and improves the ability to resist diseases",
        },
        {
          question:
            "How does exercise contribute to the improvement of the nervous system?",
          optionA: "By reducing oxygen supply to the brain",
          optionB: "By providing more oxygen to the brain",
          optionC: "By slowing down the heartbeat",
          correctAnswer: "By providing more oxygen to the brain",
        },
        {
          question:
            "Why is proper rest and regular sleep important for maintaining health?",
          optionA: "To save time",
          optionB:
            "To relax muscles, help the body function properly, and promote growth and repair of body cells",
          optionC: "To avoid nightmares",
          correctAnswer:
            "To relax muscles, help the body function properly, and promote growth and repair of body cells",
        },
        {
          question:
            "What does maintaining good posture prevent according to the text?",
          optionA: "Improper growth",
          optionB: "Neck and back pain",
          optionC: "Flexibility of joints",
          correctAnswer: "Neck and back pain",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Hygiene is defined as the conditions and practices that help maintain health and prevent the spread of _______________.",
          options: ["Happiness", "Diseases", "Fitness"],
          correctAnswer: "Diseases",
        },
        {
          question:
            "Regular bathing helps keep the body free from odors and germs by removing _______________.",
          options: ["Dirt only", "Odor only", "Dirt and germs"],
          correctAnswer: "Dirt and germs",
        },
        {
          question:
            "Frequent washing of hands is crucial after activities like playing, using toilets, and touching _______________.",
          options: ["Furniture", "Books", "Pets"],
          correctAnswer: "Pets",
        },
        {
          question:
            "To keep the hair clean, _______________ and combing are necessary.",
          options: [
            "Applying oil",
            "Regular shaving",
            "Regular washing with shampoo",
          ],
          correctAnswer: "Regular washing with shampoo",
        },
        {
          question:
            "Teeth and gums need daily care, and brushing them helps remove germs, decreasing the chances of _______________.",
          options: ["Allergies", "Tooth decay", "Gum diseases"],
          correctAnswer: "Tooth decay",
        },
        {
          question:
            "Eyes should be cleaned with cold water two or three times a day to keep them _______________.",
          options: ["Closed", "Healthy", "Bright"],
          correctAnswer: "Healthy",
        },
        {
          question:
            "Never poke sharp objects or earbuds into the ears; it could damage the eardrum and may cause _______________.",
          options: ["Improved hearing", "Loss of hearing", "Ear infections"],
          correctAnswer: "Loss of hearing",
        },
        {
          question:
            "A balanced diet includes food from five groups and fulfills all of a person's nutritional needs, including proteins, carbohydrates, fats, fibers, vitamins, and _______________.",
          options: ["Sugars", "Minerals", "Antioxidants"],
          correctAnswer: "Minerals",
        },
        {
          question:
            "Regular exercise helps develop and build up bones and muscles, improving the _______________ by providing more oxygen to the brain.",
          options: ["Digestive system", "Nervous system", "Respiratory system"],
          correctAnswer: "Nervous system",
        },
        {
          question:
            "Why is proper rest and regular sleep important for maintaining health?\nTo save time\nTo relax muscles, help the body function properly, and promote growth and repair of body cells\nTo avoid nightmares",
          options: [
            "To save time",
            "To relax muscles, help the body function properly, and promote growth and repair of body cells",
            "To avoid nightmares",
          ],
          correctAnswer:
            "To relax muscles, help the body function properly, and promote growth and repair of body cells",
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
            "Hygiene refers to conditions and practices that help maintain health and prevent the spread of diseases.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Regular bathing is essential to keep the body free from odors and germs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Frequent washing of hands is crucial to prevent illnesses and remove dirt and germs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Teeth and gums need daily care, and brushing them helps remove germs, decreasing the chances of tooth decay.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Eyes should be cleaned with cold water two or three times a day to keep them healthy.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Proper rest and regular sleep are not crucial for maintaining good health.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A balanced diet includes food from five groups and fulfills all of a person's nutritional needs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Regular exercise helps develop and build up bones and muscles, improving the nervous system.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Maintaining good posture is not important for preventing neck and back pain.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Greenland is located in the continent of Europe.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
