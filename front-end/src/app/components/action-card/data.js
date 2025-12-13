import { FaRegFile } from "react-icons/fa";
import { PiCylinderLight } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";
import { TiCreditCard } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';
export const actionCardData = [
    {
        id: uuidv4(),
        title: "LECTURES",
        icon: FaRegFile,    
        goto: "/dashboard/courses/syllabus"
    },
    {
        id: uuidv4(),
        title: "COURSES",
        icon: PiCylinderLight,
        goto: "/dashboard/courses/course-registration"
    },
    {
        id: uuidv4(),
        title: "ATTENDENCE",
        icon: FaRegCircleCheck,
        goto: "/dashboard/courses/attendence"
    },
    {
        id: uuidv4(),
        title: "ASSIGNMENT",
        icon: LuFileText,
        goto: "/dashboard/courses/submit-assignment"
    },
    {
        id: uuidv4(),
        title: "RESULT",
        icon: IoMdStarOutline,
        goto: "/dashboard/grade-book/my-result"
    },
    {
        id: uuidv4(),
        title: "E-BOOK",
        icon: IoBookOutline,
        goto: "/dashboard/library/e-book"
    },
    {
        id: uuidv4(),
        title: "TIME TABLE",
        icon: CiViewTimeline,
        goto: "/dashboard/courses/time-table"
    },
    {
        id: uuidv4(),
        title: "ACCOUNT",
        icon: TiCreditCard,
        goto: "/dashboard/account-book/my-fee"
    },
];
