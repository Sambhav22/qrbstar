export const chapter = "Chapter - 3: Adjective";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What type of Adjective tells the quality of a Noun or Pronoun?",
          optionA: "Demonstrative Adjective",
          optionB: "Adjective of Quantity",
          optionC: "Adjective of Quality",
          correctAnswer: "C) Adjective of Quality",
        },
        {
          question: "Which Adjective is used to ask a question?",
          optionA: "Demonstrative Adjective",
          optionB: "Interrogative Adjective",
          optionC: "Possessive Adjective",
          correctAnswer: "B) Interrogative Adjective",
        },
        {
          question: "What does an Adjective of Quantity answer?",
          optionA: "How much?",
          optionB: "How many?",
          optionC: "What kind?",
          correctAnswer: "A) How much?",
        },
        {
          question:
            "Which type of Adjective points out a Noun using words like 'this,' 'that,' 'these,' and 'those'?",
          optionA: "Possessive Adjective",
          optionB: "Demonstrative Adjective",
          optionC: "Distributive Adjective",
          correctAnswer: "B) Demonstrative Adjective",
        },
        {
          question:
            "In Predicative Usage, where is an Adjective placed in relation to the Noun it qualifies?",
          optionA: "Before the Noun",
          optionB: "After the Noun",
          optionC: "Alternately before and after the Noun",
          correctAnswer: "B) After the Noun",
        },
        {
          question: "What degree of Adjective is used for comparison?",
          optionA: "Positive Degree",
          optionB: "Comparative Degree",
          optionC: "Superlative Degree",
          correctAnswer: "B) Comparative Degree",
        },
        {
          question:
            "How are Comparative and Superlative degrees formed when the Positive degree ends in 'e'?",
          optionA: "Add -er and -est",
          optionB: "Add -r and -st",
          optionC: "Replace 'e' with -ier and -iest",
          correctAnswer: "B) Add -r and -st",
        },
        {
          question:
            "What is used for making Comparative and Superlative degrees for Positive degrees with two or more syllables?",
          optionA: "-er and -est",
          optionB: "More and Most",
          optionC: "-ier and -iest",
          correctAnswer: "B) More and Most",
        },
        {
          question:
            "In which sentence is the Adjective used in its Predicative Usage for the Object?",
          optionA: "The sky was overcast.",
          optionB: "They painted the window red.",
          optionC: "The teacher marked Suresh absent.",
          correctAnswer: "B) They painted the window red.",
        },
        {
          question: "What does a Possessive Adjective indicate?",
          optionA: "Quantity",
          optionB: "Ownership or Possession",
          optionC: "Comparison",
          correctAnswer: "B) Ownership or Possession",
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
            "Adjectives of __________ tell the quality of a Noun or Pronoun.",
          options: {
            a: "Quantity",
            b: "Quality",
            c: "Number",
          },
          correctAnswer: "b",
        },
        {
          question:
            "An Adjective of Quantity answers the question-___________.",
          options: {
            a: "What kind?",
            b: "How much?",
            c: "How many?",
          },
          correctAnswer: "b",
        },
        {
          question:
            "An Adjective of Number tells the __________ of a Noun or Pronoun.",
          options: {
            a: "Quality",
            b: "Kind",
            c: "Number",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Demonstrative Adjectives point out a Noun using words like __________.",
          options: {
            a: "My, Your, His",
            b: "This, That, These",
            c: "Every, Each, Either",
          },
          correctAnswer: "b",
        },
        {
          question:
            "In Predicative Usage, an Adjective is used __________ the Noun it qualifies.",
          options: {
            a: "After",
            b: "Before",
            c: "Alternately before and after",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The Superlative degree is used to indicate the __________ measure of a quality.",
          options: {
            a: "Maximum",
            b: "Minimum",
            c: "Average",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Comparative and Superlative degrees for Positive degrees ending in 'e' are formed by adding __________.",
          options: {
            a: "-er and -est",
            b: "-r and -st",
            c: "-ier and -iest",
          },
          correctAnswer: "b",
        },
        {
          question:
            "For Positive degrees with two or more syllables, __________ are used for making Comparative and Superlative degrees.",
          options: {
            a: "-er and -est",
            b: "More and Most",
            c: "-ier and -iest",
          },
          correctAnswer: "b",
        },
        {
          question:
            "To exit Excel after finishing your work, you can __________.",
          options: {
            a: "Click on the Save option",
            b: "Close the workbook window",
            c: "Click on the Print option",
          },
          correctAnswer: "b",
        },
        {
          question: "The Formula Bar in Excel displays the __________.",
          options: {
            a: "Worksheet names",
            b: "Active cell content",
            c: "Workbook titles",
          },
          correctAnswer: "b",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Adjectives of Quantity answer the question 'What kind?'",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Demonstrative Adjectives point out a Noun using words like 'this,' 'that,' 'these,' and 'those'.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "In Predicative Usage, an Adjective is used after the Noun it qualifies.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The Superlative degree is used to indicate the minimum measure of a quality.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Comparative and Superlative degrees for Positive degrees ending in 'e' are formed by adding -r and -st respectively.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "For Positive degrees with two or more syllables, -er and -est are used for making Comparative and Superlative degrees respectively.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The Ribbon in Excel contains different menu tabs that house groups of related Functions.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Excel is primarily used for manipulating Alphabetic data.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The Formula Bar in Excel is used to display the data or formula of the Entire workbook.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "To exit Excel after finishing your work, you can Click on the Save option.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
