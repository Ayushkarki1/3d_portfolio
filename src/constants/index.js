import {
    mobile,
    poke,
    ups,
    backend,
    creator,
    unnamed,
    hang,
    tshirt,
    Weatherapp, 
    passwordgen,
    web,
    LoginandRegistrationwebapp,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threedp,
    chatapp,
    meta,
    starbucks,
    tesla,
    shopify,
    tictactoee,
    c,
    py,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full stack Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: py,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "c++",
      icon: c,
    },
    
   
  ];
  
  const experiences = [
    {
      title: "Volunteer",
      company_name: "American Lung Association",
      icon: starbucks,
      iconBg: "#383E56",
      date: "june 2019 ",
      points: [
        "helped out in the office for some time as an assistant.",
      ],
    },   
    {
      title: "Package Handler",
      company_name: "UPS",
      icon: ups,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Oct 2020",
      points: [
        "As a package handler in a warehouse, my primary responsibility was to efficiently and safely handle incoming and outgoing shipments. This role required a strong attention to detail and physical stamina. I would often unload packages from trucks, sort them based on size and destination, and then load them onto the appropriate delivery vehicles.",
      ],
    },
  ];
  
  const testimonials = [
    {}
  ];
  
  const projects = [
    {
      name: "3-D portfolio ",
      description:
        "Welcome to my unique 3D portfolio, where I showcase my creative works in a visually stunning and immersive way. With a focus on 3D animations, this portfolio brings my projects to life, allowing viewers to explore and engage with my creations in a whole new dimension. From eye-catching graphics to interactive 3D models, my portfolio demonstrates a solid foundation of artistic and technical skills. Whether you're an art enthusiast, a potential client, or simply curious, this portfolio offers a captivating journey through my diverse body of work. ",
      tags: [
        {
          name: "ThreeJS ",
          color: "blue-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
      ],
      image: threedp,
      source_code_link: "https://github.com/Ayushkarki1/3d_portfolio",
    },
    {
      name: "full stack Chatting web app ",
      description:
        "Welcome to our full-stack chatting web app, powered by Node.js, React.js, and ChatEngine.io. Our platform makes connecting with friends and colleagues easier than ever. Whether you want to have a one-on-one chat, share files, or create group conversations, our user-friendly interface has you covered. With the ability to invite friends and colleagues, you can stay connected with your social and professional networks effortlessly.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Ayushkarki1/chatapp/tree/main",
    },
    {
      name: "3-D T-shirt Customizer",
      description:
      "Experience the future of online T-shirt customization with my cutting-edge 3D model T-shirt customizer. This innovative platform empowers users to interact with T-shirts in a whole new dimension, allowing a 360-degree view of the garment. Beyond the immersive viewing experience, users have the freedom to unleash their creativity by customizing T-shirt colors and uploading their own logos or designs",
      tags: [
        {
          name: "ThreeJS ",
          color: "green-text-gradient",
        },
        {
          name: "React Three Fibe",
          color: "orange-text-gradient",
        },
        {
          name: "TailwindCSS ",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion ",
          color: "red-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        
      ],
      image: tshirt,
      source_code_link: "https://github.com/Ayushkarki1/threejs",
    },
    {
      name: "Login and Registration tool",
      description:
        "Login and Registration using MERN Stack | Mongo, Express, React and Node Authentication",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: LoginandRegistrationwebapp,
      source_code_link: "https://github.com/Ayushkarki1/",
    },
    {
      name: "Profemon",
      description:
        "In the world of Profémon, trainers are always busy training their beloved profémons for the battles to come. They are looking to challenge departments to a profémon battle and gain a degree. Departments are trainers who specialize in a single type of profémon. ",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        
      ],
      image: poke,
      source_code_link: "https://github.com/Ayushkarki1/profemoncpp",
    },
    {
      name: "Hangman",
      description:
        "Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. Originally a Paper-and-pencil game, there are now electronic versions",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        
      ],
      image: hang,
      source_code_link: "https://github.com/Ayushkarki1/hangmangamec--",
    },
    {
      name: "Password/Passcode generator",
      description:
        "This Password/Passcode Generator is a software tool or algorithm designed to create secure and unique passwords or passcodes for various applications, such as user accounts, online services, computer systems, or mobile devices. The primary purpose of this password/passcode generator is to enhance security by generating complex and difficult-to-guess combinations of characters, numbers, and symbols. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: passwordgen,
      source_code_link: "https://github.com/Ayushkarki1/passwordgen",
    },
    {
      name: "Weather web app",
      description:
        "This weather app offers users a convenient way to access up-to-date weather information for any location they choose. With a user-friendly interface, it allows users to simply type in their desired location, and the app leverages the power of WeatherAPI to provide accurate and real-time weather data. ",
      tags: [
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
      ],
      image: Weatherapp,
      source_code_link: "https://github.com/Ayushkarki1/Weather-App",
    },
    {
      name: "Unbeatable TicTacToe",
      description:
        "Challenge yourself in a classic game of TicTacToe against my formidable AI opponent. While the rules are simple, winning is not - my AI is designed to provide a challenging and engaging experience that will put your strategic skills to the test. Whether you're a beginner or an experienced player, you'll find the game offers a fun and immersive way to pass the time. With a sleek and intuitive interface, you can easily make your moves and compete for victory. But be warned, the odds are stacked against you, making each win a true accomplishment.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        
      ],
      image: tictactoee,
      source_code_link: "https://github.com/Ayushkarki1/tictactoe",
    },
    {
      name: "2-D car game",
      description:
        "",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        
      ],
      image: unnamed,
      source_code_link: "https://github.com/Ayushkarki1/raceproject",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  