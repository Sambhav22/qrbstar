export const chapter = "Chapter - 4: More About Powerpoint ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary function of a slide in PowerPoint?",
        options: [
          "To edit multimedia elements",
          "To display information individually",
          "To organize presentation themes",
        ],
        answer: "To display information individually",
      },
      {
        question:
          "Which view allows you to sort and organize the sequence of slides?",
        options: ["Normal View", "Slide Sorter View", "Notes Page View"],
        answer: "Slide Sorter View",
      },
      {
        question:
          "Where can you find commands like New, Save, and Print in PowerPoint?",
        options: ["Slide Pane", "File Tab", "Quick Access Toolbar"],
        answer: "File Tab",
      },
      {
        question: "What is the purpose of the Ribbon in PowerPoint?",
        options: [
          "Displays current slide view",
          "Contains commands based on the selected tab",
          "Shows miniature versions of slides",
        ],
        answer: "Contains commands based on the selected tab",
      },
      {
        question: "Which step is NOT part of starting PowerPoint?",
        options: [
          "Clicking on Start button",
          "Clicking on the File tab",
          "Opening a Blank Presentation",
        ],
        answer: "Clicking on the File tab",
      },
      {
        question: "How can you apply a slide layout in PowerPoint?",
        options: [
          "Select Layout in the Slides group and press Enter",
          "Click on the Slide Pane and choose the layout",
          "Use the Ribbon to select the desired layout",
        ],
        answer: "Select Layout in the Slides group and press Enter",
      },
      {
        question:
          "Which type of view is ideal for proofreading your presentation?",
        options: ["Slide Sorter View", "Reading View", "Master View"],
        answer: "Reading View",
      },
      {
        question: "What is the aim of using SmartArt in PowerPoint?",
        options: [
          "To edit text in different forms",
          "To organize slide layouts",
          "To graphically represent textual data",
        ],
        answer: "To graphically represent textual data",
      },
      {
        question:
          "How can you exit PowerPoint after completing and saving your task?",
        options: [
          "Click on the Close option in the File tab",
          "Press Ctrl + 0 from the keyboard",
          "Click on the ■ button on the title bar",
        ],
        answer: "Click on the Close option in the File tab",
      },
      {
        question: "What is the purpose of the Notes Pane in PowerPoint?",
        options: [
          "To display miniature versions of slides",
          "To write information related to the slides",
          "To sort and organize the sequence of slides",
        ],
        answer: "To write information related to the slides",
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
          "PowerPoint is a presentation software developed by ____________ Corporation.",
        options: ["Google", "Microsoft", "Apple"],
        answer: "Microsoft",
      },
      {
        question:
          "A presentation in PowerPoint consists of individual pages called ____________.",
        options: ["Slides", "Pages", "Cards"],
        answer: "Slides",
      },
      {
        question:
          "The main aim of a presentation is to make subject matter easy to understand by inserting pictures, text, graphs, charts, and ____________.",
        options: ["Animations", "Hyperlinks", "Audio"],
        answer: "Animations",
      },
      {
        question:
          "PowerPoint allows creating professional-looking presentations using various themes, visual designs, and formatting tools in the ____________ and Quick Access Toolbar.",
        options: ["Ribbon", "Slides Pane", "Notes Pane"],
        answer: "Ribbon",
      },
      {
        question:
          "__________ view in PowerPoint provides information about the file, allowing basic tasks like New, Open, Save, and Print.",
        options: ["Slide Sorter", "Normal", "Backstage"],
        answer: "Backstage",
      },
      {
        question:
          "To start PowerPoint, one needs to click on the ____________ button and select Blank Presentation.",
        options: ["Exit", "Start", "Close"],
        answer: "Start",
      },
      {
        question:
          "The ____________ contains commands like New, Save, Print, and Share in PowerPoint.",
        options: ["Ribbon", "Quick Access Toolbar", "Slide Pane"],
        answer: "Quick Access Toolbar",
      },
      {
        question:
          "SmartArt is a tool used to graphically represent textual data such as organization charts, flow charts, and ____________.",
        options: ["Maps", "Music", "Pyramids"],
        answer: "Pyramids",
      },
      {
        question:
          "Slide Sorter View in PowerPoint provides a view of slides in ____________ form.",
        options: ["Thumbnail", "Outline", "Full-screen"],
        answer: "Thumbnail",
      },
      {
        question:
          "In PowerPoint, the ____________ view allows editing, writing, and designing presentations.",
        options: ["Reading", "Slide Show", "Normal"],
        answer: "Normal",
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
          "PowerPoint primarily uses slides to convey information rich in multimedia.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The Ribbon in PowerPoint contains commands specific to the selected tab.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The Backstage view in PowerPoint allows performing basic tasks like New, Open, and Print.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The Quick Access Toolbar in PowerPoint mainly includes commands for clipboard operations.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "SmartArt in PowerPoint is used to represent only textual data such as charts and graphs.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Slide Sorter View in PowerPoint allows editing the material present on the slides.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The Notes Pane in PowerPoint is used to write information related to the slides.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The Slide Show View in PowerPoint is primarily used for proofreading presentations.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Master View in PowerPoint stores information about the presentation's background and effects.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "Exiting PowerPoint can be done by clicking the Close option in the File tab.",
        options: ["True", "False"],
        answer: "True",
      },
    ],
  };
}

export var activityData;
