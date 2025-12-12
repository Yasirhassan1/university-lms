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
        goto: "/dashboard/courses/syllabus"
    },
    {
        title: "COURSES",
        icon: PiCylinderLight,
        goto: "/dashboard/courses/course-registration"
    },
    {
        title: "ATTENDENCE",
        icon: FaRegCircleCheck,
        goto: "/dashboard/courses/attendence"
    },
    {
        title: "ASSIGNMENT",
        icon: LuFileText,
        goto: "/dashboard/courses/submit-assignment"
    },
    {
        title: "RESULT",
        icon: IoMdStarOutline,
        goto: "/dashboard/grade-book/my-result"
    },
    {
        title: "E-BOOK",
        icon: IoBookOutline,
        goto: "/dashboard/library/e-book"
    },
    {
        title: "TIME TABLE",
        icon: CiViewTimeline,
        goto: "/dashboard/courses/time-table"
    },
    {
        title: "ACCOUNT",
        icon: TiCreditCard,
        goto: "/dashboard/account-book/my-fee"
    },
];
