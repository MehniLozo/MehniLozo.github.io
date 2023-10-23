// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aziz",
  middleName: "",
  lastName: "Chebaane",
  message: "Obsessed about making Software",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/MehniLozo",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aziz-chebaane-995546234/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Chebaane7",
    },
  ],
};
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me2.jpg"),
  imageSize: 375,
  message:
    "Aziz Chebaane. A software developer skilled in crafting scalable software solutions. Aims for detail and timely project completion. " + '\r\n' + " Lives under the realm of Backend & AI Computing",
  resume: require("../editable-stuff/WORK_EXPERIENCE.pdf"),
};
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "MehniLozo",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 75 },
    { name: "Golang", value: 60 },
    { name: "Java", value: 80 },
    { name: "HTML/CSS", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "NodeJS", value: 80 },
    { name: "TypeScript", value: 45 },

  ],
  tools: [
    { name: "NumPy", value: 50 },
    { name: "Pandas", value: 60 },
    { name: "SQL/NoSQL", value: 75 },
    { name: "Docker", value: 65, icon: require("../editable-stuff/Docker.png") },
    { name: "Linux", value: 80 },
    { name: "Azure DevOps", value: 70 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ]

};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software related opportunities, if i seem to be competent filling your void please dont hesitate to get in touch via",
  email: "chebaaneaziz28@gmail.com",
};
export { navBar, mainBody, about, repos, skills, getInTouch };
