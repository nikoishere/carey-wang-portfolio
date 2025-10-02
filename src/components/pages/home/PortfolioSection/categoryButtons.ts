import { BackendIcon, ReactIcon, MobileIcon } from "@src/icons";

export const categoryButtons = [
    {
        id: "backend",
        title: "Backend",
        icon: BackendIcon
    },
    {
        id: "fullstack",
        title: "Full Stack",
        icon: ReactIcon
    },
    {
        id: "mobile",
        title: "Mobile",
        icon: MobileIcon
    }
] as const;
