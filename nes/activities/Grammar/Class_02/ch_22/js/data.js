export const chapter = "Chapter - 22:  Essay Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the occupation of the person mentioned in the first text?",
          optionA: "Teacher",
          optionB: "Housewife",
          optionC: "Doctor",
          correctAnswer: "Housewife",
        },
        {
          question:
            "How does the person in the first text spend her free time?",
          optionA: "Watching TV",
          optionB: "Reading books",
          optionC: "Cooking",
          correctAnswer: "Reading books",
        },
        {
          question:
            "What did the person in the second text see during the zoo visit?",
          optionA: "Fish and dolphins",
          optionB: "Lions, tigers, and monkeys",
          optionC: "Elephants and giraffes",
          correctAnswer: "Lions, tigers, and monkeys",
        },
        {
          question: "What made the narrator happy during the zoo visit?",
          optionA: "Riding the zoo train",
          optionB: "Eating lunch",
          optionC: "Seeing birds",
          correctAnswer: "Riding the zoo train",
        },
        {
          question:
            "How is the principal of the school described in the third text?",
          optionA: "Friendly and lenient",
          optionB: "Strict and punctual",
          optionC: "Lazy and uninterested",
          correctAnswer: "Strict and punctual",
        },
        {
          question:
            "What activities, besides studies, are mentioned as part of the school curriculum?",
          optionA: "Swimming and tennis",
          optionB: "Dancing, karate, and music",
          optionC: "Painting and sculpture",
          correctAnswer: "Dancing, karate, and music",
        },
        {
          question: "How many rooms are there in the narrator's school?",
          optionA: "Ten",
          optionB: "Fifteen",
          optionC: "Twenty",
          correctAnswer: "Twenty",
        },
        {
          question: "What does the narrator think about their school?",
          optionA: "Dislikes it",
          optionB: "Likes it very much",
          optionC: "Is indifferent",
          correctAnswer: "Likes it very much",
        },
        {
          question: "What is the common theme in the first and third texts?",
          optionA: "Visiting the zoo",
          optionB: "Family members",
          optionC: "Describing school",
          correctAnswer: "Family members",
        },
        {
          question:
            "According to the second text, what did the family do after lunch during the zoo visit?",
          optionA: "Visited another zoo",
          optionB: "Returned home happily",
          optionC: "Explored the city",
          correctAnswer: "Returned home happily",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "My mother's name is Mrs. _____ _.",
            options: ["Smith", "Johnson", "Sharma"],
            answer: "Johnson",
          },
          {
            question: "She is a ___________.",
            options: ["Teacher", "Engineer", "Housewife"],
            answer: "Housewife",
          },
          {
            question: "She never shouts ___________.",
            options: ["At me", "In anger", "Loudly"],
            answer: "At me",
          },
          {
            question:
              "My mother looks after me in every way and also helps me in my ___________.",
            options: ["Hobbies", "Chores", "Studies"],
            answer: "Studies",
          },
          {
            question: "My mother likes to read ___________ in her free time.",
            options: ["Magazines", "Books", "Newspapers"],
            answer: "Books",
          },
          {
            question: "Last Sunday, I visited the zoo with my ___________.",
            options: ["Friends", "Parents", "Siblings"],
            answer: "Parents",
          },
          {
            question:
              "We saw lions, tigers, monkeys, foxes, deer, chimpanzees, and other ___________.",
            options: ["Domestic animals", "Insects", "Wild animals"],
            answer: "Wild animals",
          },
          {
            question: "We rode the ___________.",
            options: ["Bus", "Zoo train", "Carousel"],
            answer: "Zoo train",
          },
          {
            question: "It was entertaining and ___________.",
            options: ["Boring", "Informative", "Confusing"],
            answer: "Informative",
          },
          {
            question: "The name of my school is ___________.",
            options: ["XYZ High School", "ABC Public School", "LMN Academy"],
            answer: "ABC Public School",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "My mother's name is Mrs. _____ _.",
            options: ["Smith", "Johnson"],
            answer: "Johnson",
          },
          {
            question: "She is a ___________.",
            options: ["Teacher", "Housewife"],
            answer: "Housewife",
          },
          {
            question: "She never shouts ___________.",
            options: ["At me", "Loudly"],
            answer: "At me",
          },
          {
            question:
              "My mother looks after me in every way and also helps me in my ___________.",
            options: ["Hobbies", "Studies"],
            answer: "Studies",
          },
          {
            question: "My mother likes to read ___________ in her free time.",
            options: ["Magazines", "Books"],
            answer: "Books",
          },
          {
            question: "Last Sunday, I visited the zoo with my ___________.",
            options: ["Friends", "Parents"],
            answer: "Parents",
          },
          {
            question:
              "We saw lions, tigers, monkeys, foxes, deer, chimpanzees, and other ___________.",
            options: ["Domestic animals", "Wild animals"],
            answer: "Wild animals",
          },
          {
            question: "We rode the ___________.",
            options: ["Bus", "Zoo train"],
            answer: "Zoo train",
          },
          {
            question: "It was entertaining and ___________.",
            options: ["Boring", "Informative"],
            answer: "Informative",
          },
          {
            question: "The name of my school is ___________.",
            options: ["XYZ High School", "ABC Public School"],
            answer: "ABC Public School",
          },
        ],
      },
    ],
  };
}

export var activityData;
