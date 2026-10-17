# Technical Documentation

## 1. Project Overview

This project is an interactive personal portfolio website developed for Assignment 2 using HTML, CSS, and JavaScript.

The project continues the portfolio created in Assignment 1 and improves it by adding interactive project details, form validation, user feedback, and additional transitions.

---

## 2. Technologies Used

- HTML5 for page structure and content
- CSS3 for styling, responsive design, and transitions
- JavaScript for interactivity, form validation, and user feedback
- Git and GitHub for version control
- Browser Developer Tools for testing

---

## 3. Project Structure

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
│ ├── pentomino-game.png
│ └── clinic-system.png
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
└── .gitignore

---

## 4. Main Files

### index.html

Contains the main structure and content of the portfolio, including:

- Navigation
- Home
- About Me
- Projects
- Skills
- Contact
- Footer

The Projects section contains two project cards with screenshots and interactive Show Details buttons.

The Contact section contains a form for the user's name, email, and message.

### css/styles.css

Contains the visual design and responsive layout of the website.

It includes:

- Pastel color theme
- Responsive layouts
- Project and skill cards
- Contact form styling
- Hover effects
- Button transitions
- Error and success message styling
- Interactive project detail styling

### js/script.js

Contains the interactive behavior of the website.

JavaScript is used for:

- Showing and hiding additional project details
- Changing button text between Show Details and Hide Details
- Validating contact form input
- Checking for empty fields
- Performing basic email validation
- Displaying error messages
- Displaying a success message
- Resetting the form after successful submission

---

## 5. Dynamic Content

Each project card includes a Show Details button.

When the user clicks the button, JavaScript displays additional information about the selected project. The button text changes to Hide Details.

Clicking the button again hides the information and restores the Show Details text.

This feature uses JavaScript event listeners, DOM manipulation, and CSS classes.

---

## 6. Data Handling and Form Validation

The Contact form demonstrates basic data handling using JavaScript.

The form collects:

- Name
- Email
- Message

Before accepting the form, JavaScript checks that all fields contain values.

The email is also checked for a basic valid format.

If the input is invalid, the form displays an error message explaining what the user should correct.

If the input is valid, the website displays:

`Thank you! Your message has been received.`

The form fields are then cleared.

---

## 7. Error Handling and User Feedback

The website provides clear feedback during form interaction.

Examples include:

- An error message when required fields are empty
- An error message when the email format is invalid
- A success message when the form is submitted correctly
- Different colors for error and success messages

The HTML form uses `novalidate` so that the custom JavaScript validation and feedback can be displayed consistently.

---

## 8. Animations and Transitions

CSS transitions and hover effects are used to improve the user experience.

Examples include:

- Project card hover movement
- Button hover effects
- Show Details button interaction
- Smooth visual transitions

The effects are kept simple so they do not distract from the website content.

---

## 9. Responsive Design

The website uses CSS Grid, Flexbox, flexible spacing, and media queries.

The layout was designed for:

- Desktop screens
- Tablet screens
- Mobile screens

On smaller screens, cards are displayed in a single column and spacing is adjusted to fit the available width.

---

## 10. Testing

The project was tested in a web browser and with responsive Developer Tools.

The following functionality was checked:

- Navigation links
- Project screenshots
- Show Details buttons
- Hide Details buttons
- Contact form empty-field validation
- Invalid email validation
- Successful form submission
- Error and success feedback
- Desktop layout
- Tablet layout
- Mobile layout
- Hover effects and transitions

The interactive project details were tested by opening and closing the additional information for both project cards.

The Contact form was tested with empty fields, an invalid email address, and valid input to verify that the correct feedback message appeared.

---

## 11. How to Run the Project

No installation or backend server is required.

1. Download or clone the repository.
2. Open the project folder.
3. Locate `index.html`.
4. Open `index.html` in a modern web browser.

---

## 12. Version Control

Git and GitHub are used for version control.

Changes are saved using meaningful commits during development. The Assignment 2 repository contains the source code, project screenshots, documentation, and commit history.
