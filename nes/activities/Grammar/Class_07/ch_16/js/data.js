export const chapter = "Chapter - 16: Direct and Indirect Speech";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary function of the Reporting Verb in Direct Speech?",
          optionA: "a) To provide details about the statement",
          optionB: "b) To indicate the tense of the Reported Speech",
          optionC: "c) To ask a question",
          correctAnswer: "b) To indicate the tense of the Reported Speech",
        },
        {
          question:
            "According to the rules, how are first-person words in the Reported Speech changed in Indirect Speech?",
          optionA: "a) They remain unchanged",
          optionB: "b) They are replaced by the subject of the Reporting Verb",
          optionC:
            "c) They are changed according to the object of the Reporting Verb",
          correctAnswer:
            "b) They are replaced by the subject of the Reporting Verb",
        },
        {
          question:
            "In which situations is there no change made to the Verb of the Reported Speech?",
          optionA: "a) Present or Future Tense of the Reporting Verb",
          optionB:
            "b) Historical or Habitual Fact, Universal Truth, or Proverb",
          optionC: "c) Past Tense of the Reporting Verb",
          correctAnswer:
            "b) Historical or Habitual Fact, Universal Truth, or Proverb",
        },
        {
          question:
            "How are Yes/No-type questions transformed in Indirect Speech?",
          optionA: "a) Using the conjunction 'that'",
          optionB: "b) Using the conjunction 'if' or 'whether'",
          optionC: "c) No conjunction is used",
          correctAnswer: "b) Using the conjunction 'if' or 'whether'",
        },
        {
          question:
            "If the Reported Speech contains a command, what is the appropriate change for 'said to' in Indirect Speech?",
          optionA: "a) Advised",
          optionB: "b) Ordered",
          optionC: "c) Requested",
          correctAnswer: "b) Ordered",
        },
        {
          question:
            "What is the correct transformation of the exclamatory sentence 'Hurrah! We have won the match by thirty runs.' into Indirect Speech?",
          optionA:
            "a) The players exclaimed with joy that they had won the match by thirty runs.",
          optionB:
            "b) The players exclaimed sorrowfully that they had lost the match.",
          optionC:
            "c) The players exclaimed with surprise that they were losing the match.",
          correctAnswer:
            "a) The players exclaimed with joy that they had won the match by thirty runs.",
        },
        {
          question:
            "How is the phrase 'Let us' changed in a proposal in Indirect Speech?",
          optionA: "a) Replaced by 'should'",
          optionB: "b) Replaced by 'would'",
          optionC: "c) No change",
          correctAnswer: "a) Replaced by 'should'",
        },
        {
          question:
            "What is the transformation of the sentence 'May you live long!' in Indirect Speech?",
          optionA: "a) The priest wished that he might live long.",
          optionB: "b) The priest asked if he would live long.",
          optionC: "c) The priest exclaimed with joy that he would live long.",
          correctAnswer: "a) The priest wished that he might live long.",
        },
        {
          question:
            "When the Reported Speech is in the Present or Future Tense, what happens to the tense of the Reported Speech in Indirect Speech?",
          optionA: "a) It remains unchanged",
          optionB: "b) It changes to the Past Tense",
          optionC: "c) It changes to the Future Tense",
          correctAnswer: "a) It remains unchanged",
        },
        {
          question:
            "In Indirect Speech, how are Wh-type questions transformed?",
          optionA: "a) Using the conjunction 'that'",
          optionB: "b) Using the conjunction 'if' or 'whether'",
          optionC: "c) No conjunction is used",
          correctAnswer: "c) No conjunction is used",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            'She said to you, "I am getting late, you must drop me home now." (Reporting Verb) (Reported Speech)',
          options: [
            "a) She told to you that she is getting late and you must drop her home now.",
            "b) She says to you that she was getting late, and you must drop her home now.",
            "c) She told you that she was getting late, and you must drop her home now.",
          ],
          correctAnswer:
            "c) She told you that she was getting late, and you must drop her home now.",
        },
        {
          question:
            'Direct: Prashant said to Priya, "The annual function begins now." Indirect: Prashant told Priya that the annual function __________ then.',
          options: ["a) begins", "b) began", "c) will begin"],
          correctAnswer: "b) began",
        },
        {
          question:
            'The teacher said to the students, "Keep the pens down." The teacher ordered the students __________ the pens down.',
          options: ["a) keeping", "b) to keep", "c) kept"],
          correctAnswer: "b) to keep",
        },
        {
          question:
            'You said to a friend, "Where have you kept the books?" You asked a friend where __________ kept the books.',
          options: ["a) they", "b) he", "c) you"],
          correctAnswer: "c) you",
        },
        {
          question:
            'The little girl said, "Good morning, Father." The little girl __________ her father good morning.',
          options: ["a) wished", "b) says", "c) saying"],
          correctAnswer: "a) wished",
        },
        {
          question:
            'She said to her sister, "Why do you rebuke me very often?" She asked her sister why __________ rebuked her very often.',
          options: ["a) she", "b) her", "c) you"],
          correctAnswer: "a) she",
        },
        {
          question:
            'Direct: I say to her, "The judge can prove you guilty of the crime." Indirect: I say to her that the judge can prove __________ guilty of the crime.',
          options: ["a) her", "b) him", "c) you"],
          correctAnswer: "a) her",
        },
        {
          question:
            'You said to her, "You may take that umbrella tomorrow." You told her that she __________ take that umbrella the following day.',
          options: ["a) should", "b) might", "c) can"],
          correctAnswer: "b) might",
        },
        {
          question:
            'The players said, "Hurrah! We have won the match by thirty runs." The players exclaimed with __________ that they had won the match by thirty runs.',
          options: ["a) joy", "b) sorrow", "c) surprise"],
          correctAnswer: "a) joy",
        },
        {
          question:
            'He said, "I begged of him for a favour yesterday." He said that he __________ begged of him for a favour the previous day.',
          options: ["a) had", "b) has", "c) have"],
          correctAnswer: "a) had",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "In Direct Speech, the Reporting Verb describes who tells to whom.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Indirect Speech, the comma and inverted commas in the Direct Speech are retained.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "First-person words in the Reported Speech are changed according to the Object of the Reporting Verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "If the Reporting Verb is in the Past Tense, the tense of the Reported Speech remains the same.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Verb of the Reported Speech is not changed when reporting historical facts, habitual facts, universal truths, or proverbs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Indirect Speech, Wh-type questions are changed into a declarative form without using a conjunction.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Commands, advices, and requests in the Reported Speech are changed into the Infinitive form.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "If there is a proposal in the Reported Speech, said to is changed into suggested, and let is replaced by should.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Exclamatory sentences are changed into Indirect Speech using exclaimed with joy/sorrow/surprise/contempt.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Yes/No-type questions, the conjunction if or whether is used in the Indirect Speech.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };

export var activityData;
