export const chapter = "Chapter - 8: Solitude ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the consequence of weeping, according to the text?",
        optionA: "People will laugh with you",
        optionB: "You weep alone",
        optionC: "The world becomes a happier place",
        correctAnswer: "You weep alone",
      },
      {
        question: "What do the hills do when you sing?",
        optionA: "They sigh",
        optionB: "They echo joyfully",
        optionC: "They weep",
        correctAnswer: "They echo joyfully",
      },
      {
        question: "What happens when you rejoice according to the text?",
        optionA: "People turn and go",
        optionB: "Men seek you",
        optionC: "The world goes by",
        correctAnswer: "Men seek you",
      },
      {
        question: "What is the outcome of being sad, as described in the text?",
        optionA: "You lose your friends",
        optionB: "You gain more friends",
        optionC: "You make new friends",
        correctAnswer: "You lose them all",
      },
      {
        question: "What happens when you feast, according to the text?",
        optionA: "Your friends decline your nectared wine",
        optionB: "Your friends are many",
        optionC: "The world goes by",
        correctAnswer: "Your halls are crowded",
      },
      {
        question: "What is the consequence of fasting in the text?",
        optionA: "The world becomes a happier place",
        optionB: "Your halls are crowded",
        optionC: "The world goes by",
        correctAnswer: "The world goes by",
      },
      {
        question: "According to the text, what can people do to help you live?",
        optionA: "Laugh with you",
        optionB: "Give and succeed",
        optionC: "Share your sorrow",
        correctAnswer: "Give and succeed",
      },
      {
        question: "How does the text describe the halls of pleasure?",
        optionA: "They are narrow and painful",
        optionB: "They are crowded with friends",
        optionC: "There is no room for joy",
        correctAnswer: "They are crowded with friends",
      },
      {
        question: "What must people do one by one in the text?",
        optionA: "File on through the narrow aisles of pain",
        optionB: "Drink life's gall",
        optionC: "Succeed and give",
        correctAnswer: "File on through the narrow aisles of pain",
      },
      {
        question: "What is the central message of the text?",
        optionA: "People should always be sad to gain friends",
        optionB: "Joy and sorrow are a part of life",
        optionC: "Pleasure is more important than pain",
        correctAnswer: "Joy and sorrow are a part of life",
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
          "Laugh, and the world laughs with you; Weep, and you weep alone; For the sad old earth must borrow its ______, But has trouble enough of its own.",
        options: ["sorrow", "mirth", "laughter"],
        correctAnswer: "mirth",
      },
      {
        question:
          "Sing, and the hills will ______; Sigh, it is lost on the air; The echoes bound to a joyful sound, But shrink from voicing ______.",
        options: ["weep", "answer", "laugh"],
        correctAnswer: "answer",
      },
      {
        question:
          "Rejoice, and men will seek you; Grieve, and they turn and go; They want the full measure of all your _______, But they do not need your ______.",
        options: ["happiness", "pleasures", "joy"],
        correctAnswer: "pleasures, woe",
      },
      {
        question:
          "Be glad, and your friends are many; Be sad, and you lose them all; There are none to decline your ______ wine, But alone you must drink life's ______.",
        options: ["nectared", "bitter", "sweet"],
        correctAnswer: "nectared, gall",
      },
      {
        question:
          "Feast, and your halls are ______; Fast, and the world goes by. Succeed and give, and it helps you live, But no man can help you ______.",
        options: ["empty", "crowded", "silent"],
        correctAnswer: "crowded, die",
      },
      {
        question:
          "There is room in the halls of ______ For a large and lordly train, But one by one we must all file on Through the narrow aisles of ______.",
        options: ["sorrow", "pleasure", "joy"],
        correctAnswer: "pleasure, pain",
      },
      {
        question:
          '"Weep, and you weep alone" suggests that people tend to avoid those who are ______.',
        options: ["laughing", "weeping", "singing"],
        correctAnswer: "weeping",
      },
      {
        question:
          '"Sigh, it is lost on the air" implies that expressing sorrow is often ______ and unheard.',
        options: ["cheerful", "echoed", "futile"],
        correctAnswer: "futile",
      },
      {
        question:
          "\"But alone you must drink life's gall\" means that individuals must face life's hardships by themselves and cannot rely on others to ______.",
        options: ["celebrate", "share", "ease their suffering"],
        correctAnswer: "ease their suffering",
      },
      {
        question:
          '"There is room in the halls of ______" suggests that joy and happiness have a place in life, but individuals must also accept the presence of ______.',
        options: ["friends", "sorrow", "laughter"],
        correctAnswer: "pleasure, pain",
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
          "Slippery surfaces are responsible for accidents in the text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The speaker wishes they could continue slipping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker wears slippers to prevent slipping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The speaker tumbled into space when slipping on a banana peel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Slipping incidents occurred in only one location in the text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker slipped on a roller skate and hit their head.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The speaker wishes they could stop slipping anymore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The speaker's solution to avoid slipping is to wear socks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Slippers are the best footwear to prevent slipping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The common theme in the poem is about conquering obstacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
