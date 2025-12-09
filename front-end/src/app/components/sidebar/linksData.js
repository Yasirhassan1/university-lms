export const linksData = [
    {
        name: "HOME",
        href: "/dashboard",
        expandable: false,
    },
    {
        name: "QEC",
        href: "/qec",
        expandable: false,
    },
    {
        name: "CODE CONTRIBUTORS",
        href: "/code-contributors",
        expandable: false,
    },
    {
        name: "COURSES",
        href: "/courses",
        expandable: true,
        subLinks: [
            { name: "Course Registration", href: "/courses/current" },
            { name: "Attendence", href: "/courses/history" },
            { name: "Syllabus", href: "/courses/registration" },
            { name: "Submit Assignment", href: "/courses/registration" },
            { name: "Time Table", href: "/courses/registration" },
            { name: "Quiz", href: "/courses/registration" },
            { name: "Scheme of Studies", href: "/courses/registration" },
        ]
    },
    {
        name: "GRADE BOOK",
        href: "/grade-book",
        expandable: true,
        subLinks: [
            { name: "My Result", href: "/grade-book/mid-term" },
            { name: "Quiz", href: "/grade-book/final-term" },
            { name: "DateSheet", href: "/grade-book/transcript" },
            { name: "Admt Card", href: "/grade-book/transcript" },
        ]
    },
    {
        name: "ACCOUNT BOOK",
        href: "/account-book",
        expandable: true,
        subLinks: [
            { name: "My Fee", href: "/account-book/challan" },
            { name: "Generate General Fee", href: "/account-book/history" },
            { name: "Generate Short Attendence Fee", href: "/account-book/history" },
        ]
    },
    {
        name: "TRANSPORT",
        href: "/transport",
        expandable: false,
    },
    {
        name: "LIBRARY",
        href: "/library",
        expandable: false,
    },
    {
        name: "COMMON",
        href: "/common",
        expandable: false,
    },
    {
        name: "DOWNLOADS",
        href: "/downloads",
        expandable: false,
    },
    {
        name: "DIGITAL LIBRARY",
        href: "/digital-library",
        expandable: false,
    },


]