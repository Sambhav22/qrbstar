export const chapter = "Chapter - 1: Our Country India ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the capital of India?",
        optionA: "Mumbai",
        optionB: "New Delhi",
        optionC: "Bangalore",
        correctAnswer: "New Delhi",
      },
      {
        question:
          "India is officially known as the Republic of India, but it is also known by which other names mentioned in the text?",
        optionA: "Indus and Bharat",
        optionB: "Hindustan and Bharat",
        optionC: "Hindustan and Indus",
        correctAnswer: "Hindustan and Bharat",
      },
      {
        question: "Which major water bodies surround India?",
        optionA: "Pacific Ocean, Indian Ocean, Arctic Ocean",
        optionB: "Arabian Sea, Indian Ocean, Bay of Bengal",
        optionC: "Mediterranean Sea, Red Sea, Persian Gulf",
        correctAnswer: "Arabian Sea, Indian Ocean, Bay of Bengal",
      },
      {
        question:
          "India is the ____ largest country in terms of area in the world.",
        optionA: "Second",
        optionB: "Fifth",
        optionC: "Seventh",
        correctAnswer: "Seventh",
      },
      {
        question:
          "India is known for its diverse topography, including cold mountains, arid deserts, and vast plains. Which of the following is not a part of India's diverse topography?",
        optionA: "Vast rainforests",
        optionB: "Tropical islands",
        optionC: "Hot and humid plateaus",
        correctAnswer: "Vast rainforests",
      },
      {
        question:
          "How many states and union territories is India divided into for the purpose of administration?",
        optionA: "20 states and 10 union territories",
        optionB: "28 states and 8 union territories",
        optionC: "15 states and 12 union territories",
        correctAnswer: "28 states and 8 union territories",
      },
      {
        question:
          "Which region of India experiences an extreme climate with cold winters and hot summers?",
        optionA: "Northern Mountains",
        optionB: "Coastal Regions",
        optionC: "Peninsular Plateau",
        correctAnswer: "Northern Mountains",
      },
      {
        question: "What brings rainfall to India, as mentioned in the text?",
        optionA: "Snowfall in the hills",
        optionB: "Monsoon winds",
        optionC: "Proximity to the Arabian Sea",
        correctAnswer: "Monsoon winds",
      },
      {
        question:
          "Which part of India has a moderate climate, neither very hot nor very cold, due to its proximity to the Bay of Bengal and the Indian Ocean?",
        optionA: "Northern Plains",
        optionB: "Peninsular Plateau",
        optionC: "South India",
        correctAnswer: "South India",
      },
      {
        question:
          "NCT of Delhi is the largest metropolis in India and has its own Legislative Assembly, Lieutenant Governor, Council of Ministers, and Chief Minister. What does NCT stand for?",
        optionA: "National Capital Territory",
        optionB: "Northern Central Territory",
        optionC: "New Capital Territory",
        correctAnswer: "National Capital Territory",
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
          "India, the country we live in, is officially known as the Republic of India. New Delhi serves as its ________. It is also known by the names Hindustan and Bharat.",
        options: {
          optionA: "Language",
          optionB: "Capital",
          optionC: "Culture",
        },
        correctAnswer: "Capital",
      },
      {
        question:
          "India extends between 8° 4' and 37° 6' latitudes north of the Equator and 68° 7' and 97° 25' longitudes ________ of it.",
        options: {
          optionA: "West",
          optionB: "East",
          optionC: "South",
        },
        correctAnswer: "East",
      },
      {
        question:
          "India is the world's ________ largest country in terms of area.",
        options: {
          optionA: "Smallest",
          optionB: "Seventh",
          optionC: "Largest",
        },
        correctAnswer: "Seventh",
      },
      {
        question:
          "India can be divided into various physical divisions, including the Northern Mountains, the Northern Plains, the Peninsular Plateau, the Great Indian ________, the Coastal Regions, and ________.",
        options: {
          optionA: "Rainforest, Plains",
          optionB: "Desert, Islands",
          optionC: "Plateau, Mountains",
        },
        correctAnswer: "Desert, Islands",
      },
      {
        question:
          "For the purpose of administration, India is divided into 28 states and ________ union territories.",
        options: {
          optionA: "10",
          optionB: "5",
          optionC: "8",
        },
        correctAnswer: "8",
      },
      {
        question:
          "Rainfall in India is mainly brought by the ________ winds, which rise from the Indian Ocean and sweep over India.",
        options: {
          optionA: "Snowfall",
          optionB: "Monsoon",
          optionC: "Typhoon",
        },
        correctAnswer: "Monsoon",
      },
      {
        question:
          "India has diversity in language, food, folk-dance, clothes, cultures, and traditions, promoting the principle of 'Unity in ________.'",
        options: {
          optionA: "Equality",
          optionB: "Diversity",
          optionC: "Uniformity",
        },
        correctAnswer: "Diversity",
      },
      {
        question: "India is entirely located in the ________ Hemisphere.",
        options: {
          optionA: "Southern",
          optionB: "Eastern",
          optionC: "Northern",
        },
        correctAnswer: "Northern",
      },
      {
        question:
          "India is surrounded by three major water bodies: the Arabian Sea to the ________, the Indian Ocean to the ________, and the Bay of Bengal to the ________.",
        options: {
          optionA: "North, East, West",
          optionB: "East, North, South",
          optionC: "West, South, East",
        },
        correctAnswer: "West, South, East",
      },
      {
        question: "India is also known by the names Hindustan and ________.",
        options: {
          optionA: "America",
          optionB: "Bharat",
          optionC: "China",
        },
        correctAnswer: "Bharat",
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
          "India is bordered by Afghanistan and Pakistan to the north-west.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question: "India is located entirely in the Southern Hemisphere.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "India has cold mountains, arid deserts, vast plains, and hot and humid plateaus.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question: "India is the world's most populated country.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "India is a peninsula surrounded by the Arabian Sea, the Indian Ocean, and the Bay of Bengal.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "India is the second-largest country in the world in terms of area.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "The NCT of Delhi has its own Legislative Assembly, Lieutenant Governor, Council of Ministers, and Chief Minister.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question: "Rainfall in India is mainly brought by the monsoon winds.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "The climate in South India is characterized by extreme heat due to its proximity to the Arabian Sea.",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "India has diversity in language, food, folk-dance, clothes, cultures, and traditions, promoting the principle of 'Unity in Diversity.'",
        options: {
          optionA: "True",
          optionB: "False",
        },
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
