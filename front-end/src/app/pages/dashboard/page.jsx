import ActionCardGrid from "@/app/components/action-card/ActionCardGrid";
import Link from "next/link";
import QuickInfo from "@/app/components/quick-info/QuickInfo";
import NoticeBoard from "@/app/components/notice-board/NoticeBoard";
export default function Page(){

    return(

        <div className="flex flex-col gap-5">

        <section  className="bg-green-100 p-6 rounded-lg flex flex-col gap-3 items-center">
            <h3 className="text-center">Welcome to Your LMS Dashboard</h3>
            <span>Manage your Journey with ease</span>
            <Link className="bg-(--primary-color) text-white px-4 py-2 rounded-md" href="/pages/dashboard/admit-card">View Admit Card</Link>
        </section>

        <section className="mt-5">
            <QuickInfo/>
        </section>

        <section className="mt-5">
        <ActionCardGrid/>
        </section>

        <section className="mt-5">
            <NoticeBoard/> 
        </section>

        </div>
    )
}