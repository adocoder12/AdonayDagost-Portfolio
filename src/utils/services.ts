import WAPPImages from "../assets/img/WAPP";
import MinaTeenImages from "../assets/img/minaTeen";
import ChatReactImages from "../assets/img/ChatReact";
import PoofAppImages from "../assets/img/PoofAapp";

export const services = [
  {
    id: 1,
    thumbnail: {
      src: WAPPImages.TeamsPage,
      alt: "Tournament App",
    },
    title: "Tournament App",
    subtitle: "FullStack App made with Typescript",
    description:
      "The Tournament App is a comprehensive web application developed to manage sports teams and tournaments efficiently. Built with TypeScript and modern web technologies, it provides features for team creation, match scheduling, and detailed performance tracking. The application boasts a user-friendly interface and robust backend support, making it an essential tool for sports organizations looking to streamline their operations and enhance team management. This project highlights my expertise in building scalable applications with a focus on performance and usability.",
    thumbnails: [
      {
        id: 1,
        src: WAPPImages.CreatePlayer,
        alt: "Tournament App Create Player",
      },
      {
        id: 2,
        src: WAPPImages.CreateTeam,
        alt: "Tournament App Create Team",
      },
      {
        id: 3,
        src: WAPPImages.HomePage,
        alt: "Tournament App Home Page",
      },
      {
        id: 4,
        src: WAPPImages.LeaguePage,
        alt: "Tournament App League Page",
      },
      {
        id: 5,
        src: WAPPImages.PlayersPage,
        alt: "Tournament App Players Page",
      },
      {
        id: 6,
        src: WAPPImages.TeamPage,
        alt: "Tournament App Team Page",
      },
      {
        id: 7,
        src: WAPPImages.RegisterPage,
        alt: "Tournament App Register Page",
      },
      {
        id: 8,
        src: WAPPImages.Nav,
        alt: "Tournament App Navigation",
      },
    ],
  },
  {
    id: 2,
    thumbnail: {
      src: MinaTeenImages.homePageDesktop,
      alt: "MinaTeenTmi Web Page",
    },
    title: "MinaTeenTmi",
    subtitle: "Renovation company",
    description:
      "The MinaTeenTmi website was created for a renovation company aiming to enhance their online presence. It features a professional and engaging design that highlights their services, showcases their past projects, and provides clear contact information. The site is designed to be responsive, ensuring an optimal viewing experience across a variety of devices. This project emphasizes my skills in creating visually appealing and functional websites tailored to meet specific business needs and improve client engagement.",
    thumbnails: [
      {
        id: 1,
        src: MinaTeenImages.homePageDesktop,
        alt: "MinaTeenTmi Web Page Desktop View",
      },

      {
        id: 2,
        src: MinaTeenImages.loadingState,
        alt: "MinaTeenTmi Web Page Loading State",
      },
      {
        id: 3,
        src: MinaTeenImages.ContactPAge,
        alt: "MinaTeenTmi Contact Page",
      },
      {
        id: 4,
        src: MinaTeenImages.Service,
        alt: "MinaTeenTmi Services Page",
      },
      {
        id: 5,
        src: MinaTeenImages.SinglePAge,
        alt: "MinaTeenTmi Single Page View",
      },
    ],
  },
  {
    id: 3,
    thumbnail: {
      src: ChatReactImages.Chat_page,
      alt: "Web app chat",
    },
    title: "Web app chat",
    subtitle: "Chat app with React, MongoDB, and Socket.IO",
    description:
      "The Web App Chat project is a dynamic real-time chat application developed using React, MongoDB, and Socket.IO. It allows users to join chat rooms, send and receive messages instantly, and manage their profiles. Designed for real-time communication, the app supports a high volume of interactions with minimal latency, ensuring a smooth user experience. This project showcases my capabilities in building interactive and responsive web applications with a focus on real-time data handling and user engagement.",
    thumbnails: [
      {
        id: 1,
        src: ChatReactImages.login_page,
        alt: "Web app chat Login Page",
      },
      {
        id: 2,
        src: ChatReactImages.Register_page,
        alt: "Web app chat Registration Page",
      },
      {
        id: 3,
        src: ChatReactImages.Chat_page,
        alt: "Web app chat Main Chat Page",
      },
    ],
  },
  {
    id: 4,
    thumbnail: {
      src: "", // Add a default thumbnail source here
      alt: "poofApp",
    },
    title: "poofApp",
    subtitle: "Social Media Sticky Notes App",
    description:
      "poofApp is a unique social media platform centered around digital sticky notes, developed using React Native for a seamless mobile experience. Powered by a high-performance Golang backend and managed with Zustand for efficient state handling, the app allows users to post, share, and interact with notes in a real-time environment. This project demonstrates my ability to integrate modern mobile frameworks with robust backend systems to create engaging, performance-oriented social experiences.",
    thumbnails: [
      {
        id: 1,
        src: PoofAppImages.homePage,
        alt: "poofApp Home Page",
      },
      {
        id: 2,
        src: PoofAppImages.archivesPage,
        alt: "poofApp Archives Page",
      },
      {
        id: 3,
        src: PoofAppImages.notificationsPage,
        alt: "poofApp Notifications Page",
      },
      {
        id: 5,
        src: PoofAppImages.ProfilePage,
        alt: "poofApp Profile Page",
      },
    ],
  },
];
