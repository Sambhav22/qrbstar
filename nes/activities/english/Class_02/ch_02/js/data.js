export const chapter = "Chapter - 2: Holiday Fun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the main activity the speaker suggests for the holiday?",
        optionA: "Skiing",
        optionB: "Going to the beach",
        optionC: "Visiting a museum",
        correctAnswer: "Going to the beach",
      },
      {
        question: "How does the speaker advise people to move on the beach?",
        optionA: "Run",
        optionB: "Walk",
        optionC: "Skip",
        correctAnswer: "Walk",
      },
      {
        question: "What is the speaker's recommendation regarding shouting?",
        optionA: "Shout loudly",
        optionB: "Whisper",
        optionC: "Talk",
        correctAnswer: "Talk",
      },
      {
        question:
          "What does the speaker warn against doing in the sun for too long?",
        optionA: "Sitting",
        optionB: "Running",
        optionC: "Dancing",
        correctAnswer: "Sitting",
      },
      {
        question: "What is the final reminder given by the speaker?",
        optionA: "Wear sunglasses",
        optionB: "Put on sunscreen",
        optionC: "Put your hat on",
        correctAnswer: "Put your hat on",
      },
      {
        question:
          "According to the text, where does the speaker want to go for fun?",
        optionA: "The mountains",
        optionB: "The beach",
        optionC: "The park",
        correctAnswer: "The beach",
      },
      {
        question:
          "What is the speaker's attitude towards running on the beach?",
        optionA: "Encourages it",
        optionB: "Discourages it",
        optionC: "Doesn't mention it",
        correctAnswer: "Discourages it",
      },
      {
        question: "How does the speaker describe the sun?",
        optionA: "Hot and unbearable",
        optionB: "Warm and inviting",
        optionC: "Cold and distant",
        correctAnswer: "Warm and inviting",
      },
      {
        question: "What does the speaker rhyme with 'fun' in the first line?",
        optionA: "Run",
        optionB: "Sun",
        optionC: "Bun",
        correctAnswer: "Sun",
      },
      {
        question:
          "According to the text, what should you do if you're on the beach?",
        optionA: "Stay indoors",
        optionB: "Play in the sun",
        optionC: "Go shopping",
        correctAnswer: "Play in the sun",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "We're on a ____________.",
        optionA: "Mountain",
        optionB: "Holiday",
        optionC: "School",
        correctAnswer: "Holiday",
      },
      {
        question: "Let's go to the ____________.",
        optionA: "Park",
        optionB: "Beach",
        optionC: "Museum",
        correctAnswer: "Beach",
      },
      {
        question: "Don't run on the ____________.",
        optionA: "Mountain",
        optionB: "Beach",
        optionC: "Playground",
        correctAnswer: "Beach",
      },
      {
        question: "Walk, walk, ____________.",
        optionA: "Jump",
        optionB: "Swim",
        optionC: "Walk",
        correctAnswer: "Walk",
      },
      {
        question: "Don't shout at your ____________.",
        optionA: "Teachers",
        optionB: "Friends",
        optionC: "Parents",
        correctAnswer: "Friends",
      },
      {
        question: "Talk, talk, ____________.",
        optionA: "Sing",
        optionB: "Dance",
        optionC: "Talk",
        correctAnswer: "Talk",
      },
      {
        question: "Don't sit in the ____________.",
        optionA: "Rain",
        optionB: "Snow",
        optionC: "Sun",
        correctAnswer: "Sun",
      },
      {
        question: "And don't forget to put your ____________ on.",
        optionA: "Sunglasses",
        optionB: "Hat",
        optionC: "Gloves",
        correctAnswer: "Hat",
      },
      {
        question: "The speaker suggests playing in the ____________.",
        optionA: "Rain",
        optionB: "Sun",
        optionC: "Snow",
        correctAnswer: "Sun",
      },
      {
        question:
          "The speaker advises against staying in the sun for too ____________.",
        optionA: "Short",
        optionB: "Long",
        optionC: "Brief",
        correctAnswer: "Long",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The main activity suggested for the holiday is skiing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker encourages running on the beach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The speaker advises people to shout loudly at their friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker warns against sitting in the sun for too long.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The final reminder is to wear sunglasses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker wants to go to the mountains for fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker encourages running on the beach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker describes the sun as hot and unbearable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The speaker rhymes 'fun' with 'run' in the first line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "According to the text, you should stay indoors on the beach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
