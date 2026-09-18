/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /data/reviews.js
 * Source of Truth: Grade 7 Mathematics Textbook (Educational Publications Dept, Sri Lanka)
 * 
 * DATA ONLY: Structuring references for Term Reviews 1, 2, and 3 matching questions in /data/questions.js.
 */

const REVIEWS_DATA = [
    {
        reviewId: "TR01",
        reviewTitle: "පුනරීක්ෂණ අභ්‍යාසය 1 (Term Review 1)",
        termSection: "Part I End of Term Review",
        sourcePageRange: "Part I - Pages 105-109",
        relatedChapterIds: ["ch01", "ch02", "ch03", "ch04", "ch05", "ch06", "ch07", "ch08", "ch09"],
        mainQuestionIds: [
            "TR01-Q01", "TR01-Q02", "TR01-Q03", "TR01-Q04", "TR01-Q05",
            "TR01-Q06", "TR01-Q07", "TR01-Q08", "TR01-Q09", "TR01-Q10",
            "TR01-Q11", "TR01-Q12", "TR01-Q13", "TR01-Q14"
        ],
        subQuestionCount: 20
    },
    {
        reviewId: "TR02",
        reviewTitle: "පුනරීක්ෂණ අභ්‍යාසය 2 (Term Review 2)",
        termSection: "Part II Mid Term Review",
        sourcePageRange: "Part II - Pages 86-89",
        relatedChapterIds: ["ch10", "ch11", "ch13", "ch14", "ch15", "ch16", "ch17", "ch18", "ch19", "ch20"],
        mainQuestionIds: [
            "TR02-Q01", "TR02-Q02", "TR02-Q03", "TR02-Q04", "TR02-Q05",
            "TR02-Q06", "TR02-Q07", "TR02-Q08", "TR02-Q09", "TR02-Q10",
            "TR02-Q11", "TR02-Q12", "TR02-Q13", "TR02-Q14"
        ],
        subQuestionCount: 20
    },
    {
        reviewId: "TR03",
        reviewTitle: "පුනරීක්ෂණ අභ්‍යාසය 3 (Term Review 3)",
        termSection: "Part II End of Term Review",
        sourcePageRange: "Part II - Pages 158-164",
        relatedChapterIds: ["ch21", "ch22", "ch23", "ch24", "ch25", "ch26", "ch27", "ch28", "ch29"],
        mainQuestionIds: ["TR03-Q01"],
        subQuestionCount: 12
    }
];

if (typeof window !== 'undefined') {
    window.REVIEWS_DATA = REVIEWS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REVIEWS_DATA };
}
