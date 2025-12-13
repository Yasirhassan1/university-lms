import { v4 as uuidv4 } from 'uuid';

export const linksData = [
    {
        id: uuidv4(),
        name: "HOME",
        href: "/dashboard",
        expandable: false,
    },
    {  
        id: uuidv4(),
        name: "QEC",
        href: "/dashboard/qec",
        expandable: false,
    },
    {   id: uuidv4(),
        name: "CODE CONTRIBUTORS",
        href: "/dashboard/code-contributors",
        expandable: false,
    },
    {
        id: uuidv4(),
        name: "COURSES",
        href: "/courses",
        expandable: true,
        subLinks: [
            {
                id: uuidv4(),
                name: "Course Registration",
                 href: "/dashboard/courses/course-registration"
                 },

            { 
                id: uuidv4(),
                name: "Attendence",
                 href: "/dashboard/courses/attendence"
                
                },
            {
                id: uuidv4(),
                name: "Syllabus",
                href: "/dashboard/courses/syllabus",
            },
            {
                id: uuidv4(),
                 name: "Submit Assignment",
                href: "/dashboard/courses/submit-assignment"
             },
            {
                id: uuidv4(),
                 name: "Time Table",
                  href: "/dashboard/courses/time-table" 
                },
            {
                id: uuidv4(),
                name: "Quiz", 
                href: "/dashboard/courses/quiz" 
            },
            { 
                id: uuidv4(),
                name: "Scheme of Studies", 
                href: "/dashboard/courses/scheme-of-studies" 
            
            },
        ]
    },
    {
        id: uuidv4(),
        name: "GRADE BOOK",
        href: "/grade-book",
        expandable: true,
        subLinks: [
            { 
                id: uuidv4(),
                name: "My Result", 
                href: "/dashboard/grade-book/my-result" },
            {
                id: uuidv4(),
                 name: "Quiz", 
                 href: "/dashboard/grade-book/quiz" },
            {
                id: uuidv4(),
                 name: "DateSheet",
                  href: "/dashboard/grade-book/date-sheet" },
            { id: uuidv4(),
            name: "Admit Card",
            href: "/dashboard/grade-book/admit-card"
         },
        ]
    },
    {   id: uuidv4(),
        name: "ACCOUNT BOOK",
        href: "/account-book",
        expandable: true,
        subLinks: [
            {
                id: uuidv4(),
                 name: "My Fee",
                  href: "/dashboard/account-book/my-fee" },
            {
                id: uuidv4(),
                 name: "Generate General Fee", 
                 href: "/dashboard/account-book/generate-general-fee"
                
                },
            { id: uuidv4(),
                name: "Generate Short Attendence Fee",
                href: "/dashboard/account-book/generate-short-attendence-fee" 
            },
        ]
    },
    {   id: uuidv4(),
        name: "TRANSPORT",
        href: "/dashboard/transport",
        expandable: false,
    },
    {   id: uuidv4(),   
        name: "LIBRARY",
        href: "/dashboard/library/e-book",
        expandable: false,
    },
    {   id: uuidv4(),
        name: "COMMON",
        href: "/common",
        expandable: true,
        subLinks: [
            {
                id: uuidv4(),
                 name: "Edit Profile",
                href: "/dashboard/common/edit-profile" 
            },
            {
                id: uuidv4(),
                 name: "Change Password", 
                 href: "/dashboard/common/change-password" },
            {
                id: uuidv4(),
                name: "Rules and Regulations", 
                href: "/dashboard/common/rules-and-regulations" },
            { 
                id: uuidv4(),
                name: "Calender", 
                href: "/dashboard/common/calender" 
            },
            {
                id: uuidv4(), 
                name: "Help", 
                href: "/dashboard/common/help" },
            {
                id: uuidv4(),
                 name: "How to reset Password", 
                 href: "/dashboard/common/how-to-reset-password" },
            {
                id: uuidv4(), 
                name: "Complaint",
                href: "/dashboard/common/complaint" 
            },
        ]
    },
    {   id: uuidv4(),
        name: "DOWNLOADS",
        href: "/dashboard/downloads",
        expandable: false,
    },
   


]