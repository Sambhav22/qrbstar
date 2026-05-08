export const chapter = "Chapter - 28 :  Application Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the main reason for the person not being able to attend school?",
            options: ["Fever", "Night", "Principal"],
            answer: "Fever",
          },
          {
            question:
              "What is the request made by the person to the Principal?",
            options: ["Leave", "Attend", "Respect"],
            answer: "Leave",
          },
          {
            question: "What is the missing word in the text after 'The'?",
            options: ["Fever", "School", "Night"],
            answer: "School",
          },
          {
            question: "What is the year mentioned in the text?",
            options: ["20xx", "AUD", "ANM"],
            answer: "20xx",
          },
          {
            question: "What does 'ANM' stand for in the text?",
            options: [
              "Attend Night Meeting",
              "Annual Night",
              "With due Respect",
            ],
            answer: "Annual Night",
          },
          {
            question: "What does 'AUD' stand for in the text?",
            options: [
              "Attend Until Date",
              "Annual Union Day",
              "ANM Undisclosed",
            ],
            answer: "Annual Union Day",
          },
          {
            question: "What is the phrase that starts with 'With due'?",
            options: ["Respect I want to", "Respect Thank you", "Respect ANM"],
            answer: "Respect I want to",
          },
          {
            question: "How long has the person been absent from school?",
            options: [
              "Since last night",
              "Since last year",
              "Since last class",
            ],
            answer: "Since last year",
          },
          {
            question:
              "What is the specific time mentioned for not attending school?",
            options: ["Day", "Night", "Year"],
            answer: "Night",
          },
          {
            question: "What is the appropriate closing term used in the text?",
            options: [
              "Yours sincerely",
              "Yours obediently",
              "Yours respectfully",
            ],
            answer: "Yours obediently",
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
              '"Fever" is the main reason for not being able to ___________.',
            options: ["Attend", "Respect", "Leave"],
            answer: "Attend",
          },
          {
            question: "The person is requesting the Principal for ___________.",
            options: ["Night", "Respect", "Leave"],
            answer: "Leave",
          },
          {
            question: '"The ___________ School" is mentioned in the text.',
            options: ["Fever", "Night", "___________"],
            answer: "School",
          },
          {
            question: 'The year mentioned in the text is "__________".',
            options: ["20xx", "ANM", "AUD"],
            answer: "20xx",
          },
          {
            question: '"ANM" stands for "Annual ___________" in the text.',
            options: ["Attend", "Night", "Respect"],
            answer: "Night",
          },
          {
            question: '"AUD" stands for "Annual ___________" in the text.',
            options: ["Attend", "Night", "___________"],
            answer: "Union Day",
          },
          {
            question: "With due ___________ I want to ___________ that.",
            options: ["Respect, Attend", "Attend, Respect", "Leave, Respect"],
            answer: "Respect, Attend",
          },
          {
            question:
              "The person has been absent from school since ___________.",
            options: ["Last night", "Last year", "Last class"],
            answer: "Last year",
          },
          {
            question:
              "The person cannot attend school from ________ to _________ for the same.",
            options: [
              "Night, Fever",
              "Fever, Night",
              "___________, ___________",
            ],
            answer: "Fever, Night",
          },
          {
            question:
              'The closing term used in the text is "Yours ___________".',
            options: ["Sincerely", "Respectfully", "___________"],
            answer: "Obediently",
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
              "The main reason for not being able to attend school is fever.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The person is requesting the Principal for leave.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The missing word in the text after 'The' is Night.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The year mentioned in the text is ANM.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "ANM stands for Annual Night in the text.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "AUD stands for Annual Union Day in the text.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "With due Respect, the person wants to Attend.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The person has been absent from school since last night.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The specific time mentioned for not attending school is Day.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The closing term used in the text is Yours Sincerely.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
