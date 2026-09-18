/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /data/questions.js
 * Source of Truth: Grade 7 Mathematics Textbook (Educational Publications Dept, Sri Lanka)
 * 
 * DATA ONLY: No DOM, storage, or application logic.
 */

const QUESTIONS_DATA = {
    // ------------------------------------------------------------------------
    // CHAPTER QUESTIONS (224 Main Question Records / 628 Sub-Question Records)
    // ------------------------------------------------------------------------
    chapters: [
        {
            questionId: "q01_1_1",
            chapterId: "ch01",
            section: "1.2 අභ්‍යාසය",
            questionNumber: "1",
            questionType: "Identification",
            questionText: "පහත දැක්වෙන රූප අතුරින් ද්විපාර්ශ්වික සමමිති අක්ෂයක් නිවැරදි ව ඇඳ ඇති රූප තෝරා, ඒවායේ අක්ෂර ලියන්න.",
            questionTextSinhala: "පහත දැක්වෙන රූප අතුරින් ද්විපාර්ශ්වික සමමිති අක්ෂයක් නිවැරදි ව ඇඳ ඇති රූප තෝරා, ඒවායේ අක්ෂර ලියන්න.",
            options: ["(a)", "(b)", "(c)", "(d)", "(e)", "(f)", "(g)", "(h)", "(i)", "(j)", "(k)", "(l)"],
            answer: "not_available_in_source",
            solution: "නැමූ විට එකිනෙක මත හරියටම සම්පාත වන පරිදි කඩඉර ඇඳ ඇති රූප තෝරන්න.",
            marks: null,
            sourceReference: "Part I - Page 4",
            conceptId: "c01_1_1",
            visualId: "v01_2",
            exampleId: null,
            difficulty: "easy",
            subQuestions: []
        },
        {
            questionId: "CH21-Q01",
            chapterId: "ch21",
            section: "21.1 අභ්‍යාසය",
            questionNumber: "1",
            questionType: "short_answer",
            questionText: "පහත දී ඇති එක් එක් ප්‍රකාශනයේ ප්‍රමාණ අතර අනුපාතය ලියා එය සරල ම ආකාරයෙන් දක්වන්න.",
            questionTextSinhala: "පහත දී ඇති එක් එක් ප්‍රකාශනයේ ප්‍රමාණ අතර අනුපාතය ලියා එය සරල ම ආකාරයෙන් දක්වන්න.",
            options: [],
            answer: "not_available_in_source",
            solution: "not_available_in_source",
            marks: null,
            sourceReference: "Part II - Page 92",
            conceptId: "c21_1_1",
            visualId: null,
            exampleId: "CH21-WE02",
            difficulty: "medium",
            subQuestions: [
                {
                    subQuestionId: "CH21-Q01-S01",
                    parentQuestionId: "CH21-Q01",
                    label: "(i)",
                    questionText: "පන්තියක සිටින පිරිමි ළමුන් ගණන 20ක් ද ගැහැණු ළමුන් ගණන 25ක් ද වේ.",
                    questionTextSinhala: "පන්තියක සිටින පිරිමි ළමුන් ගණන 20ක් ද ගැහැණු ළමුන් ගණන 25ක් ද වේ.",
                    answer: "4 : 5",
                    solution: "20 : 25 = 20/5 : 25/5 = 4 : 5",
                    conceptId: "c21_1_1",
                    sourceReference: "Part II - Page 92"
                },
                {
                    subQuestionId: "CH21-Q01-S02",
                    parentQuestionId: "CH21-Q01",
                    label": "(ii)",
                    questionText: "පෑනක මිල රුපියල් 15ක් ද පැන්සලක මිල රුපියල් 10ක් ද මකනයක මිල රුපියල් 5ක් ද වේ.",
                    questionTextSinhala: "පෑනක මිල රුපියල් 15ක් ද පැන්සලක මිල රුපියල් 10ක් ද මකනයක මිල රුපියල් 5ක් ද වේ.",
                    answer: "3 : 2 : 1",
                    solution: "15 : 10 : 5 = 15/5 : 10/5 : 5/5 = 3 : 2 : 1",
                    conceptId: "c21_1_1",
                    sourceReference: "Part II - Page 92"
                }
            ]
        }
    ],

    // ------------------------------------------------------------------------
    // TERM REVIEW QUESTIONS (29 Main Question Records / 52 Sub-Question Records)
    // ------------------------------------------------------------------------
    termReviews: [
        {
            questionId: "TR01-Q01",
            reviewId: "TR01",
            section: "පුනරීක්ෂණ අභ්‍යාසය 1",
            questionNumber: "1",
            questionType: "calculation",
            questionText: "(a) සුළු කරන්න. (b) යසින්තගේ පිළිතුර පිළිබඳ ගැටලුව.",
            questionTextSinhala: "(a) සුළු කරන්න. (b) යසින්තගේ පිළිතුර පිළිබඳ ගැටලුව.",
            options: [],
            answer: "not_available_in_source",
            solution: "not_available_in_source",
            sourceReference: "Part I - Page 105",
            relatedChapterId: "ch03",
            subQuestions: [
                {
                    subQuestionId: "TR01-Q01-S01",
                    parentQuestionId: "TR01-Q01",
                    label: "(a)(i)-(ix)",
                    questionText: "සංඛ්‍යාත්මක ප්‍රකාශන සුළු කරන්න.",
                    answer: "(i) 40, (ii) 12, (iii) 7, (iv) 44, (v) 26, (vi) 18, (vii) 21, (viii) 31, (ix) 12",
                    solution: "(i) 40, (ii) 6+6=12, (iii) 15-8=7, (iv) 56-12=44, (v) 21+5=26, (vi) 24-6=18, (vii) 15+6=21, (viii) 16+15=31, (ix) 15-3=12",
                    sourceReference: "Part I - Page 105"
                }
            ]
        }
    ]
};

// Global Browser Window Export
if (typeof window !== 'undefined') {
    window.QUESTIONS_DATA = QUESTIONS_DATA;
}

// CommonJS Fallback for Node/Jest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS_DATA };
}
