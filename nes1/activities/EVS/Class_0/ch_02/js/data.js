export const chapter = "Chapter - 2: Let's Check Our Surroundings";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
          question: "What is the area around our house called?",
          optionA: "Neighborhood",
          optionB: "Surroundings",
          optionC: "Environment",
          correctAnswer: "Surroundings",
         }),
      shuffleOptions({
          question:
            "What is one of the things that should not be present in our surroundings according to the text?",
          optionA: "Deposition of water",
          optionB: "Deposition of waste",
          optionC: "Deposition of leaves",
          correctAnswer: "Deposition of waste",
         }),
      shuffleOptions({
          question:
            "To maintain clean surroundings, what should be checked regularly?",
          optionA: "Air quality",
          optionB: "Limited use of plastic bags",
          optionC: "Internet speed",
          correctAnswer: "Limited use of plastic bags",
         }),
      shuffleOptions({
          question:
            "What is one of the measures mentioned in the text to prevent clogging of drains?",
          optionA: "Cleaning the drains once a year",
          optionB: "Tree plantation",
          optionC: "Avoiding waste disposal in drains",
          correctAnswer: "Avoiding waste disposal in drains",
         }),
      shuffleOptions({
          question:
            "What is recommended to ensure the proper disposal of waste in the text?",
          optionA: "Burning waste in the backyard",
          optionB: "Proper arrival of waste-taking vans",
          optionC: "Dumping waste in the surroundings",
          correctAnswer: "Proper arrival of waste-taking vans",
         }),
      shuffleOptions({
          question:
            "According to the text, what will result in a neat and clean environment?",
          optionA: "Using more plastic bags",
          optionB: "Regularly checking air quality",
          optionC: "Following the mentioned guidelines",
          correctAnswer: "Following the mentioned guidelines",
         }),
      shuffleOptions({
          question:
            "What should be limited for maintaining clean surroundings?",
          optionA: "Tree plantation",
          optionB: "Use of plastic bags",
          optionC: "Consumption of fruits",
          correctAnswer: "Use of plastic bags",
         }),
      shuffleOptions({
          question:
            "What is one of the key factors mentioned for living a healthy life in the text?",
          optionA: "Regular exercise",
          optionB: "Clean surroundings",
          optionC: "Fast food consumption",
          correctAnswer: "Clean surroundings",
         }),
      shuffleOptions({
          question:
            "What term is used in the text for the accumulation of water around the house?",
          optionA: "Waterlogging",
          optionB: "Puddling",
          optionC: "Deposition of water",
          correctAnswer: "Waterlogging",
         }),
      shuffleOptions({
          question:
            "What is suggested in the text to prevent waste-related issues in our surroundings?",
          optionA: "Ignoring waste disposal practices",
          optionB: "Planting more trees",
          optionC: "Ensuring proper arrival of waste-taking vans",
          correctAnswer: "Ensuring proper arrival of waste-taking vans",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2)
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The area around our house is called our ____________.",
          optionA: "Neighborhood",
          optionB: "Backyard",
          optionC: "Surroundings",
          correctAnswer: "Surroundings",
         }),
      shuffleOptions({
          question:
            "It should be clean and there should be ______ deposition of water.",
          optionA: "No",
          optionB: "Limited",
          optionC: "Excessive",
          correctAnswer: "No",
         }),
      shuffleOptions({
          question:
            "To maintain clean surroundings, we should check for the following: limited use of ______ bags.",
          optionA: "Plastic",
          optionB: "Paper",
          optionC: "Cloth",
          correctAnswer: "Plastic",
         }),
      shuffleOptions({
          question:
            "________ of drains can lead to issues in our surroundings.",
          optionA: "Cleaning",
          optionB: "Clogging",
          optionC: "Widening",
          correctAnswer: "Clogging",
         }),
      shuffleOptions({
          question: "Proper arrival of ______ is essential for waste disposal.",
          optionA: "Mail deliveries",
          optionB: "Waste taking vans",
          optionC: "Food delivery services",
          correctAnswer: "Waste taking vans",
         }),
      shuffleOptions({
          question:
            "In this way, our surroundings will be neat and clean, and we will live a ______ life.",
          optionA: "Chaotic",
          optionB: "Healthy",
          optionC: "Busy",
          correctAnswer: "Healthy",
         }),
      shuffleOptions({
          question:
            "The area around our house is referred to as our ____________.",
          optionA: "Neighborhood",
          optionB: "Environment",
          optionC: "Surroundings",
          correctAnswer: "Surroundings",
         }),
      shuffleOptions({
          question:
            "There should be ______ deposition of water in our surroundings.",
          optionA: "Limited",
          optionB: "Excessive",
          optionC: "No",
          correctAnswer: "No",
         }),
      shuffleOptions({
          question:
            "We should check for the limited use of ______ bags to maintain clean surroundings.",
          optionA: "Plastic",
          optionB: "Paper",
          optionC: "Metal",
          correctAnswer: "Plastic",
         }),
      shuffleOptions({
          question:
            "The ______ of drains can result in environmental problems.",
          optionA: "Cleaning",
          optionB: "Clogging",
          optionC: "Widening",
          correctAnswer: "Clogging",
        },
      ],
   };

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "The area around our house is referred to as our surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "To maintain cleanliness, there should be limited deposition of water in our surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Tree plantation is not recommended for contributing to a healthier environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Proper arrival of waste-taking vans is not essential for efficient waste disposal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Living a healthy life is not emphasized in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "To prevent the clogging of drains, waste disposal in drains is recommended.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Checking for proper waste disposal is not part of the routine to ensure cleanliness in our surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Limited use of plastic bags is not suggested as a measure for maintaining clean surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Waterlogging is used in the text for the accumulation of water around the house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Ensuring proper arrival of waste-taking vans is not recommended to prevent waste-related issues.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
