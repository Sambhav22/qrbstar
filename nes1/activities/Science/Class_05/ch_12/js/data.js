export const chapter = "Chapter - 12: The Moon and artificial satellites";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the distance of the moon from the Earth?",
          optionA: "A) 384,400 km",
          optionB: "B) 238,855 km",
          optionC: "C) 500,000 km",
          correctAnswer: "A",
        },
        {
          question: "Why does the moon look bright in the sky?",
          optionA: "A) It emits light of its own",
          optionB: "B) It reflects the light of the sun",
          optionC: "C) It absorbs sunlight",
          correctAnswer: "B",
        },
        {
          question: "How old is the moon?",
          optionA: "A) 4,500 million years",
          optionB: "B) 9,500 million years",
          optionC: "C) 1,000 million years",
          correctAnswer: "B",
        },
        {
          question: "What is the main reason life does not exist on the moon?",
          optionA: "A) Lack of water",
          optionB: "B) Extreme temperatures",
          optionC: "C) Absence of air and water",
          correctAnswer: "C",
        },
        {
          question:
            "How does the gravity on the moon compare to that of Earth?",
          optionA: "A) Moon's gravity is greater than Earth's",
          optionB: "B) Moon's gravity is equal to Earth's",
          optionC: "C) Moon's gravity is 1/6th of Earth's",
          correctAnswer: "C",
        },
        {
          question: "What causes the phases of the moon?",
          optionA: "A) Rotation of the moon on its axis",
          optionB: "B) Revolution of the moon around the Earth",
          optionC: "C) Interaction with other celestial bodies",
          correctAnswer: "B",
        },
        {
          question:
            "How long does it take for the moon to complete one rotation on its own axis?",
          optionA: "A) 24 hours",
          optionB: "B) 27 days 7 hours 43 minutes",
          optionC: "C) 365 days",
          correctAnswer: "B",
        },
        {
          question: "What causes tides on Earth?",
          optionA: "A) Wind patterns",
          optionB: "B) Gravitational forces of the sun and moon",
          optionC: "C) Earth's rotation",
          correctAnswer: "B",
        },
        {
          question: "What is the primary purpose of communication satellites?",
          optionA: "A) Studying space",
          optionB: "B) Transmitting signals across the world",
          optionC: "C) Taking pictures of clouds and storms",
          correctAnswer: "B",
        },
        {
          question: "What causes a solar eclipse?",
          optionA: "A) Earth comes between the sun and the moon",
          optionB: "B) Moon comes between the Earth and the sun",
          optionC: "C) Earth, moon, and sun are in a straight line",
          correctAnswer: "B",
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
            "The distance of the moon from the earth is approximately _______ km.",
          options: ["A) 238,855", "B) 384,400", "C) 500,000"],
          correctAnswer: "B) 384,400",
        },
        {
          question:
            "The age of the moon is about _______ million years, the same as that of the earth.",
          options: ["A) 4,500", "B) 9,500", "C) 1,000"],
          correctAnswer: "B) 9,500",
        },
        {
          question: "The moon's surface is covered with dark grey _______.",
          options: ["A) Dust", "B) Sand", "C) Water"],
          correctAnswer: "A) Dust",
        },
        {
          question:
            "Life does not exist on the moon due to the absence of _______ and _______.",
          options: ["A) Air, water", "B) Sunlight, gravity", "C) Oxygen, soil"],
          correctAnswer: "A) Air, water",
        },
        {
          question:
            "The force of gravity on the moon is only _______ of that on the earth.",
          options: ["A) 1/2", "B) 1/6", "C) 1/10"],
          correctAnswer: "B) 1/6",
        },
        {
          question:
            "The phases of the moon depend on its position in relation to the _______ and the _______.",
          options: [
            "A) Stars, planets",
            "B) Sun, earth",
            "C) Comets, asteroids",
          ],
          correctAnswer: "B) Sun, earth",
        },
        {
          question:
            "Tides are caused by the gravity of the _______ and the _______.",
          options: ["A) Mars, Jupiter", "B) Moon, sun", "C) Venus, Mercury"],
          correctAnswer: "B) Moon, sun",
        },
        {
          question:
            "_______ satellites are man-made objects that revolve around the earth.",
          options: ["A) Natural", "B) Artificial", "C) Celestial"],
          correctAnswer: "B) Artificial",
        },
        {
          question:
            "Communication satellites are used to transmit radio, telephone, and television signals across the world using _______.",
          options: ["A) Internet", "B) Microwave", "C) Radio waves"],
          correctAnswer: "C) Radio waves",
        },
        {
          question:
            "A solar eclipse occurs when the _______ comes in between the earth and the sun.",
          options: ["A) Moon", "B) Mars", "C) Venus"],
          correctAnswer: "A) Moon",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The moon's distance from the Earth is 500,000 km.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The age of the moon is around 4,500 million years.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The moon's surface is covered with dark grey sand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Life exists on the moon due to the presence of air and water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The gravity on the moon is equal to that on Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The phases of the moon depend on its position in relation to the stars and planets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Tides are caused by the gravity of Mars and Jupiter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Natural satellites are objects made by humans that revolve around the Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Communication satellites are primarily used for studying space.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A solar eclipse occurs when the Earth comes between the moon and the sun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
