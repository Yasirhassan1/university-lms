
"use client";
import React, { useState } from 'react';
import QuestionItem from './QuestionItem';
import { useRouter } from 'next/navigation';
import { submitEvaluation } from '@/app/lib/evaluation-service';

export default function EvaluationForm({ questions }) {
    const router = useRouter();
    const [ratings, setRatings] = useState({});
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRatingChange = (index, value) => {
        setRatings(prev => ({ ...prev, [index]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitEvaluation({ ratings, comment });
            alert("Evaluation submitted successfully!");
            router.push('/dashboard/qec');
        } catch (error) {
            console.error(error);
            alert("Failed to submit evaluation.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = questions.every((_, index) => ratings[index]) && comment.length > 0;

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-8">
            {/* Questions */}
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-semibold border-b border-gray-100 pb-2">Questionnaire</h2>
                {questions.map((q, index) => (
                    <QuestionItem
                        key={index}
                        index={index}
                        question={q}
                        rating={ratings[index]}
                        onRatingChange={handleRatingChange}
                    />
                ))}
            </div>

            {/* Specific Comments */}
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold border-b border-gray-100 pb-2">Comments</h2>
                <label htmlFor="comments" className="font-medium text-gray-700">Any specific feedback for the instructor? <span className="text-red-500">*</span></label>
                <textarea
                    id="comments"
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Share your thoughts..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${!isFormValid || isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-[--primary-color] hover:bg-green-700 shadow-md hover:shadow-lg'}`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Evaluation'}
                </button>
            </div>
        </form>
    );
}
