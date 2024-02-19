export const chapter = "Chapter - 25: Understanding the Constitution";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Who was the head of the drafting committee for the Constitution of India?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Dr. B.R. Ambedkar",
        correctAnswer: "C) Dr. B.R. Ambedkar",
      },
      {
        question:
          "How long did it take for the Constituent Assembly to finalize the Constitution of India?",
        optionA: "1 year",
        optionB: "2 years, 11 months, and 17 days",
        optionC: "5 years",
        correctAnswer: "B) 2 years, 11 months, and 17 days",
      },
      {
        question:
          "On what date did the Constitution of India come into force, making the country a Republic?",
        optionA: "August 15, 1947",
        optionB: "January 26, 1950",
        optionC: "October 2, 1947",
        correctAnswer: "B) January 26, 1950",
      },
      {
        question:
          "How many representatives were there in the Constituent Assembly of India?",
        optionA: "99",
        optionB: "200",
        optionC: "299",
        correctAnswer: "C) 299",
      },
      {
        question:
          "What is the primary purpose of celebrating Republic Day in India?",
        optionA: "Commemorate the country's independence",
        optionB: "Honor the drafting committee members",
        optionC: "Mark the day the Constitution came into force",
        correctAnswer: "C) Mark the day the Constitution came into force",
      },
      {
        question:
          "Which of the following is NOT one of the three layers of government in India's federal system?",
        optionA: "Central government",
        optionB: "State government",
        optionC: "Regional government",
        correctAnswer: "C) Regional government",
      },
      {
        question:
          "What is the purpose of the separation of powers in the Indian government system?",
        optionA: "To ensure the Executive has supreme power",
        optionB:
          "To prevent any one organ from becoming supreme or dictatorial",
        optionC: "To give the Judiciary the authority to make laws",
        correctAnswer:
          "B) To prevent any one organ from becoming supreme or dictatorial",
      },
      {
        question:
          "How many Fundamental Rights are there in the Indian Constitution?",
        optionA: "Four",
        optionB: "Five",
        optionC: "Six",
        correctAnswer: "C) Six",
      },
      {
        question:
          "What is the system called where representatives of the Legislature are elected directly by the people who make laws?",
        optionA: "Presidential system",
        optionB: "Parliamentary form of government",
        optionC: "Dictatorship",
        correctAnswer: "B) Parliamentary form of government",
      },
      {
        question:
          "What term is used for the right of all citizens, both men and women above the age of 18, to vote in India?",
        optionA: "Adult Suffrage",
        optionB: "Limited Franchise",
        optionC: "Universal Adult Franchise",
        correctAnswer: "C) Universal Adult Franchise",
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
          "The Constitution of India was authored by the Constituent Assembly, which had a total of _________ representatives, including 15 women.",
        options: ["100", "299", "500"],
        correctAnswer: "299",
      },
      {
        question:
          "The drafting committee for the Constitution was headed by Dr. B.R. Ambedkar, and it took _________ years, _________ months, and _________ days for the Constituent Assembly to finalize the Constitution.",
        options: [
          "1 year, 5 months, 10 days",
          "3 years, 6 months, 15 days",
          "2 years, 11 months, 17 days",
        ],
        correctAnswer: "2 years, 11 months, 17 days",
      },
      {
        question:
          "In India, the system of government where representatives of the Legislature are elected directly by the people who make laws is called __________.",
        options: ["Dictatorship", "Presidential system", "__________"],
        correctAnswer: "Parliamentary form of government",
      },
      {
        question:
          "Fundamental Rights are safeguards that allow citizens to lead a meaningful life and are incorporated in the Constitution of India. There are _________ Fundamental Rights in total.",
        options: ["4", "6", "8"],
        correctAnswer: "6",
      },
      {
        question:
          "In the Indian parliamentary form of government, the President is indirectly elected and acts on the advice of the __________.",
        options: ["Prime Minister", "Judiciary", "Legislature"],
        correctAnswer: "Prime Minister",
      },
      {
        question:
          "The Constitution of India consists of _________ Articles and _________ Schedules.",
        options: [
          "500 Articles, 10 Schedules",
          "395 Articles, 8 Schedules",
          "250 Articles, 5 Schedules",
        ],
        correctAnswer: "395 Articles, 8 Schedules",
      },
      {
        question:
          "The separation of powers is an important feature of the Indian government system to prevent any one organ from becoming __________ or __________.",
        options: [
          "Weak, ineffective",
          "Supreme, dictatorial",
          "Corrupt, inefficient",
        ],
        correctAnswer: "Supreme, dictatorial",
      },
      {
        question:
          "The Constitution of India divides powers among three layers of government: central government, state government, and local self-government. These three layers together are called __________.",
        options: ["Monarchy", "Federalism", "Democracy"],
        correctAnswer: "Federalism",
      },
      {
        question:
          "The system that allows all citizens, both men and women above the age of 18, to vote is called __________.",
        options: [
          "Limited Franchise",
          "Universal Adult Franchise",
          "Gender-neutral voting",
        ],
        correctAnswer: "Universal Adult Franchise",
      },
      {
        question:
          "The Constitution of India came into force on _________, making our country a Republic.",
        options: ["August 15, 1947", "January 26, 1950", "October 2, 1947"],
        correctAnswer: "January 26, 1950",
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
          "In a federal system, power is concentrated in a single central government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The Constitution of India was authored by the Constituent Assembly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question: "Fundamental Rights are absolute and cannot be restricted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The separation of powers in government is designed to prevent any one organ from becoming supreme or dictatorial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question: "The President of India is directly elected by the people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Dissent is not an important part of life in a democratic society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The Constitution of India divides powers among the central government, state government, and local self-government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Universal Adult Franchise allows all citizens, regardless of age, to vote in elections.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The Constitution of India came into force on January 26, 1950.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The separation of powers in government ensures that the Executive has supreme authority.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
    ],
  };
}

export var activityData;
