export const chapter = "Chapter - 23: Our Rights and Duties";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the supreme law in India?",
        optionA: "The Constitution of India",
        optionB: "The Bill of Rights",
        optionC: "The Parliament",
        correctAnswer: "A",
      },
      {
        question:
          "What are the basic rights called that are granted by the Constitution of India?",
        optionA: "Civil Rights",
        optionB: "Fundamental Rights",
        optionC: "Legal Rights",
        correctAnswer: "B",
      },
      {
        question:
          "Which Fundamental Right ensures that citizens can't be discriminated against based on religion, caste, sex, or place of birth?",
        optionA: "Right to Equality",
        optionB: "Right to Freedom",
        optionC: "Right to Freedom of Religion",
        correctAnswer: "A",
      },
      {
        question:
          "What Fundamental Right guarantees the freedom to express oneself and practice any occupation, trade, or business?",
        optionA: "Right to Equality",
        optionB: "Right to Freedom",
        optionC: "Right to Freedom of Religion",
        correctAnswer: "B",
      },
      {
        question:
          "Which Fundamental Right allows citizens to follow the religion of their choice without interference?",
        optionA: "Right to Equality",
        optionB: "Right to Freedom",
        optionC: "Right to Freedom of Religion",
        correctAnswer: "C",
      },
      {
        question:
          "Under which Fundamental Right is it prohibited to employ a child below 14 years of age in any hazardous occupation?",
        optionA: "Right to Equality",
        optionB: "Right to Freedom",
        optionC: "Right against Exploitation",
        correctAnswer: "C",
      },
      {
        question:
          "What duty requires citizens to defend their country through national service?",
        optionA: "National Service Duty",
        optionB: "National Defense Duty",
        optionC: "Duty to Defend",
        correctAnswer: "A",
      },
      {
        question:
          "Which Fundamental Duty is about respecting national symbols?",
        optionA: "Duty to Patriotism",
        optionB: "Duty to Respect Symbols",
        optionC: "Duty to Respect National Symbols",
        correctAnswer: "C",
      },
      {
        question:
          "Which Fundamental Duty encourages citizens to protect and improve the natural environment?",
        optionA: "Duty to Nature",
        optionB: "Duty to Environment",
        optionC: "Duty to Protect and Improve the Environment",
        correctAnswer: "C",
      },
      {
        question:
          "Which Fundamental Duty promotes the spirit of harmony and brotherhood among citizens?",
        optionA: "Duty to Brotherhood",
        optionB: "Duty to Promote Harmony",
        optionC: "Duty to Unity",
        correctAnswer: "B",
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
          "The Constitution of India grants citizens some basic rights called ________________.",
        options: ["Legal Rights", "Civil Rights", "Fundamental Rights"],
        correctAnswer: "Fundamental Rights",
      },
      {
        question:
          "Right to Equality ensures that a citizen of India is equal before the law regardless of their religion, caste, sex, or place of birth. For example, it grants the right to ________________.",
        options: ["Work", "Education", "Travel"],
        correctAnswer: "Education",
      },
      {
        question:
          "Right to Freedom allows people to express themselves, form associations, and practice various occupations. It guarantees freedom to live at any place or engage in ________________.",
        options: ["Religion", "Trade", "Agriculture"],
        correctAnswer: "Trade",
      },
      {
        question:
          "Right against Exploitation prohibits the employment of a child below ________________ years of age in any hazardous occupation.",
        options: ["12", "14", "16"],
        correctAnswer: "14",
      },
      {
        question:
          "Cultural and Educational Rights enable people to speak their respective languages and follow their cultures and religions, emphasizing peaceful coexistence with ________________.",
        options: ["Neighbors", "The government", "Others"],
        correctAnswer: "Others",
      },
      {
        question:
          "The Fundamental Duties assigned by the Constitution include the duty to defend the country through ________________.",
        options: ["Voting", "National service", "Paying taxes"],
        correctAnswer: "National service",
      },
      {
        question:
          "One of the Fundamental Duties is to respect ________________, such as the national flag and national anthem.",
        options: ["National leaders", "National Symbols", "National holidays"],
        correctAnswer: "National Symbols",
      },
      {
        question:
          "Citizens must follow the ideals given by the Constitution, which includes promoting the spirit of ________________.",
        options: ["Patriotism", "Unity", "Harmony and brotherhood"],
        correctAnswer: "Harmony and brotherhood",
      },
      {
        question:
          "The Fundamental Duties require citizens to protect and improve the natural environment, including ________________.",
        options: [
          "Urban infrastructure",
          "Forests, wildlife, and rivers",
          "Industrial development",
        ],
        correctAnswer: "Forests, wildlife, and rivers",
      },
      {
        question:
          "Fundamental Duties encourage citizens to develop a ________________ and a spirit of inquiry.",
        options: [
          "Strong work ethic",
          "Scientific temper",
          "Political ideology",
        ],
        correctAnswer: "Scientific temper",
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
          "Communication refers to sending or receiving messages from one end to the other.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Postal service is one of the means of private communication.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Mobile phones have become less popular with advancements in technology.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Fax machines transmit documents using electronic means.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "To send messages through electronic mail (e-mail), you need a computer or a mobile phone, a modem, and an e-mail address.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Print media is only effective for literate people.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Radio is considered the most popular means of mass communication.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Rail transport is suitable for carrying small and fragile goods.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Air transport is the most eco-friendly mode of transportation.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "India launched its first satellite, Aryabhata, on 19 April 1975.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
