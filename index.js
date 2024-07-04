#!/usr/bin/env node

// Function to log your details in the terminal
function logDetails() {
  const message =
    "Hi there! I am Muhammad Bilal, a Frontend Developer with +3 years of experience. I have expertise in creating beautiful, cool, and responsive web apps. Toss me an email if you want to collab!";
  const email = "mxbilal0@gmail.com";
  const githubLink = "https://github.com/mxbilal";
  const linkedinLink = "https://linkedin.com/in/mxbilal0";
  const card = "npx mxbilal0";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m   |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mEmail:\x1b[0m     \x1b[38;5;39m${email}                        \x1b[38;5;51m|
    | \x1b[38;5;93mGitHub:\x1b[0m    \x1b[38;5;39m${githubLink}                \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m  \x1b[38;5;39m${linkedinLink}       \x1b[38;5;51m|
    | \x1b[38;5;93mCard:\x1b[0m      \x1b[38;5;39m${card}                       \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}

// Call the function to log your details
logDetails();
