
// Mock data moved from individual files for better management
const evaluationData = {
    1: { code: "CS-301", title: "Data Structures", teacher: "Dr. Ali Khan" },
    3: { code: "MG-101", title: "Principles of Management", teacher: "Mr. Bilal Raza" },
    4: { code: "CS-305", title: "Database Systems", teacher: "Ms. Amna Malik" }
};

export const getEvaluationById = async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return evaluationData[id];
};

export const submitEvaluation = async (data) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Submitting evaluation:", data);
    return { success: true };
};

export const questions = [
    "The instructor was well prepared for the class.",
    "The instructor demonstrated knowledge of the subject.",
    "The instructor was accessible outside of class.",
    "The course material was organized and well-planned.",
    "The instructor encouraged student participation."
];
