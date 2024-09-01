import { dat, lbu, technonet, yse } from "../../public/assets/images";
import {
    bootstrap,
    java,
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cplusplus,
    python,
    php,
    springboot,
    django,
    spring
} from "../../public/assets/icons";
import { basicweb, chatapp, helpdesk, snakegame, ticgame } from "../../public/assets/projects";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap CS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring MVC",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Programming Trainer",
        company_name: "TechnoNet",
        icon: technonet,
        iconBg: "white",
        date: "March 2020 - April 2021",
        points: [
            "Create couse curriculum in Java, Python, Django and Web design.",
            "Responsibe to share knowledge about programming subjects such as mainly in Java.",
            "Create various projects for demonstration and training.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Youth Societh for Education (YSE)",
        icon: yse,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Develop YSE Task Tracker that is used for internal task management and project management using React.js, MUI library and Firebase database.",
            "Develop FAQ pages and firebase rules testing function for YSE Portal project using React.js, Firebase Function and Firebase Database.",
            "Adding new pages for YSE website using WIX CMS.",
            "Make sure web app is responsive and useable on all devices.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "LBU",
        icon: lbu,
        iconBg: "white",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Develop new features of Learning Management System (LMS) using Java, Spring MVC and PostgreSQL database.",
            "Adding new Student Verification feature that enable to student to check their data on website.",
            "Adding new page and new feature to WordPress website.",
            "Develop REST API using Spring MVC and integrate with WordPress website (PHP).",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Operation and maintenance of AWS EC2 server that is used to host WordPress and LMS."
        ],
    },
    {
        title: "Senior Programmer",
        company_name: "DIR-ACE",
        icon: dat,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using java and other related technologies.",
            "Developing and maintenance project of Internet trading front system and batch system, using Java, PLSQL, shell languages and Oracle database.",
            "Perform from requirement investigation to unit testing, integration testing, basic design and detail design.",
            "Develop various tool using Java, VBA, VBS, C-Shell, PowerShell language, for performance increase and quality improvement for various projects.",
            "Developed “Integration testing support and screen JSP investigation tool” using JavaFX and the tool win second price in QC competition.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mgsainyinyitun',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sai-nyi-13356517b',
    }
];

export const projects = [
    {
        iconUrl: chatapp,
        theme: 'btn-back-red',
        name: 'Chatting App',
        description: 'This ChatWithFriends web application is a real time chat application that user cancreate account and make friend with other and send message to each other. Also, user can create groupand chat with a group of people in group. This project use firebase as an authentication, firestore as backend database and deploy on google firebase hosting. And Reactjs is used as a frontend framework.You can click Live Demo or if your are curious how I wrote it, you can find source code this project on my gitHub.',
        link: 'https://web-messenger-sainyi-068390.web.app/',
    },
    {
        iconUrl: helpdesk,
        theme: 'btn-back-green',
        name: 'Help Desk System',
        description: 'This help desk system is created with python django combine with web technology such as html, css, javascript and other libraries such as google chart api, bootstrap framework, and many python libraries.And deploy on pythonanywhere.com. You can click Live Demo to explore this app or if your are curious how I wrote it,the source code of this project is on my GitHub.',
        link: 'http://sainyinyitun.pythonanywhere.com/',
    },
    {
        iconUrl: snakegame,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'This is Snake Game web app. I also created this using HTML, CSS, Reactjs and deploy it on Netlify. You can click Live Demo to play this Game or if your are curious how I wrote it, source code of this project is on my GitHub.',
        link: 'https://sai-nyi-snake-game.netlify.app/',
    },
    {
        iconUrl: ticgame,
        theme: 'btn-back-pink',
        name: 'Tic-Tac-Toe',
        description: 'This is Tic-Tac-Toe web app. I created this using HTML, CSS, Reactjs and deploy it on Netlify. You can click Live Demo to play this Game or if your are curious how I wrote it, you can check the souce code of this project on my GitHub.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: basicweb,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'It is just a basic web design created by only html and css and deploy on vercel.You can click Live Demo button to explore this app or if your are curious how I wrote it, you can check my GitHub for the project source code.',
        link: 'https://basicwebdesign.mgsainyinyitun.vercel.app/',
    },
];