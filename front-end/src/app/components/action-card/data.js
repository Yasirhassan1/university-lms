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
        goto: "/dashboard/lectures"
    },
    {
        title: "COURSES",
        icon: PiCylinderLight,
        goto: "/dashboard/courses"
    },
    {
        title: "ATTENDENCE",
        icon: FaRegCircleCheck,
        goto: "/dashboard/attendence"
    },
    {
        title: "ASSIGNMENT",
        icon: LuFileText,
        goto: "/dashboard/assignment"
    },
    {
        title: "RESULT",
        icon: IoMdStarOutline,
        goto: "/dashboard/result"
    },
    {
        title: "E-BOOK",
        icon: IoBookOutline,
        goto: "/dashboard/e-book"
    },
    {
        title: "TIME TABLE",
        icon: CiViewTimeline,
        goto: "/dashboard/time-table"
    },
    {
        title: "ACCOUNT",
        icon: TiCreditCard,
        goto: "/dashboard/account"
    },
];
