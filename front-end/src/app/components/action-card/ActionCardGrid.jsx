import ActionCard from "./ActionCard";
import { actionCardData } from "./data";

export default function ActionCardGrid() {
    return (
        <div>
        <h4 className="text-center">Quick Access Modules</h4>
        <div className="grid mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {actionCardData.map((item) => (
                <ActionCard
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    goto={item.goto}
                />
            ))}
        </div>
        </div>
    )
}