export const chapter = "Chapter - 5: Working with PowerPoint";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is PowerPoint primarily used for?",
        optionA: "Creating documents",
        optionB: "Making presentations",
        optionC: "Editing images",
        correctAnswer: "Making presentations",
      },
      {
        question:
          "What is a collection of slides in PowerPoint referred to as?",
        optionA: "Page show",
        optionB: "Presentation show",
        optionC: "Slide show",
        correctAnswer: "Slide show",
      },
      {
        question:
          "Where can you find basic slide templates and ready-made themes in PowerPoint?",
        optionA: "Task Pane",
        optionB: "Ribbon",
        optionC: "Quick Access Toolbar",
        correctAnswer: "Ribbon",
      },
      {
        question:
          "What feature in PowerPoint allows users to add animated effects to the content and transitions between slides?",
        optionA: "Quick Access Toolbar",
        optionB: "Zoom Slider",
        optionC: "Customisation features",
        correctAnswer: "Customisation features",
      },
      {
        question: "How do you start a new presentation in PowerPoint?",
        optionA: "Click on the Exit button",
        optionB: "Click on the Start button",
        optionC: "Click on the File tab and choose New",
        correctAnswer: "Click on the File tab and choose New",
      },
      {
        question: "What is the purpose of the Slide Pane in PowerPoint?",
        optionA: "To display speaker notes",
        optionB: "To work directly on individual slides",
        optionC: "To insert images",
        correctAnswer: "To work directly on individual slides",
      },
      {
        question:
          "Where can you type speaker notes for each slide in PowerPoint?",
        optionA: "Notes Pane",
        optionB: "Task Pane",
        optionC: "View Buttons",
        correctAnswer: "Notes Pane",
      },
      {
        question:
          "Which tab in PowerPoint contains multiple tabs, each with several groups of commands?",
        optionA: "Slide Show tab",
        optionB: "Ribbon",
        optionC: "Quick Access Toolbar",
        correctAnswer: "Ribbon",
      },
      {
        question:
          "What does the Save As command in PowerPoint allow you to do?",
        optionA: "Save the file for the first time",
        optionB: "Save changes to an existing file",
        optionC: "Create a copy of a presentation while keeping the original",
        correctAnswer:
          "Create a copy of a presentation while keeping the original",
      },
      {
        question: "How can you exit the PowerPoint application?",
        optionA: "Press Ctrl + X",
        optionB: "Click on the Save button",
        optionC: "Click on the II button on the top-right corner",
        correctAnswer: "Click on the II button on the top-right corner",
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
          "PowerPoint is a presentation software developed by ___________.",
        options: ["Google", "Microsoft", "Apple"],
        correctAnswer: "Microsoft",
      },
      {
        question:
          "___________ provides basic slide templates such as schedules and diagrams.",
        options: ["Quick Access Toolbar", "Ribbon", "PowerPoint"],
        correctAnswer: "PowerPoint",
      },
      {
        question:
          "The collection of slides in PowerPoint is grouped together to form a __________.",
        options: ["Book", "Slide show", "Task Pane"],
        correctAnswer: "Slide show",
      },
      {
        question:
          "To start PowerPoint application, click on the ________ button, then click All Apps.",
        options: ["Save", "Start", "Exit"],
        correctAnswer: "Start",
      },
      {
        question:
          "The ________ is located just above the ribbon and lets you access common commands such as Save, Undo, and Repeat.",
        options: ["Task Pane", "Quick Access Toolbar", "Slide Pane"],
        correctAnswer: "Quick Access Toolbar",
      },
      {
        question:
          "To insert a new slide in PowerPoint, click on the Home tab, then click on the bottom half of the New Slide command and choose the desired ________.",
        options: ["Animation", "Layout", "Theme"],
        correctAnswer: "Layout",
      },
      {
        question:
          "You can make your presentation more interesting by adding ___________.",
        options: ["Numbers", "Pictures", "Symbols"],
        correctAnswer: "Pictures",
      },
      {
        question:
          "PowerPoint offers two options to save a file: Save and _________.",
        options: ["Save As", "Save Copy", "Save All"],
        correctAnswer: "Save As",
      },
      {
        question:
          "To exit PowerPoint, click on the ________ button present on the top-right corner of the PowerPoint window.",
        options: ["Save", "Exit", "II"],
        correctAnswer: "II",
      },
      {
        question:
          "In a slide show, all the slides of the presentation are displayed one by one on _________.",
        options: ["A small screen", "Full screen", "Task Pane"],
        correctAnswer: "Full screen",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "PowerPoint is primarily used for creating documents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "In PowerPoint, the Quick Access Toolbar is located just above the ribbon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The collection of slides in PowerPoint is referred to as a Book.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "To start PowerPoint, you need to click on the Exit button.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Ribbon in PowerPoint contains multiple tabs, each with several groups of commands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Slide Pane in PowerPoint is used to type speaker notes for each slide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "In PowerPoint, the Save As command allows you to create a copy of a presentation while keeping the original.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Exiting PowerPoint is done by clicking on the X button present on the top-right corner of the window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "A slide show in PowerPoint displays all the slides of the presentation on a small screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "In PowerPoint, the II button is used to save the presentation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
