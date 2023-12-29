export const chapter = "Chapter - 3: Uses of a computer";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "In schools, computers are NOT used for:",
            options: {
              A: "Maintaining students' records",
              B: "Typing and printing documents",
              C: "Assisting in calculations and grammar",
            },
            answer: "B",
          },
          {
            question: "At homes, what is a common use of computers?",
            options: {
              A: "Calculating monthly expenses",
              B: "Preparing medical reports",
              C: "Keeping records of office employees",
            },
            answer: "A",
          },
          {
            question: "In offices, computers are NOT used for:",
            options: {
              A: "Sending messages through e-mail",
              B: "Typing and printing documents",
              C: "Performing operations for patients",
            },
            answer: "C",
          },
          {
            question: "In hospitals, what is a primary function of computers?",
            options: {
              A: "Helping in designing clothes",
              B: "Keeping a record of all patients",
              C: "Managing daily sales records",
            },
            answer: "B",
          },
          {
            question: "In shops, what is a common use of computers?",
            options: {
              A: "Keeping details of customers' bank accounts",
              B: "Helping in reservation of rail and air tickets",
              C: "Preparing bills and managing daily sales",
            },
            answer: "C",
          },
          {
            question: "Computers in banks are used for:",
            options: {
              A: "Withdrawing cash from an ATM",
              B: "Launching and controlling missiles",
              C: "Maintaining soldiers' records",
            },
            answer: "A",
          },
          {
            question: "At airports and railway stations, computers help in:",
            options: {
              A: "Designing clothes and magazines",
              B: "Providing information about arrival and departure timings",
              C: "Assisting in scientific research works",
            },
            answer: "B",
          },
          {
            question: "Computers in defense and research are NOT involved in:",
            options: {
              A: "Controlling rockets and missiles",
              B: "Establishing communication links between soldiers",
              C: "Designing cars, aeroplanes, and machines",
            },
            answer: "C",
          },
          {
            question: "In designing, architects primarily use computers for:",
            options: {
              A: "Designing buildings and houses",
              B: "Keeping records of office employees",
              C: "Helping in reservation and cancellation of tickets",
            },
            answer: "A",
          },
          {
            question: "Engineers use computers for designing:",
            options: {
              A: "Medical reports for patients",
              B: "Clothes, magazines, and newspapers",
              C: "Cars, aeroplanes, and machines",
            },
            answer: "C",
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
              "In schools, computers are used to help students in writing, drawing, __________, calculations, etc.",
            options: {
              A: "Science",
              B: "Grammar",
              C: "History",
            },
            answer: "B",
          },
          {
            question:
              "Computers are used for maintaining students' records, fees records, making timetables, preparing __________, etc.",
            options: {
              A: "Assignments",
              B: "Results",
              C: "Presentations",
            },
            answer: "B",
          },
          {
            question:
              "At homes, children use computers for playing games, listening to music, writing letters, watching movies, drawing __________, etc.",
            options: {
              A: "Maps",
              B: "Pictures",
              C: "Charts",
            },
            answer: "B",
          },
          {
            question:
              "Computers are used to calculate __________ expenses at homes.",
            options: {
              A: "Weekly",
              B: "Monthly",
              C: "Yearly",
            },
            answer: "B",
          },
          {
            question:
              "In offices, computers are used to type and print documents, and store a lot of __________.",
            options: {
              A: "Images",
              B: "Information",
              C: "Videos",
            },
            answer: "B",
          },
          {
            question:
              "Computers in hospitals help doctors to get information about diseases and medicines and help in keeping a record of all the __________ in the hospital.",
            options: {
              A: "Nurses",
              B: "Patients",
              C: "Visitors",
            },
            answer: "B",
          },
          {
            question:
              "Shopkeepers use computers to prepare __________ in shops.",
            options: {
              A: "Inventories",
              B: "Bills",
              C: "Receipts",
            },
            answer: "B",
          },
          {
            question:
              "In banks, computers are used to keep the details of customers' bank __________.",
            options: {
              A: "Transactions",
              B: "Accounts",
              C: "Loans",
            },
            answer: "B",
          },
          {
            question:
              "Computers help in reservation and cancellation of rail and air __________ at airports and railway stations.",
            options: {
              A: "Tickets",
              B: "Passes",
              C: "Tokens",
            },
            answer: "A",
          },
          {
            question:
              "Computers help scientists in their research works and also help in launching and controlling __________.",
            options: {
              A: "Satellites",
              B: "Drones",
              C: "Submarines",
            },
            answer: "A",
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
              "Computers are extensively used in schools for various educational purposes.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Computers are rarely utilized for entertainment purposes at homes.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Computers serve as a primary means of communication in offices.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Computers play a significant role in conducting surgeries in hospitals.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Computers are frequently employed in shops for managing inventory.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Computers in banks primarily facilitate customer service operations.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Computers are a key information source for travelers at airports and railway stations.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Computers in defense and research are heavily involved in artistic design tasks.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Architects frequently use computers for designing buildings and structures.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Engineers extensively use computers for designing various machines and vehicles.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
        ],
      },
    ],
  };
}

export var activityData;
