export const chapter = "Chapter -6: Clothes We Wear";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What type of clothes do we typically wear in summer?",
          optionA: "Woolen clothes",
          optionB: "Cotton clothes",
          optionC: "Raincoat",
          correctAnswer: "Cotton clothes",
        },
        {
          question: "What is suitable attire for winter according to the text?",
          optionA: "Raincoat",
          optionB: "Cotton clothes",
          optionC: "Woolen clothes",
          correctAnswer: "Woolen clothes",
        },
        {
          question: "What is recommended attire for the rainy season?",
          optionA: "Woolen clothes",
          optionB: "Raincoat",
          optionC: "Cotton clothes",
          correctAnswer: "Raincoat",
        },
        {
          question:
            "Which of the following is mentioned as an example of someone who wears a uniform at work?",
          optionA: "Students",
          optionB: "Doctor",
          optionC: "Policeman",
          correctAnswer: "Doctor",
        },
        {
          question:
            "When do people wear fancy party clothes according to the text?",
          optionA: "When attending school",
          optionB: "When celebrating special occasions",
          optionC: "When wearing uniforms",
          correctAnswer: "When celebrating special occasions",
        },
        {
          question:
            "What type of clothes do people wear to a birthday party in the text?",
          optionA: "Uniforms",
          optionB: "Fancy party clothes",
          optionC: "Raincoat",
          correctAnswer: "Fancy party clothes",
        },
        {
          question: "What is the common factor mentioned for wearing uniforms?",
          optionA: "Season",
          optionB: "Special occasions",
          optionC: "School or work",
          correctAnswer: "School or work",
        },
        {
          question:
            "Which profession is specifically mentioned as wearing a uniform in the text?",
          optionA: "Students",
          optionB: "Policeman",
          optionC: "Doctor",
          correctAnswer: "Policeman",
        },
        {
          question:
            "What material are winter clothes typically made of, according to the text?",
          optionA: "Cotton",
          optionB: "Wool",
          optionC: "Raincoat",
          correctAnswer: "Wool",
        },
        {
          question:
            "When do we wear raincoats and gumboots according to the text?",
          optionA: "Summer",
          optionB: "Winter",
          optionC: "Rainy season",
          correctAnswer: "Rainy season",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question: "Clothes protect our body and give us a ________ look.",
          optionA: "Casual",
          optionB: "Elegant",
          optionC: "Smart",
          correctAnswer: "Smart",
        },
        {
          question: "In summer, we typically wear ________ clothes.",
          optionA: "Woolen",
          optionB: "Cotton",
          optionC: "Raincoat",
          correctAnswer: "Cotton",
        },
        {
          question: "Woollen clothes are worn in ________.",
          optionA: "Rainy season",
          optionB: "Winter",
          optionC: "Summer",
          correctAnswer: "Winter",
        },
        {
          question: "Raincoat and gumboots are worn in the ________ season.",
          optionA: "Winter",
          optionB: "Summer",
          optionC: "Rainy",
          correctAnswer: "Rainy",
        },
        {
          question: "Apart from seasonal clothes, we also wear ________.",
          optionA: "Uniforms",
          optionB: "Party clothes",
          optionC: "Raincoats",
          correctAnswer: "Uniforms",
        },
        {
          question: "Uniforms are worn to school and by ________ at work.",
          optionA: "Students",
          optionB: "Doctor",
          optionC: "Policeman",
          correctAnswer: "Students",
        },
        {
          question:
            "Fancy party clothes are worn when we attend parties or celebrate ________ occasions.",
          optionA: "Everyday",
          optionB: "Regular",
          optionC: "Special",
          correctAnswer: "Special",
        },
        {
          question:
            "Wow! Everyone has worn nice and fancy party clothes. ________ has worn students.",
          optionA: "Everyone",
          optionB: "Nobody",
          optionC: "Students",
          correctAnswer: "Students",
        },
        {
          question:
            "We wear such clothes when we attend parties or celebrate ________.",
          optionA: "Everyday",
          optionB: "Regular",
          optionC: "Special occasions",
          correctAnswer: "Special occasions",
        },
        {
          question: "Clothes protect our body and give us a ________ look.",
          optionA: "Elegant",
          optionB: "Untidy",
          optionC: "Smart",
          correctAnswer: "Elegant",
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
          question: "Clothes protect our body and give us a smart look.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "We wear different kinds of clothes as per the season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Cotton clothes are typically worn in winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Raincoat and gumboots are suitable attire for the summer season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Uniforms are only worn to school.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fancy party clothes are worn for everyday activities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Washing clothes on the river bank is recommended in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Special occasions are not mentioned as a reason to wear fancy party clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Summer is the season for wearing woolen clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The text does not mention any benefits of a clean and green India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
