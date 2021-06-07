import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'DAOANHQUAN-INTERN', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dao Anh Quan',
  subtitle: 'I am  applying for an Internship (IT Assistant)',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'anhdaidien.jpg',
  paragraphOne: 'Currently I am a student at the Bach Khoa University',
  paragraphTwo: 'Dedicated and motivated college student seeking entry level assistant for the IT department',
  paragraphThree: 'Ability to understand and test software. I seek to work as an assistant to further my knowledge in the IT domain anh ultilize my skills',
  resume: 'https://drive.google.com/file/d/1Q8ZXdg3WVjnqI58LknLI_-PeWI5OpO5v/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
 {
    id: nanoid(),
    img: 'anhdoan1.jpg',
    title: 'Automatic Irrigation System',
    info: 'Using PIC16F877A microcontroller, I desinged an automatic watering system. The system main aim is to provide the amount of irrigation to agricutural field by observing the moisture content of soil. ',
    info2: 'The system is also built in with an LCD, which interfaces with the microcontroller for displaying the moisture content of soil and pump status. ',
    url:'',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'anhdoan2.jpg',
    title: 'IOT Based Irrigation System',
    info: 'After finishing my first project, I moved on to the next one which called "Smart Irrigation System". Using both Arduino microcontroller and NodeMCU ESP8266, I upgraded my first project from an "offline" system to the one which you can interact with by using PC or tablets.',
    info2: 'By receiving strings of "AT command" to the Node MCU ESP8266,the Node MCU will automatically create a webserver, also generate an Access Point with a wifi name and password. User can connect via PC or Tablet to adjust the pump and lamp status.',
    url: 'https://drive.google.com/file/d/109n65YmTU3lD9o2iF8MxSlf_c2eeiuIn/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact Number: 0398674353',
  btn: '',
  email: 'quan.dao1798@hcmut.edu.vn',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/dao.anhquan.5/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/xienbruno/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
