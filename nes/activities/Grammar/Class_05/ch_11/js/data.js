export const chapter = "Chapter - 11: Agreement of the Verb with its Subject";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the correct usage of the verb in relation to the subject in the given sentences?",
          optionA: "A boy are playing.",
          optionB: "Four boys is playing.",
          optionC: "A boy is playing.",
          correctAnswer: "A boy is playing.",
        },
        {
          question:
            "Which sentence demonstrates the correct use of a plural verb with plural subjects?",
          optionA: "He and she is going together.",
          optionB: "Kanta, Usha and Jaya was eating together.",
          optionC: "The king and the queen are in the palace now.",
          correctAnswer: "The king and the queen are in the palace now.",
        },
        {
          question:
            "In sentences with two or more singular subjects, what is the appropriate verb form?",
          optionA: "You, he and I has finished work.",
          optionB: "He and she are going together.",
          optionC: "The Netherlands is a small country.",
          correctAnswer: "He and she are going together.",
        },
        {
          question:
            "Which sentence correctly matches a singular verb with a plural subject?",
          optionA: "Mathematics are an interesting subject.",
          optionB: "The United States has voted in favour of the proposal.",
          optionC: "The Netherlands are a small country.",
          correctAnswer:
            "The United States has voted in favour of the proposal.",
        },
        {
          question:
            "What is the proper verb agreement with the subjects in the following sentences?",
          optionA: "A boy are playing.",
          optionB: "Four boys is playing.",
          optionC: "They are good players.",
          correctAnswer: "They are good players.",
        },
        {
          question:
            "Which sentence demonstrates the correct use of a plural verb with multiple singular subjects?",
          optionA: "You, he and I has finished work.",
          optionB: "He and she is going together.",
          optionC: "Kanta, Usha and Jaya were eating together.",
          correctAnswer: "Kanta, Usha and Jaya were eating together.",
        },
        {
          question:
            "What is the appropriate verb agreement in the following sentences?",
          optionA: "Mathematics is an interesting subject.",
          optionB: "Billiards are my favourite game.",
          optionC: "The Netherlands has a small country.",
          correctAnswer: "Mathematics is an interesting subject.",
        },
        {
          question:
            "In sentences with singular subjects, what is the correct form of the verb?",
          optionA: "The United States have voted in favour of the proposal.",
          optionB: "The Netherlands is a small country.",
          optionC: "The Netherlands have a small country.",
          correctAnswer: "The Netherlands is a small country.",
        },
        {
          question:
            "Which sentence correctly matches a singular verb with a plural subject?",
          optionA: "He and she are going together.",
          optionB: "You, he and I has finished work.",
          optionC: "The king and the queen is in the palace now.",
          correctAnswer: "He and she are going together.",
        },
        {
          question:
            "What is the appropriate verb agreement in the following sentences?",
          optionA: "A boy is playing.",
          optionB: "Four boys are playing.",
          optionC: "He is a good player.",
          correctAnswer: "Four boys are playing.",
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
          question: "A boy _____ playing.",
          options: ["is", "are", "am"],
          correctAnswer: "is",
        },
        {
          question: "Four boys _____ playing.",
          options: ["is", "are", "am"],
          correctAnswer: "are",
        },
        {
          question: "He _____ a good player.",
          options: ["is", "are", "am"],
          correctAnswer: "is",
        },
        {
          question: "They _____ good players.",
          options: ["is", "are", "am"],
          correctAnswer: "are",
        },
        {
          question: "He and she _____ going together.",
          options: ["is", "are", "am"],
          correctAnswer: "are",
        },
        {
          question: "Kanta, Usha, and Jaya _____ eating together.",
          options: ["is", "are", "am"],
          correctAnswer: "were",
        },
        {
          question: "You, he, and I _____ finished work.",
          options: ["is", "are", "am"],
          correctAnswer: "have",
        },
        {
          question: "The king and the queen _____ in the palace now.",
          options: ["is", "are", "am"],
          correctAnswer: "are",
        },
        {
          question: "Billiards _____ my favourite game.",
          options: ["is", "are", "am"],
          correctAnswer: "is",
        },
        {
          question: "The Netherlands _____ a small country.",
          options: ["is", "are", "am"],
          correctAnswer: "is",
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
            "A Singular Verb should be used with a Singular Subject and a Plural Verb should be used with a Plural Subject.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "If two or more Singular Subjects are used together as Subject, the Verb will also be in the Plural.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The names of some games, subjects, and countries appear to be Plural, but Singular Verb has to be used with them.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "A boy is playing.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Four boys is playing.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "He and she are going together.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "You, he, and I have finished work.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Billiards is my favourite game.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Mathematics is an interesting subject.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The United States has voted in favour of the proposal.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
