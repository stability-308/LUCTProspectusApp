export const faculties = [
  {
    id: "f1",
    name: "FICT",
    description: "Faculty of Information and Communication Technology",
    image: require("../assets/images/IT.png"),

    courses: [
      {
        id: "c1",
        name: "Computer Science / Information Technology",
        description:
          "Information technology (IT) involves using computer systems, software, networks, and hardware to create, process, store, secure, and exchange electronic data.",
        image: require("../assets/images/science.jpg"),
        video: require("../assets/videos/comp_science.mp4"),
        minimumRequirement: "Mathematics (C), English (C), Physics (C)",
      },

      {
        id: "c2",
        name: "Information Systems",
        description:
          "Information systems (IS) are integrated sets of hardware, software, data, people, and processes that collect, process, store, and distribute information for decision making.",
        image: require("../assets/images/information.png"),
        video: require("../assets/videos/info_systems.mp4"),
        minimumRequirement:
          "Mathematics (C), English (C), Business Studies (C)",
      },

      {
        id: "c3",
        name: "Software Engineering",
        description:
          "Software engineering is the systematic engineering approach to the design, development, testing, and maintenance of software systems.",
        image: require("../assets/images/software.png"),
        video: require("../assets/videos/software.mp4"),
        minimumRequirement: "Mathematics (B), English (C), Physics (C)",
      },

      {
        id: "c4",
        name: "Network Engineering",
        description:
          "Network engineers design and manage LANs, WANs and communication systems ensuring secure and efficient data communication.",
        image: require("../assets/images/network.jpg"),
        video: require("../assets/videos/network.mp4"),
        minimumRequirement: "Mathematics (C), English (C), Physics (C)",
      },

      {
        id: "c5",
        name: "Business Information Technology",
        description:
          "Business Information Technology combines computer science with business management to develop and manage IT solutions for organizations.",
        image: require("../assets/images/data.jpg"),
        video: require("../assets/videos/data_science.mp4"),
        minimumRequirement: "Mathematics (B), English (C), Statistics (C)",
      },
    ],
  },

  {
    id: "f2",
    name: "FABE",
    description: "Faculty of Accounting, Business and Economics",
    image: require("../assets/images/fabe.png"),

    courses: [
      {
        id: "c6",
        name: "Business Administration",
        description: "Core business principles and management.",
        image: require("../assets/images/ba.jpg"),
        video: require("../assets/videos/ba.mp4"),
        minimumRequirement:
          "Mathematics (C), English (C), Business Studies (C)",
      },

      {
        id: "c7",
        name: "Accounting",
        description: "Financial accounting and reporting.",
        image: require("../assets/images/acc.jpg"),
        video: require("../assets/videos/ac.mp4"),
        minimumRequirement: "Mathematics (B), English (C), Accounting (C)",
      },

      {
        id: "c8",
        name: "Economics",
        description: "Micro and macroeconomics theory and applications.",
        image: require("../assets/images/econo.jpg"),
        video: require("../assets/videos/eco.mp4"),
        minimumRequirement: "Mathematics (C), English (C), Economics (C)",
      },

      {
        id: "c9",
        name: "Finance",
        description: "Corporate finance and investment management.",
        image: require("../assets/images/finance.jpg"),
        video: require("../assets/videos/finance.mp4"),
        minimumRequirement: "Mathematics (B), English (C), Accounting (C)",
      },

      {
        id: "c10",
        name: "Marketing",
        description: "Market research and strategic marketing.",
        image: require("../assets/images/mark.jpg"),
        video: require("../assets/videos/mark.mp4"),
        minimumRequirement:
          "Mathematics (C), English (C), Business Studies (C)",
      },
    ],
  },

  {
    id: "f3",
    name: "Faculty of Broadcasting",
    description: "Faculty of Broadcasting and Journalism",
    image: require("../assets/images/CASTING.png"),

    courses: [
      {
        id: "c11",
        name: "Radio and TV",
        description: "Broadcast production and media presentation.",
        image: require("../assets/images/tv.jpg"),
        video: require("../assets/videos/radio.mp4"),
        minimumRequirement: "English (B), Media Studies (C), Arts (C)",
      },

      {
        id: "c12",
        name: "Journalism",
        description: "News writing and reporting.",
        image: require("../assets/images/journa.jpg"),
        video: require("../assets/videos/jo.mp4"),
        minimumRequirement: "English (B), Media Studies (C), Literature (C)",
      },

      {
        id: "c13",
        name: "Digital Media",
        description: "Online content creation and social media management.",
        image: require("../assets/images/digi.png"),
        video: require("../assets/videos/digi.mp4"),
        minimumRequirement: "English (C), Media Studies (C), IT (C)",
      },

      {
        id: "c14",
        name: "Film Production",
        description: "Filmmaking and video production techniques.",
        image: require("../assets/images/film.jpg"),
        video: require("../assets/videos/film.mp4"),
        minimumRequirement: "English (C), Arts (C), Media Studies (C)",
      },

      {
        id: "c15",
        name: "Public Relations",
        description: "Corporate communications and media relations.",
        image: require("../assets/images/public.jpg"),
        video: require("../assets/videos/public.mp4"),
        minimumRequirement:
          "English (B), Media Studies (C), Business Studies (C)",
      },
    ],
  },

  {
    id: "f4",
    name: "FCTH",
    description: "Faculty of Creative Technology and Heritage",
    image: require("../assets/images/FCTH.png"),

    courses: [
      {
        id: "c16",
        name: "Fashion Design",
        description: "Creative design and garment production.",
        image: require("../assets/images/fashion.jpg"),
        video: require("../assets/videos/fashion.mp4"),
        minimumRequirement: "Arts (C), English (C), Design (C)",
      },

      {
        id: "c17",
        name: "Graphic Design",
        description: "Visual communication and digital design.",
        image: require("../assets/images/graphic.jpg"),
        video: require("../assets/videos/graphic.mp4"),
        minimumRequirement: "Arts (C), English (C), IT (C)",
      },

      {
        id: "c18",
        name: "Heritage Studies",
        description: "Cultural heritage preservation and management.",
        image: require("../assets/images/heritage.jpg"),
        video: require("../assets/videos/heritage.mp4"),
        minimumRequirement: "History (C), English (D), Arts (C)",
      },

      {
        id: "c19",
        name: "Animation",
        description: "2D and 3D animation techniques.",
        image: require("../assets/images/animation.jpg"),
        video: require("../assets/videos/animation.mp4"),
        minimumRequirement: "Arts (B), English (C), IT (C)",
      },

      {
        id: "c20",
        name: "Events Management",
        description: "Organising and planning for small and big events.",
        image: require("../assets/images/events.jpg"),
        video: require("../assets/videos/events.mp4"),
        minimumRequirement: "Arts (C), Mathematics (C), Design (C)",
      },
    ],
  },

  {
    id: "f6",
    name: "FBMG",
    description:
      "Faculty focusing on business, entrepreneurship and global management.",
    image: require("../assets/images/1.png"),

    courses: [
      {
        id: "c26",
        name: "Entrepreneurship",
        description:
          "Business start-ups, innovation and enterprise development.",
        image: require("../assets/images/enter.jpg"),
        video: require("../assets/videos/animation.mp4"),
        minimumRequirement:
          "English (C), Mathematics (C), Business Studies (C)",
      },

      {
        id: "c27",
        name: "Human Resource Management",
        description:
          "Managing employees, recruitment, training and workplace relations.",
        image: require("../assets/images/human.jpg"),
        video: require("../assets/videos/animation.mp4"),
        minimumRequirement:
          "English (C), Mathematics (C), Business Studies (C)",
      },

      {
        id: "c28",
        name: "International Business",
        description:
          "Global trade, international markets and cross-border business strategy.",
        image: require("../assets/images/inter.png"),
        video: require("../assets/videos/events.mp4"),
        minimumRequirement:
          "English (C), Mathematics (C), Geography or Economics (C)",
      },

      {
        id: "c30",
        name: "Business Management",
        description:
          "Business operations, leadership and strategic management.",
        image: require("../assets/images/business.jpg"),
        video: require("../assets/videos/events.mp4"),
        minimumRequirement: "English (C), Mathematics (C)",
      },

      {
        id: "c31",
        name: "Retail Management",
        description:
          "Store operations, merchandising and retail business strategy.",
        image: require("../assets/images/retail.png"),
        video: require("../assets/videos/events.mp4"),
        minimumRequirement: "English (C), Mathematics (C)",
      },
    ],
  },
];