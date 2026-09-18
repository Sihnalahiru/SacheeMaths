/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /data/metadata.js
 * Source of Truth: Grade 7 Mathematics Textbook (Educational Publications Dept, Sri Lanka)
 */

const DATASET_METADATA = {
    appName: "Sachee Maths",
    studentName: "Sachin",
    grade: 7,
    subject: "Mathematics",
    language: "si-LK",
    medium: "Sinhala",
    datasetVersion: "1.0.0-LOCKED",
    chapterCount: 29,
    termReviewCount: 3,
    glossaryCount: 2,
    masterCounts: {
        chapters: 29,
        termReviews: 3,
        glossaryVolumes: 2,
        mainQuestionRecords: 224,
        numberedTextbookQuestionUnits: 239,
        subQuestionRecords: 628,
        visualRecords: 68,
        workedExampleRecords: 106,
        activityRecords: 40,
        conceptRecords: 84,
        glossaryEntries: 48,
        totalRecords: 1440
    },
    sourceInformation: [
        {
            volume: "Part I",
            pdfFileName: "maths G-7 P-I S (1).pdf",
            totalPages: 172,
            chapterRange: "Chapters 1–12",
            pageConvention: "Part I - Page X"
        },
        {
            volume: "Part II",
            pdfFileName: "maths g-7 p-II.pdf",
            totalPages: 174,
            chapterRange: "Chapters 13–29",
            pageConvention: "Part II - Page X"
        }
    ],
    validationStatus: "PASS"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DATASET_METADATA };
}
