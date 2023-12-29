export const chapter = "Chapter - 4: Uses of a Computer ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What purpose does technology serve in hospitals?",
        options: {
          a: "Recording movies",
          b: "Storing patient information",
          c: "Drawing and coloring",
        },
        answer: "b",
      },
      {
        question: "What is a primary function of technology in schools?",
        options: {
          a: "Watching movies",
          b: "Teaching subjects to students",
          c: "Keeping records of account holders",
        },
        answer: "b",
      },
      {
        question: "What is a common use of technology at home?",
        options: {
          a: "Making report cards",
          b: "Listening to music",
          c: "Reserving and booking tickets",
        },
        answer: "b",
      },
      {
        question: "How is technology utilized in banks?",
        options: {
          a: "Sending important messages",
          b: "Keeping records of criminals",
          c: "Maintaining details of account holders",
        },
        answer: "c",
      },
      {
        question: "What function does technology serve in offices?",
        options: {
          a: "Drawing and coloring",
          b: "Storing official information",
          c: "Informing arrival and departure of trains",
        },
        answer: "b",
      },
      {
        question: "What is a key role of technology in police stations?",
        options: {
          a: "Communicating within police departments",
          b: "Watching movies",
          c: "Reserving and booking tickets",
        },
        answer: "a",
      },
      {
        question:
          "How does technology assist at airports and railway stations?",
        options: {
          a: "Keeping records of available stock",
          b: "Informing arrival and departure of trains and planes",
          c: "Making report cards",
        },
        answer: "b",
      },
      {
        question: "In what capacity does technology aid in shops and malls?",
        options: {
          a: "Keeping records of criminals",
          b: "Preparing bills of customers",
          c: "Teaching subjects to students",
        },
        answer: "b",
      },
      {
        question:
          "What function is NOT typically associated with technology in hospitals?",
        options: {
          a: "Examining patients",
          b: "Recording the data of medicines",
          c: "Reserving and booking tickets",
        },
        answer: "c",
      },
      {
        question: "What is NOT a common use of technology in schools?",
        options: {
          a: "Making report cards",
          b: "Watching movies",
          c: "Teaching different subjects to students",
        },
        answer: "b",
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
          "Hospitals use technology to store information of __________.",
        options: {
          a: "Teachers",
          b: "Patients",
          c: "Musicians",
        },
        answer: "b",
      },
      {
        question:
          "At schools, technology helps in making __________ and preparing fee receipts.",
        options: {
          a: "Drawings",
          b: "Report cards",
          c: "Sculptures",
        },
        answer: "b",
      },
      {
        question: "Technology at home is used to watch __________.",
        options: {
          a: "Birds",
          b: "Movies",
          c: "Documentaries",
        },
        answer: "b",
      },
      {
        question:
          "In banks, technology is used in maintaining the details of __________ money.",
        options: {
          a: "Customers'",
          b: "Teachers'",
          c: "Athletes'",
        },
        answer: "a",
      },
      {
        question:
          "Technology in offices is used to store __________ information.",
        options: {
          a: "Personal",
          b: "Official",
          c: "Social",
        },
        answer: "b",
      },
      {
        question:
          "At police stations, technology is used to keep records of __________.",
        options: {
          a: "Criminals",
          b: "Tourists",
          c: "Celebrities",
        },
        answer: "a",
      },
      {
        question:
          "Technology at airports and railway stations helps in reserving and booking __________.",
        options: {
          a: "Hotels",
          b: "Tickets",
          c: "Taxis",
        },
        answer: "b",
      },
      {
        question:
          "In shops and malls, technology is used to keep records of available __________.",
        options: {
          a: "Cars",
          b: "Stock",
          c: "Furniture",
        },
        answer: "b",
      },
      {
        question:
          "In hospitals, technology is used to record the data of __________.",
        options: {
          a: "Animals",
          b: "Medicines",
          c: "Plants",
        },
        answer: "b",
      },
      {
        question:
          "Technology in schools is used for teaching different __________ to students.",
        options: {
          a: "Sports",
          b: "Subjects",
          c: "Hobbies",
        },
        answer: "b",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Hospitals use technology to store information of patients.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question: "Technology at home is used to draw and colour.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "b",
      },
      {
        question: "In banks, technology is used in operating ATMs.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question:
          "At police stations, technology is used to communicate within police departments.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question:
          "In shops and malls, technology is used to prepare bills of customers.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question:
          "Technology in offices is used to send important messages through e-mails.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question:
          "At schools, technology helps in making report cards and preparing fee receipts.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question: "In hospitals, technology is used to examine the patients.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "b",
      },
      {
        question:
          "Technology at airports and railway stations is used to inform arrival and departure of trains and aeroplanes.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
      {
        question:
          "In banks, technology is used in maintaining the details of customers' money.",
        options: {
          a: "True",
          b: "False",
        },
        answer: "a",
      },
    ],
  };
}

export var activityData;
