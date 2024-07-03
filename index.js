#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message =
    "Hey there! I'm Haimantika, a Developer Advocate by profession. Currently hacking with frontend, building communities and public speaking !";
  const twitterLink = "https://twitter.com/HaimantikaM";
  const linkedinLink = "https://www.linkedin.com/in/haimantika-mitra/";
  const wesbiteLink = "https://haimantika.com";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();

//   Email:  tapesh.dua420@gmail.com                         │
//   │        GitHub:  https://github.com/Tapesh-1308                 │
//   │      LinkedIn:  https://linkedin.com/in/tapesh-dua-b49872216   │
//   │          Card:  npx tapesh-dua                                 │
//   │                                                                │
//   │   Hi there! I am Tapesh, a Frontend Developer                  │
//   │   and DSA Problem-Solver from India, and have a                │
//   │   expertise in creating beautiful, cool, and responsive        │
//   │   web apps. Toss me an email if you want to collab!            │
//   │
