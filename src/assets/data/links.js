import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiAngellist } from 'react-icons/si';
import { CgMail } from 'react-icons/cg';

const links = [
  {
    id: 0,
    name: 'Email',
    email: 'lameck72@gmail.com',
    url: '',
    icon: <CgMail />,
  },
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com/Lameck1',
    icon: <FiGithub />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lameck-otieno/',
    icon: <FiLinkedin />,
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/lameck721',
    icon: <FiTwitter />,
  },
  {
    id: 4,
    name: 'AngelList',
    url: 'https://angel.co/u/lameck-otieno',
    icon: <SiAngellist />,
  },
];

export default links;
