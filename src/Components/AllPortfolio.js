import port1 from '../img/portImages/port1.png';
import port2 from '../img/portImages/port2.png';
import port3 from '../img/portImages/port3.png';
import port4 from '../img/portImages/port4.png';
import port5 from '../img/portImages/port5.png';
import port1a from '../img/portImages/port1a.png';
import port2a from '../img/portImages/port2a.png';
import port3a from '../img/portImages/port3a.png';
import port4a from '../img/portImages/port4a.png';
import port5a from '../img/portImages/port5a.png';
import github from '../img/svg/github.svg';
import link from '../img/worldwide.png';

const portfolios = [
  {
    id: 1,
    category: ['PHP', 'Bootstrap', 'jQuery'],
    link1: 'https://github.com/zcestkc',
    link2: 'https://kwanchan.co/project1/',
    icon1: github,
    icon2: link,
    image1: port1,
    image2: port1a,
    title: 'Gazetteer',
    description:
      'Gazetteer is a "mobile-first" application which displays a world map where users can select any country from the dropdown list and view its information. This application makes extensive use of third party APIs to collect information such as such as weather forecast, Covid information, news and more.',
  },
  {
    id: 2,
    category: ['PHP', 'Bootstrap', 'Database', 'jQuery'],
    link1: 'https://github.com/zcestkc',
    link2: 'https://kwanchan.co/companydirectoryV2/',
    icon1: github,
    icon2: link,
    image1: port2,
    image2: port2a,
    title: 'Company Directory',
    description:
      'Company Directory is a full-stack, responsive application that stores details of all personnel, departments and locations in a MySQL database. Users are able to perform any CRUD action on the entries.',
  },
  {
    id: 3,
    category: ['React', 'Sass'],
    link1: 'https://github.com/zcestkc',
    link2: 'https://kwanchan.co/',
    icon1: github,
    icon2: link,
    image1: port3,
    image2: port3a,
    title: 'Personal Portfolio',
    description:
      'This is a React portfolio project that showcases my skills as a trained, job-ready web developer, it is an on-going project that is constantly updated as I acquire new techniques.',
  },
  {
    id: 4,
    category: ['React', 'Redux', 'Bootstrap', 'Database'],
    link1: 'https://github.com/zcestkc/Roe-app',
    link2: 'https://roe-ecommerce.herokuapp.com/',
    icon1: github,
    icon2: link,
    image1: port4,
    image2: port4a,
    title: 'E-commerce App',
    description:
      "An Amazon-inspired e-commerce app built with React, Redux, NodeJs and MongoDB, it is built with user login and authentication as well as payment sandboxes such as PayPal. T∂his project is the final project of Codecademy's Full-Stack Engineer path that is applied with every technique I acquired on the journey.",
  },
  {
    id: 5,
    category: ['React', 'Redux'],
    link1: 'https://github.com/zcestkc/Reddit-Client',
    link2: 'https://kwanchan.co/reddit-client/',
    icon1: github,
    icon2: link,
    image1: port5,
    image2: port5a,
    title: 'Reddit Client',
    description:
      "A reddit clone built using React and Redux, it makes extensive AJAX calls to the reddit API. This is milestone project from Codecademy's Full-Stack Engineer path, bringing together everything I have learnt about front-end development.",
  },
];

export default portfolios;
