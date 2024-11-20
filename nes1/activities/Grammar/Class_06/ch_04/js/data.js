export const chapter = "Chapter - 4:Noun: Gender and Number ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What does Masculine Gender denote?",
            options: ["Male and female", "Female only", "Male only"],
            answer: "Male only",
          },
          {
            question: "Which of the following is an example of Neuter Gender?",
            options: ["Lioness", "Baby", "Television"],
            answer: "Television",
          },
          {
            question:
              "How can we change a Masculine Noun into Feminine by using an altogether different word?",
            options: [
              "Adding -ess at the end",
              "Using a different word",
              "Removing the last vowel and adding -ess",
            ],
            answer: "Using a different word",
          },
          {
            question: "In which case do we use Singular Number for nouns?",
            options: [
              "When a word connotes more than one",
              "When a word connotes one",
              "When a word is without life",
            ],
            answer: "When a word connotes one",
          },
          {
            question:
              "How are Singular Nouns ending in y preceded by a Consonant changed into Plural?",
            options: [
              "By adding -s",
              "By adding -es",
              "By dropping y and adding -ies",
            ],
            answer: "By dropping y and adding -ies",
          },
          {
            question:
              "What is the rule for changing Singular Nouns ending in o preceded by a Consonant into Plural?",
            options: ["Add -s", "Add -es", "Drop o and add -es"],
            answer: "Add -es",
          },
          {
            question:
              "When are Singular Nouns ending in o changed into Plural by adding only -s?",
            options: [
              "Always",
              "When preceded by a vowel",
              "When preceded by a consonant",
            ],
            answer: "When preceded by a consonant",
          },
          {
            question:
              "What is the rule for changing Singular Nouns ending in f or fe into Plural?",
            options: [
              "Add -s",
              "Replace f or fe by -ves",
              "Drop f or fe and add -es",
            ],
            answer: "Replace f or fe by -ves",
          },
          {
            question: "How are Compound Nouns changed into Plural?",
            options: [
              "By adding -s",
              "By changing the principal word",
              "By dropping vowels",
            ],
            answer: "By changing the principal word",
          },
          {
            question: "What is the connotation of Verbs in terms of Number?",
            options: [
              "Singular only",
              "Plural only",
              "Both Singular and Plural",
            ],
            answer: "Both Singular and Plural",
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
        questions: [
          {
            question:
              "Masculine Gender denotes that the Noun or Pronoun is __________.",
            options: ["Female", "Male", "Either male or female"],
            answer: "Male",
          },
          {
            question:
              "Feminine Gender denotes that the Noun or Pronoun is __________.",
            options: ["Male", "Female", "Common"],
            answer: "Female",
          },
          {
            question:
              "Common Gender denotes that the Noun or Pronoun can be __________.",
            options: ["Male only", "Female only", "Either male or female"],
            answer: "Either male or female",
          },
          {
            question:
              "Neuter Gender denotes a Noun or Pronoun that is __________.",
            options: ["Without life", "Male", "Female"],
            answer: "Without life",
          },
          {
            question:
              "We can add -ess at the end of a Masculine Noun to change it into __________.",
            options: ["Common Gender", "Feminine", "Neuter Gender"],
            answer: "Feminine",
          },
          {
            question: "Singular Number connotes __________.",
            options: ["More than one", "One", "Either one or more"],
            answer: "One",
          },
          {
            question:
              "Most of the Singular Nouns are changed into Plural by adding __________ to them.",
            options: ["-es", "-s", "-ies"],
            answer: "-s",
          },
          {
            question:
              "The Singular Nouns ending in y preceded by a Vowel are changed into Plural by adding __________ to them.",
            options: ["-es", "-s", "-ies"],
            answer: "-s",
          },
          {
            question:
              "Some Nouns remain the same in their both Singular and Plural __________.",
            options: ["Forms", "Types", "Numbers"],
            answer: "Numbers",
          },
          {
            question:
              "Verbs have connotation in Singular or Plural, as per the __________.",
            options: ["Object", "Pronoun", "Subject"],
            answer: "Subject",
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
        questions: [
          {
            question:
              "PowerPoint primarily uses slides to convey information rich in multimedia.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The Ribbon in PowerPoint contains commands specific to the selected tab.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The Backstage view in PowerPoint allows performing basic tasks like New, Open, and Print.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The Quick Access Toolbar in PowerPoint mainly includes commands for clipboard operations.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "SmartArt in PowerPoint is used to represent only textual data such as charts and graphs.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Slide Sorter View in PowerPoint allows editing the material present on the slides.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The Notes Pane in PowerPoint is used to write information related to the slides.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The Slide Show View in PowerPoint is primarily used for proofreading presentations.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Master View in PowerPoint stores information about the presentation's background and effects.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Exiting PowerPoint can be done by clicking the Close option in the File tab.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
