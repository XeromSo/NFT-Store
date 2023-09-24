import {
  BiCog,
  BiDetail,
  BiHive,
  BiMessageSquareError,
  BiNotification,
  BiSearchAlt,
  BiUser,
  BiWallet,
  BiX,
} from "react-icons/bi";
import {
  MdAdd,
  MdAddCircle,
  MdAddCircleOutline,
  MdHome,
  MdNotifications,
  MdNotificationsActive,
  MdNotificationsNone,
  MdOutlineSettings,
  MdPerson,
  MdPersonOutline,
  MdSettings,
} from "react-icons/md";

export const defaults = {
  PREFERENCE: {
    general: {
      navMode: "left",
      navModePhone: "system",
      highPerformance: "system",
      hideMyCollection: false,
      dashboardInitialRoute: "/dashboard/discover",
    },
    appearance: {
      prefersTheme: "system",
      theme: "dark",
      mainColor: 230,
      colorIntensity: 25,
      colorBrightness: 3,

      secondaryColor: 167,
      secondaryColorIntensity: 47,
      secondaryColorBrightness: 4,

      fontSize: 1,
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      fontWeight: 500,
      letterSpacing: "0.035", //em
    },
    sound: {
      default: "",
      success: "",
      error: "",
      warning: "",
      info: "",
    },
  },
  _DEFAULT: {},
};

export const brightnessLevels = {
  light: {
    1: 64,
    2: 62,
    3: 60,
    4: 58,
  },
  dark: {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
  },
};
export const brightnessLevelsSecondary = {
  light: {
    1: 45,
    2: 50,
    3: 55,
    4: 60,
  },
  dark: {
    1: 45,
    2: 50,
    3: 55,
    4: 60,
  },
};
// export const SOCKET_URL = "ws://192.168.2.172:2500";
export const SOCKET_URL = "ws://194.5.212.206:2500";
// export const SOCKET_URL = "ws://192.168.1.165:2500";

{
  /* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlbnRheCIsInBybXMiOlsiYWxsdGVyIl0sImlhdCI6MTY1OTMzNTQwMiwiZXhwIjoxNjU5MzM5MDAyfQ.QA3uVHORdKjOdJxPDZJ1Yk5v25S1BEjePkhwhLn_HCo
*/
}

export const mainNavRoutes = [
  {
    path: "/",
    name: "Home",
    icon: <MdHome />,
  },
  {
    path: "/dashboard/home",
    name: "Dashboard",
    icon: <MdHome />,
  },
  {
    path: "/auth/login",
    name: "Login",
    icon: <MdHome />,
  },
];
export const profileNavs = [
  {
    title: "Discover",
    icon: <BiSearchAlt />,
    active: <BiSearchAlt style={{ strokeWidth: 1 }} />,
    path: "discover",
    to: "discover",
  },
  {
    title: "Profile",
    icon: <MdPersonOutline />,
    active: <MdPerson />,
    path: "profile",
    to: "profile/overview",
  },
  {
    title: "Create",
    icon: <MdAdd />,
    active: <MdAddCircle />,
    path: "create",
    to: "create",
  },
  {
    title: "Activities",
    // icon: <BiMessageSquareError />,
    icon: <MdNotificationsNone />,
    active: <MdNotificationsActive />,
    path: "activities",
    to: "activities",
  },
  // {
  //   title: "My Collections",
  //   icon: <BiCollection />,
  //   path: "collections",
  //   to: "collections",
  // },
  // {
  //   title: "Activities",
  //   icon: <BiDetail />, // BiClipboard
  //   path: "activity",
  //   to: "profile/activity",
  // },
  // {
  //   title: "My Favorites",
  //   icon: <BiHeart />,
  //   path: "favorites",
  //   to: "favorites",
  // },
  {
    title: "Settings",
    icon: <MdOutlineSettings />,
    active: <MdSettings />,
    path: "settings",
    to: "settings",
  },
];
export const settingNavs = [
  {
    title: "Account",
    icon: <BiUser />,
    active: <BiUser style={{ strokeWidth: 1 }} />,
    path: "account",
    to: "account",
    text: "Manage and update your account information and settings, verify your account and change your password. ",
  },
  {
    title: "Wallets",
    icon: <BiWallet />,
    active: <BiWallet style={{ strokeWidth: 1 }} />,
    path: "wallets",
    to: "wallets",
    text: "A Multi-wallet profile supports up to 20 wallets connected to any blockchain available on the platform",
  },
  {
    title: "Preferences",
    icon: <BiNotification />,
    active: <BiNotification style={{ strokeWidth: 1 }} />,
    path: "preferences",
    to: "preferences/general",
    text: "Customize your experience by changing your preferences. You can change your theme, language, and more.",
  },
  {
    title: "Notifications",
    icon: <MdNotificationsNone />,
    active: <MdNotifications style={{ strokeWidth: 1 }} />,
    path: "notifications",
    to: "notifications",
    text: "Manage your notifications and email preferences. You can also set up your notifications to be sent to your phone.",
  },
];
export const FAKE_COMMENTS = [
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "This is a comment",
    date: "1h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "Great works!",
    date: "8h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "This is a comment",
    date: "1h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "Great works!",
    date: "8h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "This is a comment",
    date: "1h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "Great works!",
    date: "8h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "This is a comment",
    date: "1h",
  },
  {
    forProduct: "Hamlet - The Musical",
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",

    comment: "Great works!",
    date: "8h",
  },
];

