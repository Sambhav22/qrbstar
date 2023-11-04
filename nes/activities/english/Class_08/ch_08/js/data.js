export const chapter = "Chapter - 8: Stopping by Woods on a Snowy Evening";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Whose woods are the speaker in the poem referring to?",
          optionA: "The speaker's own woods",
          optionB: "A neighbor's woods",
          optionC: "A stranger's woods",
          correctAnswer: "B. A neighbor's woods",
        },
        {
          question: "In which season is the setting of the poem?",
          optionA: "Spring",
          optionB: "Summer",
          optionC: "Winter",
          correctAnswer: "C. Winter",
        },
        {
          question:
            "Why won't the owner of the woods see the speaker stopping there?",
          optionA: "The owner is asleep",
          optionB: "The owner is not at home",
          optionC: "The speaker is hiding",
          correctAnswer: "B. The owner is not at home",
        },
        {
          question: "What does the speaker's horse find queer?",
          optionA: "The snowy woods",
          optionB: "The lack of a farmhouse",
          optionC: "The darkness of the evening",
          correctAnswer: "B. The lack of a farmhouse",
        },
        {
          question:
            "What does the horse do to express its confusion or concern?",
          optionA: "It neighs loudly",
          optionB: "It shakes its harness bells",
          optionC: "It starts running",
          correctAnswer: "B. It shakes its harness bells",
        },
        {
          question: "What is the only other sound mentioned in the poem?",
          optionA: "Birds chirping",
          optionB: "A distant river",
          optionC: "The sweep of easy wind and downy flake",
          correctAnswer: "C. The sweep of easy wind and downy flake",
        },
        {
          question: "How does the speaker describe the woods?",
          optionA: "Bright and inviting",
          optionB: "Lovely, dark, and deep",
          optionC: "Scary and foreboding",
          correctAnswer: "B. Lovely, dark, and deep",
        },
        {
          question:
            "What does the speaker say they have before they can sleep?",
          optionA: "Promises to keep",
          optionB: "Miles to go",
          optionC: "Dreams to fulfill",
          correctAnswer: "A. Promises to keep",
        },
        {
          question:
            "What is the purpose of the repeated word 'And' in the last stanza?",
          optionA: "Emphasize the need to continue the journey",
          optionB: "Highlight the speaker's confusion",
          optionC: "Create a sense of suspense",
          correctAnswer: "A. Emphasize the need to continue the journey",
        },
        {
          question: "How does the poem end?",
          optionA: "The speaker falls asleep in the woods",
          optionB: "The horse carries the speaker away",
          optionC: "The poem doesn't specify the ending",
          correctAnswer: "C. The poem doesn't specify the ending",
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
            "Whose woods these are I think I know. His house is in the village, though; He will not see me stopping here To watch his woods fill up with __________.",
          options: ["leaves", "snow", "flowers"],
          correctAnswer: "snow",
        },
        {
          question:
            "My little horse must think it queer To stop without a farmhouse near Between the woods and frozen __________.",
          options: ["river", "ocean", "lake"],
          correctAnswer: "lake",
        },
        {
          question:
            "The darkest evening of the year. He gives his harness bells a shake To ask if there is some __________.",
          options: ["mistake", "noise", "celebration"],
          correctAnswer: "mistake",
        },
        {
          question:
            "The only other sound's the sweep Of easy wind and downy __________.",
          options: ["feather", "leaf", "flake"],
          correctAnswer: "flake",
        },
        {
          question:
            "The woods are lovely, dark and __________, But I have __________ to keep,",
          options: ["bright", "deep", "colorful"],
          correctAnswer: ["deep", "promises"],
        },
        {
          question: "And miles to go before I __________.",
          options: ["eat", "sleep", "rest"],
          correctAnswer: "sleep",
        },
        {
          question:
            "Whose woods these are I think I know. His house is in the village, though; He will not see me __________ here.",
          options: ["playing", "stopping", "running"],
          correctAnswer: "stopping",
        },
        {
          question:
            "My little horse must think it __________ To stop without a farmhouse near.",
          options: ["ordinary", "queer", "normal"],
          correctAnswer: "queer",
        },
        {
          question:
            "He gives his harness bells a __________ To ask if there is some __________.",
          options: ["shake", "rattle", "jingle"],
          correctAnswer: ["shake", "mistake"],
        },
        {
          question:
            "The woods are lovely, dark and deep, But I have __________ to keep,",
          options: ["dreams", "secrets", "promises"],
          correctAnswer: "promises",
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
          question:
            "The speaker's solution to avoid slipping is to wear socks.",
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
          question:
            "The common theme in the poem is about conquering obstacles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
