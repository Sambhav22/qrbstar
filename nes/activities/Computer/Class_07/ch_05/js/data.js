export const chapter = "Chapter - 5: Common Tasks In Powerpoint ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two types of animation effects in PowerPoint?",
          optionA: "Slide Navigation and Custom Transition",
          optionB: "Slide Transition and Animation Path",
          optionC: "Slide Transition and Custom Animation",
          correctAnswer: "C) Slide Transition and Custom Animation",
        },
        {
          question:
            "Which category of transitions in PowerPoint moves only the placeholders between similar slide layouts?",
          optionA: "Exciting",
          optionB: "Dynamic Content",
          optionC: "Subtle",
          correctAnswer: "B) Dynamic Content",
        },
        {
          question:
            "What is the recommended approach for using transitions in a presentation?",
          optionA: "Use as many exciting transitions as possible.",
          optionB: "Use dynamic transitions for all slides.",
          optionC:
            "Use transitions in moderation, mostly subtle or none at all.",
          correctAnswer:
            "C) Use transitions in moderation, mostly subtle or none at all.",
        },
        {
          question:
            "Which tab in PowerPoint is used to apply slide transitions?",
          optionA: "Design",
          optionB: "Transitions",
          optionC: "Animations",
          correctAnswer: "B) Transitions",
        },
        {
          question:
            "Which group within the Transitions tab allows for modification of transition properties?",
          optionA: "Timing",
          optionB: "Effect Options",
          optionC: "Advance Slide",
          correctAnswer: "A) Timing",
        },
        {
          question:
            "Which view in PowerPoint displays a preview of the entire presentation in the PowerPoint window?",
          optionA: "Reading View",
          optionB: "Slide Sorter View",
          optionC: "Slide Show View",
          correctAnswer: "A) Reading View",
        },
        {
          question:
            "How can you preview animations for the current slide without entering the slide show mode?",
          optionA: "Click the Preview command on the Animations tab.",
          optionB:
            "Click the Play Animations command in the Slide Navigation pane.",
          optionC: "Click the Preview command on the Transitions tab.",
          correctAnswer: "A) Click the Preview command on the Animations tab.",
        },
        {
          question:
            "What command can you use to begin a presentation from the current slide?",
          optionA: "Slide Show View",
          optionB: "Start From Beginning",
          optionC: "Slide Show Options",
          correctAnswer: "A) Slide Show View",
        },
        {
          question:
            "Which key can you press to exit presentation mode in PowerPoint?",
          optionA: "Ctrl",
          optionB: "Esc",
          optionC: "Alt",
          correctAnswer: "B) Esc",
        },
        {
          question:
            "Which PowerPoint tab allows you to access tools for rehearsing timings and recording presentations?",
          optionA: "Home",
          optionB: "Insert",
          optionC: "Slide Show",
          correctAnswer: "C) Slide Show",
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
            "The _____________ tool of PowerPoint application is powerful for attracting the audience's attention.",
          options: {
            A: "Animation",
            B: "Slide Transition",
            C: "Customization",
          },
          correctAnswer: "A) Animation",
        },
        {
          question:
            "PowerPoint offers ___________ types of animation effects categorized into Entrance, Emphasis, Exit, and Motion Paths.",
          options: {
            A: "Two",
            B: "Four",
            C: "Three",
          },
          correctAnswer: "B) Four",
        },
        {
          question:
            "The ___________ tab is used to apply slide transitions in PowerPoint.",
          options: {
            A: "Design",
            B: "Transitions",
            C: "Animations",
          },
          correctAnswer: "B) Transitions",
        },
        {
          question:
            "___________ transitions move only the placeholders between similar slide layouts in a presentation.",
          options: {
            A: "Subtle",
            B: "Dynamic Content",
            C: "Exciting",
          },
          correctAnswer: "B) Dynamic Content",
        },
        {
          question:
            "Slide transitions should be used in ___________, as adding too many can distract the audience.",
          options: {
            A: "Abundance",
            B: "Moderation",
            C: "Limitation",
          },
          correctAnswer: "B) Moderation",
        },
        {
          question:
            "The ___________ group within the Transitions tab allows modification of transition properties.",
          options: {
            A: "Timing",
            B: "Effect Options",
            C: "Advance Slide",
          },
          correctAnswer: "A) Timing",
        },
        {
          question:
            "___________ view in PowerPoint presents a full-screen preview of the presentation.",
          options: {
            A: "Slide Sorter",
            B: "Normal",
            C: "Reading",
          },
          correctAnswer: "C) Reading",
        },
        {
          question:
            "You can preview animations for the current slide by using the ___________ command on the Animations tab.",
          options: {
            A: "Preview",
            B: "Play Animations",
            C: "Slide Show",
          },
          correctAnswer: "A) Preview",
        },
        {
          question:
            "To start a presentation from the current slide, use the ___________ command in PowerPoint.",
          options: {
            A: "Start From Beginning",
            B: "Slide Show View",
            C: "Slide Show Options",
          },
          correctAnswer: "B) Slide Show View",
        },
        {
          question:
            "Pressing the ___________ key allows you to exit presentation mode in PowerPoint.",
          options: {
            A: "Ctrl",
            B: "Esc",
            C: "Alt",
          },
          correctAnswer: "B) Esc",
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
            "PowerPoint offers multiple categories of animation effects categorized into Entrance, Emphasis, Exit, and Motion Paths.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "Slide transitions should be used in abundance to keep the audience engaged.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "The Transitions tab in PowerPoint is used for applying animation effects.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Animations in PowerPoint are only categorized into Subtle and Exciting types.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "PowerPoint allows users to preview animations for the current slide using the Slide Show command.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "The Timing group within the Transitions tab allows modification of transition properties in PowerPoint.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "Slide Sorter view in PowerPoint presents a full-screen preview of the presentation.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Animations in PowerPoint can only be applied to text and not to objects like shapes or pictures.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "The Start From Beginning command in PowerPoint initiates a presentation from the current slide.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Exiting presentation mode in PowerPoint can be achieved by pressing the F5 key.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
      ],
  };
}

export var activityData;