export const FAKE_POPULAR_SEARCH = [
  "Hamlet - The Musical",
  "Trimphant",
  "Doodles",
  "John Doe",
  "Var",
  "Yokh",
  "Onigiri Pepes",
  "Naslooo",
  "Moonbirds",
  "Flame dress",
  "Tycoons Club",
  "Forging SZN",
  "Game",
  "Vahab",
  "Shappor",
  "Moon",
];
export const FAKE_BIDS = [
  {
    id: 1,
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    bidValue: "0.1 ETH",
    bidTime: "1 hour ago",
  },
  {
    id: 2,
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    bidValue: "0.3 ETH",
    bidTime: "2 days ago",
  },
  {
    id: 3,
    name: "Asgar",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    bidValue: "0.2 ETH",
    bidTime: "1 week ago",
  },
];
export const FAKE_NFTS = [
  {
    id: 1,
    title: "Hamlet - The Musical",
    image:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1RUzRYSG0zbjF4UVdBcW9MWVZ6ZWhzdzNoQ1N3aXY5R0RreVBzNWE4aW0ySi85Mzk0LnBuZw==",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    creator: "Asgar",
    creatorId: 1,
    currentBid: "4.89",
    likes: "164",
    color: "primary",
    collection: "Onigiri Pepes",
    collectionId: 2,
    collectionAvatar:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzL2MzYTMxMmM1MzUxNDY0MmU4MDQxYzY1ZTEwYjQwYTUyLmdpZg==",

    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x0c1...8225",
        type: "transfer",
        value: {
          toAddress: "0xa95...010c",
        },
        date: "11:30 PM",
      },
      {
        address: "8x1c1...2184",
        type: "unlist",
        value: {},
        date: "11:30 PM",
      },
      {
        address: "0x08b...9023",
        type: "purchase",
        value: {
          price: "7.5 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x846...f411",
        type: "mint",
        value: {},
        date: "4:16 AM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 2,
    title: "Trimphant - Shappor",
    image:
      "https://lh3.googleusercontent.com/WN9KMF7UXG2AgccSYvMUp8AuMmpdo5rCpp_BIDw04deALj1Mjoc9WFHQqYDTJPGdUQw1x5VgotoV888bhDL3h1QkxK8_iQ7tik56Dg=s400",
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Asgar",
    currentBid: "8.04",
    creatorId: 2,
    likes: "3.2k",
    color: "secondary",
    collection: "Onigiri Pepes",
    collectionId: 4,
    collectionAvatar:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzYxYTQwYTFiZDcyOTJhZjAxZWIzMWU1NmQxZjM4MjM1LnBuZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x0c1...8225",
        type: "transfer",
        value: {
          toAddress: "0xa95...010c",
        },
        date: "11:30 PM",
      },
      {
        address: "8x1c1...2184",
        type: "unlist",
        value: {},
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 3,
    title: "Living vase 01 by - Vahab",
    image:
      "https://lh3.googleusercontent.com/rvCl-kOHHMe7eh1RKDjukLMWMIrwTIUuzyPQOkxqPT1Fe27cSY-kaa7k1dKAtT1wNFwmJYhbKUeGx-zDTjGMKA7dWwaUoNdJKcckUro=s400",
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Asgar",
    creatorId: 4,
    currentBid: "0.42",
    likes: "894",
    color: "error",
    collection: "Onigiri Pepes",
    collectionId: 1,
    collectionAvatar:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzL2YzYjExZTM2YmUxNGE1ZDMxYzc1YjE5ZDAzOTk2ZmVkLmdpZg==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x0c1...8225",
        type: "transfer",
        value: {
          toAddress: "0xa95...010c",
        },
        date: "11:30 PM",
      },
      {
        address: "8x1c1...2184",
        type: "unlist",
        value: {},
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 4,
    title: "Flame dress - Asgar",
    creatorId: 3,
    image:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly93d3cud29vZGllc25mdC5jb20vYXBpL2NvbGxlY3RpYmxlL2ltYWdlLTM1NzU=",
    avatar:
      "https://lh3.googleusercontent.com/cgFAvnBcqoDZCIPUgRdYGQGdPR5HFBHgXOfKsc4-r-1Cpw9a1GEnKELv48wTF5BInT6J5Fyvu-J0ZDEIjb57YaWiwsIhh7k095sxQfE=s100-k",
    creator: "Asgar",
    currentBid: "6.00",
    likes: "1.5k",

    color: "warning",
    collection: "Onigiri Pepes",
    collectionId: 6,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x0c1...8225",
        type: "transfer",
        value: {
          toAddress: "0xa95...010c",
        },
        date: "11:30 PM",
      },
      {
        address: "8x1c1...2184",
        type: "unlist",
        value: {},
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 5,
    title: "Pixelverse Poops",
    creatorId: 1,
    image:
      "https://lh3.googleusercontent.com/WN9KMF7UXG2AgccSYvMUp8AuMmpdo5rCpp_BIDw04deALj1Mjoc9WFHQqYDTJPGdUQw1x5VgotoV888bhDL3h1QkxK8_iQ7tik56Dg=s400",
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Asgar",
    currentBid: "8.04",
    likes: "3.2k",
    color: "secondary",
    collection: "Onigiri Pepes",
    collectionId: 5,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
      {
        address: "0x0c1...8225",
        type: "transfer",
        value: {
          toAddress: "0xa95...010c",
        },
        date: "11:30 PM",
      },
      {
        address: "8x1c1...2184",
        type: "unlist",
        value: {},
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 6,
    title: "Lucky zeros | Purebase",
    creatorId: 3,
    image:
      "https://lh3.googleusercontent.com/-wJWKYHW7h805VXHV5AO0T_Jl81bngOG7zdeuquwfhNHrAjhZwOUPwzZ4Mh-fHbsie0RWpL0tzHuZVFHvVutpkH4gvZtI_KJ_myrcw=h400",
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Asgar",
    currentBid: "0.42",
    likes: "894",
    color: "error",
    collection: "Onigiri Pepes",
    collectionId: 4,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 7,
    title: "Dynamic slice by pxiq",
    image:
      "https://i.seadn.io/gcs/files/f11f825a6d964f0676eb40239e3abe8f.png?auto=format&dpr=1&w=500",
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Asgar",
    creatorId: 5,
    currentBid: "8.04",
    likes: "3.2k",
    color: "secondary",
    collection: "Onigiri Pepes",
    collectionId: 7,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 8,
    title: "Asagi - WAKA",
    image:
      "https://i.seadn.io/gcs/files/0b7225447634639843b32c04437278c2.png?auto=format&dpr=1&w=500",
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Asgar",
    creatorId: 8,
    currentBid: "0.42",
    likes: "894",
    color: "error",
    collection: "Onigiri Pepes",
    collectionId: 8,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 9,
    title: "Genisis by DCA",
    image:
      "https://lh3.googleusercontent.com/LHIIYA2_Vd_VJFrXRI5RBtYoiVUoCsb8WCUTsM2N2N9i1n3BpQ4kBi7wUYswzrouvX9rZ39cf3zfV3VoXX_6sLiMcCLhv9bW4c-b=h400",
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Asgar",
    creatorId: 5,
    currentBid: "8.04",
    likes: "3.2k",
    color: "secondary",
    collection: "Onigiri Pepes",
    collectionId: 7,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 11,
    title: "RENGA #8059",
    image:
      "https://img.seadn.io/files/bb718ae24493842c8cef27bcf46786c7.jpg?fit=max&w=600",
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Asgar",
    creatorId: 9,
    currentBid: "0.62",
    likes: "1262",
    color: "secondary",
    collection: "RENGA",
    collectionId: 2,
    collectionAvatar:
      "https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?w=500&auto=format",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "A handcrafted collection of 10,000 characters developed by artist DirtyRobot. Each with their own identity to be discovered within the wider stories of RENGA. In its purest form, RENGA is the art of storytelling. Visit our website for more details.",
  },
  {
    id: 12,
    title: "Rig #2006",
    image:
      "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",
    avatar:
      "https://i.seadn.io/gae/fRQ56w4Ec63znwSqC2P_cAlJlhiMsknUsMuBKl8mVBwzTO4ZTOvr-xKehuRG43Lr74gg4pexbbaFQS6YULw9PHoywSl93TorJrOG?w=500&auto=format",
    creator: "Asgar",
    creatorId: 7,
    currentBid: "0.42",
    likes: "894",
    color: "error",
    collection: "Tableland Rigs",
    collectionId: 2,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
  {
    id: 10,
    title: "Meta bounty hunter",
    image:
      "https://i.seadn.io/gcs/files/1a904b87efe4a46109077312c1f8f71f.png?auto=format&dpr=1&w=500",
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Asgar",
    creatorId: 9,
    currentBid: "0.42",
    likes: "894",
    color: "error",
    collection: "Onigiri Pepes",
    collectionId: 2,
    collectionAvatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    price: "9.8 ETH",
    properties: [
      {
        name: "Background",
        value: "Purple",
      },
      {
        name: "Eyes",
        value: "Blue",
      },
      {
        name: "Mouth",
        value: "Smile",
      },
      {
        name: "Mouth",
        value: "Cigar",
      },
      {
        name: "Wings",
        value: "Demon",
      },
    ],
    history: [
      {
        address: "0xa95...010c",
        type: "listed",
        value: {
          price: "14.95 ETH",
        },
        date: "11:30 PM",
      },
    ],
    description:
      "Fermented Fruit is a generative art series designed to live on the Ethereum blockchain and to be rendered in real-time by the browser. Just as food is transformed by microorganisms during the process of fermentation, the substrate of the HTML canvas is broken up into parts and transformed by cellular patterns. The project features the simulated lifeforms of cellular automata that evolve and shape-shift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition.",
  },
];
export const FAKE_STORIES = [
  {
    id: 1,
    name: "ASgar John Doe",
    avatar:
      "https://p4.wallpaperbetter.com/wallpaper/178/456/43/nature-painting-mountain-landscape-painting-wallpaper-preview.jpg",
    seen: true,
    verified: true,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe sdasd",
    avatar: "https://miro.medium.com/max/1000/1*2OLWtgu-WqcvaukYwIGpxw.png",
    seen: false,
    verified: true,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/nft-1-1614978591.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
    seen: true,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe sdasd",
    avatar:
      "https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp",
    seen: false,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://static.ftx.com/nfts/495091b4-dfa3-4670-be7b-f82a3a33cf5f.jpeg",
    seen: true,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe sdasd",
    avatar:
      "https://assets.website-files.com/612547df21af1c0b4405ee24/614a1e4b739628c225f37394_NFTTECH.png",
    seen: false,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://media.raritysniper.com/collections/mutant-ape-yacht-club.webp",
    seen: true,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe sdasd",
    avatar:
      "https://i.kinja-img.com/gawker-media/image/upload/q_75,w_410,h_308/ccf6dcaf4337023aa53b42417f738ba6.JPG",
    seen: false,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://assets-global.website-files.com/6171adb6a942ed69f5e6b5ee/629dd5129f20eeb121d90735_Anon_Chibi_15._-_Phunky_NFT_400x400.png",
    seen: true,
    verified: false,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://queue-it.com/media/kn1k403x/nft-lauch.jpg",
    seen: true,
    verified: true,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 1,
    name: "John Doe asd",
    avatar:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i2jXnNuzyxik/v2/1200x-1.jpg",
    seen: true,
    verified: true,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    avatar:
      "https://pbs.twimg.com/profile_images/1476846477062381588/IsSgqGEW_400x400.jpg",
    seen: true,
    verified: true,
    media: [
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "3",
      },
      {
        type: "image",
        url: "https://i.seadn.io/gae/lbmu_1SqL-izpOTA04EXVyhEtuJhVX1my4h5_mWAB6NbfYSR8WEz6oH6IMnbQs9_nSdfyJ8v93rl0ji7z2LaFqgGmhrMqsHkL6qmK8o?w=500&auto=format",

        // title: "Fermented Fruit",
        duration: "5",
      },
    ],
  },
];
export const FAKE_COLLECTION = [
  {
    id: 1,
    items: 155,
    owners: 84,
    totalVolume: "24 ETH",
    userId: 1,
    floorPrice: "2 ETH",
    cover:
      "https://i.seadn.io/gcs/files/ea5e8a39dc93da9cd13abdd9fb328f75.png?auto=format&dpr=1&h=300",
    title: "Digital Tycoons Club (Tykes)",
    creator: "ONI-GIRI",
    likes: "1.2k",
    media: [
      "https://lh3.googleusercontent.com/qNnQM8mDXxGvec2jwkxXAGlN1oWIpPovJSgmaNlAHn8m20jApNHe4hyLlM7pCZuEADXkcoDuMpJM3xiyI1W6zYLY2OshcjxkjoguVw=s400",
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
      "https://lh3.googleusercontent.com/GgWQKyhT2dEbrPpRTTd7HSUMQh8b0MbPkl8qmBcJQZ_Gh4tgxBIxETLaHcJzwUT1wS3Wq6wQ50mRhm2cfpvPWlmgZIGVzNYyNYxLLg=s400",
      "https://lh3.googleusercontent.com/q9TGDksRewtF1LsyDnSZIqOvPxWwxYktJqw_MwR8cCCSwD2DaK5Txnr9B-zq8EFfQB4qDWucXVMeL_t8mhtqmZJFZMp-CMf4Z-w9yw=s400",
    ],
    ownerIds: [1, 2],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
  },
  {
    id: 2,
    items: 155,
    owners: 84,
    userId: 2,
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    cover:
      "https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600",
    title: "RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
    creator: "Shellz Inc.",
    likes: "4.2k",
    ownerIds: [3, 8],
    media: [
      "https://lh3.googleusercontent.com/jqpJmZP3QXHIWD4bltbowOY2JPoEjHl7YXe-AaNMcqiRoitKuCPkILmwWeRzdlIv3Bl1AQPyHo5IMPtlV1cC8yGk14ILC2RDIORL=s400",
      "https://lh3.googleusercontent.com/g8Ib_xEyEPbVG_ixRuoDMsAA2EMTLHUq0ockLcaKdRY45cKKVNaS8QBfl9vzkzZRp4z7JGIKIcNdHw6O886Wjb2m6SdJn3Jye5RG=s400",
      "https://lh3.googleusercontent.com/OXOIMG1HR_SHfNp2i05Ri5_rTCFT1asMZhTgKfTRTugv_ICPgs_trsoOSB79-t1qfLDaBQwEMl8nkpq5JJhVnhiXP2h4-kN6r8qMqw=s400",
      "https://lh3.googleusercontent.com/_2VLOJMZHdGP4mjK8Ljwpl2ZCbgwz5ufwVHjHRHVef96ESYluzNu7UN99WxUa7UWuxTgSG5jXHFh3lG7zhajFglgvuCk_IEyhst9=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TckJCWjExOEhwWHF5VGRGZHpXc01IS1A3S3V3clRzS0Mxc2dVMVc5elVUeA==",
  },
  {
    id: 3,
    items: 155,
    owners: 84,
    userId: 3,
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    cover:
      "https://lh3.googleusercontent.com/ouzjfA0LotbHC92vuDph9JDeg7Z4ZFo12Pr9GJpfSAZSrnXDOubJn0eTvinwzUTPsWhnLLq5ocjcDSrpNV0_MYIjueVJrzFlE6p0=h600",
    title: "Moonbirds",
    creator: "Birds",
    likes: "846",
    ownerIds: [1, 5, 10],
    media: [
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9saXZlLS0tbWV0YWRhdGEtNWNvdnBxaWphYS11Yy5hLnJ1bi5hcHAvaW1hZ2VzLzgyMTg=",
      "https://lh3.googleusercontent.com/LqRfju6G0uBT3R1o5KdVPwp1ncL1oWGtnCA8w_xThLJFEz5yVtS4uudxXBrAtYCRTNfgxKibOZFUy3RNB6EeBYWeDAquUXd2-aBy5p4=s400",
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9saXZlLS0tbWV0YWRhdGEtNWNvdnBxaWphYS11Yy5hLnJ1bi5hcHAvaW1hZ2VzLzQxMTE=",
      "https://lh3.googleusercontent.com/s4fFarHdmiq8ECKp9hRWQUnW4NCLOri4X3MdAfJrfGdZ8_iluzVZpClaFVX0029P_tVI_GG7lb30nDzn8Lx72UBUPMz5ZZby3iK7hyw=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TZnJUV1prRXpqS1R4ZzFldU0xaVFtTW51eDN0QVZkTjduelVicWY4Q0RGaw==",
  },
  {
    id: 4,
    items: 155,
    owners: 84,
    userId: 4,
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    ownerIds: [6, 3, 2],
    cover:
      "https://i.seadn.io/gcs/files/ea5e8a39dc93da9cd13abdd9fb328f75.png?auto=format&dpr=1&h=300",

    title: "Onigiri Pepes",
    creator: "ONI-GIRI",
    likes: "1.2k",
    media: [
      "https://lh3.googleusercontent.com/qNnQM8mDXxGvec2jwkxXAGlN1oWIpPovJSgmaNlAHn8m20jApNHe4hyLlM7pCZuEADXkcoDuMpJM3xiyI1W6zYLY2OshcjxkjoguVw=s400",
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
      "https://lh3.googleusercontent.com/GgWQKyhT2dEbrPpRTTd7HSUMQh8b0MbPkl8qmBcJQZ_Gh4tgxBIxETLaHcJzwUT1wS3Wq6wQ50mRhm2cfpvPWlmgZIGVzNYyNYxLLg=s400",
      "https://lh3.googleusercontent.com/q9TGDksRewtF1LsyDnSZIqOvPxWwxYktJqw_MwR8cCCSwD2DaK5Txnr9B-zq8EFfQB4qDWucXVMeL_t8mhtqmZJFZMp-CMf4Z-w9yw=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
  },
  {
    id: 5,
    items: 155,
    owners: 84,
    ownerIds: [8, 4, 6],
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",

    userId: 6,
    cover:
      "https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600",
    title: "Doodles",
    creator: "Shellz Inc.",
    likes: "4.2k",
    media: [
      "https://lh3.googleusercontent.com/jqpJmZP3QXHIWD4bltbowOY2JPoEjHl7YXe-AaNMcqiRoitKuCPkILmwWeRzdlIv3Bl1AQPyHo5IMPtlV1cC8yGk14ILC2RDIORL=s400",
      "https://lh3.googleusercontent.com/g8Ib_xEyEPbVG_ixRuoDMsAA2EMTLHUq0ockLcaKdRY45cKKVNaS8QBfl9vzkzZRp4z7JGIKIcNdHw6O886Wjb2m6SdJn3Jye5RG=s400",
      "https://lh3.googleusercontent.com/OXOIMG1HR_SHfNp2i05Ri5_rTCFT1asMZhTgKfTRTugv_ICPgs_trsoOSB79-t1qfLDaBQwEMl8nkpq5JJhVnhiXP2h4-kN6r8qMqw=s400",
      "https://lh3.googleusercontent.com/_2VLOJMZHdGP4mjK8Ljwpl2ZCbgwz5ufwVHjHRHVef96ESYluzNu7UN99WxUa7UWuxTgSG5jXHFh3lG7zhajFglgvuCk_IEyhst9=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TckJCWjExOEhwWHF5VGRGZHpXc01IS1A3S3V3clRzS0Mxc2dVMVc5elVUeA==",
  },
  {
    id: 6,
    items: 155,
    owners: 84,
    userId: 5,
    ownerIds: [1, 5, 7, 8],
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    cover:
      "https://lh3.googleusercontent.com/ouzjfA0LotbHC92vuDph9JDeg7Z4ZFo12Pr9GJpfSAZSrnXDOubJn0eTvinwzUTPsWhnLLq5ocjcDSrpNV0_MYIjueVJrzFlE6p0=h600",

    title: "Moonbirds",
    creator: "Birds",
    likes: "846",
    media: [
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9saXZlLS0tbWV0YWRhdGEtNWNvdnBxaWphYS11Yy5hLnJ1bi5hcHAvaW1hZ2VzLzgyMTg=",
      "https://lh3.googleusercontent.com/LqRfju6G0uBT3R1o5KdVPwp1ncL1oWGtnCA8w_xThLJFEz5yVtS4uudxXBrAtYCRTNfgxKibOZFUy3RNB6EeBYWeDAquUXd2-aBy5p4=s400",
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9saXZlLS0tbWV0YWRhdGEtNWNvdnBxaWphYS11Yy5hLnJ1bi5hcHAvaW1hZ2VzLzQxMTE=",
      "https://lh3.googleusercontent.com/s4fFarHdmiq8ECKp9hRWQUnW4NCLOri4X3MdAfJrfGdZ8_iluzVZpClaFVX0029P_tVI_GG7lb30nDzn8Lx72UBUPMz5ZZby3iK7hyw=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TZnJUV1prRXpqS1R4ZzFldU0xaVFtTW51eDN0QVZkTjduelVicWY4Q0RGaw==",
  },
  {
    id: 7,
    items: 155,
    userId: 7,
    owners: 84,
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    ownerIds: [11, 8, 4],
    cover:
      "https://i.seadn.io/gcs/files/ea5e8a39dc93da9cd13abdd9fb328f75.png?auto=format&dpr=1&h=300",

    title: "Onigiri Pepes",
    creator: "ONI-GIRI",
    likes: "1.2k",
    media: [
      "https://lh3.googleusercontent.com/qNnQM8mDXxGvec2jwkxXAGlN1oWIpPovJSgmaNlAHn8m20jApNHe4hyLlM7pCZuEADXkcoDuMpJM3xiyI1W6zYLY2OshcjxkjoguVw=s400",
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
      "https://lh3.googleusercontent.com/GgWQKyhT2dEbrPpRTTd7HSUMQh8b0MbPkl8qmBcJQZ_Gh4tgxBIxETLaHcJzwUT1wS3Wq6wQ50mRhm2cfpvPWlmgZIGVzNYyNYxLLg=s400",
      "https://lh3.googleusercontent.com/q9TGDksRewtF1LsyDnSZIqOvPxWwxYktJqw_MwR8cCCSwD2DaK5Txnr9B-zq8EFfQB4qDWucXVMeL_t8mhtqmZJFZMp-CMf4Z-w9yw=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
  },
  {
    id: 8,
    items: 155,
    owners: 84,
    userId: 8,
    ownerIds: [10, 1, 2, 4],
    totalVolume: "24 ETH",
    floorPrice: "2 ETH",
    cover:
      "https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600",

    title: "Doodles",
    creator: "Shellz Inc.",
    likes: "4.2k",
    media: [
      "https://lh3.googleusercontent.com/jqpJmZP3QXHIWD4bltbowOY2JPoEjHl7YXe-AaNMcqiRoitKuCPkILmwWeRzdlIv3Bl1AQPyHo5IMPtlV1cC8yGk14ILC2RDIORL=s400",
      "https://lh3.googleusercontent.com/g8Ib_xEyEPbVG_ixRuoDMsAA2EMTLHUq0ockLcaKdRY45cKKVNaS8QBfl9vzkzZRp4z7JGIKIcNdHw6O886Wjb2m6SdJn3Jye5RG=s400",
      "https://lh3.googleusercontent.com/OXOIMG1HR_SHfNp2i05Ri5_rTCFT1asMZhTgKfTRTugv_ICPgs_trsoOSB79-t1qfLDaBQwEMl8nkpq5JJhVnhiXP2h4-kN6r8qMqw=s400",
      "https://lh3.googleusercontent.com/_2VLOJMZHdGP4mjK8Ljwpl2ZCbgwz5ufwVHjHRHVef96ESYluzNu7UN99WxUa7UWuxTgSG5jXHFh3lG7zhajFglgvuCk_IEyhst9=s400",
    ],
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TckJCWjExOEhwWHF5VGRGZHpXc01IS1A3S3V3clRzS0Mxc2dVMVc5elVUeA==",
  },
];
export const FAKE_BLOGS = [
  {
    id: 1,
    title:
      "How to use React Native, Test for loong text very very very long text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    image:
      "https://rarible.com/blog/content/images/size/w600/2022/08/6-things---Cover-1.png",
    date: "2020-10-01",
    categories: ["react", "native"],
    author: "Rarible",
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    likes: 84,
    comments: 12,
  },
  {
    id: 2,
    title: "How to use React Navigation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    image:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
    date: "2020-10-01",
    categories: ["react", "navigation"],
    author: "Rarible",
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    likes: 32,
    comments: 12,
  },
  {
    id: 3,
    title: "How to use React Native",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    image:
      "https://rarible.com/blog/content/images/size/w600/2022/08/6-things---Cover-1.png",
    date: "2020-10-01",
    categories: ["react", "native"],
    author: "Rarible",
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    likes: 64,
    comments: 12,
  },
  {
    id: 4,
    title: "How to use React Navigation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    image:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9uZnRzdG9yYWdlLmxpbmsvaXBmcy9iYWZ5YmVpZTRqbmY0YTZiMm9iNzUyZWhoZ2t1cnE3aTdvdXJsZ3phejN3ajJ3enhmZmF0anVueXlzZS8yMzUzLmpwZWc=",
    date: "2020-10-01",
    categories: ["react", "navigation"],
    author: "Rarible",
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzLzg2MDQyODU1MDM5MGUyZTYwNTIyNGE3ZDlhYjI2MDZkLmpwZw==",
    likes: 8,
    comments: 12,
  },
];

export const FAKE_HELP_CENTER = {
  gettingStarted: [
    {
      id: 1,
      title: "How do i create an Asgar account",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 2,
      title: "What crypto wallets can I use with Asgar?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 3,
      title: "What is a Non-Fungible Token  (NFT)?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 4,
      title: "What is a crypto wallet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 5,
      title: "What currencies can I use on OpenSea?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 6,
      title: "How do I purchase Ethereum (ETH)?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 7,
      title: "What are service and creator fees?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 8,
      title: "How do I search for NFTs?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 9,
      title: "How do I log out of my Asgar account or switch crypto wallets?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
  ],
  buying: [
    {
      id: 3,
      title: "Where can I check the history of an NFT?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 4,
      title: "How do I buy fixed-price NFTs?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 5,
      title: "How do I make an offer on NFTs?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 6,
      title: "What's WETH? How do I get it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 7,
      title: "What is a collection offer?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 8,
      title: "How do I buy NFTs with a credit or debit card?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 9,
      title: "How do I add funds with a credit or debit card?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 10,
      title: "How do I purchase NFTs on Polygon?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 11,
      title: "What does “Item has a pending transaction” mean?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
  ],
  selling: [
    {
      id: 3,
      title: "How can i sell",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 4,
      title: "How search to sell",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
  ],
  creating: [
    {
      id: 3,
      title: "How can i create",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
    {
      id: 4,
      title: "How search to create",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    },
  ],
};

export const FAKE_USERS = [
  {
    creator: "John Doe",
    balance: "214.2",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    id: 1,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [1, 3, 5],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },

  {
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Vahab",
    balance: "160.0",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 2,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [2, 4],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100-k",
    creator: "Asgar",
    balance: "214.2",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 3,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [6, 7, 1],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s100-k",
    creator: "Vahab",
    balance: "160.0",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 4,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [5, 1, 2],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100-k",
    creator: "Bijhan",
    balance: "48.65",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 5,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [8, 2, 3],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1hRjRFeEc2TXNzcFRHVG1FWVR2aHg3OWJGM1pjYVBzbTVEc1pSa3lQdDdjYQ==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 6,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [7, 1],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1TWnZoQkFrZGhCTWV3RmVTR0NTV214Q3JZZzU3dUN5aEZlUmo4c3NuTDRYeQ==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 7,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [1, 3, 5],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_preview/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1YYnlaaGVDbzZOdm5nYnNSZGQ1SDhaVEJSenF1VWE3M05LOXNWRjZQaFN5TA==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 8,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [8, 2, 4],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_preview/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1OcmVYd3FQNENlSlBGbnR0ZkhraDhZcDR1ZzRGZzRROVdaOWd4UVdHV0ZtRw==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 9,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [3, 1, 5],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_preview/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1WSnFqZFp4UENUQWpwSFRWTDhTSFZHV01yUmVNREFkNUxOYTFwcldHeVpjWQ==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 10,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [7],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
  {
    avatar:
      "https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1ObzN6bjJudGM0Q3U2WjF0MlV3QTNzV3ZvZEdNZDRvOXA1RkJpWGdTZDNKRA==",
    creator: "Shappor",

    balance: "82.79",
    cover: "https://cdn.wallpapersafari.com/8/19/8Fthys.jpg",
    id: 11,
    followers: 100,
    following: 100,
    posts: 100,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet mauris, eget aliquet nunc nisl sit amet mauris.",
    collections: [2, 3, 5],
    addresses: ["0xd8a7a95942ccf5a4b4d17e95f7adc8409f953e64"],
  },
];

export const FAKE_COLLECTION_ACTIVITY = [
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1RUzRYSG0zbjF4UVdBcW9MWVZ6ZWhzdzNoQ1N3aXY5R0RreVBzNWE4aW0ySi85Mzk0LnBuZw==",
    address: "0xa95...010c",
    type: "listed",
    value: {
      price: "14.95 ETH",
    },
    date: "11:30 PM",
  },

  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/LHIIYA2_Vd_VJFrXRI5RBtYoiVUoCsb8WCUTsM2N2N9i1n3BpQ4kBi7wUYswzrouvX9rZ39cf3zfV3VoXX_6sLiMcCLhv9bW4c-b=h400",
    address: "0xa95...010c",
    type: "listed",
    value: {
      price: "14.95 ETH",
    },
    date: "11:30 PM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/LHIIYA2_Vd_VJFrXRI5RBtYoiVUoCsb8WCUTsM2N2N9i1n3BpQ4kBi7wUYswzrouvX9rZ39cf3zfV3VoXX_6sLiMcCLhv9bW4c-b=h400",
    address: "0x0c1...8225",
    type: "transfer",
    value: {
      toAddress: "0xa95...010c",
    },
    date: "11:30 PM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://img.rarible.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1RUzRYSG0zbjF4UVdBcW9MWVZ6ZWhzdzNoQ1N3aXY5R0RreVBzNWE4aW0ySi85Mzk0LnBuZw==",
    address: "8x1c1...2184",
    type: "liked",
    value: {},
    date: "11:30 PM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/-wJWKYHW7h805VXHV5AO0T_Jl81bngOG7zdeuquwfhNHrAjhZwOUPwzZ4Mh-fHbsie0RWpL0tzHuZVFHvVutpkH4gvZtI_KJ_myrcw=h400",

    address: "0x08b...9023",
    type: "purchase",
    value: {
      mode: "buy",
      price: "7.5 ETH",
      fromAddress: "0xa95...010c",
    },
    date: "11:30 PM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/-wJWKYHW7h805VXHV5AO0T_Jl81bngOG7zdeuquwfhNHrAjhZwOUPwzZ4Mh-fHbsie0RWpL0tzHuZVFHvVutpkH4gvZtI_KJ_myrcw=h400",

    address: "0x08b...9023",
    type: "purchase",
    value: {
      mode: "accepted",
      price: "7.5 ETH",
      fromAddress: "0xa95...010c",
    },
    date: "11:30 PM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/-wJWKYHW7h805VXHV5AO0T_Jl81bngOG7zdeuquwfhNHrAjhZwOUPwzZ4Mh-fHbsie0RWpL0tzHuZVFHvVutpkH4gvZtI_KJ_myrcw=h400",
    address: "0x846...f411",
    type: "bid",
    value: {
      mode: "cancel",
    },
    date: "4:16 AM",
  },
  {
    nft: "Collection - #1654",
    nftAvatar:
      "https://lh3.googleusercontent.com/-wJWKYHW7h805VXHV5AO0T_Jl81bngOG7zdeuquwfhNHrAjhZwOUPwzZ4Mh-fHbsie0RWpL0tzHuZVFHvVutpkH4gvZtI_KJ_myrcw=h400",
    address: "0x846...f411",
    type: "bid",
    value: {
      mode: "offer",
      price: "7.5 ETH",
    },
    date: "4:16 AM",
  },
];

export const FAKE_WALLETS = [
  {
    address: "0x93BA3b3E788647d62...A377",
    type: "Ethereum",
    status: "offline",
  },
  {
    address: "0x93BA3b3E788647d62...A177",
    type: "Polygon",
    status: "online",
  },
  {
    address: "0x93BA3b3E788647d62...A277",
    type: "Immutable X",
    status: "offline",
  },
];

export const SETTING_OPTIONS = [
  {
    title: "Toggle theme",
    action: "handle.toggleTheme",
    keywords: ["theme", "dark", "light", "toggle", "switch"],
  },
  {
    title: "Security",
    action: "navigate.account.security",
    keywords: [
      "security",
      "password",
      "pin",
      "2fa",
      "2-factor",
      "auth",
      "authenticator",
    ],
  },
  {
    title: "Language",
    action: "navigate.preference.language",
    keywords: [
      "language",
      "lang",
      "english",
      "spanish",
      "french",
      "german",
      "italian",
      "japanese",
      "korean",
      "chinese",
      "russian",
      "portuguese",
      "turkish",
      "arabic",
      "hindi",
      "dutch",
      "polish",
      "swedish",
      "danish",
      "finnish",
      "norwegian",
      "czech",
      "hungarian",
      "romanian",
      "slovak",
      "slovenian",
      "greek",
      "bulgarian",
      "croatian",
      "estonian",
      "latvian",
      "lithuanian",
      "serbian",
      "ukrainian",
      "hebrew",
      "indonesian",
      "malay",
      "vietnamese",
      "thai",
      "filipino",
      "persian",
      "urdu",
      "albanian",
      "bosnian",
      "galician",
      "icelandic",
      "kurdish",
      "maltese",
      "macedonian",
      "mongolian",
      "serbian",
      "serbo-croatian",
      "swahili",
      "welsh",
      "yiddish",
      "catalan",
      "malayalam",
      "punjabi",
      "sindhi",
      "tamil",
      "telugu",
      "urdu",
      "azerbaijani",
      "georgian",
      "kazakh",
      "kyrgyz",
      "tajik",
      "turkmen",
      "uzbek",
      "armenian",
      "belarusian",
      "bengali",
      "burmese",
      "khmer",
      "lao",
      "sinhala",
      "tibetan",
      "amharic",
      "hausa",
      "igbo",
      "yoruba",
      "zulu",
      "afrikaans",
      "gujarati",
      "hindi",
      "kannada",
      "marathi",
      "nepali",
      "odia",
      "pashto",
      "sinhala",
      "somali",
      "swahili",
      "tamil",
      "telugu",
      "urdu",
      "uzbek",
      "zulu",
    ],
  },
  {
    title: "Currency",
    action: "navigate.preference.currency",
    keywords: [
      "currency",
      "usd",
      "eur",
      "gbp",
      "jpy",
      "cny",
      "inr",
      "aud",
      "cad",
      "chf",
      "krw",
      "rub",
      "sek",
      "nzd",
      "mxn",
      "sgd",
      "hkd",
      "try",
      "brl",
      "twd",
      "dkk",
      "pln",
      "thb",
      "nok",
      "zar",
      "ars",
      "clp",
      "cop",
      "idr",
      "ils",
      "php",
      "zar",
      "myr",
      "vef",
      "pen",
      "uyu",
      "czk",
      "isk",
      "thb",
      "huf",
      "ron",
      "hrk",
      "bgn",
      "uah",
      "aed",
      "bdt",
      "kwd",
      "lkr",
      "mmk",
      "ngn",
      "omr",
      "pkr",
      "sar",
      "vnd",
      "xdr",
      "xag",
      "xau",
      "xpd",
      "xpt",
    ],
  },
  {
    title: "Network",
    action: "navigate.preference.network",
    keywords: [],
  },
  {
    title: "About",
    action: "navigate.preference.about",
    keywords: ["about", "version", "build", "update", "check", "latest"],
  },
  {
    title: "Help",
    action: "navigate.preference.help",
    keywords: ["help", "support", "contact", "faq", "question", "issue"],
  },
];
