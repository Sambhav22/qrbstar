export const chapter = "Chapter - 1: More About Computers";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "Which feature of a computer allows it to perform complex calculations quickly?",
            options: {
              A: "Large storage",
              B: "Multitasking",
              C: "High speed",
            },
            answer: "C",
          },
          {
            question: "What distinguishes a desktop computer from a laptop?",
            options: {
              A: "Portability",
              B: "Battery operation",
              C: "Size and mobility",
            },
            answer: "C",
          },
          {
            question:
              "Which type of computer can be comfortably placed on one's lap?",
            options: {
              A: "Desktop",
              B: "Palmtop",
              C: "Laptop",
            },
            answer: "C",
          },
          {
            question:
              "What is a distinctive characteristic of a palmtop computer?",
            options: {
              A: "It requires a desk or table for use.",
              B: "It is heavy and not easily portable.",
              C: "It fits easily in one's palm or pocket.",
            },
            answer: "C",
          },
          {
            question:
              "What feature allows a computer to work continuously without fatigue?",
            options: {
              A: "Multitasking capability",
              B: "Error-free work",
              C: "Tirelessness",
            },
            answer: "C",
          },
          {
            question:
              "What distinguishes a smartphone from a traditional mobile phone?",
            options: {
              A: "It lacks a digital camera.",
              B: "It has basic phone capabilities.",
              C: "It provides computer facilities.",
            },
            answer: "C",
          },
          {
            question:
              "Which feature enables a computer to store vast amounts of information?",
            options: {
              A: "Error-free work",
              B: "High speed",
              C: "Large storage",
            },
            answer: "C",
          },
          {
            question:
              "What is a shared characteristic between a notebook and a laptop?",
            options: {
              A: "Both are large and heavy.",
              B: "Both work without a battery.",
              C: "Both are portable.",
            },
            answer: "C",
          },
          {
            question:
              "What makes a desktop computer unsuitable for frequent travel?",
            options: {
              A: "It requires constant power supply.",
              B: "It lacks high-speed processing.",
              C: "It's lightweight and easily portable.",
            },
            answer: "A",
          },
          {
            question:
              "Which feature distinguishes a computer's functionality from a human's?",
            options: {
              A: "Multitasking ability",
              B: "Need for instructions to work",
              C: "Capacity for emotional response",
            },
            answer: "B",
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
              "High Speed: A computer works very fast. It can do difficult calculations in a _________.",
            options: {
              A: "Few minutes",
              B: "Moment",
              C: "Day",
            },
            answer: "B",
          },
          {
            question:
              "Tirelessness: A computer works continuously for many hours without getting _________.",
            options: {
              A: "Hungry",
              B: "Tired",
              C: "Bored",
            },
            answer: "B",
          },
          {
            question:
              "Error Free Work: A computer does not make any _________.",
            options: {
              A: "Mistake",
              B: "Breaks",
              C: "Errors",
            },
            answer: "C",
          },
          {
            question:
              "Multitasking: A computer can do many _________ at a time.",
            options: {
              A: "Jobs",
              B: "Tasks",
              C: "Chores",
            },
            answer: "B",
          },
          {
            question:
              "Large Storage: A computer has a large memory. It can store lots of information in _________ memory.",
            options: {
              A: "Its",
              B: "Our",
              C: "Their",
            },
            answer: "A",
          },
          {
            question:
              "Computer Versus Human: A computer is a smart machine that does a number of tasks much better than we do. But, it cannot work on _________.",
            options: {
              A: "Its own",
              B: "Alone",
              C: "Independently",
            },
            answer: "A",
          },
          {
            question:
              "Laptop: A computer which can be kept on our lap is called a _________.",
            options: {
              A: "Desktop",
              B: "Notebook",
              C: "Laptop",
            },
            answer: "C",
          },
          {
            question:
              "Smartphone: A mobile phone that also provides computer facility in addition to basic phone capabilities is called a _________.",
            options: {
              A: "Smartphone",
              B: "Tablet",
              C: "Palmtop",
            },
            answer: "A",
          },
          {
            question:
              "Palmtop: A computer which can be easily fitted in your _________ is called a palmtop.",
            options: {
              A: "Hand",
              B: "Pocket",
              C: "Bag",
            },
            answer: "B",
          },
          {
            question:
              "Desktop: A computer which can be put on a desk or a table is called a _________.",
            options: {
              A: "Desktop",
              B: "Personal Computer (PC)",
              C: "Workstation",
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
              "A computer's tirelessness allows it to work continuously without getting tired.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A palmtop computer is large and cannot be easily carried in a pocket.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A smartphone lacks computer facilities and can only perform basic phone capabilities.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A desktop computer is portable and can be easily carried while traveling.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A computer's large storage allows it to store only a limited amount of information.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Computers and humans working together cannot accomplish much.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "A laptop is designed to be kept on a desk or table.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A computer's multitasking capability allows it to perform only one task at a time.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Smartphones come equipped with a built-in digital camera for taking pictures.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A computer does not require any instructions to perform tasks.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
        ],
      },
    ],
  };
}

export var activityData;
