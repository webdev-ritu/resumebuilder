import TEMPLATE_ONE_IMG from '../assets/template-one.png'
import TEMPLATE_Two_IMG from '../assets/template-two.png'
import TEMPLATE_Three_IMG from '../assets/template-three.png'

export const resumeTemplates = [
    {
        id:'01',
        thumbnailImg: TEMPLATE_ONE_IMG,
        colorPaletteCode:'themeOne'
    },
    {
        id:'02',
        thumbnailImg: TEMPLATE_Two_IMG,
        colorPaletteCode:'themeTwo'
    },
    {
        id:'03',
        thumbnailImg: TEMPLATE_Three_IMG,
        colorPaletteCode:'themeThree'
    },
]

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],
        ["#E9FBF8","#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"]
        ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
        ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
        ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
        ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

        ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
        ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
        ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
        ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
        ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

        ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
        ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],

    ],
};

export const DUMMY_RESUME_DATA ={
    profileInfo:{
        profileImg: null,
        previewUrl: "",
        fullName: "Nick",
        designation: "senior software engineer",
        summary: "Passinate and results-driven developer with 6+ year of experience building website"
    },
    contactInfo:{
        email:"nick.@example.com",
        phone: "+1234567890",
        location:"12 anywhere any city any country",
        linkedin:"https://linkedin.com/username",
        github:"https://github.com/username",
        website:"https://portfolio.com",
    },
    workExperience:[
        {
            company:"tech solution",
            role:"senoir fronted engineer",
            startDate: "2022-03",
            endDate:"2025-04",
            description:"worked on cross-functional teams developing full-stack solution with react"
        },
        {
            company:"tech solution",
            role:"junior fronted engineer",
            startDate: "2018-03",
            endDate:"2020-04",
            description:"worked on cross-functional teams developing full-stack solution with react"
        },
    ],
    education:[
        {
            degree:"M.sc software engineering",
            insititution:"tech university",
            startDate:"2021-08",
            endDate:"2023-06",
        },
         {
            degree:"B.sc software engineering",
            insititution:"tech university",
            startDate:"2021-08",
            endDate:"2021-06",
        },
         {
            degree:"High school",
            insititution:"central high school",
            startDate:"2015-08",
            endDate:"2016-06",
        },
    ],
    skills:[
        {name: "javascript",progress:95},
        {name: "React",progress:95},
        {name: "Node.js",progress:55},
        {name: "Css",progress:55},
        {name: "MongoDB",progress:75},
    ],
    projects:[
        {
            title:"Project Manager App",
            description:"Atask and team managment app built with MERN stack.",
            github:"https://github.com/username/project-manager-app",
            liveDemo:"https://livedemo.com",
        },
        {
            title:"Project Manager App",
            description:"Atask and team managment app built with MERN stack.",
            github:"https://github.com/username/project-manager-app",
             liveDemo:"https://livedemo.com",
        },
    ],
    certifications:[
        {
            title:"full stack web developer",
            issuer: "udemy",
            year:"2023",
        },
        {
            title:"full stack web developer",
            issuer: "udemy",
            year:"2023",
        },
    ],
    languages:[
        {name:"English", progress:100},
         {name:"Hindi", progress:100},
          {name:"French", progress:100},
    ],
    interests:["Reading", "open source contribution", "hinking"],
};

