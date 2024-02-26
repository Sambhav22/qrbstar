export const chapter = "Chapter - 6: About Internet  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does the term 'Internet' mean?",
          optionA: "A single computer network",
          optionB: "A collection of websites",
          optionC: "A network of networks",
          correctAnswer: "c) A network of networks",
        },
        {
          question:
            "Which type of connection allows for the fastest internet speed among the following options?",
          optionA: "Dial-up Connection",
          optionB: "Cable TV Internet Connection",
          optionC: "Wireless Internet Connection",
          correctAnswer: "b) Cable TV Internet Connection",
        },
        {
          question:
            "What is the purpose of a modem in connecting to the internet?",
          optionA: "Converts digital data to analog signals",
          optionB: "Converts analog signals to digital data",
          optionC: "Connects two computers wirelessly",
          correctAnswer: "a) Converts digital data to analog signals",
        },
        {
          question:
            "What does ISP stand for in the context of internet connectivity?",
          optionA: "Internet Service Provider",
          optionB: "Internet System Protocol",
          optionC: "Integrated Service Provider",
          correctAnswer: "a) Internet Service Provider",
        },
        {
          question:
            "Which software application is used to view web pages and multimedia content on the internet?",
          optionA: "Microsoft Excel",
          optionB: "Web Browser",
          optionC: "Adobe Photoshop",
          correctAnswer: "b) Web Browser",
        },
        {
          question: "What is a hyperlink on a webpage?",
          optionA: "A tool to download files",
          optionB: "A link to another webpage",
          optionC: "A tool for video conferencing",
          correctAnswer: "b) A link to another webpage",
        },
        {
          question: "What does WWW stand for in the context of the internet?",
          optionA: "Wide World Web",
          optionB: "World Wired Web",
          optionC: "World Wide Web",
          correctAnswer: "c) World Wide Web",
        },
        {
          question:
            "What technology is utilized in e-commerce for conducting transactions over the internet?",
          optionA: "Electronic funds transfer",
          optionB: "Telepathy",
          optionC: "Courier services",
          correctAnswer: "a) Electronic funds transfer",
        },
        {
          question:
            "Which term refers to the process of buying goods or services directly from a seller over the internet?",
          optionA: "E-shopping",
          optionB: "Online bidding",
          optionC: "Retail browsing",
          correctAnswer: "a) E-shopping",
        },
        {
          question:
            "What is an essential safety rule to follow while using the internet?",
          optionA: "Share personal information freely",
          optionB: "Meet online friends alone",
          optionC: "Check the reliability of information",
          correctAnswer: "c) Check the reliability of information",
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
            "The word 'Internet' is a combination of two words 'Inter+ net' meaning a ________ of networks.",
          optionA: "Community",
          optionB: "Network",
          optionC: "System",
          correctAnswer: "b) Network",
        },
        {
          question:
            "Internet is a worldwide system of computer networks in which users working on any one computer can get information from any other computer, connecting millions of computers across the world for sharing of information ________.",
          optionA: "Tools",
          optionB: "Resources",
          optionC: "Utilities",
          correctAnswer: "b) Resources",
        },
        {
          question:
            "Internet allows you to communicate with people sitting at remote locations through various social networking sites such as Facebook, Twitter, Yahoo, YouTube, WhatsApp, and Instagram, serving as a medium for ________.",
          optionA: "Connection",
          optionB: "Interaction",
          optionC: "Isolation",
          correctAnswer: "b) Interaction",
        },
        {
          question:
            "A modem is an electronic device that converts digital data from computers into signals transmitted over a normal telephone line, helping in the transmission of digital data understood by computers at the ________ end.",
          optionA: "Sending",
          optionB: "Receiving",
          optionC: "Transmitting",
          correctAnswer: "b) Receiving",
        },
        {
          question:
            "To connect to the internet, one needs a computer system with software like Microsoft Edge or Google Chrome, a telephone line, and a ________ that converts digital data into signals for transmission.",
          optionA: "Cable",
          optionB: "Router",
          optionC: "Modem",
          correctAnswer: "c) Modem",
        },
        {
          question:
            "________ is a software application that displays text, images, and multimedia data found on different web pages, allowing users to specify web pages, navigate using links, and bookmark favorites.",
          optionA: "Web Server",
          optionB: "Web Browser",
          optionC: "Web Router",
          correctAnswer: "b) Web Browser",
        },
        {
          question:
            "Hyperlinks are mechanisms by which web pages are linked to another related web page, typically underlined and can be identified when the cursor changes into the shape of a ________.",
          optionA: "Arrow",
          optionB: "Hand",
          optionC: "Cross",
          correctAnswer: "b) Hand",
        },
        {
          question:
            "A web search engine presents search results usually as a list of links pointing to text, images, audio, or video files, helping users find information on the ________.",
          optionA: "Internet",
          optionB: "Intranet",
          optionC: "Extranet",
          correctAnswer: "a) Internet",
        },
        {
          question:
            "E-commerce or electronic commerce involves the buying and selling of products or services over electronic systems like the internet, drawing on technologies such as mobile commerce, electronic funds transfer, and ________ management.",
          optionA: "Inventory",
          optionB: "Storage",
          optionC: "Distribution",
          correctAnswer: "a) Inventory",
        },
        {
          question:
            "Internet Safety Rules advise users to keep safe by not giving out personal information, meet online friends only in the presence of an adult family member, accept emails and messages only from known people, and verify information for its ________.",
          optionA: "Authenticity",
          optionB: "Accuracy",
          optionC: "Reliability",
          correctAnswer: "c) Reliability",
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
            "The Internet is a localized network accessible to a limited number of users.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Dial-up Connection is known for its high-speed internet access.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "A modem converts analog signals from computers into digital data.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "A dedicated telephone line is recommended for occasional internet users.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Web Browsers can display text, images, and multimedia data found on various web pages.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question: "A hyperlink does not take users to another webpage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "The World Wide Web (WWW) is not a shareable information resource.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "E-commerce solely involves physical transactions and not digital transactions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question: "Online shopping is not a form of electronic commerce.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Email is not considered a quick way to communicate electronically.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
      ],
  };
}

export var activityData;
