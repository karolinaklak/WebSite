// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Karolina",
  middleName: "",
  lastName: "KLAK",
    message: " Simplicity, carried to the extreme, becomes elegance.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/karolinaklak",
    },
    {
      image: "fa-linkedin",
        url: "https://www.linkedin.com/in/karolina-klak-893b14182/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/KobraDev1/",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/karolinaklak.png"),
  imageSize: 375,
  message:
    "My name is Karolina Klak. I’m a self-taught full stack developer with a tendency to Python and C# programming. I'm most passionate about data and cybersecurity, and would like to pursue this passion with writing technical articles. In my free time I like working on open source projects, playing music, cultivating myself and traveling around the world.",
    resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "karolinaklak",
  reposLength: 4,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 40 },
    { name: ".NET", value: 40},
    { name: "Python", value: 60 },
    { name: "Angular", value: 20 },
    { name: "Javascript", value: 20 },
    { name: "PowerShell", value: 50},
    { name: "SQL", value: 75 },
    { name: "Data Governance and Quality", value: 65 },
    { name: "React", value: 30 },
    { name: "LaTex", value: 70},
    { name: "ATLASSIAN (Jira, Trello, Confluence)", value: 70}
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 65 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 70 },
    { name: "Creativity", value: 60 },
    { name:"Agility", value : 80}
  ],
};

const leadership = {
  show: false
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get in Touch",
  message:
    "I'm currently looking for FullStack, Backend or even data opportunities as a freelancer, or for a long term contract ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kklak.pro@gmail.com",
};


const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'FullStack Developer',
      date: '2024-...'
    },
    {
      role: 'Python Developer',
      //companylogo: require('../assets/img/ch.jpeg'),
      date: '12/2022-12/2023',
    },
    {
      role: 'Data Analyst / Data Quality & Data Governance',
      //companylogo: require('../assets/img/ch.jpeg'),
      date: '12/2022-12/2023',
    },
    {
      role: 'Python Developer',
      date: '06/2022-08/2022',
    },
    {
      role: 'Python Developer',
      date: '02/2022-06/2022',
    },
    {
      role: 'Web Developer',
      date: '02/2022-06/2022',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };


// later on, we can add experiences here ( after getInTouch or before as u want to) and blog if we decide to full those sections
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};