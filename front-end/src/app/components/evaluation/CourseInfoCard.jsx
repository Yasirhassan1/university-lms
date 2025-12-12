
import React from 'react';

export default function CourseInfoCard({ code, title, teacher }) {
    if (!code) return null;

    return (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Course Code</p>
                    <p className="text-lg font-medium text-gray-800">{code}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Course Title</p>
                    <p className="text-lg font-medium text-gray-800">{title}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Teacher</p>
                    <p className="text-lg font-medium text-gray-800">{teacher}</p>
                </div>
            </div>
        </div>
    );
}
