export const chapter = "Chapter - 3: Clothes";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Why do we wear clothes?",
        optionA: "To show off our style",
        optionB: "To cover our body and protect it",
        optionC: "To follow fashion trends",
        correctAnswer: "B) To cover our body and protect it",
      },
      {
        question: "What are some of the things clothes protect our body from?",
        optionA: "Heat, cold, dust, and wind",
        optionB: "Heat, cold, and sunlight",
        optionC: "Rain and snow",
        correctAnswer: "A) Heat, cold, dust, and wind",
      },
      {
        question: "What type of clothes do we typically wear in the summer?",
        optionA: "Woollen clothes",
        optionB: "Cotton clothes",
        optionC: "Silk clothes",
        correctAnswer: "B) Cotton clothes",
      },
      {
        question: "Where is cotton fiber obtained from?",
        optionA: "Cotton plant",
        optionB: "Sheep's fleece",
        optionC: "Silk cocoons",
        correctAnswer: "A) Cotton plant",
      },
      {
        question: "From which animal is woollen fiber obtained?",
        optionA: "Silkworm",
        optionB: "Sheep",
        optionC: "Goat",
        correctAnswer: "B) Sheep",
      },
      {
        question: "What is the source of silk fiber?",
        optionA: "Cotton plant",
        optionB: "Sheep's fleece",
        optionC: "Silk cocoons",
        correctAnswer: "C) Silk cocoons",
      },
      {
        question: "What are 'normal dresses'?",
        optionA: "Clothes worn on special occasions",
        optionB: "Clothes that depend on a person's choice",
        optionC: "Uniforms worn by everyone",
        correctAnswer: "B) Clothes that depend on a person's choice",
      },
      {
        question: "What do men typically wear as part of their normal dress?",
        optionA: "Saree",
        optionB: "Pants and a shirt",
        optionC: "Legging-kurti",
        correctAnswer: "B) Pants and a shirt",
      },
      {
        question:
          "How can you identify the state a person belongs to in India?",
        optionA: "By their language",
        optionB: "By their traditional dress",
        optionC: "By their job",
        correctAnswer: "B) By their traditional dress",
      },
      {
        question: "How should clothes be cared for?",
        optionA: "Ironed with any iron",
        optionB: "Kept in the open to air out",
        optionC:
          "Washed with good detergents, ironed properly, and protected from dust and insects",
        correctAnswer:
          "C) Washed with good detergents, ironed properly, and protected from dust and insects",
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
          "We wear clothes to cover our body. They keep our body safe from __________, cold, dust, wind, sun, and rain.",
        optionA: "Harm",
        optionB: "Extreme weather",
        optionC: "Heat",
        correctAnswer: "C",
      },
      {
        question:
          "Cloth is made from threads like yarn and __________. Fibre is obtained from two sources - plants and animals.",
        optionA: "Metal",
        optionB: "Wood",
        optionC: "Fibre",
        correctAnswer: "C",
      },
      {
        question:
          "Cotton fibre is obtained from the __________ plant, whereas woollen fibre is obtained from the fleece of sheep.",
        optionA: "Silk",
        optionB: "Cotton",
        optionC: "Wool",
        correctAnswer: "B",
      },
      {
        question:
          "Normal dresses are the dresses that are usually worn on a daily basis. Normally, men wear pants, shirt, or jeans __________.",
        optionA: "Hat",
        optionB: "Shoes",
        optionC: "T-shirt",
        correctAnswer: "C",
      },
      {
        question:
          "In India, people of different states wear their different traditional dresses. We can easily identify to which state a person belongs simply by looking at his/her __________ dress.",
        optionA: "Everyday",
        optionB: "Traditional",
        optionC: "Fancy",
        correctAnswer: "B",
      },
      {
        question:
          "It is important to take good care of our clothes. They should be washed with good __________ and ironed properly.",
        optionA: "Detergents",
        optionB: "Shampoo",
        optionC: "Water",
        correctAnswer: "A",
      },
      {
        question:
          "We wear __________ clothes in winters and cotton clothes in summers.",
        optionA: "Woollen",
        optionB: "Silk",
        optionC: "Leather",
        correctAnswer: "A",
      },
      {
        question: "Cloth is made from threads like __________ and fibre.",
        optionA: "Paper",
        optionB: "String",
        optionC: "Yarn",
        correctAnswer: "C",
      },
      {
        question:
          "To make shoes, umbrellas, and tents, cloth is used for many other purposes, such as __________.",
        optionA: "To make curtains",
        optionB: "To make bedsheets and quilts",
        optionC: "To make towels and handkerchiefs",
        correctAnswer: "A",
      },
      {
        question:
          "People of some states of India are shown below in their __________ dresses.",
        optionA: "Casual",
        optionB: "Traditional",
        optionC: "Western",
        correctAnswer: "B",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Cotton fiber is obtained from the fleece of sheep.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question: "We wear woollen clothes in summers.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question: "Silk fiber is obtained from the cocoons of the silk moths.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question: "Normal dresses are the same for men, women, and children.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "Traditional dresses in India help identify a person's state of origin.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question:
          "To care for clothes, they should be washed with any detergent.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "We wear leather clothes in winters and silk clothes in summers.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question: "Cloth is made from threads like yarn and stone.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question: "Cloths are only used for making curtains.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "A house has different places for different purposes, such as a bathroom for sleeping.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
    ],
  };
}

export var activityData;
