export const chapter = "Chapter - 19: Two Wheels";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does the author like to look at in the photographs?",
        optionA: "Photos of friends",
        optionB: "Photos of their old trike",
        optionC: "Photos of their favorite bike",
        correctAnswer: "B) Photos of their old trike",
      },
      {
        question: "How many wheels did the author's old trike have?",
        optionA: "Two wheels",
        optionB: "Three wheels",
        optionC: "Four wheels",
        correctAnswer: "B) Three wheels",
      },
      {
        question: "What did stabilizers do for the author's bike?",
        optionA: "Made it faster",
        optionB: "Made it easier to ride",
        optionC: "Made it look cooler",
        correctAnswer: "B) Made it easier to ride",
      },
      {
        question: "How many wheels did the bike have with stabilizers?",
        optionA: "Two wheels",
        optionB: "Three wheels",
        optionC: "Four wheels",
        correctAnswer: "C) Four wheels",
      },
      {
        question: "What happened on the day the stabilizers were taken off?",
        optionA: "The bike got faster",
        optionB: "The author had a great ride",
        optionC: "The author fell off the bike",
        correctAnswer: "C) The author fell off the bike",
      },
      {
        question:
          "What does the author enjoy doing now that the stabilizers are off?",
        optionA: "Ringing a bell",
        optionB: "Looking at photos",
        optionC: "Riding with friends",
        correctAnswer: "A) Ringing a bell",
      },
      {
        question: "What did the author ride when they had 'Two wheels'?",
        optionA: "A trike",
        optionB: "A bike with stabilizers",
        optionC: "A bike with two wheels",
        correctAnswer: "C) A bike with two wheels",
      },
      {
        question: "What did the author like about their trike?",
        optionA: "It was fast",
        optionB: "It never wobbled",
        optionC: "It had stabilizers",
        correctAnswer: "B) It never wobbled",
      },
      {
        question:
          "What was the main difference between the author's bike and their trike?",
        optionA: "The number of wheels",
        optionB: "The presence of stabilizers",
        optionC: "The color",
        correctAnswer: "A) The number of wheels",
      },
      {
        question: "Why did the author start running away from the bear?",
        optionA: "The bear challenged the narrator to a race.",
        optionB: "The bear had a gun.",
        optionC: "The bear told the narrator to run.",
        correctAnswer: "C) The bear told the narrator to run.",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "I like to look at photographs of me on my old ________.",
        options: ["tricycle", "trike", "bicycle"],
        correctAnswer: "trike",
      },
      {
        question: "My old trike had ________ wheels.",
        options: ["two", "three", "four"],
        correctAnswer: "three",
      },
      {
        question:
          "Stabilizers made my bike easier to ride. They stopped it from falling over when it tilted to one ________.",
        options: ["side", "front", "back"],
        correctAnswer: "side",
      },
      {
        question: "Not quite a bike, not quite a trike, with ________ wheels.",
        options: ["two", "three", "four"],
        correctAnswer: "four",
      },
      {
        question: "On the day we took them off, I came ________ as well.",
        options: ["back", "off", "forward"],
        correctAnswer: "off",
      },
      {
        question:
          "But now it's great to ride around and tinkle on my ________.",
        options: ["whistle", "horn", "bell"],
        correctAnswer: "bell",
      },
      {
        question: "That's what I like riding my bike with ________ wheels.",
        options: ["one", "three", "two"],
        correctAnswer: "two",
      },
      {
        question: "I used to like riding my ________ with three wheels.",
        options: ["scooter", "tricycle", "skateboard"],
        correctAnswer: "tricycle",
      },
      {
        question:
          "Riding on four wheels! Not quite a bike, not quite a trike, with ________ wheels.",
        options: ["two", "three", "five"],
        correctAnswer: "three",
      },
      {
        question:
          "Stabilizers made my bike easier to ride. They stopped it from falling over when it tilted to one ________.",
        options: ["side", "front", "corner"],
        correctAnswer: "side",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "I like to look at photographs of me on my old trike.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "My old trike had four wheels.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Stabilizers made my bike harder to ride.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Riding on four wheels, my bike was not quite a bike or a trike.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "On the day we took off the stabilizers, I didn't come off.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "It's great to ride around and tinkle on my bell now.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "I used to like riding my trike with three wheels.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "My bike with stabilizers had five wheels.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The lowest branch was fifteen feet high.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The narrator's encounter with the bear ended humorously.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
