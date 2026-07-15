export const chapter = "Chapter - 1: Food We Eat";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary purpose of eating food?",
        optionA: "To taste different flavors",
        optionB: "To build strong bones and muscles",
        optionC: "To obtain energy and stay healthy",
        correctAnswer: "To obtain energy and stay healthy",
      },
      {
        question:
          "Which of the following types of food are obtained from plants?",
        optionA: "Milk and eggs",
        optionB: "Fruits and vegetables",
        optionC: "Honey and meat",
        correctAnswer: "Fruits and vegetables",
      },
      {
        question: "Foods like pulses, beans, and eggs are known for:",
        optionA: "Giving energy",
        optionB: "Making bones and muscles strong",
        optionC: "Making you healthy and fit",
        correctAnswer: "Making bones and muscles strong",
      },
      {
        question:
          "Which group of foods provides energy for various activities?",
        optionA: "Cereals, potato, and oil",
        optionB: "Fruits, vegetables, and nuts",
        optionC: "Pulses, milk, and eggs",
        correctAnswer: "Cereals, potato, and oil",
      },
      {
        question: "What is a balanced diet?",
        optionA: "A diet that only includes junk food",
        optionB:
          "A diet that contains foods that give energy, make you strong, and keep you healthy",
        optionC: "A diet that excludes all animal-based products",
        correctAnswer:
          "A diet that contains foods that give energy, make you strong, and keep you healthy",
      },
      {
        question: "Which foods are referred to as junk foods in the text?",
        optionA: "Fruits and vegetables",
        optionB: "Cereals and pulses",
        optionC: "Foods eaten more for taste than health",
        correctAnswer: "Foods eaten more for taste than health",
      },
      {
        question: "What is the source of milk, honey, eggs, and meat?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Cereals and pulses",
        correctAnswer: "Animals",
      },
      {
        question: "Which foods help to build strong bones and muscles?",
        optionA: "Fruits and vegetables",
        optionB: "Pulses, milk, beans, and eggs",
        optionC: "Cereals, potato, oil, ghee, and sugar",
        correctAnswer: "Pulses, milk, beans, and eggs",
      },
      {
        question:
          "What do foods like fruits, vegetables, and some kinds of nuts do for us?",
        optionA: "Give us energy",
        optionB: "Make us healthy and fit, and keep us away from diseases",
        optionC: "Build strong bones and muscles",
        correctAnswer:
          "Make us healthy and fit, and keep us away from diseases",
      },
      {
        question: "Why is a balanced diet important?",
        optionA: "It makes food taste better",
        optionB: "It helps in weight loss",
        optionC: "It keeps us healthy and fit",
        correctAnswer: "It keeps us healthy and fit",
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
          "We all eat food to live. It gives us energy to work. It helps us to ________.",
        optionA: "learn",
        optionB: "grow",
        optionC: "sleep",
        correctAnswer: "grow",
      },
      {
        question:
          "Foods such as pulses, milk, beans, eggs, etc. build our bones and muscles and make them ________.",
        optionA: "strong",
        optionB: "tall",
        optionC: "colorful",
        correctAnswer: "strong",
      },
      {
        question:
          "Foods such as cereals, potato, oil, ghee, sugar, etc. give us energy to do different ________.",
        optionA: "hobbies",
        optionB: "activities",
        optionC: "jobs",
        correctAnswer: "activities",
      },
      {
        question:
          "A balanced diet is very important to keep us ________ and fit.",
        optionA: "wealthy",
        optionB: "unhealthy",
        optionC: "healthy",
        correctAnswer: "healthy",
      },
      {
        question: "Sometimes, we eat food more for taste than for ________.",
        optionA: "knowledge",
        optionB: "health",
        optionC: "fun",
        correctAnswer: "health",
      },
      {
        question: "Foods that taste good are not necessarily ________.",
        optionA: "enjoyable",
        optionB: "nutritious",
        optionC: "expensive",
        correctAnswer: "nutritious",
      },
      {
        question: "Milk, honey, eggs, and meat are obtained from ________.",
        optionA: "plants",
        optionB: "humans",
        optionC: "animals",
        correctAnswer: "animals",
      },
      {
        question:
          "Foods such as fruits, vegetables, some kinds of nuts, etc., make us healthy and fit and keep us away from ________.",
        optionA: "traffic",
        optionB: "pollution",
        optionC: "diseases",
        correctAnswer: "diseases",
      },
      {
        question:
          "All the foods that we have in a day are called our ________.",
        optionA: "daily intake",
        optionB: "diet",
        optionC: "groceries",
        correctAnswer: "diet",
      },
      {
        question: "Milk is used to make ghee, butter, curd, and ________.",
        optionA: "vegetables",
        optionB: "fruits",
        optionC: "other dairy products",
        correctAnswer: "other dairy products",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Eating food is not essential for human survival.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "All food that tastes good is necessarily healthy.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Fruits and vegetables are types of foods obtained from animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "A balanced diet is important to keep us healthy and fit.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Milk, honey, eggs, and meat are all obtained from plants.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Foods such as cereals, potato, oil, and ghee provide energy for various activities.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Food primarily comes from different sources, including plants and animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Foods like pulses, milk, and eggs are known for making bones and muscles strong.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Junk foods are always a healthy choice for a meal.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "A day's worth of food is known as a 'balanced diet.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
