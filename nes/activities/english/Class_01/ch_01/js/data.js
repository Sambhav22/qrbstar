export const chapter = "Chapter - 1: Curie the Rabbit";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the name of the rabbit in the story?",
        optionA: "Hathi",
        optionB: "Sheru",
        optionC: "Curie",
        optionD: "Jungle",

        correctAnswer: "Curie",
      },

      {
        question: "What did Curie do most of the time?",
        optionA: "Resting",
        optionB: "Running",
        optionC: "Jumping",
        optionD: "Digging holes",

        correctAnswer: "Digging holes",
      },

      {
        question: "Whose foot got trapped in one of Curie's holes?",
        optionA: "Sheru the lion",
        optionB: "Another rabbit",
        optionC: "Hathi the elephant",
        optionD: "A jungle farmer",

        correctAnswer: "Hathi the elephant",
      },

      {
        question: "Who came to rescue Hathi when his foot got trapped?",
        optionA: "Curie",
        optionB: "Sheru",
        optionC: "Another elephant",
        optionD: "No one, he rescued himself",

        correctAnswer: "Sheru",
      },

      {
        question:
          "What was Curie's reaction when Sheru scolded him for digging holes?",
        optionA: "He laughed",
        optionB: "He got angry",
        optionC: "He nodded in agreement",
        optionD: "He ignored Sheru",

        correctAnswer: "He nodded in agreement",
      },

      {
        question: "What did Sheru admonish Curie for?",
        optionA: "Eating too many carrots",
        optionB: "Being too small",
        optionC: "Digging holes",
        optionD: "Not listening to Hathi",

        correctAnswer: "Digging holes",
      },

      {
        question: "Where did Curie's hole eventually lead to?",
        optionA: "A jungle farm",
        optionB: "Hathi's palace",
        optionC: "Another cave",
        optionD: "Sheru's den",

        correctAnswer: "Hathi's palace",
      },

      {
        question: "Why did Curie dig a hole into the palace cave?",
        optionA: "To escape from Sheru",
        optionB: "To find treasure",
        optionC: "By accident while resting",
        optionD: "To play a prank",

        correctAnswer: "By accident while resting",
      },

      {
        question:
          "How did the jungle animals react when they saw Curie working hard to fill the hole?",
        optionA: "They helped him",
        optionB: "They mocked him",
        optionC: "They ignored him",
        optionD: "They praised him",

        correctAnswer: "They mocked him",
      },

      {
        question: "What punishment did Sheru give Curie for digging the hole?",
        optionA: "He made Curie his advisor",
        optionB: "He forgave Curie",
        optionC: "He asked Curie to dig more holes",
        optionD: "He ordered Curie to fill up the hole",

        correctAnswer: "He ordered Curie to fill up the hole",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Curie was a little __________.",
        optionA: "lion",
        optionB: "rabbit",
        optionC: "elephant",

        correctAnswer: "rabbit",
      },

      {
        question: "Curie liked to hop, jump, and __________ all the time.",
        optionA: "swim",
        optionB: "sleep",
        optionC: "dig holes",

        correctAnswer: "dig holes",
      },

      {
        question:
          "Hathi, the __________'s foot got trapped in one of Curie's holes.",
        optionA: "lion",
        optionB: "rabbit",
        optionC: "elephant",

        correctAnswer: "elephant",
      },

      {
        question: "Sheru, the __________, was the king of the forest.",
        optionA: "rabbit",
        optionB: "lion",
        optionC: "elephant",

        correctAnswer: "lion",
      },
      {
        question: "Curie dug a hole that led to __________'s palace cave.",
        optionA: "Sheru",
        optionB: "Hathi",
        optionC: "Curie",

        correctAnswer: "Hathi",
      },
      {
        question: "Curie was ordered by Sheru to __________ the hole he dug.",
        optionA: "expand",
        optionB: "fill up",
        optionC: "abandon",

        correctAnswer: "fill up",
      },
      {
        question:
          "Curie accidentally dug a hole into __________'s palace cave.",
        optionA: "a jungle farm",
        optionB: "a treasure chest",
        optionC: "Hathi",

        correctAnswer: "Hathi",
      },
      ,
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: " Curie was a rabbit who liked to sit at rest.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Curie spent most of his time eating carrots.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Hathi's foot got trapped in a hole dug by Curie.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },
      {
        question: "Sheru was a rabbit and the king of the forest.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Sheru scolded Curie for digging holes around the jungle.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: " Curie's hole led to a treasure chest.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question:
          "All the jungle animals helped Hathi when his foot got trapped.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Curie's punishment was to fill up the hole he had dug.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question:
          "The jungle animals praised Curie for his hard work in filling the hole.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
