import React from 'react';
export default function QuestionItem({ index, question, rating, onRatingChange }) {
    return (
        <div className="flex flex-col gap-3">
            <p className="font-medium text-gray-700">{index + 1}. {question} <span className="text-red-500">*</span></p>
            <div className="flex gap-4 flex-wrap">
                {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="radio"
                            name={`question-${index}`}
                            value={value}
                            checked={rating === value}
                            onChange={() => onRatingChange(index, value)}
                            className="bg-[--primary-color] w-5 h-5 accent-green-600"
                        />
                        <span className={`px-3 py-1 rounded border transition-colors ${rating === value ? 'bg-[--primary-color] text-white border-green-600' : 'bg-white text-gray-600 border-gray-300 group-hover:border-green-400'}`}>
                            {value}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}