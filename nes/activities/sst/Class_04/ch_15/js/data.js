export const chapter = "Chapter - 15: Life in the Northern Mountains ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the capital of Jammu and Kashmir?",
        optionA: "Srinagar",
        optionB: "Jammu",
        optionC: "Leh",
        correctAnswer: "Srinagar",
      },
      {
        question: "Which union territory was formed in 2019?",
        optionA: "Ladakh",
        optionB: "Himachal Pradesh",
        optionC: "Uttarakhand",
        correctAnswer: "Ladakh",
      },
      {
        question: "What is the main river flowing through Ladakh?",
        optionA: "Yamuna",
        optionB: "Ganges",
        optionC: "Indus",
        correctAnswer: "Indus",
      },
      {
        question: "Which of the following animals is NOT found in Ladakh?",
        optionA: "Yak",
        optionB: "Blue Sheep",
        optionC: "Tiger",
        correctAnswer: "Tiger",
      },
      {
        question:
          "Which state is famous for its orchards and the cultivation of apples, pears, and plums?",
        optionA: "Himachal Pradesh",
        optionB: "Sikkim",
        optionC: "Uttarakhand",
        correctAnswer: "Himachal Pradesh",
      },
      {
        question: "What is the main language spoken in Uttarakhand?",
        optionA: "Garhwali",
        optionB: "Nepali",
        optionC: "Hindi",
        correctAnswer: "Hindi",
      },
      {
        question:
          "Which state is located between Nepal and Bhutan and is known for the Kanchenjunga peak?",
        optionA: "Himachal Pradesh",
        optionB: "Sikkim",
        optionC: "Uttarakhand",
        correctAnswer: "Sikkim",
      },
      {
        question: "What is the main occupation in Arunachal Pradesh?",
        optionA: "Fishing",
        optionB: "Farming",
        optionC: "Hunting",
        correctAnswer: "Farming",
      },
      {
        question: "Which state is known as the 'rainiest place in the world'?",
        optionA: "Meghalaya",
        optionB: "Nagaland",
        optionC: "Manipur",
        correctAnswer: "Meghalaya",
      },
      {
        question: "What is the capital of Nagaland?",
        optionA: "Kohima",
        optionB: "Imphal",
        optionC: "Aizawl",
        correctAnswer: "Kohima",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Jammu and Kashmir became a union territory in ____.",
        options: ["2018", "2019", "2020"],
        correctAnswer: "2019",
      },
      {
        question: "Srinagar is the ____ capital of Jammu and Kashmir.",
        options: ["summer", "winter", "year-round"],
        correctAnswer: "summer",
      },
      {
        question:
          "Ladakh is a union territory located to the ____ of Himachal Pradesh.",
        options: ["south", "east", "north"],
        correctAnswer: "north",
      },
      {
        question:
          "The highest battle field, Siachen Glacier, is located in ____.",
        options: ["Himachal Pradesh", "Ladakh", "Uttarakhand"],
        correctAnswer: "Ladakh",
      },
      {
        question:
          "In Ladakh, an important antelope called ____ is found, whose hair is used to make the finest quality of wool called shahtoosh.",
        options: ["yak", "chiru", "bharal"],
        correctAnswer: "chiru",
      },
      {
        question:
          "Himachal Pradesh is known for its hill stations, including Shimla, Kullu, Manali, Dalhousie, and Dharamshala, with Shimla being its ____.",
        options: ["summer capital", "winter capital", "year-round capital"],
        correctAnswer: "summer capital",
      },
      {
        question: "Dehradun is the ____ capital of Uttarakhand.",
        options: ["summer", "winter", "year-round"],
        correctAnswer: "winter",
      },
      {
        question: "Sikkim is situated between ____ and Bhutan.",
        options: ["Nepal", "Tibet", "Bangladesh"],
        correctAnswer: "Nepal",
      },
      {
        question:
          "Arunachal Pradesh is called so because the ____ is first seen here.",
        options: ["sunset", "sunrise", "moonrise"],
        correctAnswer: "sunrise",
      },
      {
        question: "Meghalaya is famous for being the ____ place in the world.",
        options: ["driest", "coldest", "rainiest"],
        correctAnswer: "rainiest",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Srinagar is the summer capital of Jammu and Kashmir.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Ladakh has a dense population due to its high mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Siachen Glacier is the highest battle field located in Ladakh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Yak and bharal (blue sheep) are among the animals found in Ladakh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Shimla is the capital of Himachal Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Dehradun is the year-round capital of Uttarakhand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Kanchenjunga is the highest mountain peak in India located in Sikkim.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Farming is the main occupation in Arunachal Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Mawsynram is the driest place in the world located in Meghalaya.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The people of Nagaland make articles from the woods of bamboo, teak, and cane trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
