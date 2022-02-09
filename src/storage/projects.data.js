import bubblesBG from '../asserts/images/projects/bubbles.jpg';
import flappyBG from '../asserts/images/projects/flappy.png';
import pianonaBG from '../asserts/images/projects/pianona.png';
import weatherBG from '../asserts/images/projects/weather.png';
import calculatorBG from '../asserts/images/projects/calculator.png';
import shiningStarsBG from '../asserts/images/projects/shining-stars.png';
import mofceLabBG from '../asserts/images/projects/mofce.jpeg';
import myBoutiqueBG from '../asserts/images/projects/my-boutique-2.jpeg';

const PROJECTS_DATA = [
  {
    name: 'My Boutique',
    des: 'E-commerce store, coded with ReactJS, Redux, Firebase, Stripe, GraphQL, PWA.',
    bg: myBoutiqueBG,
    code: 'https://github.com/adarSonmez/e-commerce-store',
    visit: 'https://my-boutique.herokuapp.com/',
  },
  {
    name: 'Weather App',
    des: 'Cool weather app, made using HTML5, CSS3 and Vanilla JavaScript.',
    bg: weatherBG,
    code: 'https://github.com/adarSonmez/weather-app',
    visit: 'https://adarsonmez.github.io/weather-app/',
  },
  {
    name: 'Flappy Bird',
    des: 'Remember this annoying game that once occupied the trends on the play store? Yes, I made a copy of that game.',
    bg: flappyBG,
    code: 'https://github.com/adarSonmez/flappy-bird',
    visit: 'http://flappy-bird.epizy.com/',
  },
  {
    name: 'Mofce Lab',
    des: 'Designed a responsive website for a research lab. Created a private admin panel where the team can submit their work, publications, news and photos.',
    bg: mofceLabBG,
    visit: 'http://www.mofce.com/',
  },
  {
    name: 'Pianona',
    des: 'Play piano on the web',
    bg: pianonaBG,
    code: 'https://github.com/adarSonmez/pianona',
    visit: 'https://adarsonmez.github.io/pianona/',
  },
  {
    name: 'Realistic Calculator',
    des: 'How would you like to experience this realistic classic calculator on the web?',
    bg: calculatorBG,
    code: 'https://github.com/adarSonmez/vanilla-js-caculator',
    visit: 'https://adarsonmez.github.io/vanilla-js-caculator/',
  },
];

export default PROJECTS_DATA;
