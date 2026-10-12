import WAPPImages from "@/assets/img/WAPP";
import ChatReactImages from "@/assets/img/ChatReact";
import poofApp from "@/assets/img/poofApp";

export const services = [
  {
    id: 5,
    thumbnail: {
      src: "",
      alt: "CostaBackend",
    },
    title: "CostaBackend",
    subtitle: "Go REST API for holiday apartment management",
    description:
      "The backend for a property management system for tourist apartments in Málaga. Written in Go with Gin and PostgreSQL (pgxpool), with Supabase JWT authentication and role-based access for managers, owners, cleaners and maintenance staff. Database changes run through golang-migrate, logging is structured with slog, and the local setup runs in Docker Compose with nginx and LocalStack for S3 and SQS. Work in progress.",
    thumbnails: [],
    repo: "https://github.com/adocoder12/CostaBackend",
  },
  {
    id: 6,
    thumbnail: {
      src: "",
      alt: "Go web app",
    },
    title: "Go Web App",
    subtitle: "Server-rendered app with Go's standard library",
    description:
      "A server-rendered web app built with Go's net/http and no framework, to learn how the web layer works underneath. Users register and log in with bcrypt-hashed passwords; sessions are stored in SQLite with session-fixation protection and flash messages. Requests pass through a middleware chain for logging, panic recovery and auth guards, and pages render through a cached, thread-safe template renderer. Data access uses a repository pattern with a DBTX interface so queries work inside transactions.",
    thumbnails: [],
  },
  {
    id: 1,
    thumbnail: {
      src: WAPPImages.HomePage,
      alt: "Tournament App home page",
    },
    title: "Tournament App",
    subtitle: "React, Express and MongoDB",
    repo: "https://github.com/adocoder12/Tourment_app_FullStack_Typescript",
    description:
      "A web app for running sports leagues. Users register, create teams and players, organize them into leagues, and follow each team's and player's stats from their own pages. The frontend is React with Redux for state; the backend is a Node.js and Express API with MongoDB and Mongoose, using JWT for authentication.",
    thumbnails: [
      {
        id: 1,
        src: WAPPImages.HomePage,
        alt: "Tournament App home page",
      },
      {
        id: 2,
        src: WAPPImages.LeaguePage,
        alt: "Tournament App league page",
      },
      {
        id: 3,
        src: WAPPImages.TeamPage,
        alt: "Tournament App team page",
      },
      {
        id: 4,
        src: WAPPImages.PlayersPage,
        alt: "Tournament App players page",
      },
      {
        id: 5,
        src: WAPPImages.CreateTeam,
        alt: "Tournament App create team form",
      },
      {
        id: 6,
        src: WAPPImages.CreatePlayer,
        alt: "Tournament App create player form",
      },
      {
        id: 7,
        src: WAPPImages.RegisterPage,
        alt: "Tournament App register page",
      },
      {
        id: 8,
        src: WAPPImages.Nav,
        alt: "Tournament App navigation",
      },
    ],
  },
  {
    id: 4,
    thumbnail: {
      src: poofApp.Logo,
      alt: "poofApp logo",
    },
    title: "poofApp",
    subtitle: "Social sticky notes app",
    description:
      "A mobile social app built around sticky notes: users post notes, react to others' notes, get notified about activity and keep old notes in an archive. The app is built in React Native with Zustand for state, and talks to a REST API written in Go.",
    thumbnails: [
      {
        id: 1,
        src: poofApp.homePage,
        alt: "poofApp home page",
      },
      {
        id: 2,
        src: poofApp.notificationsPage,
        alt: "poofApp notifications page",
      },
      {
        id: 3,
        src: poofApp.archivesPage,
        alt: "poofApp archives page",
      },
      {
        id: 4,
        src: poofApp.ProfilePage,
        alt: "poofApp profile page",
      },
    ],
  },
  {
    id: 7,
    thumbnail: {
      src: "",
      alt: "CheckIN-App",
    },
    title: "CheckIN-App",
    subtitle: "Laravel 11, Inertia.js and React",
    description:
      "A full-stack app built with Laravel 11 on the backend and React on the frontend, connected through Inertia.js so pages get their data straight from Laravel controllers without a separate API. Most of the work went into the backend: user management and the relational data model in MySQL.",
    thumbnails: [],
    repo: "https://github.com/adocoder12/CheckIN-App",
  },
  {
    id: 3,
    thumbnail: {
      src: "",
      alt: "React chat app",
    },
    title: "Web app chat",
    subtitle: "Real-time chat with React, MongoDB and Socket.IO",
    description:
      "A chat app where users sign up, join rooms and exchange messages in real time. Socket.IO pushes new messages to everyone in the room the moment they're sent, without refreshing, and MongoDB stores users, profiles and message history. The React frontend covers login, registration and the chat view.",
    thumbnails: [
      {
        id: 1,
        src: ChatReactImages.Chat_page,
        alt: "Web app chat main chat page",
      },
      {
        id: 2,
        src: ChatReactImages.login_page,
        alt: "Web app chat login page",
      },
      {
        id: 3,
        src: ChatReactImages.Register_page,
        alt: "Web app chat registration page",
      },
    ],
    repo: "https://github.com/adocoder12/Chat_react",
  },
  {
    id: 8,
    thumbnail: {
      src: "",
      alt: "jonia.fi",
    },
    title: "jonia.fi",
    subtitle: "custom WordPress theme",
    description:
      "My first solo client project: a custom website built over the summer on WordPress with a Roots Sage theme written from scratch. I handled the whole job, from building the theme and filling in the page content to setting up hosting and the configuration the site needed to go live. Live at jonia.fi.",
    thumbnails: [],
    live: "https://jonia.fi",
  },
];
