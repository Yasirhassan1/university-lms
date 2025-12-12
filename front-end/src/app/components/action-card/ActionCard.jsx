import Link from "next/link";

export default function ActionCard({ title, icon: Icon, goto, className = "" }) {
    return (
        <Link href={goto}

            className={`
                card bg-white rounded-lg shadow-sm hover:shadow-md 
                flex flex-col items-center cursor-pointer 
                transition-all duration-300 hover:-translate-y-1
                h-full min-h-[120px] w-full
                ${className}
            `}
        >
            <div className="h-[60px] w-full rounded-t-lg bg-green-100 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <Icon className="w-6 h-6 text-green-700" />
            </div>
            <div className="flex-1 flex items-center justify-center p-2">
                <p className="text-center font-semibold text-sm text-gray-700">{title}</p>
            </div>
        </Link>
    )
}

import PropTypes from 'prop-types';

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    goto: PropTypes.string.isRequired,
    className: PropTypes.string,
};
