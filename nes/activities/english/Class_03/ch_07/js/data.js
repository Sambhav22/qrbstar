export const chapter = "Chapter - 7: The Clean Club";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who were the members of the club?",
        optionA: "Jaya, Rajat, Sujata",
        optionB: "Jaya, Nidhi, Rajat, Sujata, Susan, Surya, Uma",
        optionC: "Jaya, Sujata, Surya, Nidhi",
        correctAnswer: "B) Jaya, Nidhi, Rajat, Sujata, Susan, Surya, Uma",
      },
      {
        question: "Where was the club initially formed?",
        optionA: "In the library",
        optionB: "In Rajat's garage",
        optionC: "In the colony park",
        correctAnswer: "B) In Rajat's garage",
      },
      {
        question: "Why didn't they clean the club last month?",
        optionA: "Because they were too lazy",
        optionB: "Because they were busy with Diwali",
        optionC: "Because they forgot",
        correctAnswer: "B) Because they were busy with Diwali",
      },
      {
        question: "What games did they have in their club?",
        optionA: "Only outdoor games",
        optionB: "Only indoor games",
        optionC: "Both indoor and outdoor games",
        correctAnswer: "C) Both indoor and outdoor games",
      },
      {
        question:
          "What activities did they organize when a member had a birthday?",
        optionA: "They did nothing for birthdays",
        optionB: "They celebrated the birthday at the club",
        optionC: "They went out for a meal",
        correctAnswer: "B) They celebrated the birthday at the club",
      },
      {
        question: "What was one of the club rules?",
        optionA: "Speaking in a loud voice was allowed",
        optionB: "No cheating was allowed in games",
        optionC: "Members could attend in any clothing",
        correctAnswer: "B) No cheating was allowed in games",
      },
      {
        question: "What did the club members do first when cleaning the club?",
        optionA: "Play a game of cricket",
        optionB: "Take out chairs, tables, and playthings",
        optionC: "Start washing the floor",
        correctAnswer: "B) Take out chairs, tables, and playthings",
      },
      {
        question: "What did they use to sweep the floor?",
        optionA: "A vacuum cleaner",
        optionB: "A broom",
        optionC: "A mop",
        correctAnswer: "B) A broom",
      },
      {
        question:
          "What did they plan to do while waiting for the floor to dry?",
        optionA: "Play a game of cards",
        optionB: "Play a game of cricket",
        optionC: "Read storybooks",
        correctAnswer: "B) Play a game of cricket",
      },
      {
        question:
          "What kind of people did the club members invite to share their views or experiences?",
        optionA: "Only children from the neighborhood",
        optionB: "Doctors, advocates, businessmen, teachers, and others",
        optionC: "Anyone who wanted to join the club",
        correctAnswer:
          "B) Doctors, advocates, businessmen, teachers, and others",
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
          "Every ___________ of the month, the club members cleaned the club.",
        optionA: "Monday",
        optionB: "first Sunday",
        optionC: "Friday",
        correctAnswer: "B) first Sunday",
      },
      {
        question:
          "The club admitted only those children who promised to adhere to their ___________.",
        optionA: "games",
        optionB: "rules",
        optionC: "costumes",
        correctAnswer: "B) rules",
      },
      {
        question: "Normally, they gathered at ___________ in the evening.",
        optionA: "5",
        optionB: "9",
        optionC: "12",
        correctAnswer: "A) 5",
      },
      {
        question:
          "All members had to attend the club programs only in proper dress, which included shorts, t-shirts, and ___________ shoes.",
        optionA: "hiking",
        optionB: "formal",
        optionC: "sports",
        correctAnswer: "C) sports",
      },
      {
        question:
          "The members first took out chairs, tables, and playthings, dusted the walls, cupboards, doors, and windows, and then swept the floor with a ___________.",
        optionA: "vacuum cleaner",
        optionB: "broom",
        optionC: "mop",
        correctAnswer: "B) broom",
      },
      {
        question:
          "Speaking in a loud voice was ___________ allowed in the club.",
        optionA: "always",
        optionB: "sometimes",
        optionC: "not",
        correctAnswer: "C) not",
      },
      {
        question:
          "Surya mentioned that they were all busy with ___________ last month.",
        optionA: "Christmas",
        optionB: "New Year",
        optionC: "Diwali",
        correctAnswer: "C) Diwali",
      },
      {
        question:
          "The club had both indoor and outdoor games. In indoor games, they had carromboard and several other ___________ games.",
        optionA: "computer",
        optionB: "cardboard",
        optionC: "video",
        correctAnswer: "B) cardboard",
      },
      {
        question:
          "Jaya, Nidhi, Rajat, Sujata, Susan, Surya, and Uma were the members of this club. They had formed it in the ___________ of Rajat's house.",
        optionA: "garden",
        optionB: "library",
        optionC: "garage",
        correctAnswer: "C) garage",
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
          "The club members cleaned the club every first Sunday of the month.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The club members formed their club in the library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The club had strict rules, and one of them was speaking in a loud voice was allowed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The club had a small library with storybooks and cartoon books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "They celebrated birthdays at the club.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The club members played cricket while waiting for the club floor to dry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The club was well-known in the neighborhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "All members had to attend club programs in formal clothing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The club had a rule that cheating was allowed in any game.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The club excluded members who violated the rules after just one violation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
