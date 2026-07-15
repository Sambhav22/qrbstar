export const chapter = "Chapter - 15: Question Tags ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'Which of the following question tags is correct for the sentence: "She has a colourful umbrella"?',
          optionA: "hasn't she",
          optionB: "doesn't she",
          optionC: "isn't she",
          correctAnswer: "A) hasn't she",
        },
        {
          question:
            'In the sentence "He feels sick all the time," what is the appropriate question tag?',
          optionA: "does he",
          optionB: "doesn't he",
          optionC: "isn't he",
          correctAnswer: "B) doesn't he",
        },
        {
          question:
            'Which of the following is the correct question tag for the sentence: "They laughed at the poor beggar"?',
          optionA: "did they",
          optionB: "didn't they",
          optionC: "don't they",
          correctAnswer: "B) didn't they",
        },
        {
          question:
            'What is the appropriate question tag for the sentence: "Wheat grows in winter"?',
          optionA: "does it",
          optionB: "doesn't it",
          optionC: "isn't it",
          correctAnswer: "B) doesn't it",
        },
        {
          question:
            'Which question tag is correct for the sentence: "Open the window"?',
          optionA: "will you",
          optionB: "won't you",
          optionC: "can you",
          correctAnswer: "A) will you",
        },
        {
          question:
            'In the sentence "I am your friend," what is the correct question tag?',
          optionA: "aren't I",
          optionB: "amn't I",
          optionC: "am I",
          correctAnswer: "A) aren't I",
        },
        {
          question:
            'Which of the following question tags is correct for the sentence: "The monkey did not chatter loudly"?',
          optionA: "did it",
          optionB: "didn't it",
          optionC: "doesn't it",
          correctAnswer: "A) did it",
        },
        {
          question:
            'What is the appropriate question tag for the sentence: "Follow the table manners"?',
          optionA: "do you",
          optionB: "will you",
          optionC: "won't you",
          correctAnswer: "B) will you",
        },
        {
          question:
            'Which question tag is correct for the sentence: "He does not play chess well"?',
          optionA: "does he",
          optionB: "doesn't he",
          optionC: "isn't he",
          correctAnswer: "B) doesn't he",
        },
        {
          question:
            'In the sentence "I have not met him before," what is the correct question tag?',
          optionA: "have I",
          optionB: "haven't I",
          optionC: "didn't I",
          correctAnswer: "A) have I",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "She has a colourful umbrella, __________?",
          optionA: "hasn't she",
          optionB: "does she",
          optionC: "isn't she",
          correctAnswer: "A) hasn't she",
        },
        {
          question: "He feels sick all the time, __________?",
          optionA: "doesn't he",
          optionB: "does he",
          optionC: "isn't he",
          correctAnswer: "A) doesn't he",
        },
        {
          question: "They laughed at the poor beggar, __________?",
          optionA: "didn't they",
          optionB: "did they",
          optionC: "don't they",
          correctAnswer: "A) didn't they",
        },
        {
          question: "Wheat grows in winter, __________?",
          optionA: "doesn't it",
          optionB: "does it",
          optionC: "isn't it",
          correctAnswer: "A) doesn't it",
        },
        {
          question: "The lion catches the mouse in its paw, __________?",
          optionA: "doesn't it",
          optionB: "does it",
          optionC: "isn't it",
          correctAnswer: "A) doesn't it",
        },
        {
          question: "Open the window, __________?",
          optionA: "will you",
          optionB: "won't you",
          optionC: "can you",
          correctAnswer: "A) will you",
        },
        {
          question: "I am your friend, __________?",
          optionA: "aren't I",
          optionB: "amn't I",
          optionC: "am I",
          correctAnswer: "A) aren't I",
        },
        {
          question: "They are not milking the cow, __________?",
          optionA: "are they",
          optionB: "aren't they",
          optionC: "do they",
          correctAnswer: "A) are they",
        },
        {
          question: "We have not spoken to him on this matter, __________?",
          optionA: "have we",
          optionB: "haven't we",
          optionC: "do we",
          correctAnswer: "A) have we",
        },
        {
          question: "Don't shout like this, __________?",
          optionA: "will you",
          optionB: "won't you",
          optionC: "can you",
          correctAnswer: "A) will you",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A resource is a thing which has some value and utility.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Renewable resources are those that cannot be renewed within a reasonable time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Manmade resources are natural resources made valuable with human effort.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Non-renewable resources, like minerals and petroleum, can be replenished quickly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sustainable development is about balancing human needs to conserve resources for the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Natural resources include air, water, soil, plants, animals, minerals, and fossil fuels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Actual resources are fully surveyed, quantified, and developed for actual use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Man's technology and skill provide value and utility to resources.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Potential resources are those with no possibility of development in the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Resource conservation involves using resources in a way that they are never depleted.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
