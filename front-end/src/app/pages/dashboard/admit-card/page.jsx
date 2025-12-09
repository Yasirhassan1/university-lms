import React from 'react';
import Image from 'next/image';
import Table from '../../../components/table/Table';
import { tableHead, tableRowData } from './data';
import logo from '../../../assets/logo.svg';
import profilePic from '../../../assets/profile-pic.svg';

const AdmitCard = () => {
    return (
        <div className="p-6 bg-slate-50 min-h-screen font-sans">
            <h3 className="text-3xl font-bold mb-6 text-black">Student Admit Card-Fall 2025</h3>

            {/* Student Details Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image src={logo} alt="University Logo" width={100} height={100} />
                    </div>

                    {/* Info Fields */}
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="bg-slate-50 p-4 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Name:</p>
                            <p className="font-bold text-lg text-black">Yasir Hassan</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Father Name:</p>
                            <p className="font-bold text-lg text-black">Ghulam Hassan</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Reg#</p>
                            <p className="font-bold text-lg text-black">F23BSCS044</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-md border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Program</p>
                            <p className="font-bold text-lg text-black">BSCS Fall (2023)</p>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                        <Image src={profilePic} alt="Student Profile" width={120} height={150} className="object-cover" />
                    </div>

                </div>
            </div>

            {/* Courses Details Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-black">Courses Details</h3>

                <div className="mb-6">
                    <Table tableHead={tableHead} tableRowData={tableRowData} />
                </div>

                <div className="flex justify-end">
                    <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-900 transition-colors font-medium">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdmitCard;
