export const chapter = "Chapter - 28: Comprehension Passage";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Where are the Himalayas located in relation to India?",
          optionA: "East",
          optionB: "South",
          optionC: "North",
          correctAnswer: "North",
        },
        {
          question:
            "What is the length of the Himalayas from Kashmir to Assam?",
          optionA: "1,000 miles",
          optionB: "1,500 miles",
          optionC: "2,000 miles",
          correctAnswer: "2,000 miles",
        },
        {
          question:
            "What is another name for the Himalayas due to their snow-covered peaks?",
          optionA: "Roof of the World",
          optionB: "Land of Mountains",
          optionC: "Abode of Snow",
          correctAnswer: "Abode of Snow",
        },
        {
          question:
            "Why are the Himalayas compared to a crown on India's forehead?",
          optionA: "They are valuable jewels.",
          optionB: "They protect from icy winds and bring rainfall.",
          optionC: "They are a symbol of royalty.",
          correctAnswer: "They protect from icy winds and bring rainfall.",
        },
        {
          question:
            "According to the text, what quality is considered most suitable for being a good friend?",
          optionA: "Wealth",
          optionB: "Good looks",
          optionC: "Being a good listener",
          correctAnswer: "Being a good listener",
        },
        {
          question:
            "How does a friend help the speaker in the friendship context?",
          optionA: "By giving advice",
          optionB: "By talking a lot",
          optionC: "By listening carefully and attentively",
          correctAnswer: "By listening carefully and attentively",
        },
        {
          question:
            "What does the speaker do after writing a letter to themselves?",
          optionA: "Keeps it in a drawer",
          optionB: "Mails it right away",
          optionC: "Reads it immediately",
          correctAnswer: "Mails it right away",
        },
        {
          question: "How does the speaker feel when receiving the letter?",
          optionA: "Annoyed",
          optionB: "Excited",
          optionC: "Indifferent",
          correctAnswer: "Excited",
        },
        {
          question:
            "What happens when the speaker tries to read the letter they wrote?",
          optionA: "They understand it completely.",
          optionB: "They struggle to open the envelope.",
          optionC: "They realize they can't read.",
          correctAnswer: "They realize they can't read.",
        },
        {
          question:
            "What does the poem suggest about the speaker's ability to read?",
          optionA: "They are an excellent reader.",
          optionB: "They have just learned to read.",
          optionC: "They still need to learn how to read.",
          correctAnswer: "They still need to learn how to read.",
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
            "The Himalayas stretch for ________ miles from Kashmir to Assam.",
          options: ["1,000", "1,500", "2,000"],
          correctAnswer: "2,000",
        },
        {
          question:
            "The Himalayas are often referred to as the 'abode of ________' due to their snow-covered peaks.",
          options: ["Ice", "Snow", "Frost"],
          correctAnswer: "Snow",
        },
        {
          question:
            "The high peaks of the Himalayas protect India from the ________ winds from the north.",
          options: ["Warm", "Icy", "Monsoon"],
          correctAnswer: "Icy",
        },
        {
          question:
            "Friendship starts when a person is willing to ________ to someone who wishes to say something.",
          options: ["Talk a lot", "Share secrets", "Listen"],
          correctAnswer: "Listen",
        },
        {
          question:
            "A friend listens carefully and attentively, taking an interest in what the other person has to ________.",
          options: ["Do", "Say", "Share"],
          correctAnswer: "Say",
        },
        {
          question:
            '"I wrote myself a letter. I mailed it right away. And, sure enough, the ________ delivered it today."',
          options: ["Postman", "Courier", "Carrier"],
          correctAnswer: "Carrier",
        },
        {
          question: "I couldn't wait to get it. I nearly had to ________.",
          options: ["Cry", "Shout", "Whisper"],
          correctAnswer: "Shout",
        },
        {
          question: "I quickly tore the envelope and pulled the ________ out.",
          options: ["Paper", "Letter", "Message"],
          correctAnswer: "Letter",
        },
        {
          question:
            "I anxiously unfolded it, but now I must concede; I'm clueless as to what it says, I haven't ________ to read.",
          options: ["Attempted", "Learned", "Tried"],
          correctAnswer: "Learned",
        },
        {
          question:
            'The woodcutter in "The Woodcutter and His Axe" was cutting wood on the ________.',
          options: ["Mountains", "Forest", "Riverbank"],
          correctAnswer: "Riverbank",
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
            "The Himalayas stretch for 1,500 miles from Kashmir to Assam.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Some of the world's highest peaks, including Mount Everest, are located in the Andes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Himalayas protect India from warm winds from the south.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A good friend is someone who talks a lot and dominates the conversation.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Friendship starts when a person is willing to listen to someone who wishes to say something.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The speaker in the poem received a letter from someone else.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            'The woodcutter in "The Woodcutter and His Axe" was cutting wood in the mountains.',
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The woodcutter rejected the gold and silver axes because they did not belong to him.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The angel in the story brought out a wooden axe as a reward for the woodcutter's honesty.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The woodcutter in the story was rewarded with a bag of gold for his cleverness.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
