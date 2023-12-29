export const chapter = "Chapter - 2: Computer memory and Storage";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary function of the CPU in a computer?",
          optionA: "Execute programs and perform calculations",
          optionB: "Store data permanently",
          optionC: "Control external storage devices",
          correctAnswer: "A",
        },
        {
          question: "How is information stored in Random Access Memory (RAM)?",
          optionA: "In the form of binary numbers (0 and 1)",
          optionB: "In alphabetical order",
          optionC: "In a compressed format",
          correctAnswer: "A",
        },
        {
          question: "What is the storage capacity of 1 Kilobyte (KB)?",
          optionA: "1024 bytes",
          optionB: "1000 bytes",
          optionC: "512 bytes",
          correctAnswer: "A",
        },
        {
          question:
            "Which type of memory is non-volatile and retains data even when the power is turned off?",
          optionA: "RAM",
          optionB: "ROM",
          optionC: "Secondary Memory",
          correctAnswer: "B",
        },
        {
          question: "What is the main function of a Hard Disk in a computer?",
          optionA: "Execute programs",
          optionB: "Store permanent data",
          optionC: "Provide internet access",
          correctAnswer: "B",
        },
        {
          question:
            "What is the storage capacity range of Solid-State Drives (SSD)?",
          optionA: "64 GB to 2 TB",
          optionB: "128 GB to 4 TB",
          optionC: "256 MB to 1 GB",
          correctAnswer: "B",
        },
        {
          question:
            "Which storage device is commonly used in digital cameras, mobile phones, and video game consoles?",
          optionA: "Pen Drive",
          optionB: "Memory Card",
          optionC: "CD",
          correctAnswer: "B",
        },
        {
          question: "What is the storage capacity of a standard CD?",
          optionA: "700 MB",
          optionB: "1 GB",
          optionC: "500 MB",
          correctAnswer: "A",
        },
        {
          question:
            "Which optical storage device is capable of storing high-definition video and is used for PlayStation 3 games?",
          optionA: "CD",
          optionB: "DVD",
          optionC: "Blu-Ray Disk",
          correctAnswer: "C",
        },
        {
          question: "What is the primary advantage of Cloud Storage?",
          optionA: "Offline access to files",
          optionB: "Limited storage capacity",
          optionC: "Access to files from anywhere with internet access",
          correctAnswer: "C",
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
          question:
            "The computer's ________ is responsible for storing all the input, processing, and output with the help of memory or storage devices.",
          optionA: "CPU",
          optionB: "RAM",
          optionC: "ROM",
          correctAnswer: "A",
        },
        {
          question:
            "________ is a type of computer memory that is volatile and loses information when the power supply to the computer is turned off.",
          optionA: "RAM",
          optionB: "ROM",
          optionC: "Hard Disk",
          correctAnswer: "A",
        },
        {
          question:
            "The storage capacity of 1 Kilobyte (KB) is equal to ________ bytes.",
          optionA: "1000",
          optionB: "1024",
          optionC: "512",
          correctAnswer: "B",
        },
        {
          question:
            "The primary memory of a computer, also known as ________, holds the program and data currently being used by the computer.",
          optionA: "Secondary Memory",
          optionB: "CPU",
          optionC: "Primary Memory",
          correctAnswer: "C",
        },
        {
          question: "The main storage media for computers is the ________.",
          optionA: "Hard Disk",
          optionB: "SSD",
          optionC: "Pen Drive",
          correctAnswer: "A",
        },
        {
          question:
            "________ is a type of optical storage media that has a storage capacity of up to 700 MB.",
          optionA: "DVD",
          optionB: "CD",
          optionC: "Blu-Ray Disk",
          correctAnswer: "B",
        },
        {
          question:
            "A Solid-State Drive (SSD) is similar to a hard disk but has no ________.",
          optionA: "Storage capacity",
          optionB: "Moving parts",
          optionC: "USB port",
          correctAnswer: "B",
        },
        {
          question:
            "A portable memory device that plugs into a USB port and has a storage capacity of up to 4 TB is called a ________.",
          optionA: "Hard Disk",
          optionB: "Pen Drive",
          optionC: "Memory Card",
          correctAnswer: "B",
        },
        {
          question:
            "Blu-Ray Disk is capable of storing several hours of video in high-definition, with a storage capacity of up to ________ GB on a single side.",
          optionA: "25",
          optionB: "17",
          optionC: "50",
          correctAnswer: "A",
        },
        {
          question:
            "Cloud storage allows users to access files from anywhere with internet access, and some commonly used cloud storage services include Google Drive, Dropbox, and ________.",
          optionA: "OneDrive",
          optionB: "Memory Card",
          optionC: "Pen Drive",
          correctAnswer: "A",
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
            "Random Access Memory (RAM) is a type of volatile memory that retains information even when the power supply is turned off.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Read Only Memory (ROM) is a type of non-volatile memory that loses information when the computer is powered off.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A byte is made up of 16 bits of information.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Primary memory is the external memory of a computer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Hard Disk is a type of solid-state drive with no moving parts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "DVD stands for Digital Versatile Disk and is an optical storage device.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cloud storage allows users to access files only when connected to the internet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Pen Drive is a fixed storage device inside the computer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Blu-Ray Disk can store data up to 50 GB on a single side.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Secondary memory is used to store data temporarily while working on the computer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
