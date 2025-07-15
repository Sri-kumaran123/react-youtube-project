import { AiFillHome } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export const PATH = [
    '/','/search','watch/:id'
];

export const SIDEBAR_MENU = [
    { title: "home", icon: AiFillHome  },
    { title: "playlist", icon: MdPlaylistPlay  },
    { title: "songs", icon: FaMusic  },
    { title: "trending", icon: MdTrendingUp  },
    { title: "sports", icon: MdSportsSoccer  },
    { title: "games", icon: FaGamepad  },
    { title: "courses", icon: FaBookOpen  },
];

export const TITLE="Video Tube React";
