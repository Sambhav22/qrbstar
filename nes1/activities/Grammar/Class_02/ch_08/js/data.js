export const chapter = "Chapter - 8: Pronouns: Person";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "Which set of pronouns represents the First Person?",
          optionA: "he, she, it",
          optionB: "they, them, theirs",
          optionC: "I, we, our",
          correctAnswer: "I, we, our",
        },
        {
          question: "Which pronouns belong to the Second Person category?",
          optionA: "his, her, theirs",
          optionB: "you, yours",
          optionC: "me, us, mine",
          correctAnswer: "you, yours",
        },
        {
          question: "Who do the Second Person pronouns refer to?",
          optionA: "The speaker",
          optionB: "The person spoken about",
          optionC: "The person spoken to",
          correctAnswer: "The person spoken to",
        },
        {
          question:
            "What category of pronouns is used for the person spoken about?",
          optionA: "Third Person",
          optionB: "First Person",
          optionC: "Second Person",
          correctAnswer: "Third Person",
        },
        {
          question: "Which sentence contains a Third Person pronoun?",
          optionA: "We won the game.",
          optionB: "You are my best friend.",
          optionC: "She loves to dance.",
          correctAnswer: "She loves to dance.",
        },
        {
          question: "Which pronouns represent the Third Person singular?",
          optionA: "they, them",
          optionB: "he, she, it",
          optionC: "we, our",
          correctAnswer: "he, she, it",
        },
        {
          question: "Identify the pronouns from the First Person category.",
          optionA: "his, hers, theirs",
          optionB: "my, us, ours",
          optionC: "you, yours",
          correctAnswer: "my, us, ours",
        },
        {
          question: "Which pronoun is used for the speaker in a sentence?",
          optionA: "he",
          optionB: "I",
          optionC: "you",
          correctAnswer: "I",
        },
        {
          question: "What do Second Person pronouns refer to?",
          optionA: "The speaker",
          optionB: "The person spoken to",
          optionC: "The person spoken about",
          correctAnswer: "The person spoken to",
        },
        {
          question: "Which sentence contains a Second Person pronoun?",
          optionA: "They went to the park.",
          optionB: "You should try this cake.",
          optionC: "She likes reading books.",
          correctAnswer: "You should try this cake.",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "___________ pronouns are used for the Speaker.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "First Person",
        },
        {
          question: "Second Person pronouns refer to the __________.",
          optionA: "Speaker",
          optionB: "Person spoken to",
          optionC: "Person spoken about",
          correctAnswer: "Person spoken to",
        },
        {
          question: "Third Person pronouns are used for the __________.",
          optionA: "Speaker",
          optionB: "Person spoken to",
          optionC: "Person spoken about",
          correctAnswer: "Person spoken about",
        },
        {
          question:
            "Pronouns like 'I', 'we', and 'our' belong to the __________ category.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "First Person",
        },
        {
          question:
            "The category of pronouns used for 'you' and 'yours' is __________.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "Second Person",
        },
        {
          question:
            "Pronouns like 'he', 'she', and 'they' fall under the __________ category.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "Third Person",
        },
        {
          question:
            "Second Person pronouns are directed toward the __________.",
          optionA: "Speaker",
          optionB: "Person spoken to",
          optionC: "Person spoken about",
          correctAnswer: "Person spoken to",
        },
        {
          question:
            "'Mine', 'ours', and 'my' are examples of __________ pronouns.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "First Person",
        },
        {
          question:
            "The category of pronouns used for 'they', 'them', and 'theirs' is __________.",
          optionA: "First Person",
          optionB: "Second Person",
          optionC: "Third Person",
          correctAnswer: "Third Person",
        },
        {
          question:
            "Third Person pronouns are employed when referring to the __________.",
          optionA: "Speaker",
          optionB: "Person spoken to",
          optionC: "Person spoken about",
          correctAnswer: "Person spoken about",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "First Person pronouns are used for the Speaker.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Second Person pronouns refer to the Person spoken to.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Third Person pronouns are used for the Person spoken about.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Pronouns like 'I', 'we', and 'our' belong to the Third Person category.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The category of pronouns used for 'you' and 'yours' is Second Person.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Pronouns like 'he', 'she', and 'they' fall under the First Person category.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Second Person pronouns are directed toward the Person spoken about.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "'Mine', 'ours', and 'my' are examples of Second Person pronouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The category of pronouns used for 'they', 'them', and 'theirs' is First Person.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Third Person pronouns are employed when referring to the Speaker.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
