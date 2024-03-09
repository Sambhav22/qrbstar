export const chapter = "Chapter -22: The Three Runners";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "In South Africa, who primarily ruled the country during the time mentioned in the passage?",
          optionA: "Black people",
          optionB: "Indian people",
          optionC: "White people",
          correctAnswer: "White people",
        },
        {
          question:
            "Which areas were restricted for entry only to white people?",
          optionA: "Factories",
          optionB: "Parks",
          optionC: "Hospitals",
          correctAnswer: "Parks",
        },
        {
          question:
            "What was required for black laborers to enter whites-only areas for work?",
          optionA: "Money",
          optionB: "Permit",
          optionC: "Recommendation letter",
          correctAnswer: "Permit",
        },
        {
          question:
            "What did one of the black men whisper to his companion when they saw the policeman?",
          optionA: "Hide",
          optionB: "Run",
          optionC: "Fight",
          correctAnswer: "Run",
        },
        {
          question:
            "Why did the black man with the permit tell his companion to run?",
          optionA: "For exercise",
          optionB: "To trick the policeman",
          optionC: "To find a hiding place",
          correctAnswer: "To trick the policeman",
        },
        {
          question:
            "What did the black man produce when asked for a permit by the policeman?",
          optionA: "Driver's license",
          optionB: "ID card",
          optionC: "Permit",
          correctAnswer: "Permit",
        },
        {
          question:
            "Why did the policeman become taken aback after seeing the permit?",
          optionA: "Because it was fake",
          optionB: "Because he realized he had been tricked",
          optionC: "Because he forgot his glasses",
          correctAnswer: "Because he realized he had been tricked",
        },
        {
          question:
            "What was the reason given by the black man without the permit for running?",
          optionA: "To catch a bus",
          optionB: "To follow his doctor's advice",
          optionC: "To meet a friend",
          correctAnswer: "To follow his doctor's advice",
        },
        {
          question:
            "How did the black man justify his friend running alongside him?",
          optionA: "He was trying to catch a thief",
          optionB: "He was also following his doctor's advice",
          optionC: "He was trying to impress a girl",
          correctAnswer: "He was also following his doctor's advice",
        },
        {
          question:
            "Why did the black man not stop when the policeman was chasing him?",
          optionA: "He didn't see the policeman",
          optionB: "He thought the policeman was running for exercise",
          optionC: "He wanted to trick the policeman",
          correctAnswer: "He thought the policeman was running for exercise",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "In South Africa, the white people ruled the country and discriminated against the ________ people.",
          optionA: "black",
          optionB: "Indian",
          optionC: "Asian",
          correctAnswer: "black",
        },
        {
          question:
            "Most of the labourers in the restricted areas were ________ people.",
          optionA: "white",
          optionB: "black",
          optionC: "Indian",
          correctAnswer: "black",
        },
        {
          question:
            "The black laborers needed a ________ to enter whites-only areas for work.",
          optionA: "ticket",
          optionB: "permit",
          optionC: "coupon",
          correctAnswer: "permit",
        },
        {
          question:
            "When they saw the policeman coming towards them, one of the black men whispered to his companion, '________!'",
          optionA: "Hide",
          optionB: "Run",
          optionC: "Fight",
          correctAnswer: "Run",
        },
        {
          question:
            "The black man with the permit whispered to his companion to run because he had an ________ to work in the area.",
          optionA: "appointment",
          optionB: "interview",
          optionC: "permit",
          correctAnswer: "permit",
        },
        {
          question:
            "When asked to show his permit, the man without the permit ________ in his pocket and finally produced it.",
          optionA: "laughed",
          optionB: "fumbled",
          optionC: "slept",
          correctAnswer: "fumbled",
        },
        {
          question:
            "The policeman was taken aback when the man without the permit showed it because he realized he had been ________.",
          optionA: "fooled",
          optionB: "tricked",
          optionC: "pranked",
          correctAnswer: "tricked",
        },
        {
          question:
            "The black man without the permit justified his running by saying it was on his ________ advice.",
          optionA: "lawyer's",
          optionB: "friend's",
          optionC: "doctor's",
          correctAnswer: "doctor's",
        },
        {
          question:
            "The black man justified his friend running alongside him by saying his friend's doctor had also advised him to ________.",
          optionA: "walk",
          optionB: "run",
          optionC: "exercise",
          correctAnswer: "run",
        },
        {
          question:
            "The black man did not stop when the policeman was chasing him because he thought the policeman was running for ________.",
          optionA: "exercise",
          optionB: "fun",
          optionC: "competition",
          correctAnswer: "exercise",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The white people ruled South Africa and discriminated against the black people.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Black laborers in South Africa needed a permit to enter whites-only areas for work.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "When the black men saw the policeman, they whispered to each other to fight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The black man with the permit whispered to his companion to run because he didn't have a permit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The man without the permit fumbled in his pocket and finally produced his permit when asked by the policeman.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The policeman realized he had been tricked when the man without the permit showed it to him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The black man without the permit justified his running by saying it was on his friend's advice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The black man justified his friend running alongside him by saying his friend's doctor had advised him to walk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The black man did not stop when the policeman was chasing him because he thought the policeman was running for fun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The black man thought the policeman was running for exercise when he chased after him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
