export const chapter = "Chapter - 7: Fundamentals Of HTML ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is HTML primarily used for?",
        optionA: "Sending emails",
        optionB: "Designing web pages",
        optionC: "Creating databases",
        correctAnswer: "Designing web pages",
      },
      {
        question: "Which tag defines the document's body?",
        optionA: "<HTML>",
        optionB: "<HEAD>",
        optionC: "<BODY>",
        correctAnswer: "<BODY>",
      },
      {
        question: "What does the <TITLE> tag specify?",
        optionA: "Document description",
        optionB: "Document title",
        optionC: "Document body content",
        correctAnswer: "Document title",
      },
      {
        question:
          "Which tag is used to change the appearance of a short segment of text?",
        optionA: "<FONT>",
        optionB: "<HR>",
        optionC: "<BR>",
        correctAnswer: "<FONT>",
      },
      {
        question: "How is a new paragraph started in HTML?",
        optionA: "<BR>",
        optionB: "<P>",
        optionC: "<HR>",
        correctAnswer: "<P>",
      },
      {
        question:
          "Which tag produces a horizontal line across the width of the browser window?",
        optionA: "<BR>",
        optionB: "<CENTER>",
        optionC: "<HR>",
        correctAnswer: "<HR>",
      },
      {
        question: "What attribute of the <BODY> tag sets the background image?",
        optionA: "TEXT",
        optionB: "LINK",
        optionC: "BACKGROUND",
        correctAnswer: "BACKGROUND",
      },
      {
        question: "What does the SIZE attribute of the <HR> tag control?",
        optionA: "Horizontal rule length",
        optionB: "Horizontal rule color",
        optionC: "Horizontal rule size",
        correctAnswer: "Horizontal rule size",
      },
      {
        question: "Which tag is used for logical text styles in HTML?",
        optionA: "<B>",
        optionB: "<I>",
        optionC: "<EM>",
        correctAnswer: "<EM>",
      },
      {
        question: "What is the purpose of comments in HTML?",
        optionA: "To emphasize text",
        optionB: "To define text styles",
        optionC: "To provide notes in the code",
        correctAnswer: "To provide notes in the code",
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
          "HTML stands for Hypertext Markup Language, which is used to create web pages on the internet with the help of the ________.",
        options: ["Operating system", "Web browser", "Email client"],
        correctAnswer: "Web browser",
      },
      {
        question:
          "The <BODY> tag in HTML defines the document's _________ and contains all the contents of an HTML document.",
        options: ["Header", "Footer", "Body"],
        correctAnswer: "Body",
      },
      {
        question:
          "The <TITLE> tag specifies the __________ of the HTML document and appears on the browser's title bar.",
        options: ["Document title", "Document description", "Document content"],
        correctAnswer: "Document title",
      },
      {
        question:
          "The <FONT> tag in HTML is used to change the appearance of a short segment of _________.",
        options: ["Text", "Images", "Videos"],
        correctAnswer: "Text",
      },
      {
        question: "A new paragraph in HTML is started using the ________ tag.",
        options: ["<BR>", "<P>", "<HR>"],
        correctAnswer: "<P>",
      },
      {
        question:
          "The <HR> tag in HTML produces a horizontal line spread across the ________ of the browser window.",
        options: ["Height", "Width", "Length"],
        correctAnswer: "Width",
      },
      {
        question:
          "The BACKGROUND attribute of the <BODY> tag is used to set a ____________ for the web page.",
        options: ["Font color", "Background image", "Header image"],
        correctAnswer: "Background image",
      },
      {
        question:
          "The SIZE attribute of the <HR> tag controls the size of the __________.",
        options: [
          "Horizontal rule color",
          "Horizontal rule length",
          "Horizontal rule size",
        ],
        correctAnswer: "Horizontal rule size",
      },
      {
        question:
          "Logical text styles in HTML are applied using tags like <EM> for emphasizing and <STRONG> for _____________.",
        options: ["Underlining", "Strong emphasis", "Italics"],
        correctAnswer: "Strong emphasis",
      },
      {
        question:
          "Comments in HTML, given between <!... and ...>, serve the purpose of providing ____________ within the code.",
        options: ["Styling", "Notes", "Emphasis"],
        correctAnswer: "Notes",
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
          "The Upanishads are based on the Vedas and are known as theist philosophies.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Jainism and Buddhism are considered theist philosophies.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The ultimate goal of life in Upanishadic thought is material wealth.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Mahavira, the founder of Jainism, was born in the 6th century BC.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Right Conduct is one of the three gems (Triratnas) of Jainism.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Gautam Buddha founded Hinduism.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Buddhism spread in the kingdoms of Magadha and Koshala.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Noble Eight-fold Path consists of eight principles, including Right View and Right Effort.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Both Buddhist and Jain monks formed associations called sanghas and allowed people from all castes and classes to join them.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The prairies are located near the Pacific Coast.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
