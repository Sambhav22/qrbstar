export const chapter = "Chapter - 6: Internet";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            'What does the term "ISP" stand for in the context of internet connectivity?',
          optionA: "Internet Service Protocol",
          optionB: "International Security Platform",
          optionC: "Internet Service Provider",
          correctAnswer: "Internet Service Provider",
        },
        {
          question:
            "What is the primary function of a web browser in the context of the internet?",
          optionA: "To connect computers to the internet",
          optionB: "To organize web pages",
          optionC: "To open and view contents stored on the World Wide Web",
          correctAnswer:
            "To open and view contents stored on the World Wide Web",
        },
        {
          question:
            'What is the abbreviation "URL" in the context of the internet?',
          optionA: "Universal Router Locator",
          optionB: "Uniform Resource Locator",
          optionC: "United Resource Link",
          correctAnswer: "Uniform Resource Locator",
        },
        {
          question:
            "What is the term for moving from one page to another on the World Wide Web using links?",
          optionA: "Web Browsing",
          optionB: "Internet Surfing",
          optionC: "Net Surfing",
          correctAnswer: "Net Surfing",
        },
        {
          question:
            "What must be provided to connect to the internet in a dial-up connection, according to the text?",
          optionA: "Web address",
          optionB:
            "Dial-up phone number, Username, Password, and Connection name",
          optionC: "Modulator Demodulator",
          correctAnswer:
            "Dial-up phone number, Username, Password, and Connection name",
        },
        {
          question:
            "What is the main page of a website called, which contains a brief description and links to further pages?",
          optionA: "Web Page",
          optionB: "Home Page",
          optionC: "Index Page",
          correctAnswer: "Home Page",
        },
        {
          question:
            "Besides providing information, what is the exciting feature of the internet mentioned in the text?",
          optionA: "Online Games",
          optionB: "E-learning",
          optionC: "Social Networking",
          correctAnswer: "Online Games",
        },
        {
          question:
            "Which of the following is NOT mentioned as a safety tip for using the internet?",
          optionA:
            "Avoid giving personal information through public messaging services",
          optionB: "Click on all links and URLs for exploration",
          optionC: "Work under the guidance of teachers or parents",
          correctAnswer: "Click on all links and URLs for exploration",
        },
        {
          question:
            "What does a modem (Network Card) do in the context of internet connectivity?",
          optionA: "Connects computers to the internet",
          optionB: "Organizes web pages",
          optionC: "Transmits data through cables",
          correctAnswer: "Connects computers to the internet",
        },
        {
          question:
            "What is the term for the largest network of computers that connects millions of computers worldwide?",
          optionA: "Intranet",
          optionB: "Extranet",
          optionC: "Internet",
          correctAnswer: "Internet",
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
            "Internet stands for ______ Network. It connects millions of computers across the world.",
          options: ["Intercontinental", "Interconnected", "Interstellar"],
          correctAnswer: "Interconnected",
        },
        {
          question:
            "______ is the abbreviation for Modulator Demodulator, used to connect a computer to the telephone line.",
          options: ["ISP", "URL", "Modem"],
          correctAnswer: "Modem",
        },
        {
          question:
            "______ provides information quickly and helps search information on any topic.",
          options: ["Internet", "Web Page", "Web Browser"],
          correctAnswer: "Internet",
        },
        {
          question:
            "E-mail is an exciting feature of the internet, serving as the best medium of instant ______.",
          options: ["Communication", "Entertainment", "Shopping"],
          correctAnswer: "Communication",
        },
        {
          question:
            "You can purchase or sell products on the internet even while sitting at home through ______.",
          options: ["Online Games", "E-learning", "Shopping"],
          correctAnswer: "Shopping",
        },
        {
          question:
            "Online education through ______ websites has made education easily accessible.",
          options: ["Social Networking", "E-learning", "Web Browsing"],
          correctAnswer: "E-learning",
        },
        {
          question:
            "To connect to the internet, a software called ______ is required.",
          options: ["ISP", "Web Browser", "Modem"],
          correctAnswer: "Web Browser",
        },
        {
          question:
            "Every website has a main page or first page called ______, which contains a brief description and links to further pages.",
          options: ["Index Page", "Web Page", "Home Page"],
          correctAnswer: "Home Page",
        },
        {
          question:
            "Moving from one page to another on the World Wide Web using links is called ______.",
          options: ["Net Surfing", "Internet Surfing", "Web Browsing"],
          correctAnswer: "Net Surfing",
        },
        {
          question:
            "The internet can be an amazing resource, but it's important to understand how and when you should use it to ensure ______.",
          options: ["Entertainment", "Safety", "Exploration"],
          correctAnswer: "Safety",
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
            "Internet stands for Interconnected Network and connects millions of computers across the world.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "E-mail is not considered an exciting feature of the internet and is not a medium of instant communication.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Web browsers, such as Microsoft Edge, Google Chrome, and Mozilla Firefox, help organize web pages.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The abbreviation URL stands for Uniform Resource Locator, which is the unique address of a web page or website.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Net surfing refers to moving from one page to another on the World Wide Web using links.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Internet safety is not crucial, and users can freely provide personal information without any risks.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Modem, or Modulator Demodulator, is used to organize web pages in the context of internet connectivity.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The main page of a website, containing a brief description and links to further pages, is known as the Index Page.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Online education through e-learning websites has not made education easily accessible.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "It is safe to click on all links and URLs for exploration without considering potential risks.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
