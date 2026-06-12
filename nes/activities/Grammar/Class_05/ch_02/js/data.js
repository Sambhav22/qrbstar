export const chapter = "Chapter - 2: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the definition of a subject in a sentence?",
          optionA: "The action of the sentence",
          optionB: "The person or thing being talked about",
          optionC: "The location of the sentence",
          correctAnswer: "B",
        },
        {
          question: "How is the predicate defined in a sentence?",
          optionA: "The person or thing being talked about",
          optionB: "The action of the sentence",
          optionC: "The location of the sentence",
          correctAnswer: "B",
        },
        {
          question: "What is the subject in a sentence?",
          optionA: "The action of the sentence",
          optionB: "The person or thing being talked about",
          optionC: "The location of the sentence",
          correctAnswer: "B",
        },
        {
          question: "What does the predicate represent in a sentence?",
          optionA: "The person or thing being talked about",
          optionB: "The action of the sentence",
          optionC: "The location of the sentence",
          correctAnswer: "B",
        },
        {
          question:
            "In the sentence 'She sang a melodious song,' what is 'She'?",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Both Subject and Predicate",
          correctAnswer: "A",
        },
        {
          question:
            "In the sentence 'She sang a melodious song,' what is 'sang a melodious song'?",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Both Subject and Predicate",
          correctAnswer: "B",
        },
        {
          question:
            "How many parts does a sentence have, according to the provided text?",
          optionA: "1",
          optionB: "2",
          optionC: "3",
          correctAnswer: "B",
        },
        {
          question: "What can the subject of a sentence consist of?",
          optionA: "Only one word",
          optionB: "Only two words",
          optionC: "One or more words",
          correctAnswer: "C",
        },
        {
          question: "What is the definition of a predicate in a sentence?",
          optionA: "The person or thing being talked about",
          optionB: "The action of the sentence",
          optionC: "The location of the sentence",
          correctAnswer: "B",
        },
        {
          question: "Which part of a sentence may have one or more words?",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Both Subject and Predicate",
          correctAnswer: "C",
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
            "The ________ of a sentence is responsible for storing all the input, processing, and output with the help of memory or storage devices.",
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
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The CPU is responsible for storing all the input, processing, and output with the help of memory or storage devices.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "RAM is a type of computer memory that is volatile and loses information when the power supply to the computer is turned off.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The storage capacity of 1 Kilobyte (KB) is equal to 1024 bytes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Secondary Memory holds the program and data currently being used by the computer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The main storage media for computers is the SSD.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "DVD is a type of optical storage media that has a storage capacity of up to 700 MB.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Solid-State Drive (SSD) is similar to a hard disk but has moving parts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Pen Drive is a portable memory device that plugs into a USB port and has a storage capacity of up to 4 TB.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Blu-Ray Disk is capable of storing several hours of video in high-definition, with a storage capacity of up to 25 GB on a single side.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cloud storage allows users to access files from anywhere with internet access, and some commonly used cloud storage services include Google Drive, Dropbox, and Memory Card.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
