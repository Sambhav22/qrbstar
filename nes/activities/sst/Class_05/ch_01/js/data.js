export const chapter = "Chapter - 1: The Globe ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is a globe's primary purpose?",
        optionA: "To study the Moon and planets",
        optionB: "To represent the physical characteristics of the Earth",
        optionC: "To measure time zones",
        correctAnswer: "To represent the physical characteristics of the Earth",
      },
      {
        question: "What is the axis of a globe?",
        optionA: "The imaginary line around which the Earth rotates",
        optionB: "The grid formed by latitudes and longitudes",
        optionC: "The line connecting the North and South Poles",
        correctAnswer: "The imaginary line around which the Earth rotates",
      },
      {
        question: "What are the horizontal lines on the globe called?",
        optionA: "Longitudes",
        optionB: "Meridians",
        optionC: "Latitudes",
        correctAnswer: "Latitudes",
      },
      {
        question: "Which line of latitude marks the Equator?",
        optionA: "66½°S",
        optionB: "0°",
        optionC: "23½°N",
        correctAnswer: "0°",
      },
      {
        question: "What is the latitude of the North Pole?",
        optionA: "66½°N",
        optionB: "0°",
        optionC: "90°N",
        correctAnswer: "90°N",
      },
      {
        question: "The Tropic of Cancer is located at approximately:",
        optionA: "0°",
        optionB: "23½°N",
        optionC: "90°S",
        correctAnswer: "23½°N",
      },
      {
        question: "What is the Prime Meridian?",
        optionA: "180°E",
        optionB: "The line that marks 0° longitude",
        optionC: "The line connecting the Tropics of Cancer and Capricorn",
        correctAnswer: "The line that marks 0° longitude",
      },
      {
        question: "How many longitudes are there in total on Earth?",
        optionA: "90° in the East and 90° in the West",
        optionB: "360°",
        optionC: "0°",
        correctAnswer: "360°",
      },
      {
        question: "What is the International Date Line?",
        optionA: "The line marking 0° latitude",
        optionB: "The point where longitudes meet in the Pacific Ocean",
        optionC: "The line that divides the Tropic of Cancer and Capricorn",
        correctAnswer: "The point where longitudes meet in the Pacific Ocean",
      },
      {
        question: "How do longitudes help us?",
        optionA: "Calculate time zones",
        optionB: "Measure the Earth's circumference",
        optionC: "Determine the location of the Equator",
        correctAnswer: "Calculate time zones",
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
          "The globe is a visual representation of the physical characteristics of the _______. It is also known by the names Hindustan and Bharat.",
        options: {
          optionA: "Sun",
          optionB: "Earth",
          optionC: "Moon",
        },
        correctAnswer: "Earth",
      },
      {
        question:
          "The axis of the globe represents the imaginary line on which the Earth _______.",
        options: {
          optionA: "Spins",
          optionB: "Orbits the Moon",
          optionC: "Stays stationary",
        },
        correctAnswer: "Spins",
      },
      {
        question:
          "The horizontal lines on the globe, called _______, divide the Earth's surface into a grid.",
        options: {
          optionA: "Meridians",
          optionB: "Equators",
          optionC: "Latitudes",
        },
        correctAnswer: "Latitudes",
      },
      {
        question:
          "The latitude at the biggest circumference of the Earth is known as the _______, and is measured as 0°.",
        options: {
          optionA: "Prime Meridian",
          optionB: "Tropic of Cancer",
          optionC: "Equator",
        },
        correctAnswer: "Equator",
      },
      {
        question: "The latitude of the North Pole is _______.",
        options: {
          optionA: "66½°N",
          optionB: "0°",
          optionC: "90°N",
        },
        correctAnswer: "90°N",
      },
      {
        question:
          "The Tropic of Cancer is a line of latitude circling the Earth at _______ north of the Equator.",
        options: {
          optionA: "0°",
          optionB: "23½°N",
          optionC: "90°S",
        },
        correctAnswer: "23½°N",
      },
      {
        question:
          "The longitude running through the Old Royal Observatory at Greenwich near London is marked as _______.",
        options: {
          optionA: "0°",
          optionB: "180°E",
          optionC: "90°W",
        },
        correctAnswer: "0°",
      },
      {
        question:
          "There are _______ longitudes to the East of the Prime Meridian called the Eastern Hemisphere.",
        options: {
          optionA: "0°",
          optionB: "180°",
          optionC: "90°E",
        },
        correctAnswer: "180°",
      },
      {
        question:
          "The point where 180°E and 180°W longitudes meet and form a single line in the Pacific Ocean is called the _______.",
        options: {
          optionA: "International Date Line",
          optionB: "Prime Meridian",
          optionC: "Equator",
        },
        correctAnswer: "International Date Line",
      },
      {
        question:
          "The lines of latitude and longitude intersect one another at right angles and form a geographic grid, helping us locate a place based on its _______.",
        options: {
          optionA: "Area code",
          optionB: "Latitude and longitude",
          optionC: "Temperature",
        },
        correctAnswer: "Latitude and longitude",
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
