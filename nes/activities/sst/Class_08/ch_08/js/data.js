export const chapter = "Chapter - 8: Reform Movement for Women";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is a social evil mentioned in the text that has been abolished by law?",
        optionA: "Dowry Custom",
        optionB: "Sati Custom",
        optionC: "Child Marriage",
        correctAnswer: "B",
      },
      {
        question:
          "Which social reformer focused on women's education in the text?",
        optionA: "Raja Ram Mohan Roy",
        optionB: "Swami Dayananda",
        optionC: "Mahatma Gandhi",
        correctAnswer: "A",
      },
      {
        question:
          "What is the minimum age for a girl to get married according to the law mentioned in the text?",
        optionA: "14 years",
        optionB: "18 years",
        optionC: "21 years",
        correctAnswer: "B",
      },
      {
        question:
          "What did Swami Dayananda oppose as part of his efforts to reform society?",
        optionA: "Child Marriage",
        optionB: "Dowry System",
        optionC: "Caste Discrimination",
        correctAnswer: "C",
      },
      {
        question:
          "What did Mahatma Gandhi advocate for in terms of women's rights?",
        optionA: "Equal status and equal rights for both sons and daughters",
        optionB: "Child marriage",
        optionC: "The dowry system",
        correctAnswer: "A",
      },
      {
        question:
          "Who founded the Muhammadan Anglo Oriental College, now known as Aligarh Muslim University?",
        optionA: "Raja Ram Mohan Roy",
        optionB: "Sir Syed Ahmad Khan",
        optionC: "Mahatma Gandhi",
        correctAnswer: "B",
      },
      {
        question:
          "Which region of India is mentioned as an example of the impact of the social reform movement on women?",
        optionA: "Bengal",
        optionB: "Punjab",
        optionC: "Rajasthan",
        correctAnswer: "A",
      },
      {
        question:
          "What was a key outcome of the social reform movement discussed in the text?",
        optionA: "Women taking part in social activities at par with men",
        optionB: "A complete change in people's attitude",
        optionC: "The prevalence of social evils",
        correctAnswer: "A",
      },
      {
        question:
          "Which woman is mentioned as an example of someone who actively participated in social life and the national movement for freedom?",
        optionA: "Sarojini Naidu",
        optionB: "Raja Ram Mohan Roy",
        optionC: "Sati",
        correctAnswer: "A",
      },
      {
        question:
          "What were the tools of discussing political, economic, social, and religious affairs that helped spread ideas in the text?",
        optionA: "Handwritten manuscripts",
        optionB: "Modern machines",
        optionC: "Printing press, newspapers, and books",
        correctAnswer: "C",
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
          "The time when so-called low-caste people were shunned and not allowed to come near is an example of __________ social evil.",
        options: {
          A: "prevalent",
          B: "abolished",
          C: "humiliating",
        correctAnswer: "C",
      },
      {
        question:
          "Swami Dayananda established the Arya Samaj in Bombay in _______.",
        options: {
          A: "1850",
          B: "1875",
          C: "1900",
        correctAnswer: "B",
      },
      {
        question:
          "Mahatma Gandhi advocated for equal status and equal rights for _______ and daughters.",
        options: {
          A: "sons",
          B: "cousins",
          C: "relatives",
        correctAnswer: "A",
      },
      {
        question:
          "The minimum age for a girl to get married according to the law is _______ years.",
        options: {
          A: "14",
          B: "18",
          C: "21",
        correctAnswer: "B",
      },
      {
        question:
          "Swami Dayananda opposed _______ among Muslim men and purdah system among Muslim women.",
        options: {
          A: "caste discrimination",
          B: "polygamy",
          C: "dowry system",
        correctAnswer: "B",
      },
      {
        question:
          "The social reform movement in Bengal, Maharashtra, and other provinces brought about a change in the thinking of common people, including both Hindus and _______.",
        options: {
          A: "Muslims",
          B: "Christians",
          C: "Buddhists",
        correctAnswer: "A",
      },
      {
        question:
          "Social reformers presented the main idea that an educated woman can raise the level of the whole _______.",
        options: {
          A: "village",
          B: "family",
          C: "country",
        correctAnswer: "B",
      },
      {
        question:
          "The Arya Samaj established a large number of educational institutions, including gurukuls, kanya-gurukuls, and DAV schools and colleges, in _______ India.",
        options: {
          A: "South",
          B: "North",
          C: "West",
        correctAnswer: "B",
      },
      {
        question:
          "Women started to take part in social life, and many women, both Hindu and Muslim, wrote books depicting the plight of _______.",
        options: {
          A: "children",
          B: "men",
          C: "women",
        correctAnswer: "C",
      },
      {
        question:
          "Mahatma Gandhi was against the _______ system because it restricted women's movement.",
        options: {
          A: "caste discrimination",
          B: "dowry",
          C: "purdah",
        correctAnswer: "C",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Swami Dayananda founded the Arya Samaj in 1850.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Mahatma Gandhi advocated for equal rights for both sons and daughters.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The minimum age for a girl to get married according to the law is 21 years.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Swami Dayananda opposed caste discrimination among Muslim men.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The social reform movement in Bengal brought about a change in thinking of Hindus only.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Social reformers presented the idea that an illiterate woman can raise her children well.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The Arya Samaj established gurukuls that impart education in Sanskrit, Vedas, and Ayurveda.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Women in the pre-independence days did not actively participate in social life.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question: "Mahatma Gandhi was against the caste discrimination system.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question: "Sir Syed Ahmad Khan founded Aligarh Muslim University.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
    ],
  };
}

export var activityData;
