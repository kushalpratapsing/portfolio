import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: "Kushal Pratap",
    lastName: "Singh",
    initials: "KS",
    position: "Computer Science & Engineering Student",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Data Analyst Intern"
        },
        {
            emoji: "📧",
            text: "kushalpratapsingh983@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/kkr.yff",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/kushalprtapsingh/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kushalpratapsi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kushal-pratap-singh-2408631bb/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/kushalll",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Kushal. I'm a Computer Science & Engineering student at Chandigarh University. I have experience in web development and data analysis. I'm passionate about coding, data science, and building impactful projects.",
    skills: {
        proficientWith: [ 'html', 'css', 'javascript', 'react', 'git', 'github', 'bootstrap', 'python', 'sql', 'powerbi', 'tableau'],
        exposedTo: ['nodejs', 'r', 'adobe illustrator']
    },
    hobbies: [
        {
            label: 'coding',
            emoji: '💻'
        },
        {
            label: 'listening to music',
            emoji: '🎵'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
    ],
    portfolio: [
        {
            title: "Cryptocurrency Tracker",
            live: "https://example.com/crypto-tracker", // Replace with actual live link
            source: "https://github.com/kushal/crypto-tracker", // Replace with actual repo link
            image: mock1
        },
        {
            title: "Virtual Assistant",
            live: "https://example.com/virtual-assistant", // Replace with actual live link
            source: "https://github.com/kushal/virtual-assistant", // Replace with actual repo link
            image: mock2
        },
        {
            title: "Quote-of-the-day",
            live: "https://kushalpratapsing.github.io/Quote-of-the-day-linkining-to-social-mediea-twitter-X-Instagram-FB-/", // Replace with actual live link
            source: "https://github.com/kushalpratapsing/Quote-of-the-day-linkining-to-social-mediea-twitter-X-Instagram-FB-", // Replace with actual repo link
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://example.com/project4", // Replace with actual live link
            source: "https://github.com/kushal/project4", // Replace with actual repo link
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://example.com/project5", // Replace with actual live link
            source: "https://github.com/kushal/project5", // Replace with actual repo link
            image: mock5
        }
    ]
}
