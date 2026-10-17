# Technical Documentation

## 1. Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript.

The website presents information about me, my programming projects, my technical skills, and a contact form. The website was designed to be responsive so that it can be viewed on desktop, tablet, and mobile screen sizes.

---

## 2. Technologies Used

The following technologies were used:

- HTML5 for the structure and content of the website.
- CSS3 for styling, colors, layouts, and responsive design.
- JavaScript for the contact form interaction.
- Git and GitHub for version control and project management.
- Browser Developer Tools for testing responsive layouts.

---

## 3. Project Structure

The project is organized using the following folder structure:

```text
assignment-1/
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
```

This structure separates the HTML, CSS, JavaScript, images, and documentation to keep the project organized.

---

## 4. Main Files

### index.html

`index.html` contains the main structure and content of the portfolio.

The page includes the following sections:

- Navigation Bar
- Home
- About Me
- Projects
- Skills
- Contact
- Footer

The Projects section contains information and screenshots from two previous Java projects:

1. Pentomino Puzzle Game
2. Clinic Management System

The HTML file also links to the external CSS and JavaScript files.

### css/styles.css

`styles.css` contains the visual design of the website.

It is responsible for:

- The pastel color theme
- Typography and spacing
- Navigation bar layout
- Home section styling
- Project cards
- Project screenshots
- Skills cards
- Contact form
- Buttons and hover effects
- Responsive layouts

CSS Grid and Flexbox are used to organize different parts of the page.

Media queries are used to adjust the layout for smaller screen sizes.

### js/script.js

`script.js` contains the JavaScript interaction used by the contact form.

When the user submits the form, JavaScript:

1. Prevents the page from refreshing.
2. Displays a confirmation message.
3. Clears the form fields.

The confirmation message displayed is:

`Thank you! Your message has been received.`

### assets/images/

The `assets/images/` folder contains screenshots of the projects displayed in the portfolio.

The image files are:

- `pentomino-game.png`
- `clinic-system.png`

These images are referenced from `index.html`.

### docs/

The `docs/` directory contains the project documentation.

`ai-usage-report.md` describes how ChatGPT was used during the development process and how AI suggestions were reviewed and tested.

`technical-documentation.md` explains the technical structure and implementation of the portfolio.

---

## 5. Website Sections

### Home

The Home section introduces me as a Computer Science student and provides a short description of my interests.

It also includes a link that takes the user to the Projects section.

### About Me

The About Me section provides additional information about my interest in programming and web development.

### Projects

The Projects section displays two project cards.

Each card includes:

- Project name
- Screenshot
- Short description
- Technologies used

The projects are displayed using a responsive grid layout.

### Skills

The Skills section displays programming and web development skills using pastel-colored cards.

The skills include:

- Java
- HTML
- CSS
- JavaScript
- Data Structures

### Contact

The Contact section contains a form with:

- Name field
- Email field
- Message field
- Submit button

JavaScript provides feedback after the form is submitted.

---

## 6. Responsive Design

The website was designed to work on multiple screen sizes.

The desktop layout displays project and skill cards in multiple columns.

For tablet-sized screens, media queries adjust the layout so that the content fits comfortably within the available width.

For mobile-sized screens, project and skill cards are displayed in a single column, and the navigation and spacing are adjusted for the smaller screen.

The responsive design uses:

- CSS Grid
- Flexbox
- Media queries
- Flexible widths and spacing

---

## 7. Responsive Testing

The responsive design was tested using browser Developer Tools.

The website was tested at different screen widths, including:

- Desktop view
- Tablet view at approximately 768px width
- Mobile view at approximately 390px width

During testing, the Skills section initially displayed incorrectly on the mobile layout. The CSS media query was adjusted so that skill cards display in a single column on smaller screens.

The Projects section, Skills section, navigation, and Contact form were checked to make sure they fit within the screen without unwanted horizontal overflow.

---

## 8. How to Run the Project

No installation or backend server is required to run the portfolio.

To run the website:

1. Download or clone the repository.
2. Open the project folder.
3. Locate `index.html`.
4. Open `index.html` in a modern web browser.

The website can also be opened from Visual Studio Code using a local development server if available.

---

## 9. Testing

The following functionality was tested:

- Navigation links
- Project layout
- Project screenshots
- Skills layout
- Contact form fields
- Contact form JavaScript interaction
- Desktop layout
- Tablet layout
- Mobile layout

The contact form was tested by entering values into the fields and submitting the form. The confirmation message appeared correctly, and the fields were cleared after submission.

---

## 10. Version Control

Git and GitHub were used for version control.

Changes were saved using meaningful commits during development. The repository contains the source code, project images, documentation, and commit history for the assignment.