import { FaRegFile } from "react-icons/fa";
import { PiCylinderLight } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";
import { TiCreditCard } from "react-icons/ti";

export const actionCardData = [
    {
        title: "LECTURES",
        icon: FaRegFile,    
        goto: "/pages/dashboard/lectures"
    },
    {
        title: "COURSES",
        icon: PiCylinderLight,
        goto: "/pages/dashboard/courses"
    },
    {
        title: "ATTENDENCE",
        icon: FaRegCircleCheck,
        goto: "/pages/dashboard/attendence"
    },
    {
        title: "ASSIGNMENT",
        icon: LuFileText,
        goto: "/pages/dashboard/assignment"
    },
    {
        title: "RESULT",
        icon: IoMdStarOutline,
        goto: "/pages/dashboard/result"
    },
    {
        title: "E-BOOK",
        icon: IoBookOutline,
        goto: "/pages/dashboard/e-book"
    },
    {
        title: "TIME TABLE",
        icon: CiViewTimeline,
        goto: "/pages/dashboard/time-table"
    },
    {
        title: "ACCOUNT",
        icon: TiCreditCard,
        goto: "/pages/dashboard/account"
    },
];
