# Personal Portfolio - Assignment 2

## Project Description

This project continues the personal portfolio website developed in Assignment 1.
Assignment 2 focuses on improving interactivity and user experience using JavaScript. The portfolio includes information about me, my projects, technical skills, and a contact form.


The portfolio was built using HTML, CSS, and JavaScript.

## Features

- Home section with a short introduction
- About Me section
- Projects section with two previous Java projects
- Skills section
- Contact form
- Responsive design for desktop, tablet, and mobile devices
- JavaScript contact form interaction
- Smooth scrolling
- Pastel responsive user interface

## Assignment 2 Interactive Features

### Dynamic Project Details

Each project includes a **Show details** button. When the user clicks the button, additional information about the project is displayed. The button changes to **Hide Details** and allows the user to hide the information again.

This feature uses JavaScript event listeners and DOM manipulation.

### Contact Form Validation
The contact form uses JavaScript to validate user input.

The form checks that:

- Name is not empty
- Email is not empty
- Message is not empty 
- Email contains a valid basic format

If the input is invalid, the user receives a clear error message.

If the input is valid, a success message is displayed and the form is reset.

### User Feedback

The website provides clear feedback to the user:

- Error messages are displayed for empty fields
- An error message is displayed for an invalid email address 
- A success message is displayed after valid form submission
- Error and success messages use different colors for clarity

### Animations and Transitions

Simple CSS transitions and hover effects are used to improve the user experience.

The project cards and interactive buttons provide visual feedback when user interacts with them.

## Projects

### Pentomino Puzzle Game

A JavaFX puzzle game where players place and rotate Pentomino pieces on a game
board before the timer ends.

**Technologies:** Java, JavaFX

### Clinic Management System

A Java-based clinic management system for handling patient records,
appointments, urgent cases, and visit records using different data structures.

**Technologies:** Java, Data Structures

## How to Run the Portfolio

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. No additional installation or backend is required.

## Project Structure

```text
assignment-2/
├── README.md
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
├── assets/
│ └── images/
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
└── .gitignore
```

## AI Usage

ChatGPT was used as an AI-assisted development tool during this assignment.
It was used to support:
- Planning the Assignment 2 enhancements
- JavaScript interaction and form validation
- Debugging and testing
- CSS feedback and transition suggestions
- Documentaion

AI-generated suggestions were reviewed, tested, and modified before being
included in the final project.

For more details, see `docs/ai-usage-report.md`.

## Improvements from Assignment 1

Assignment 2 improves the original portfolio by adding:
-Interactive Show/Hide project details
- JavaScript form validation
- Error handling for invalid user input
- Clear success and error feedback
- Additional transitions and interactive behavior

## Author

Hawra Alyousif
Computer Science Student