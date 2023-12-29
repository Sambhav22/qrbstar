export const chapter = "Chapter - 5: Computer Virus";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who formally defined the term 'Computer Virus' in 1983?",
        optionA: "Alan Turing",
        optionB: "Fred Cohen",
        optionC: "Linus Torvalds",
        correctAnswer: "Fred Cohen",
      },
      {
        question:
          "What does the term VIRUS stand for in the context of computer viruses?",
        optionA: "Virtual Information Resources Under Seize",
        optionB: "Very Important Resource Under Security",
        optionC: "Vital Information Resources Under Seize",
        correctAnswer: "Vital Information Resources Under Seize",
      },
      {
        question:
          "Which type of virus infects executable files with extensions like .com, .exe, .ovl, .drv, and .sys?",
        optionA: "Boot Virus",
        optionB: "Program Virus",
        optionC: "Stealth Virus",
        correctAnswer: "Program Virus",
      },
      {
        question:
          "What type of virus hides itself by changing file size, creation dates, and times?",
        optionA: "Web Scripting Virus",
        optionB: "Macro Virus",
        optionC: "Stealth Virus",
        correctAnswer: "Stealth Virus",
      },
      {
        question:
          "Which type of virus rewrites itself during execution and requires a metamorphic engine?",
        optionA: "Macro Virus",
        optionB: "Self Modifying Virus",
        optionC: "Multipartite Virus",
        correctAnswer: "Self Modifying Virus",
      },
      {
        question:
          "What type of virus infects files containing macros in certain applications or programs?",
        optionA: "Worm",
        optionB: "Trojan Horse",
        optionC: "Macro Virus",
        correctAnswer: "Macro Virus",
      },
      {
        question:
          "Which virus sends emails to spread itself and may cause harmful effects upon activation?",
        optionA: "Email Virus",
        optionB: "Trojan Horse",
        optionC: "Overwrite Virus",
        correctAnswer: "Email Virus",
      },
      {
        question: "What behavior might indicate a virus attack on a system?",
        optionA: "Unusual messages on the screen",
        optionB: "Faster processor speed",
        optionC: "Constantly illuminated disk drive light",
        correctAnswer: "Unusual messages on the screen",
      },
      {
        question:
          "Which precautionary measure is recommended to protect a system against viruses?",
        optionA: "Using pirated CD/DVD for software installation",
        optionB: "Browsing unwanted websites regularly",
        optionC: "Installing and updating antivirus software",
        correctAnswer: "Installing and updating antivirus software",
      },
      {
        question: "What is the primary function of antivirus software?",
        optionA: "Creating viruses",
        optionB: "Protecting against viruses",
        optionC: "Spreading malware",
        correctAnswer: "Protecting against viruses",
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
          "A computer virus is a malicious program that may cause harm to the computer by downloading and installing itself from various resources, without the knowledge of the user. Once loaded in a computer system, it starts damaging the system ___________.",
        options: ["manually", "automatically", "continuously"],
        correctAnswer: "automatically",
      },
      {
        question:
          "Program viruses infect executable files with extensions like .com, .exe, .ovl, .drv, .sys, etc. These programs get loaded into memory during execution, and the virus becomes active in memory by ___________.",
        options: [
          "encrypting files",
          "replicating itself",
          "deleting system files",
        ],
        correctAnswer: "replicating itself",
      },
      {
        question:
          "Boot viruses infect the boot records or master boot records and replace the boot records responsible for loading the operating system in memory by ___________.",
        options: [
          "moving them elsewhere",
          "copying them repeatedly",
          "copying it elsewhere",
        ],
        correctAnswer: "copying it elsewhere",
      },
      {
        question:
          "Stealth viruses infect the system by hiding the file, changing the size of the file, or changing the ___________.",
        options: [
          "name of the file",
          "creation date and time",
          "file extension",
        ],
        correctAnswer: "creation date and time",
      },
      {
        question:
          "Multipartite viruses are distributed through infected media and usually hide in the memory. Gradually, the virus moves to the boot sector of the hard drive and infects executable files, spreading across the computer system ___________.",
        options: ["simultaneously", "progressively", "intermittently"],
        correctAnswer: "progressively",
      },
      {
        question:
          "Polymorphic viruses encrypt or encode themselves in different ways every time they infect a system, making it impossible for antivirus software to find them using ___________.",
        options: [
          "pattern recognition",
          "string or signature searches",
          "memory analysis",
        ],
        correctAnswer: "string or signature searches",
      },
      {
        question:
          "Trojan horse is a simple program that pretends to be a useful application while always doing something destructive, spreading only when ___________.",
        options: [
          "activated by the user",
          "downloaded from the internet",
          "connected to the network",
        ],
        correctAnswer: "activated by the user",
      },
      {
        question:
          "Email viruses send emails to spread themselves and, upon activation, cause unexpected and usually harmful effects, such as destroying certain files or hard disks and causing the attachment to be remailed to everyone available in the ___________.",
        options: ["sent items folder", "inbox address book", "drafts folder"],
        correctAnswer: "inbox address book",
      },
      {
        question:
          "Overwrite viruses overwrite the content of a file, losing the original content. To delete this virus, you also need to get rid of ___________.",
        options: ["your system", "the infected file", "the antivirus program"],
        correctAnswer: "the infected file",
      },
      {
        question:
          "An antivirus software is a computer program used to scan files, detect, prevent, identify, and eliminate computer viruses and other malicious software (malware). It also takes action to disarm or remove malicious software from a computer, found in memory, on storage media, or in incoming files ___________.",
        options: ["manually", "automatically", "semi-automatically"],
        correctAnswer: "automatically",
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
          "The Program virus infects executable files with extensions like .com, .exe, .ovl, .drv, .sys, etc.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Boot viruses infect only the data files stored in the computer.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Stealth viruses conceal themselves by changing the creation date and time of files.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Web Scripting Virus resides in certain elements of a website, such as links, ads, images, and videos.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Multipartite viruses usually hide in the memory and never move to the hard drive.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Polymorphic viruses use the same encryption method every time they infect a system.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Trojan horse spreads automatically without any user intervention.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Email viruses activate themselves when a user opens a suspicious email attachment.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Overwrite viruses maintain the original content of the infected file.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Antivirus software takes manual action to detect and eliminate computer viruses.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
