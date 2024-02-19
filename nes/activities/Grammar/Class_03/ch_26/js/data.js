export const chapter = "Chapter - 26: comprehension passage";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is identified as the root cause of childhood obesity according to the text?",
          optionA: "Lack of physical activity",
          optionB: "Uncontrolled eating",
          optionC: "Excessive television watching",
          correctAnswer: "Uncontrolled eating",
        },
        {
          question:
            "Which group of children is mentioned as almost sure to become obese?",
          optionA: "Those who eat fruits and vegetables",
          optionB: "Those who eat processed foods",
          optionC: "Those who engage in physical activity",
          correctAnswer: "Those who eat processed foods",
        },
        {
          question:
            "What do doctors predict for children who are obese or overweight?",
          optionA: "Increased physical fitness",
          optionB: "Severe dangerous illnesses in the future",
          optionC: "Improved mental health",
          correctAnswer: "Severe dangerous illnesses in the future",
        },
        {
          question:
            "According to the passage, what contributes to obesity besides uncontrolled eating?",
          optionA: "Eating fruits and vegetables",
          optionB:
            "Lack of physical activity, excessive TV watching, and computer games",
          optionC: "Engaging in outdoor sports",
          correctAnswer:
            "Lack of physical activity, excessive TV watching, and computer games",
        },
        {
          question:
            "What is the suggested consequence for children who do not eat fruits and vegetables?",
          optionA: "Improved immune system",
          optionB: "Increased resistance to diseases",
          optionC: "Susceptibility to more dangerous diseases",
          correctAnswer: "Susceptibility to more dangerous diseases",
        },
        {
          question:
            "What analogy is used to convey the idea that English grows with words?",
          optionA: "Flowers in a garden",
          optionB: "Birds in the sky",
          optionC: "Joy like a pool",
          correctAnswer: "Flowers in a garden",
        },
        {
          question:
            "What is the comparison made between some words and the day in the second passage?",
          optionA: "Words are darker than the day",
          optionB: "Words are brighter than the day",
          optionC: "Words are similar to the day",
          correctAnswer: "Words are brighter than the day",
        },
        {
          question: "According to the text, what is deeper than a pool?",
          optionA: "Words",
          optionB: "Birds",
          optionC: "Flowers",
          correctAnswer: "Words",
        },
        {
          question: "What is the central theme of the second passage?",
          optionA: "The beauty of gardens",
          optionB: "The importance of words",
          optionC: "The joy of birds",
          correctAnswer: "The importance of words",
        },
        {
          question:
            "What is NOT mentioned as a contributing factor to childhood obesity in the text?",
          optionA: "Lack of physical activity",
          optionB: "Excessive watching of television",
          optionC: "Regular consumption of fruits and vegetables",
          correctAnswer: "Regular consumption of fruits and vegetables",
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
            "Childhood obesity is a significant issue in school-going children, especially in towns and cities. If you look around, you will find a large number of ____ children around you.",
          options: ["Healthy", "Obese", "Active"],
          correctAnswer: "Obese",
        },
        {
          question:
            "The doctors warn that these children will face severe dangerous illnesses one day, not in the very distant future. The root cause of obesity is ____ eating.",
          options: ["Controlled", "Uncontrolled", "Balanced"],
          correctAnswer: "Uncontrolled",
        },
        {
          question:
            "The children who eat processed foods are almost sure to become ____.",
          options: ["Malnourished", "Overweight", "Underweight"],
          correctAnswer: "Overweight",
        },
        {
          question:
            "Lack of physical activity, excessive watching of television, and excessive games on the computer contribute to ____.",
          options: ["Mental health", "Physical fitness", "Obesity"],
          correctAnswer: "Obesity",
        },
        {
          question: "As gardens grow with flowers, English grows with ____.",
          options: ["Sentences", "Words", "Paragraphs"],
          correctAnswer: "Words",
        },
        {
          question:
            "Words that have secret powers, words that give joy like ____.",
          options: ["Clouds", "Birds", "Wind"],
          correctAnswer: "Birds",
        },
        {
          question:
            "Some of the words you say, both in and out of school, are ____ than the day.",
          options: ["Darker", "Brighter", "Similar"],
          correctAnswer: "Brighter",
        },
        {
          question: "And deeper than a ____.",
          options: ["River", "Ocean", "Pool"],
          correctAnswer: "Pool",
        },
        {
          question:
            "The children who do not eat fruits and vegetables become amenable to still more ____ diseases in the days to come.",
          options: ["Common", "Dangerous", "Curable"],
          correctAnswer: "Dangerous",
        },
        {
          question: "____ contribute to obesity.",
          options: [
            "Outdoor activities",
            "Lack of physical activity, excessive watching of television, and excessive games on the computer",
            "Healthy diet",
          ],
          correctAnswer:
            "Lack of physical activity, excessive watching of television, and excessive games on the computer",
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
            "Childhood obesity is not a significant problem in school-going children.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Uncontrolled eating is identified as the root cause of obesity.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Children who eat processed foods are unlikely to become obese.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Lack of physical activity does not contribute to obesity.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "English does not grow with words according to the analogy used in the passage.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Words in and out of school are not compared to the brightness of the day.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The analogy used suggests that words are deeper than a river.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Eating fruits and vegetables does not make children susceptible to dangerous diseases.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Excessive watching of television does not contribute to obesity.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The text does not mention any consequences for children who do not eat fruits and vegetables.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
