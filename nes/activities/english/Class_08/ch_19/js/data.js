export const chapter = "Chapter - 19: Buddha's Death";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who wandered in many lands teaching truth to many nations?",
        optionA: "Buddha",
        optionB: "Buddha's faithful friend",
        optionC: "Both A and B",
        correctAnswer: "C) Both A and B",
      },
      {
        question:
          "Along the pathway, what unusual occurrences are associated with the saintly Master's presence?",
        optionA: "Fruit trees blossomed out of season",
        optionB: "A lovely fragrance in the air",
        optionC: "All of the above",
        correctAnswer: "C) All of the above",
      },
      {
        question:
          "What does the saintly Master whisper to his friend Ananda regarding true worship?",
        optionA:
          "True worship is rendered by offering flowers and sandal-powder.",
        optionB: "True worship is rendered through heavenly music.",
        optionC: "True worship is not rendered by these things.",
        correctAnswer: "C) True worship is not rendered by these things.",
      },
      {
        question: "According to the text, who performs true worship?",
        optionA: "Those who offer flowers and sandal-powder",
        optionB: "The brother and the sister",
        optionC: "Those who enjoy heavenly music",
        correctAnswer: "B) The brother and the sister",
      },
      {
        question:
          "What was the condition of saintly Buddha when night came on?",
        optionA: "He was sleeping peacefully.",
        optionB: "He was suffering and sick.",
        optionC: "He was teaching the Brahman.",
        correctAnswer: "B) He was suffering and sick.",
      },
      {
        question: "Who came to see the holy man when night came on?",
        optionA: "Ananda",
        optionB: "A Brahman seeking wisdom",
        optionC: "A woman holy",
        correctAnswer: "B) A Brahman seeking wisdom",
      },
      {
        question:
          "What did Buddha assure the pious stranger who came seeking wisdom?",
        optionA: "The stranger would receive riches and fame.",
        optionB: "The stranger would find nothing of value.",
        optionC: "The stranger would not come to him in vain.",
        correctAnswer: "C) The stranger would not come to him in vain.",
      },
      {
        question: "How did Buddha communicate the truth to the pious stranger?",
        optionA: "He sang a song.",
        optionB: "He wrote a book.",
        optionC: "He spoke the truth in language plain.",
        correctAnswer: "C) He spoke the truth in language plain.",
      },
      {
        question:
          "What happened to Buddha after he taught the law to the pious stranger?",
        optionA: "He continued teaching others.",
        optionB: "He fell into a deep sleep.",
        optionC: "He stopped speaking and never spoke again.",
        correctAnswer: "C) He stopped speaking and never spoke again.",
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
          "Thus in many lands they wandered, Buddha and his faithful friend, Teaching truth to many nations, Till his life approached its ___________.",
        options: ["conclusion", "destination", "end"],
        correctAnswer: "end",
      },
      {
        question:
          "And they say, along the pathway, as the saintly Master went, Fruit trees blossomed out of season And a lovely fragrance ___________!",
        options: ["filled the air", "was present", "lent"],
        correctAnswer: "lent",
      },
      {
        question:
          "But the saintly Master whispered To his friend beloved and blest, 'Tis not thus, 0 friend Ananda! That the Buddha's honoured ___________.",
        options: ["followers", "best", "path"],
        correctAnswer: "best",
      },
      {
        question:
          "Not by flowers or sandal-powder, Not by music's heavenly strain, Is the soul's true worship ___________, Useless are these things and vain!",
        options: ["celebrated", "rendered", "adorned"],
        correctAnswer: "rendered",
      },
      {
        question:
          "But the brother and the sister, Man devout and woman holy, Pure in life, in duty faithful, They perform the worship ___________!",
        options: ["devoutly", "truly", "eagerly"],
        correctAnswer: "truly",
      },
      {
        question:
          "Night came on, and saintly Buddha Slept in suffering, sick and ___________,",
        options: ["joyful", "energetic", "wan"],
        correctAnswer: "wan",
      },
      {
        question:
          "When a Brahman, seeking ___________, Came to see the holy man.",
        options: ["riches", "wisdom", "fame"],
        correctAnswer: "wisdom",
      },
      {
        question:
          "Anxiously Ananda stopped him, But spoke Buddha, though in ___________ 'He who comes to seek for wisdom Shall not come to me in vain!'",
        options: ["anger", "pain", "joy"],
        correctAnswer: "pain",
      },
      {
        question:
          "And he to the pious stranger Told the truth in language plain, Taught the law with dying accents, Stopped, and never spoke ___________!",
        options: ["loudly", "again", "softly"],
        correctAnswer: "again",
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
          "The speaker in the text emphasizes the importance of patience and self-trust.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The text suggests that it's acceptable to deal in lies when being lied about.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "According to the text, it is advisable to give way to hating when being hated.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The text advises looking too good and talking too wisely.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The text encourages making dreams your master.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Triumph and disaster are described as impostors in the text.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The text suggests retaliating when the truth you've spoken is twisted by knaves.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The ultimate reward for following the described principles in the text is worldly success.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The text implies that the traveler met a beautiful child on his journey.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The speaker in the text advocates losing patience when all about you are losing theirs.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
