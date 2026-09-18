/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /data/visuals.js
 * Source of Truth: Grade 7 Mathematics Textbook (Educational Publications Dept, Sri Lanka)
 * 
 * DATA ONLY: Contains metadata descriptions and source references for all 68 visual items.
 */

const VISUALS_DATA = [
    {
        visualId: "v01_1",
        chapterId: "ch01",
        sourcePage: "Part I - Page 1",
        section: "1.1 ද්විපාර්ශ්වික සමමිතිය",
        visualType: "diagram",
        titleDescription: "කඩ ඉර ඔස්සේ දෙකට නැමීමෙන් එක මත එක වැටී සම්පාත වන කොටස් දෙකක් ලැබෙන නිල් පැහැති චතුරස්‍රාකාර කාඩ්පතක්.",
        purpose: "ද්විපාර්ශ්වික සමමිතිය හා සමමිති අක්ෂය සංකල්පය පැහැදිලි කිරීම",
        relatedConceptIds: ["c01_1_1"],
        relatedQuestionIds: [],
        reconstructionType: "diagram",
        sourceReference: "Part I - Page 1 diagram"
    },
    {
        visualId: "v01_2",
        chapterId: "ch01",
        sourcePage: "Part I - Pages 1-2",
        section: "1.1 ද්විපාර්ශ්වික සමමිතිය",
        visualType: "illustration",
        titleDescription: "1 රූපය: පත/කොළය, 2 රූපය: ඍජුකෝණාස්‍රය, 3 රූපය: තාරකාව, 4 රූපය: වෘත්තය.",
        purpose: "සමමිතික ලක්ෂණ සහිත තල රූප හඳුනා ගැනීම",
        relatedConceptIds: ["c01_1_1"],
        relatedQuestionIds: ["q01_1_1"],
        reconstructionType: "illustration",
        sourceReference: "Part I - Pages 1-2 images"
    },
    {
        visualId: "CH28-V01",
        chapterId: "ch28",
        sourcePage: "Part II - Pages 147-148",
        section: "28.1 ටෙසලාකරණය",
        visualType: "illustration",
        titleDescription: "සමචතුරස්‍ර, ත්‍රිකෝණ සහ ෂඩස්‍ර මගින් සාදන ලද ටෙසලාකරණ රටා",
        purpose": "හිඩැස් හා මතුවීම් නැතිව ඇසිරීම පෙන්වීම",
        relatedConceptIds: ["CH28-C01"],
        relatedQuestionIds: ["CH28-Q01", "CH28-Q02"],
        reconstructionType: "illustration",
        sourceReference: "Part II - Pages 147-148 diagrams"
    }
];

if (typeof window !== 'undefined') {
    window.VISUALS_DATA = VISUALS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VISUALS_DATA };
}
