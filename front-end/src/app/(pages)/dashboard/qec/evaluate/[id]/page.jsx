"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoArrowBack } from "react-icons/io5";
import { getEvaluationById, questions } from '@/app/lib/evaluation-service';
import CourseInfoCard from '@/app/components/evaluation/CourseInfoCard';
import EvaluationForm from '@/app/components/evaluation/EvaluationForm';

export default function Page({ params }) {
    // Unwrap params in Next.js 15+
    const unwrappedParams = React.use(params);
    const { id } = unwrappedParams;

    const [evaluationDetails, setEvaluationDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await getEvaluationById(id);
                setEvaluationDetails(data);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading evaluation details...</div>;
    }

    if (!evaluationDetails) {
        return <div className="p-8 text-center text-red-500">Evaluation not found or invalid ID.</div>;
    }

    return (
        <div className="container mx-auto p-4 max-w-4xl flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/dashboard/qec" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <IoArrowBack size={24} className="text-gray-600" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-800">Evaluate Course</h1>
            </div>

            {/* Course Info Card */}
            <CourseInfoCard
                code={evaluationDetails.code}
                title={evaluationDetails.title}
                teacher={evaluationDetails.teacher}
            />

            {/* Form */}
            <EvaluationForm questions={questions} />
        </div>
    )
}
