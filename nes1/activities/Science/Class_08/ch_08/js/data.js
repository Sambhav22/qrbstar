export const chapter = "Chapter - 8: Force and Pressure";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is force?",
          optionA: "Only a push",
          optionB: "Only a pull",
          optionC: "A push or a pull",
          correctAnswer: "C",
        },
        {
          question:
            "What is necessary for a force to come into effect according to the text?",
          optionA: "A stationary object",
          optionB: "Interaction between at least two objects",
          optionC: "Gravity",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is an example of non-contact force?",
          optionA: "Muscular force",
          optionB: "Frictional force",
          optionC: "Magnetic force",
          correctAnswer: "C",
        },
        {
          question:
            "What does frictional force do when two bodies are at rest?",
          optionA: "Increases",
          optionB: "Decreases",
          optionC: "Does not act",
          correctAnswer: "C",
        },
        {
          question: "What is the SI unit of force?",
          optionA: "Joule",
          optionB: "Newton",
          optionC: "Dyne",
          correctAnswer: "B",
        },
        {
          question:
            "In the example of a game of tug-of-war, what happens when two forces act in opposite directions on an object?",
          optionA: "They add up",
          optionB: "The net force is the difference between them",
          optionC: "The object does not move",
          correctAnswer: "B",
        },
        {
          question: "What is pressure defined as?",
          optionA: "Force acting per unit area",
          optionB: "Force acting on a surface",
          optionC: "Force acting in a direction",
          correctAnswer: "A",
        },
        {
          question: "What does pressure depend upon according to the text?",
          optionA: "The amount of force applied",
          optionB: "The area of contact between the force",
          optionC: "Both A and B",
          correctAnswer: "C",
        },
        {
          question:
            "Why is it easier for a camel to walk on sand than a person?",
          optionA: "Camels have stronger legs",
          optionB: "Camels have larger padded feet, reducing pressure",
          optionC: "Camels are lighter than humans",
          correctAnswer: "B",
        },
        {
          question:
            "What instrument is used for the measurement of atmospheric pressure?",
          optionA: "Thermometer",
          optionB: "Hydrometer",
          optionC: "Barometer",
          correctAnswer: "C",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "A force is either a push or a pull or ____.",
          options: {
            A: "Both",
            B: "None",
            C: "Friction",
          },
          correctAnswer: "A",
        },
        {
          question: "Forces result from ____.",
          options: {
            A: "Rest",
            B: "Interactions",
            C: "Gravity",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The downward force exerted by a brick on the hand is countered by an ____ force from the hand.",
          options: {
            A: "Upward",
            B: "Inward",
            C: "Opposite",
          },
          correctAnswer: "A",
        },
        {
          question: "Force can change the state of motion by altering ____.",
          options: {
            A: "Temperature",
            B: "Direction",
            C: "Speed",
          },
          correctAnswer: "C",
        },
        {
          question:
            "Elastic force is observed when stretching objects like a ____.",
          options: {
            A: "Rubber band",
            B: "Metal rod",
            C: "Wooden plank",
          },
          correctAnswer: "A",
        },
        {
          question: "Contact forces include ____.",
          options: {
            A: "Magnetic force",
            B: "Frictional force",
            C: "Muscular force",
          },
          correctAnswer: "C",
        },
        {
          question: "Gravitational force is always ____.",
          options: {
            A: "Attractive",
            B: "Repulsive",
            C: "Zero",
          },
          correctAnswer: "A",
        },
        {
          question: "The SI unit of force is ____.",
          options: {
            A: "Joule",
            B: "Newton",
            C: "Dyne",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The effect of force depends on the area over which the force is ____.",
          options: {
            A: "Applied",
            B: "Acting",
            C: "Distributed",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Why is it easier for a camel to walk on sand than a person?",
          options: {
            A: "Camels have stronger legs",
            B: "Camels have larger padded feet, reducing pressure",
            C: "Camels are lighter than humans",
          },
          correctAnswer: "B",
        },
        {
          question:
            "What instrument is used for the measurement of atmospheric pressure?",
          options: {
            A: "Thermometer",
            B: "Hydrometer",
            C: "Barometer",
          },
          correctAnswer: "C",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A force is either a push or a pull or both.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question:
            "Forces are the result of interactions between at least two objects.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question:
            "Frictional force only comes into play when there is relative motion between two bodies.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question:
            "Elastic force is observed when objects like a spring, rubber band, or sponge are stretched or bent.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question:
            "Contact forces include gravitational force, which is a non-contact force.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "Pressure is defined as the force acting upon per unit volume of a surface.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "The effect of force depends on the strength of the force applied.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "The Arya Samaj established a large number of educational institutions, including gurukuls, kanya-gurukuls, and DAV schools and colleges, in South India.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "Social reformers presented the main idea that an educated woman can raise the level of the whole country.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question:
            "The minimum age for a girl to get married according to the law is 18 years.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
      ],
  };
}

export var activityData;
