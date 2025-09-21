# Luthfi A. Pratomo - A Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A clean, responsive, and interactive single-page portfolio website for a marketing manager. This project showcases marketing expertise in Social Media, Google Ads, and SEO through detailed, sports-themed case studies. Built with vanilla HTML, CSS, and JavaScript, it emphasizes a professional, data-driven "Game Plan" approach to marketing.

**Note:** You should take a screenshot of your finished project and replace the placeholder link below!
![Project Screenshot](./project-screenshot.png)

---

## 📋 Table of Contents

- [Project Description](#project-description)
- [Key Features](#key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [File Structure](#-file-structure)
- [Future Improvements](#-future-improvements)

---

## Project Description

"The Marketing Playbook" is a single-page application (SPA) designed to serve as a personal portfolio. It was created for a marketing professional based in Jakarta, Indonesia, to present their skills, experience, and project successes in a dynamic and engaging format. The website avoids traditional multi-page navigation, instead using JavaScript to smoothly transition between sections, providing a seamless user experience. The design is modern and energetic, using a sports-themed color palette and iconography to reinforce the strategic, "winning" nature of the marketing campaigns presented.

---

## ✨ Key Features

This project includes a wide range of functionalities to create a modern and interactive user experience:

* **Single Page Application (SPA) Experience:** The entire site operates from a single `index.html` file. JavaScript handles showing and hiding different page sections (`Home`, `Projects`, `About`, `Contact`) without requiring a page reload.
* **Fully Responsive Design:** Using CSS Flexbox, Grid, and media queries, the layout adapts beautifully to all screen sizes, from mobile phones to desktop monitors.
* **Interactive Navigation:**
    * A sticky navigation bar that stays at the top of the page.
    * A functional mobile "hamburger" menu for smaller screens.
    * All navigation links, CTA buttons, and footer links correctly navigate to the intended page section.
* **Dynamic Project Case Studies:** The "Projects" page features detailed breakdowns of three distinct marketing campaigns, each including:
    * Objective & Challenge
    * Strategy ("My Playbook")
    * Results ("The Final Score")
    * **Animated Metric Counters:** When the user navigates to the Projects page, the result numbers (e.g., "340%") animate from zero to the final value.
* **Engaging UI/UX Elements:**
    * **Hover Effects:** Cards in the "Expertise" and "Projects" sections lift up on hover to provide visual feedback.
    * **Floating Action Button:** A "chat" icon is fixed to the bottom-right of the screen, providing a quick and persistent way to jump to the contact form.
    * **Click Ripple Effect:** Project cards have a subtle material design-inspired ripple effect on click.
* **Professional Icons:** Utilizes the **Font Awesome** library to display scalable, high-quality icons for LinkedIn and Email, replacing standard emojis.
* **Functional Contact Form:** A front-end contact form with `required` field validation and a JavaScript-powered confirmation message upon submission (note: does not include a backend to send emails).

---

## 🛠️ Tech Stack

This project was built from the ground up using fundamental web technologies.

* **HTML5:** For the structure and content of the website.
* **CSS3:** For all styling, layout, and animations.
    * **Flexbox & Grid:** For creating complex, responsive layouts.
    * **Custom Animations:** Keyframe animations for floating buttons and background particles.
* **Vanilla JavaScript (ES6):** For all interactivity, including:
    * DOM Manipulation
    * Event Handling & Listeners
    * Single-Page Application Routing Logic
    * Client-Side Form Validation
* **External Libraries:**
    * [Font Awesome](https://fontawesome.com/) - For professional, scalable icons.
    * [Google Fonts](https://fonts.google.com/) - For the 'Poppins' typography.

---

## 🚀 Getting Started

To run this project on your local machine, follow these simple steps.

**Prerequisites:**
* A modern web browser (e.g., Chrome, Firefox).
* (Recommended) Node.js and npm installed for the best development experience.

**Installation & Running:**

1.  **Download or Clone the Repository**
    ```sh
    git clone [https://your-repository-url.git](https://your-repository-url.git)
    ```
    Or download the ZIP file and extract it.

2.  **Navigate to the project directory**
    ```sh
    cd your-project-folder
    ```

3.  **Run the Website**

    * **Simple Method (No Installation):**
        Simply find the `index.html` file in your file explorer and double-click it to open it in your browser.

    * **Recommended Method (Using `live-server`):**
        This method will start a local server and automatically reload the browser when you make changes to the code.
        ```sh
        # Install live-server globally (if you haven't already)
        npm install -g live-server

        # Run the server
        live-server
        ```
        Your website will automatically open at an address like `http://127.0.0.1:5500`.

---

## 📂 File Structure

The project is organized with a clear separation of concerns into three main files:

/
├── 📄 index.html      # The main HTML file with all content and structure
├── 🎨 style.css       # All CSS styling and responsive design rules
├── ⚙️ script.js       # All JavaScript for interactivity and SPA logic
└── 🖼️ Pic_imresizer.jpg # The personal profile picture

---

## 🔮 Future Improvements

While this is a complete project, here are some potential features that could be added:

* **Backend for Contact Form:** Integrate a service like Netlify Forms, Formspree, or build a small Node.js backend to make the contact form fully functional and able to send real emails.
* **Enhanced Animations:** Use the Intersection Observer API to trigger animations (like the skill bars or metric counters) only when the elements scroll into view.
* **Project Detail Pages:** Convert the single Projects page into a gallery that links to individual, more detailed pages for each case study.

---

IBM + Hacktiv8 Project
