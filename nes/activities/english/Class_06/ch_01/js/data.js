export const chapter = "Chapter - 1: The Cable Is Snapped";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Why does the narrator like the evening TV program the most?",
        optionA: "Because it has an interesting story.",
        optionB: "Because it features popular actors.",
        optionC: "Because it airs during dinner time.",
        correctAnswer: "Because it airs during dinner time.",
      },
      {
        question: "How long has the family been watching the same TV program?",
        optionA: "One year.",
        optionB: "Two years.",
        optionC: "Three years.",
        correctAnswer: "Three years.",
      },
      {
        question:
          "Why does the narrator's daughter offer to serve dinner when the cable connection is lost?",
        optionA: "Because she loves cooking.",
        optionB: "Because the vegetable is delicious.",
        optionC: "Because she wants to help during the TV downtime.",
        correctAnswer: "Because she wants to help during the TV downtime.",
      },
      {
        question:
          "What happened to the cable connection on the fateful evening?",
        optionA: "The TV stopped working.",
        optionB: "The wire came loose.",
        optionC: "The cable connection snapped.",
        correctAnswer: "The cable connection snapped.",
      },
      {
        question:
          "How did the neighbors feel about the cable connection being down?",
        optionA: "They were happy.",
        optionB: "They were disappointed.",
        optionC: "They were indifferent.",
        correctAnswer: "They were happy.",
      },
      {
        question:
          "How long was the cable connection expected to be out of service?",
        optionA: "One day.",
        optionB: "Two days.",
        optionC: "Three days.",
        correctAnswer: "Two days.",
      },
      {
        question:
          "Why did Mr. Raghav have a smile on his face during the cable outage?",
        optionA: "He fixed the cable connection.",
        optionB: "He was happy to see his neighbors.",
        optionC: "He had an alternative source of entertainment.",
        correctAnswer: "He was happy to see his neighbors.",
      },
      {
        question: "How did the absence of television affect the family?",
        optionA: "They were bored and upset.",
        optionB: "They enjoyed more family time and interaction.",
        optionC: "They missed their favorite TV show.",
        correctAnswer: "They enjoyed more family time and interaction.",
      },
      {
        question:
          "What did the narrator tell her daughter about her own childhood without TV and mobile phones?",
        optionA: "She studied all the time.",
        optionB: "She played and learned in the lap of nature.",
        optionC: "She had no friends to talk to.",
        correctAnswer: "She played and learned in the lap of nature.",
      },
      {
        question:
          "What decision did the family make regarding their TV-watching habits at the end of the story?",
        optionA: "They decided to watch more TV.",
        optionB: "They resolved to limit their TV time to one hour a day.",
        optionC: "They decided to stop watching TV altogether.",
        correctAnswer:
          "They resolved to limit their TV time to one hour a day.",
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
          "My family and I were glued to the TV screen during our favorite soap opera, especially during ____________ time.",
        options: ["breakfast", "lunch", "dinner"],
        correctAnswer: "dinner",
      },
      {
        question:
          "The family had been watching this program for the last ____________ years.",
        options: ["one", "two", "three"],
        correctAnswer: "three",
      },
      {
        question:
          "The family's cable connection was snapped, causing a moment of ____________.",
        options: ["excitement", "shock", "celebration"],
        correctAnswer: "shock",
      },
      {
        question:
          "The narrator's daughter offered to serve dinner because the TV was down and the vegetable wasn't to their ____________.",
        options: ["preference", "delight", "satisfaction"],
        correctAnswer: "preference",
      },
      {
        question:
          "According to Mr. Raghav, he felt delighted because he could see the faces of his neighbors and have some ____________ interaction.",
        options: ["social", "television", "isolated"],
        correctAnswer: "social",
      },
      {
        question:
          "The cable connection was expected to be out of service for at least ____________ days.",
        options: ["one", "two", "three"],
        correctAnswer: "two",
      },
      {
        question:
          "During the cable outage, the family enjoyed more ____________ and interaction with each other.",
        options: ["TV shows", "solitude", "family time"],
        correctAnswer: "family time",
      },
      {
        question:
          "The narrator reminisced about her childhood, where they played under tamarind trees, jumped into the village pond, and made playthings out of ____________.",
        options: ["toys", "pebbles and clay", "expensive materials"],
        correctAnswer: "pebbles and clay",
      },
      {
        question:
          "The family's decision at the end of the story was to limit their TV time to ____________ hours a day.",
        options: ["two", "three", "one"],
        correctAnswer: "one",
      },
      {
        question:
          "The story conveys that some children face challenges accessing education due to ____________, but efforts are being made to change this.",
        options: ["lack of interest", "a lack of good schools", "distance"],
        correctAnswer: "distance",
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
          "The family enjoys their favorite soap opera during dinner time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The family had been watching the same TV program for five years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The cable connection was lost due to a thunderstorm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The narrator's daughter served dinner because the vegetable was tasty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mr. Raghav was upset when the cable connection was down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The cable connection was expected to be restored within a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The absence of television led to more family time and interaction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The narrator's childhood memories included playing under oak trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The family decided to watch more TV after the cable connection was restored.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The story conveys that education is easily accessible to all children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
