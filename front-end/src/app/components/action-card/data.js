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
        id:1,
        title: "LECTURES",
        icon: FaRegFile,    
        goto: "/dashboard/courses/syllabus"
    },
    {
        id:2,
        title: "COURSES",
        icon: PiCylinderLight,
        goto: "/dashboard/courses/course-registration"
    },
    {
        id:3,
        title: "ATTENDENCE",
        icon: FaRegCircleCheck,
        goto: "/dashboard/courses/attendence"
    },
    {
        id:4,
        title: "ASSIGNMENT",
        icon: LuFileText,
        goto: "/dashboard/courses/submit-assignment"
    },
    {
        id:5,
        title: "RESULT",
        icon: IoMdStarOutline,
        goto: "/dashboard/grade-book/my-result"
    },
    {
        id:6,
        title: "E-BOOK",
        icon: IoBookOutline,
        goto: "/dashboard/library/e-book"
    },
    {
        id:7,
        title: "TIME TABLE",
        icon: CiViewTimeline,
        goto: "/dashboard/courses/time-table"
    },
    {
        id:8,
        title: "ACCOUNT",
        icon: TiCreditCard,
        goto: "/dashboard/account-book/my-fee"
    },
];
