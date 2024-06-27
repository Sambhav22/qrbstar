export const chapter = "Chapter - 25:  unseen Comprehension";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the primary purpose of traffic rules?",
            options: ["Entertainment", "Safety", "Fitness"],
            answer: "Safety",
          },
          {
            question:
              "According to the text, what should be used when crossing the road?",
            options: ["Traffic signal", "Zebra crossing", "Footbridge"],
            answer: "Zebra crossing",
          },
          {
            question: "Where should one ride a bicycle, according to the text?",
            options: ["Right side", "Left side", "Any side"],
            answer: "Left side",
          },
          {
            question: "What action should be taken at a red traffic light?",
            options: ["Speed up", "Stop", "Slow down"],
            answer: "Stop",
          },
          {
            question: "How are games beneficial, according to the text?",
            options: [
              "They cause accidents",
              "They make us disciplined",
              "They increase boredom",
            ],
            answer: "They make us disciplined",
          },
          {
            question:
              "What does the text suggest about playing games as an occupation?",
            options: [
              "It's a waste of time",
              "It's essential for popularity",
              "It's not mentioned",
            ],
            answer: "It's not mentioned",
          },
          {
            question:
              "What does the text say about books and their impact on life?",
            options: [
              "They cause darkness",
              "They fill life with brightness",
              "They are boring",
            ],
            answer: "They fill life with brightness",
          },
          {
            question:
              "What is the comparison made about the best friend in the text?",
            options: ["A pet", "A book", "A person"],
            answer: "A book",
          },
          {
            question:
              "According to the text, what kind of books are described as 'bored'?",
            options: ["Fiction", "Mystery", "History"],
            answer: "History",
          },
          {
            question:
              "What land does the best friend (book) take the reader to?",
            options: [
              "Land of darkness",
              "Land of merriment",
              "Land of mystery",
            ],
            answer: "Land of merriment",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        fillInTheBlankQuestions: [
          {
            question: "Traffic rules are made for our ____________.",
            options: ["Entertainment", "Safety", "Convenience"],
            answer: "Safety",
          },
          {
            question: "If we follow traffic rules, we can avoid ____________.",
            options: ["Accidents", "Fines", "Traffic"],
            answer: "Accidents",
          },
          {
            question: "We should cross the road on a ____________.",
            options: ["Footbridge", "Crosswalk", "Zebra crossing"],
            answer: "Zebra crossing",
          },
          {
            question: "We should always walk on the ____________.",
            options: ["Street", "Pavement", "Grass"],
            answer: "Pavement",
          },
          {
            question: "Playing games makes us physically ____________.",
            options: ["Unfit", "Weak", "Healthy"],
            answer: "Healthy",
          },
          {
            question: "Games teach us ____________ work.",
            options: ["Solo", "Team", "Individual"],
            answer: "Team",
          },
          {
            question: "Books are the source of ____________.",
            options: ["Darkness", "Enlightenment", "Confusion"],
            answer: "Enlightenment",
          },
          {
            question: "My best friend is a ____________.",
            options: ["Person", "Pet", "Book"],
            answer: "Book",
          },
          {
            question: "Some books are bored like ____________.",
            options: ["Mystery", "History", "Fantasy"],
            answer: "History",
          },
          {
            question: "Books take us to the land of ____________.",
            options: ["Mystery", "Merriment", "Darkness"],
            answer: "Merriment",
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
        trueFalseQuestions: [
          {
            question: "Traffic rules are essential for our safety.",
            options: ["Safety", "Convenience"],
            answer: "Safety",
          },
          {
            question: "Following traffic rules can help us avoid accidents.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "We should always walk on the pavement.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Riding a bicycle on the left side is recommended.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Stopping at the red traffic light is necessary.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Games make us physically healthy.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Playing games is not essential for us.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Books are the source of darkness.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A book is compared to a pet in the text.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Playing games as an occupation is explicitly mentioned.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
