export const linksData = [
    {
        name: "HOME",
        href: "/dashboard",
        expandable: false,
    },
    {
        name: "QEC",
        href: "/dashboard/qec",
        expandable: false,
    },
    {
        name: "CODE CONTRIBUTORS",
        href: "/dashboard/code-contributors",
        expandable: false,
    },
    {
        name: "COURSES",
        href: "/courses",
        expandable: true,
        subLinks: [
            { name: "Course Registration", href: "/dashboard/courses/course-registration" },
            { name: "Attendence", href: "/dashboard/courses/attendence" },
            { name: "Syllabus", href: "/dashboard/courses/syllabus" },
            { name: "Submit Assignment", href: "/dashboard/courses/submit-assignment" },
            { name: "Time Table", href: "/dashboard/courses/time-table" },
            { name: "Quiz", href: "/dashboard/courses/quiz" },
            { name: "Scheme of Studies", href: "/dashboard/courses/scheme-of-studies" },
        ]
    },
    {
        name: "GRADE BOOK",
        href: "/grade-book",
        expandable: true,
        subLinks: [
            { name: "My Result", href: "/dashboard/grade-book/my-result" },
            { name: "Quiz", href: "/dashboard/grade-book/quiz" },
            { name: "DateSheet", href: "/dashboard/grade-book/date-sheet" },
            { name: "Admit Card", href: "/dashboard/grade-book/admit-card" },
        ]
    },
    {
        name: "ACCOUNT BOOK",
        href: "/account-book",
        expandable: true,
        subLinks: [
            { name: "My Fee", href: "/dashboard/account-book/my-fee" },
            { name: "Generate General Fee", href: "/dashboard/account-book/generate-general-fee" },
            { name: "Generate Short Attendence Fee", href: "/dashboard/account-book/generate-short-attendence-fee" },
        ]
    },
    {
        name: "TRANSPORT",
        href: "/dashboard/transport",
        expandable: false,
    },
    {
        name: "LIBRARY",
        href: "/dashboard/library/e-book",
        expandable: false,
    },
    {
        name: "COMMON",
        href: "/common",
        expandable: true,
        subLinks: [
            { name: "Edit Profile", href: "/dashboard/common/edit-profile" },
            { name: "Change Password", href: "/dashboard/common/change-password" },
            { name: "Rules and Regulations", href: "/dashboard/common/rules-and-regulations" },
            { name: "Calender", href: "/dashboard/common/calender" },
            { name: "Help", href: "/dashboard/common/help" },
            { name: "How to reset Password", href: "/dashboard/common/how-to-reset-password" },
            { name: "Complaint", href: "/dashboard/common/complaint" },
        ]
    },
    {
        name: "DOWNLOADS",
        href: "/dashboard/downloads",
        expandable: false,
    },
   


]