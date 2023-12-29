export const chapter = "Chapter - 9: Smart Living";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary purpose of a smart house?",
          optionA: "To control household appliances",
          optionB: "To provide a sense of safety and enhance living experience",
          optionC: "To entertain users with smart gadgets",
          correctAnswer:
            "To provide a sense of safety and enhance living experience",
        },
        {
          question:
            "Which of the following attributes can a smart house control?",
          optionA: "Cooking preferences",
          optionB: "Entertainment system and lighting",
          optionC: "Gardening activities",
          correctAnswer: "Entertainment system and lighting",
        },
        {
          question:
            "What feature enables a smart camera to send notifications and live video recording to users' phones?",
          optionA: "Image processing",
          optionB: "Motion detection",
          optionC: "Built-in speaker",
          correctAnswer: "Image processing",
        },
        {
          question: "What is the purpose of a video doorbell in a smart house?",
          optionA: "To control the lighting system",
          optionB: "To provide live video recording",
          optionC:
            "To allow users to communicate with visitors and detect motion",
          correctAnswer:
            "To allow users to communicate with visitors and detect motion",
        },
        {
          question:
            "What is the major benefit of a light control system in a smart house?",
          optionA: "Enhancing entertainment",
          optionB: "Creating different scenes for various activities",
          optionC: "Reducing energy consumption",
          correctAnswer: "Reducing energy consumption",
        },
        {
          question: "What is a Smart TV also known as?",
          optionA: "Internet TV",
          optionB: "Connected TV (CTV)",
          optionC: "Virtual TV",
          correctAnswer: "Connected TV (CTV)",
        },
        {
          question:
            "What is preloaded into a Smart TV to provide access to apps and digital content?",
          optionA: "Smart applications",
          optionB: "Internet browser",
          optionC: "Operating system",
          correctAnswer: "Operating system",
        },
        {
          question: "What is a Smart Speaker's primary function?",
          optionA: "Playing music only",
          optionB:
            "Providing peer-to-peer interaction and hands-free activation",
          optionC: "Controlling the lighting system",
          correctAnswer:
            "Providing peer-to-peer interaction and hands-free activation",
        },
        {
          question:
            "How does a Smart Speaker extend its usage beyond playback?",
          optionA: "By playing louder",
          optionB: "By utilizing Wi-Fi, Bluetooth, etc.",
          optionC: "By integrating more virtual assistants",
          correctAnswer: "By utilizing Wi-Fi, Bluetooth, etc.",
        },
        {
          question:
            "What is the key technology that enables Smart Speakers to control automated devices in a smart house?",
          optionA: "Infrared technology",
          optionB: "Bluetooth technology",
          optionC: "Virtual voice assistance and wireless technologies",
          correctAnswer: "Virtual voice assistance and wireless technologies",
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
            "A smart house controls attributes like lighting, climate change sensors, entertainment system, and other household appliances, including __________ and alarm control.",
          optionA: "Security",
          optionB: "Cooking",
          optionC: "Gardening",
          correctAnswer: "Security",
        },
        {
          question:
            "A smart camera is a camera with the ability to process images and sends notifications and live video recording to users' __________.",
          optionA: "Tablet",
          optionB: "Phone",
          optionC: "Laptop",
          correctAnswer: "Phone",
        },
        {
          question:
            "A video doorbell is a web-connected system for a house and has a built-in speaker and microphone that allows users to converse with a person in view. It works in the same way as smart cameras, using WiFi to send notifications whenever __________ or doorbell is pressed.",
          optionA: "Light is detected",
          optionB: "Motion is detected",
          optionC: "Temperature changes",
          correctAnswer: "Motion is detected",
        },
        {
          question:
            "The major benefit of a light control system in a smart house is __________ energy consumption.",
          optionA: "Increasing",
          optionB: "Maintaining",
          optionC: "Reducing",
          correctAnswer: "Reducing",
        },
        {
          question:
            "Smart TV, also known as Connected TV (CTV), is a traditional television set with integrated Internet and web features that allow users to stream music, movies, browse the internet, and view photos on the television screen. An operating system is preloaded into the television set, which provides access to apps and other __________ content.",
          optionA: "Analog",
          optionB: "Digital",
          optionC: "Physical",
          correctAnswer: "Digital",
        },
        {
          question:
            "A smart speaker is a type of loudspeaker and voice command device with integrated virtual voice assistance that provides peer-peer interaction and __________ activation.",
          optionA: "Automated",
          optionB: "Manual",
          optionC: "Hands-free",
          correctAnswer: "Hands-free",
        },
        {
          question:
            "Smart speakers utilize WiFi, Bluetooth, etc., to extend their usage beyond playback and control __________ automated devices.",
          optionA: "Car",
          optionB: "House",
          optionC: "Garden",
          correctAnswer: "House",
        },
        {
          question:
            "Smart gadgets work based on the features of artificial intelligence to make a house 'smart'. Let's see some of the smart gadgets __________ in houses.",
          optionA: "Neglected",
          optionB: "Trending",
          optionC: "Hidden",
          correctAnswer: "Trending",
        },
        {
          question:
            "Light control system, also known as smart lighting, serves to provide the right amount of light when it's needed. A room with multiple scenes pre-set can be achieved with different light, each side created for a different __________.",
          optionA: "Season",
          optionB: "Activity",
          optionC: "Purpose",
          correctAnswer: "Activity",
        },
        {
          question:
            "A room with multiple scenes pre-set in a light control system is created for different __________.",
          optionA: "Colors",
          optionB: "Weather conditions",
          optionC: "Activities",
          correctAnswer: "Activities",
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
            "A smart house controls attributes like lighting, climate change sensors, and entertainment system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house use WiFi to send notifications whenever motion is detected or the doorbell is pressed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Light control systems in smart houses are primarily designed to increase energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart TVs, also known as Connected TVs, lack integrated Internet and web features.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers are devices that provide peer-to-peer interaction and hands-free activation using integrated virtual voice assistance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The primary benefit of a light control system in a smart house is reducing energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart gadgets work based on the features of artificial intelligence to make a house 'smart'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house can process images but cannot send notifications to users' phones.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A video doorbell in a smart house is not a web-connected system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers utilize only wired connections, such as USB, for playback and control.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
