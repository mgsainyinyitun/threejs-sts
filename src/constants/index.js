import { dat, lbu, technonet, yse } from "../../assets/images";
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
} from "../../assets/icons";

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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];