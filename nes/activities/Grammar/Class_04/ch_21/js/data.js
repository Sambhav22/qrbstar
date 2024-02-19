export const chapter = "Chapter -21: Application Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the main reason mentioned in the first text for requesting additional library periods?",
          optionA: "Lack of interest in reading",
          optionB: "Insufficient time for reading",
          optionC: "Inadequate library facilities",
          correctAnswer: "Insufficient time for reading",
        },
        {
          question:
            "In the second text, what is the reason for Avnish Khanna's request for leave?",
          optionA: "School event participation",
          optionB: "Fever",
          optionC: "Family function",
          correctAnswer: "Fever",
        },
        {
          question:
            "In the third text, what is the request made by the student regarding the traffic hazard near the school gate?",
          optionA: "Installation of traffic lights",
          optionB: "Construction of a speed-breaker",
          optionC: "Widening of the road",
          correctAnswer: "Construction of a speed-breaker",
        },
        {
          question:
            "What is the purpose mentioned in the fourth text for Kritika/Ankush requesting a dictionary from the library?",
          optionA: "General reading",
          optionB: "School project",
          optionC: "Participation in a spelling contest",
          correctAnswer: "Participation in a spelling contest",
        },
        {
          question:
            "In the fifth text, what does Naina request from the Principal?",
          optionA: "Permission to organize an event",
          optionB: "Approval for a school project",
          optionC: "Planning an excursion to a museum",
          correctAnswer: "Planning an excursion to a museum",
        },
        {
          question:
            "In the first text, how many library periods does the student currently have in a week?",
          optionA: "One",
          optionB: "Two",
          optionC: "Four",
          correctAnswer: "Two",
        },
        {
          question:
            "According to the second text, how many days of leave is Avnish Khanna requesting?",
          optionA: "One day",
          optionB: "Two days",
          optionC: "Three days",
          correctAnswer: "Two days",
        },
        {
          question:
            "In the third text, where does the student suggest the speed-breaker should be constructed?",
          optionA: "Inside the school premises",
          optionB: "On both sides of the school gate",
          optionC: "Away from the school vicinity",
          correctAnswer: "On both sides of the school gate",
        },
        {
          question:
            "What is the reason mentioned in the fourth text for requesting a dictionary from the library?",
          optionA: "School assignment",
          optionB: "Book report",
          optionC: "Spell-Bee Contest participation",
          correctAnswer: "Spell-Bee Contest participation",
        },
        {
          question:
            "According to the fifth text, what does the museum on the Western Road display?",
          optionA: "Modern art",
          optionB: "Rare coins, stamps, statues, weapons, and fossils",
          optionC: "Agricultural tools and machinery",
          correctAnswer: "Rare coins, stamps, statues, weapons, and fossils",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "In the first text, the student requests the increase of library periods from __________ to four on Tuesday and Thursday.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Two",
        },
        {
          question:
            "Avnish Khanna requests leave of absence from school due to being laid up with fever for __________ days from 11 September to 12 September, 20xx.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Two",
        },
        {
          question:
            "In the third text, the student suggests the construction of a speed-breaker on both sides of the school gate to control speeding vehicles and prevent __________.",
          options: ["Noise pollution", "Traffic congestion", "Accidents"],
          correctAnswer: "Accidents",
        },
        {
          question:
            "In the fourth text, Kritika/Ankush requests permission to draw an English-Hindi dictionary from the library for participating in the 'Spell-Bee Contest' __________.",
          options: ["Next week", "Next month", "Next semester"],
          correctAnswer: "Next month",
        },
        {
          question:
            "Naina, in the fifth text, requests an excursion to a new museum built on the Western Road, which displays rare coins, stamps, statues, weapons, fossils, dolls, toys, and a large variety of __________.",
          options: ["Paintings", "Books", "Agricultural tools"],
          correctAnswer: "Dolls and toys",
        },
        {
          question:
            "The student in the first text mentions that the current library periods cover only __________ minutes in a day.",
          options: ["30", "45", "60"],
          correctAnswer: "45",
        },
        {
          question:
            "Avnish Khanna requests leave from 11 September to 12 September, 20xx, due to being laid up with __________ since last evening.",
          options: ["Cough", "Fever", "Headache"],
          correctAnswer: "Fever",
        },
        {
          question:
            "In the third text, the student suggests constructing a speed-breaker on both sides of the school gate to prevent speeding vehicles from posing a hazard to students and __________.",
          options: ["Teachers", "Parents", "Other people"],
          correctAnswer: "Other people",
        },
        {
          question:
            "Kritika/Ankush requests permission to draw an English-Hindi dictionary from the library for participating in the 'Spell-Bee Contest' __________.",
          options: ["This week", "Next month", "This semester"],
          correctAnswer: "Next month",
        },
        {
          question:
            "In the fifth text, Naina describes the museum on the Western Road as having rare coins, stamps, statues, weapons, fossils, dolls, toys, and a large variety of __________.",
          options: ["Paintings", "Agricultural tools", "Good Manners"],
          correctAnswer: "Good Manners",
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
            "The student in the first text requests an increase in library periods to four on Tuesday and Thursday.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Avnish Khanna requests leave due to being laid up with a headache for two days from 11 September to 12 September, 20xx.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the third text, the student suggests constructing a speed-breaker on both sides of the school gate to control traffic congestion.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Kritika/Ankush requests permission to draw an English-Hindi dictionary from the library for participating in a cooking contest next month.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Naina, in the fifth text, requests an excursion to a museum displaying rare coins, stamps, statues, weapons, fossils, dolls, and toys.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The student in the first text mentions that the current library periods cover only 30 minutes in a day.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Avnish Khanna requests leave due to being laid up with fever since last evening for two days from 11 September to 12 September, 20xx.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the third text, the student suggests constructing a speed-breaker on both sides of the school gate to prevent accidents.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Kritika/Ankush requests permission to draw an English-Hindi dictionary from the library for participating in a spelling contest next month.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Naina describes the museum on the Western Road as having rare coins, stamps, statues, weapons, fossils, dolls, toys, and a large variety of books.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
