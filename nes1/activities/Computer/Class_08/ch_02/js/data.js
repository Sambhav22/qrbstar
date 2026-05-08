export const chapter = "Chapter - 2: WORD: Mail Merge";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary purpose of Mail Merge in Microsoft Word?",
          optionA: "Sending personalized letters only",
          optionB: "Creating directories and email messages",
          optionC:
            "Sending the same document to multiple recipients with personalized data",
          correctAnswer:
            "C) Sending the same document to multiple recipients with personalized data",
        },
        {
          question:
            "What are the three main steps involved in the Mail Merge process?",
          optionA: "Writing, Editing, and Previewing",
          optionB: "Creating, Merging, and Printing",
          optionC: "Selecting, Sorting, and Sending",
          correctAnswer: "B) Creating, Merging, and Printing",
        },
        {
          question:
            "Which step involves selecting the type of document to create, such as letters or envelopes?",
          optionA: "Step 1",
          optionB: "Step 3",
          optionC: "Step 4",
          correctAnswer: "A) Step 1",
        },
        {
          question:
            "In the Mail Merge process, what does the data source typically contain?",
          optionA: "Merge fields",
          optionB: "Recipient names only",
          optionC: "Information on each recipient",
          correctAnswer: "C) Information on each recipient",
        },
        {
          question:
            "How can you add recipient data into a document during Mail Merge?",
          optionA:
            "By selecting Address Block or Greeting Line from the task pane",
          optionB: "By clicking on the Print button",
          optionC: "By copying the data from the data source manually",
          correctAnswer:
            "A) By selecting Address Block or Greeting Line from the task pane",
        },
        {
          question:
            "What is Step 5 of the Mail Merge process primarily focused on?",
          optionA: "Writing the letter content",
          optionB: "Previewing the merged documents",
          optionC: "Finalizing the recipient list",
          correctAnswer: "B) Previewing the merged documents",
        },
        {
          question:
            "What feature allows printing of multiple envelopes with the same delivery address?",
          optionA: "Envelopes and Labels dialog box",
          optionB: "Envelope Creator",
          optionC: "Mailings Tab",
          correctAnswer: "A) Envelopes and Labels dialog box",
        },
        {
          question:
            "How can you create labels with the same address on each label?",
          optionA:
            "By choosing Full page of the same label in the Labels window",
          optionB: "By manually typing each address in the Label box",
          optionC:
            "By selecting Different addresses for each label in the Labels window",
          correctAnswer:
            "A) By choosing Full page of the same label in the Labels window",
        },
        {
          question:
            "Which step involves choosing the product number and entering the address for labels with different addresses on each label?",
          optionA: "Step 1",
          optionB: "Step 3",
          optionC: "Step 5",
          correctAnswer: "B) Step 3",
        },
        {
          question:
            "What does the 'Preview Results' button allow you to do in the Mail Merge process?",
          optionA: "Finalize and print the documents",
          optionB: "Check how the recipient list appears in the document",
          optionC: "Save the document with merged data",
          correctAnswer:
            "B) Check how the recipient list appears in the document",
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
            "The main document is linked to the data source by using ______ fields to generate output documents.",
          optionA: "Merge",
          optionB: "Join",
          optionC: "Concatenate",
          correctAnswer: "Merge",
        },
        {
          question:
            "The data source would contain information like names, addresses, phone numbers, etc., and is linked to the main document through ______ fields.",
          optionA: "Union",
          optionB: "Common",
          optionC: "Joint",
          correctAnswer: "Common",
        },
        {
          question:
            "The placeholders, known as ______, instruct Mail Merge where to insert the recipient data.",
          optionA: "Merge blocks",
          optionB: "Insert fields",
          optionC: "Placeholder tags",
          correctAnswer: "Insert fields",
        },
        {
          question:
            "Step 5 of Mail Merge helps in checking and adjusting any potential ______ in the document.",
          optionA: "Errors",
          optionB: "Discrepancies",
          optionC: "Inconsistencies",
          correctAnswer: "Inconsistencies",
        },
        {
          question:
            "After pasting the address in the delivery area of the Envelopes and Labels dialog box, users can modify the ______ and formatting using the Options button before finalizing the envelope.",
          optionA: "Structure",
          optionB: "Orientation",
          optionC: "Layout",
          correctAnswer: "Orientation",
        },
        {
          question:
            "Users can choose the 'Full page of the same label' option and then enter the address in the Labels window to generate labels with the ______ address.",
          optionA: "Similar",
          optionB: "Identical",
          optionC: "Matching",
          correctAnswer: "Identical",
        },
        {
          question:
            "The option 'Use an Existing List' in Mail Merge is chosen to select the prepared ______ for labels with different addresses.",
          optionA: "Database",
          optionB: "Spreadsheet",
          optionC: "Address list",
          correctAnswer: "Address list",
        },
        {
          question:
            "The 'Preview Results' button in Mail Merge helps in ensuring the accuracy of the merged ______ before printing.",
          optionA: "Output",
          optionB: "Documents",
          optionC: "Files",
          correctAnswer: "Output",
        },
        {
          question:
            "The Merge to Printer dialog box appears after clicking 'Print' in Step 6 of Mail Merge to start the ______ process.",
          optionA: "Printing",
          optionB: "Merging",
          optionC: "Rendering",
          correctAnswer: "Printing",
        },
        {
          question:
            "Mail Merge allowed users to generate documents where the same content repeated, but with varying ______ based on the data source.",
          optionA: "Information",
          optionB: "Content",
          optionC: "Data",
          correctAnswer: "Information",
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
            "The Mail Merge process in Word involves creating the main document, the data source, and merging them together.",
          optionA: "Correct",
          optionB: "Incorrect",
          correctAnswer: "Correct",
        },
        {
          question:
            "The data source for Mail Merge may contain information like names, addresses, and phone numbers of the recipients.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The 'Preview Results' feature in Mail Merge helps verify how recipient data appears before finalizing the merge.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Envelopes and Labels dialog box in Word only allows the printing of one envelope or label at a time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Labels in Mail Merge can have the same or different addresses printed on each label, depending on the user's choice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The 'Full page of the same label' option in the Labels window generates labels with different addresses on each label.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Mail Merge doesn't allow users to use an existing list as a data source; they always need to create a new one.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The 'Merge to Printer' dialog box appears after clicking the 'Print' option during the Mail Merge process.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Mail Merge facilitates the creation of unique documents for each recipient with varying content based on the data source.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Mail Merge is a feature solely used for printing documents and doesn't support email messages or labels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
