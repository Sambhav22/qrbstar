export const chapter = "Chapter - 7: staying safe";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the purpose of learning your complete address and important contact numbers at home?",
          optionA: "To impress your friends",
          optionB: "To make prank calls",
          optionC: "To ensure safety and contact in case of emergencies",
          correctAnswer: "To ensure safety and contact in case of emergencies",
        },
        {
          question: "What should you avoid doing while playing on the rooftop?",
          optionA: "Leaning against the parapet",
          optionB: "Sitting close to the edge",
          optionC: "Running around on the rooftop",
          correctAnswer: "Leaning against the parapet",
        },
        {
          question: "What is the recommended way to cross the road safely?",
          optionA: "Cross the road without looking",
          optionB:
            "Look to your left, then to your right, and again to your left",
          optionC: "Close your eyes and run across quickly",
          correctAnswer:
            "Look to your left, then to your right, and again to your left",
        },
        {
          question:
            "Why is it important to stand in a queue while boarding or alighting a bus?",
          optionA: "To make friends",
          optionB: "To maintain discipline and avoid accidents",
          optionC: "To show off your bus etiquette",
          correctAnswer: "To maintain discipline and avoid accidents",
        },
        {
          question:
            "What should you do if you encounter trouble while alone or with friends on the street?",
          optionA: "Stay silent and hope for the best",
          optionB: "Shout loudly for help",
          optionC: "Ignore the trouble and continue walking",
          correctAnswer: "Shout loudly for help",
        },
        {
          question:
            "What is the purpose of applying ointment like Burnol on a burn injury?",
          optionA: "To make the burn look better",
          optionB: "To alleviate pain and promote healing",
          optionC: "To experiment with different ointments",
          correctAnswer: "To alleviate pain and promote healing",
        },
        {
          question: "What should be done if someone is bleeding from a wound?",
          optionA: "Let the wound bleed freely",
          optionB: "Tie a bandage or clean cloth around the wound",
          optionC: "Ignore the bleeding and continue with daily activities",
          correctAnswer: "Tie a bandage or clean cloth around the wound",
        },
        {
          question:
            "Why is it advised not to open the door for strangers, especially when alone at home?",
          optionA: "To avoid making new friends",
          optionB: "To prevent potential dangers and ensure safety",
          optionC: "To keep the house tidy",
          correctAnswer: "To prevent potential dangers and ensure safety",
        },
        {
          question:
            "What should you do if you encounter a fracture and notice swelling?",
          optionA: "Ignore it and continue with normal activities",
          optionB: "Let the fractured part hang down",
          optionC: "Tie some long cloth to give support to the fractured part",
          correctAnswer:
            "Tie some long cloth to give support to the fractured part",
        },
        {
          question:
            "What is the purpose of walking in a queue while moving in a group at school?",
          optionA: "To look organized and disciplined",
          optionB: "To show off your leadership skills",
          optionC: "To annoy other students",
          correctAnswer: "To look organized and disciplined",
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
            "_______ is not only painful to us but it also makes our parents distraught.",
          options: ["Playing", "Getting hurt or injured", "Sleeping"],
          correctAnswer: "Getting hurt or injured",
        },
        {
          question:
            "Never open the door for ________, especially when you are alone at home.",
          options: ["Friends", "Family", "Stranger"],
          correctAnswer: "Stranger",
        },
        {
          question:
            "_______ your complete address and important contact numbers.",
          options: ["Forget", "Learn", "Ignore"],
          correctAnswer: "Learn",
        },
        {
          question:
            "Do not touch electric switches, plugs, and wires with ______ hands.",
          options: ["Dry", "Wet", "Clean"],
          correctAnswer: "Wet",
        },
        {
          question:
            "Be careful while playing on the rooftop. Do not lean against or bent over the ______ to look down.",
          options: ["Edge", "Parapet", "Roof"],
          correctAnswer: "Parapet",
        },
        {
          question:
            "Avoid running in the corridors and while going up or down the stairs. Keep to the ______ while walking.",
          options: ["Left", "Right", "Middle"],
          correctAnswer: "Right",
        },
        {
          question:
            "Always walk on the footpath or to your ______, away from the traffic.",
          options: ["Right", "Left", "Center"],
          correctAnswer: "Left",
        },
        {
          question:
            "Being street smart means how to keep oneself safe when alone or with ______.",
          options: ["Family", "Pets", "Friends"],
          correctAnswer: "Friends",
        },
        {
          question: "Inform your elders about your ______.",
          options: ["Achievements", "Whereabouts", "Hobbies"],
          correctAnswer: "Whereabouts",
        },
        {
          question:
            "If you get badly injured, call the doctor or an ______ immediately.",
          options: ["Elder", "Ambulance", "Neighbor"],
          correctAnswer: "Elder",
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
          question: "Getting hurt or injured is only painful to us.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "You should open the door for strangers, especially when you are alone at home.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "It is important to forget your complete address and important contact numbers.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "It is safe to touch electric switches, plugs, and wires with wet hands.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "You should lean against or bend over the parapet to look down while playing on the rooftop.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "You should keep to the left while walking in corridors or on stairways.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Teasing street animals is safe because they won't bite you to save themselves.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "You should walk out of the school alone or with strangers who do not belong to your family.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "It is recommended to alight at a red light while traveling on a bus.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Informing your elders about your whereabouts is not necessary.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
