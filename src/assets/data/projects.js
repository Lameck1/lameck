const projects = [
  {
    id: 1,
    title: 'Office-Booking',
    image:
      'https://res.cloudinary.com/dssc4mht3/image/upload/c_scale,h_300,q_100,r_0,w_600/v1653645136/office-booking_u5rmlj.png',
    description:
      'Office Booking is a full-stack application that allows users to book an office space. It allows users to sign up, login, and book office space. There also feature for viewing your list of Reservations, deleting reservation, adding office spaces, and deleting office space. The backend is an API hosted on Heroku.',
    technologies: [
      'React',
      'Ruby-on-Rails',
      'JavaScript',
      'Heroku',
      'Cloudinary',
    ],
    githubLink: 'https://github.com/TedLivist/office-booking-frontend',
    liveLink: 'https://office-booking.netlify.app/',
  },
  {
    id: 2,
    title: 'R-detective',
    image:
      'https://res.cloudinary.com/dssc4mht3/image/upload/c_scale,h_300,q_100,w_600/v1617364073/r-detective_e1awc3.png',
    description:
      'R-detective is a beginner code analysis tool. This tool provides feedback about code errors.',
    technologies: ['Ruby'],
    githubLink: 'https://github.com/Lameck1/r-detective',
    liveLink: '',
  },
  {
    id: 3,
    title: 'Crypto-Stats',
    image:
      'https://res.cloudinary.com/dssc4mht3/image/upload/c_scale,h_300,q_100,w_600/v1653644021/crypto-stats_zwl7bf.png',
    description:
      "'Crypto-Stats' is a web application that keeps track of cryptocurrency statistics. This application presents a user with a list of cryptocurrencies sorted in the order of their current market prices. A user can then click on one of othe currencies to be directed to a details page with more stats on that particular cryptocurrency. This project uses Coinstats API which is a public REST API for information on cryptocurrencies.",
    technologies: ['React', 'Redux', 'JavaScript', 'Coinstats API'],
    githubLink: 'https://github.com/Lameck1/crypto-stats',
    liveLink: 'https://crypto-statistics.netlify.app/',
  },
  {
    id: 4,
    title: 'To-Do-List',
    image:
      'https://res.cloudinary.com/dssc4mht3/image/upload/c_scale,h_300,q_100,w_600/v1653654938/to-do_ic5bat.png',
    description:
      'A simple TO-Do List built with Webpack. It allows user to add tasks to the list, remove tasks from the list, reposition tasks on the list and even delete task from the list. I have attempeted to implement the MVC framework with this project as a learning undertaking. Thus, code has been separate into models, views, and controllers directories.',
    technologies: ['Webpack', 'HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/Lameck1/todo-list',
    liveLink: 'https://lameck1.github.io/todo-list/',
  },
];

export default projects;
