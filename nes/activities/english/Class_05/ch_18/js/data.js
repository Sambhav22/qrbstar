export const chapter = "Chapter -18: A Practical Joke";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What was the protagonist's initial suspicion upon arriving at the fort?",
          optionA: "He thought his friends were planning a surprise party.",
          optionB:
            "He suspected that his friends had a practical joke planned for him.",
          optionC: "He believed his friends were genuinely excited to see him.",
          correctAnswer:
            "He suspected that his friends had a practical joke planned for him.",
        },
        {
          question:
            "Why did the protagonist light up all the lights in the room?",
          optionA: "To avoid darkness in case the bulb went out.",
          optionB: "To create a welcoming atmosphere.",
          optionC: "To play a practical joke on his friends.",
          correctAnswer: "To avoid darkness in case the bulb went out.",
        },
        {
          question:
            "What precaution did the protagonist take with the bed before going to sleep?",
          optionA: "He checked for bedbugs.",
          optionB:
            "He pulled the mattress and bedclothes away from the corner.",
          optionC: "He added extra pillows.",
          correctAnswer:
            "He pulled the mattress and bedclothes away from the corner.",
        },
        {
          question: "What made the protagonist howl in pain during the night?",
          optionA: "A loud noise in the fort.",
          optionB: "The fall of a heavy body on top of him.",
          optionC: "A burning liquid on his face.",
          correctAnswer: "A burning liquid on his face.",
        },
        {
          question:
            "Why did the protagonist launch a blow at the face he felt in the darkness?",
          optionA: "To play a prank on his friends.",
          optionB: "To protect himself from an intruder.",
          optionC: "To wake up his sleeping friend.",
          correctAnswer: "To protect himself from an intruder.",
        },
        {
          question:
            "What did the valet accidentally do while bringing the protagonist's morning tea?",
          optionA: "Tripped and spilled the tea on the protagonist's face.",
          optionB: "Sang a morning song.",
          optionC: "Left the tea outside the room.",
          correctAnswer:
            "Tripped and spilled the tea on the protagonist's face.",
        },
        {
          question:
            "What did the protagonist realize when he rushed out of the room after the practical joke?",
          optionA: "It was still nighttime.",
          optionB: "It was broad daylight.",
          optionC: "He was in a different room.",
          correctAnswer: "It was broad daylight.",
        },
        {
          question:
            "What did the protagonist's precautions in going to sleep lead to?",
          optionA: "The successful avoidance of the practical joke.",
          optionB: "The occurrence of the practical joke he wanted to avoid.",
          optionC: "A quiet and peaceful night.",
          correctAnswer:
            "The occurrence of the practical joke he wanted to avoid.",
        },
        {
          question:
            "What did the valet trip over that caused the practical joke to unfold?",
          optionA: "A hidden trapdoor.",
          optionB: "A chair placed in front of the curtains.",
          optionC: "The mattress and bedclothes in the middle of the room.",
          correctAnswer:
            "The mattress and bedclothes in the middle of the room.",
        },
        {
          question:
            "How did the protagonist's friends react when they found the valet in the room?",
          optionA: "They scolded the valet for the accident.",
          optionB: "They laughed heartily at the situation.",
          optionC: "They were indifferent to the whole incident.",
          correctAnswer: "They laughed heartily at the situation.",
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
            "Once the protagonist arrived at the fort, his friends gave him a __________ reception.",
          optionA: "Suspicious",
          optionB: "Warm",
          optionC: "Mysterious",
          correctAnswer: "Warm",
        },
        {
          question:
            "The protagonist thought his friends had something in store for him during the __________.",
          optionA: "Dinner",
          optionB: "Breakfast",
          optionC: "Lunch",
          correctAnswer: "Dinner",
        },
        {
          question:
            "The protagonist suspected that his friends planned a __________ for him.",
          optionA: "Picnic",
          optionB: "Prank",
          optionC: "Celebration",
          correctAnswer: "Prank",
        },
        {
          question:
            "During the entire evening, everyone laughed in an __________ fashion.",
          optionA: "Ordinary",
          optionB: "Exaggerated",
          optionC: "Silent",
          correctAnswer: "Exaggerated",
        },
        {
          question:
            "The protagonist was watchful and restless, considering everyone an object of __________.",
          optionA: "Trust",
          optionB: "Suspicion",
          optionC: "Appreciation",
          correctAnswer: "Suspicion",
        },
        {
          question:
            "The protagonist shut the windowpanes with great care and placed a chair in front of them to have nothing to fear from __________.",
          optionA: "Inside",
          optionB: "Outside",
          optionC: "Above",
          correctAnswer: "Outside",
        },
        {
          question:
            "The protagonist cautiously sat down in the armchair, as he did not venture to get into the __________.",
          optionA: "Bed",
          optionB: "Bathtub",
          optionC: "Closet",
          correctAnswer: "Bed",
        },
        {
          question:
            "The protagonist searched his memory for all the practical jokes he ever experienced to avoid being __________.",
          optionA: "Surprised",
          optionB: "Caught",
          optionC: "Confused",
          correctAnswer: "Caught",
        },
        {
          question:
            "To avoid a potential cold shower or sinking to the floor with the mattress, the protagonist pulled the mattress away and placed it in the __________.",
          optionA: "Corner",
          optionB: "Middle of the room",
          optionC: "Bedframe",
          correctAnswer: "Middle of the room",
        },
        {
          question:
            "The valet tripped over the improvised bed and fell on his stomach while bringing the protagonist __________.",
          optionA: "Dinner",
          optionB: "Breakfast",
          optionC: "Morning cup of tea",
          correctAnswer: "Morning cup of tea",
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
            "The protagonist's friends were not fond of practical jokes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist felt a sense of trust in his friends' reception.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist suspected that his friends had planned a picnic for him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The laughter during the dinner was ordinary and subdued.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist considered everyone around him trustworthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist shut the windowpanes to have nothing to fear from the inside.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The armchair in the protagonist's room was not solid.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The protagonist wanted to be caught in a practical joke.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist placed the mattress in the corner of the room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The valet spilled the morning tea on the protagonist's face intentionally.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
