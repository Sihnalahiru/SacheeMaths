/**
 * Sachee Maths - Grade 7 Mathematics PWA
 * File: /data/glossary.js
 * Source of Truth: Grade 7 Mathematics Textbook (Educational Publications Dept, Sri Lanka)
 * 
 * DATA ONLY: Contains all 48 verified glossary entries across Part I (GL01) and Part II (GL02).
 */

const GLOSSARY_DATA = [
    // Glossary Part I
    { entryId: "GL01-E01", glossaryId: "GL01", term: "Bilateral Symmetry", sinhalaTerm: "ද්විපාර්ශ්වික සමමිතිය", englishTerm: "Bilateral Symmetry", definition: "තල රූපයක් සරල රේඛාවක් ඔස්සේ නැමූ විට එකිනෙක මත සම්පාත වන ලක්ෂණය.", sourcePage: "Part I - Page 158", relatedConceptIds: ["c01_1_1"] },
    { entryId: "GL01-E02", glossaryId: "GL01", term: "Axis of Symmetry", sinhalaTerm: "සමමිති අක්ෂය", englishTerm: "Axis of Symmetry", definition: "තල රූපයක් එකිනෙක සම්පාත වන පරිදි කොටස් දෙකකට බෙදනු ලබන නැමුම් රේඛාව.", sourcePage: "Part I - Page 158", relatedConceptIds: ["c01_1_1"] },
    { entryId: "GL01-E03", glossaryId: "GL01", term: "Set", sinhalaTerm: "කුලකය", englishTerm: "Set", definition: "නිශ්චිතව ම හඳුනාගත හැකි දෑවලින් යුත් එකතුව.", sourcePage: "Part I - Page 160", relatedConceptIds: ["c02_1_1"] },
    { entryId: "GL01-E04", glossaryId: "GL01", term: "Element / Member", sinhalaTerm: "අවයවය", englishTerm: "Element / Member", definition: "කුලකයකට අයත් දෑ එහි අවයව ලෙස හැඳින්වේ.", sourcePage: "Part I - Page 160", relatedConceptIds: ["c02_1_1"] },
    { entryId: "GL01-E05", glossaryId: "GL01", term: "Venn Diagram", sinhalaTerm: "වෙන් රූප සටහන", englishTerm: "Venn Diagram", definition: "කුලකයක අවයව සියල්ල සංවෘත රූපයක් තුළ ලියා දක්වන රූපය.", sourcePage: "Part I - Page 161", relatedConceptIds: ["c02_3_1"] },
    { entryId: "GL01-E06", glossaryId: "GL01", term: "Numerical Expression", sinhalaTerm: "සංඛ්‍යාත්මක ප්‍රකාශනය", englishTerm: "Numerical Expression", definition: "පූර්ණ සංඛ්‍යා සහ ගණිත කර්ම සංකේත යෙදී ඇති ප්‍රකාශනය.", sourcePage: "Part I - Page 161", relatedConceptIds: ["c03_2_1"] },
    { entryId: "GL01-E07", glossaryId: "GL01", term: "Factor", sinhalaTerm: "සාධකය", englishTerm: "Factor", definition: "කිසියම් සංඛ්‍යාවක් ඉතිරි නැතිව බෙදිය හැකි පූර්ණ සංඛ්‍යාව.", sourcePage: "Part I - Page 162", relatedConceptIds: ["c04_2_1"] },
    { entryId: "GL01-E08", glossaryId: "GL01", term: "Multiple", sinhalaTerm: "ගුණාකාරය", englishTerm: "Multiple", definition: "කිසියම් පූර්ණ සංඛ්‍යාවක් පූර්ණ සංඛ්‍යාවකින් ගුණ කිරීමෙන් ලැබෙන සංඛ්‍යාව.", sourcePage: "Part I - Page 162", relatedConceptIds: ["c04_2_1"] },
    { entryId: "GL01-E09", glossaryId: "GL01", term: "Prime Factor", sinhalaTerm: "ප්‍රථමක සාධකය", englishTerm: "Prime Factor", definition: "සංඛ්‍යාවක සාධක අතුරින් ප්‍රථමක සංඛ්‍යා වන සාධකය.", sourcePage: "Part I - Page 162", relatedConceptIds: ["c04_3_1"] },
    { entryId: "GL01-E10", glossaryId: "GL01", term: "Highest Common Factor (HCF)", sinhalaTerm: "මහා පොදු සාධකය (ම.පො.සා.)", englishTerm: "Highest Common Factor (HCF)", definition: "සංඛ්‍යා කිහිපයක සියලු පොදු සාධක අතුරින් විශාලතම පොදු සාධකය.", sourcePage: "Part I - Page 163", relatedConceptIds: ["c04_5_1"] },
    { entryId: "GL01-E11", glossaryId: "GL01", term: "Least Common Multiple (LCM)", sinhalaTerm: "කුඩාම පොදු ගුණාකාරය (කු.පො.ගු.)", englishTerm: "Least Common Multiple (LCM)", definition: "සංඛ්‍යා කිහිපයකට පොදු වූ ගුණාකාර අතුරින් කුඩාම ගුණාකාරය.", sourcePage: "Part I - Page 163", relatedConceptIds: ["c04_6_1"] },
    { entryId: "GL01-E12", glossaryId: "GL01", term: "Index / Exponent", sinhalaTerm: "දර්ශකය", englishTerm: "Index / Exponent", definition: "පාදයේ ඇති සංඛ්‍යාව කී වාරයක් ගුණ වී ඇත්දැයි දක්වන සංඛ්‍යාව.", sourcePage: "Part I - Page 164", relatedConceptIds: ["c05_1_1"] },
    { entryId: "GL01-E13", glossaryId: "GL01", term: "Base", sinhalaTerm: "පාදය", englishTerm: "Base", definition: "දර්ශක අංකනයේ පුන පුනා ගුණ වන සංඛ්‍යාව හෝ වීජීය සංකේතය.", sourcePage: "Part I - Page 164", relatedConceptIds: ["c05_1_1"] },
    { entryId: "GL01-E14", glossaryId: "GL01", term: "Decade", sinhalaTerm: "දශකය", englishTerm: "Decade", definition: "වසර 10ක කාල පරිච්ඡේදය.", sourcePage: "Part I - Page 165", relatedConceptIds: ["c06_1_1"] },
    { entryId: "GL01-E15", glossaryId: "GL01", term: "Century", sinhalaTerm: "සියවස / ශතවර්ෂය", englishTerm: "Century", definition: "අවුරුදු 100ක කාල පරිච්ඡේදය.", sourcePage: "Part I - Page 165", relatedConceptIds: ["c06_1_1"] },
    { entryId: "GL01-E16", glossaryId: "GL01", term: "Millennium", sinhalaTerm: "සහස්‍රකය", englishTerm: "Millennium", definition: "වසර 1000ක කාල පරිච්ඡේදය.", sourcePage: "Part I - Page 165", relatedConceptIds: ["c06_1_1"] },
    { entryId: "GL01-E17", glossaryId: "GL01", term: "Leap Year", sinhalaTerm: "අධික අවුරුද්ද", englishTerm: "Leap Year", definition: "පෙබරවාරි මාසයට දින 29ක් ඇති, මුළු දින ගණන 366ක් වන අවුරුද්ද.", sourcePage: "Part I - Page 166", relatedConceptIds: ["c06_2_1"] },
    { entryId: "GL01-E18", glossaryId: "GL01", term: "Parallel Lines", sinhalaTerm: "සමාන්තර සරල රේඛා", englishTerm: "Parallel Lines", definition: "එකම තලයක ඇඳි එකිනෙක ඡේදනය නොවන සරල රේඛා.", sourcePage: "Part I - Page 167", relatedConceptIds: ["c07_2_1"] },
    { entryId: "GL01-E19", glossaryId: "GL01", term: "Perpendicular Distance", sinhalaTerm: "ලම්බ දුර", englishTerm: "Perpendicular Distance", definition: "ලක්ෂ්‍යයක සිට සරල රේඛාවකට ඇති කෙටිම දුර.", sourcePage: "Part I - Page 167", relatedConceptIds: ["c07_3_1"] },
    { entryId: "GL01-E20", glossaryId: "GL01", term: "Directed Numbers", sinhalaTerm: "සදිශ සංඛ්‍යා", englishTerm: "Directed Numbers", definition: "විශාලත්වය හා එකිනෙකට ප්‍රතිවිරුද්ධ දිශා නිරූපණය කිරීමට ධන හෝ ඍණ ලකුණක් සහිතව ලියන සංඛ්‍යා.", sourcePage: "Part I - Page 168", relatedConceptIds: ["c08_1_1"] },
    { entryId: "GL01-E21", glossaryId: "GL01", term: "Angle", sinhalaTerm: "කෝණය", englishTerm: "Angle", definition: "සරල රේඛා දෙකක් එක් ලක්ෂ්‍යයකදී හමුවීමෙන් සෑදෙන හැඩය.", sourcePage: "Part I - Page 169", relatedConceptIds: ["c09_1_1"] },
    { entryId: "GL01-E22", glossaryId: "GL01", term: "Proper Fraction", sinhalaTerm: "තථ්‍ය / නියම භාගය", englishTerm: "Proper Fraction", definition: "ලබය හරයට වඩා කුඩා භාගය.", sourcePage: "Part I - Page 170", relatedConceptIds: ["c10_1_1"] },
    { entryId: "GL01-E23", glossaryId: "GL01", term: "Improper Fraction", sinhalaTerm: "විෂම භාගය", englishTerm: "Improper Fraction", definition: "ලබය හරයට වඩා විශාල හෝ සමාන භාගය.", sourcePage: "Part I - Page 170", relatedConceptIds: ["c10_2_1"] },
    { entryId: "GL01-E24", glossaryId: "GL01", term: "Mixed Number", sinhalaTerm: "මිශ්‍ර සංඛ්‍යාව", englishTerm: "Mixed Number", definition: "පූර්ණ සංඛ්‍යාවක සහ තථ්‍ය භාගයක එකතුවක් ලෙස ලියන සංඛ්‍යාව.", sourcePage: "Part I - Page 170", relatedConceptIds: ["c10_2_1"] },
    { entryId: "GL01-E25", glossaryId: "GL01", term: "Decimal Places", sinhalaTerm: "දශම ස්ථාන", englishTerm: "Decimal Places", definition: "දශම තිතට දකුණු පසින් පිහිටන ඉලක්කම් ගණන.", sourcePage: "Part I - Page 171", relatedConceptIds: ["c11_1_1"] },
    { entryId: "GL01-E26", glossaryId: "GL01", term: "Algebraic Expression", sinhalaTerm: "වීජීය ප්‍රකාශනය", englishTerm: "Algebraic Expression", definition: "වීජීය පද එකතු කිරීමෙන් හෝ අඩු කිරීමෙන් සැදෙන ප්‍රකාශනය.", sourcePage: "Part I - Page 172", relatedConceptIds: ["c12_2_1"] },

    // Glossary Part II
    { entryId: "GL02-E01", glossaryId: "GL02", term: "Mass", sinhalaTerm: "ස්කන්ධය", englishTerm: "Mass", definition: "වස්තුවක අඩංගු ද්‍රව්‍ය ප්‍රමාණය.", sourcePage: "Part II - Page 165", relatedConceptIds: ["c13_1_1"] },
    { entryId: "GL02-E02", glossaryId: "GL02", term: "Polygon", sinhalaTerm: "බහු අස්‍රය", englishTerm: "Polygon", definition: "සරල රේඛා ඛණ්ඩ 3කින් හෝ ඊට වැඩි ගණනකින් සමන්විත සංවෘත සරල රේඛීය තල රූපය.", sourcePage: "Part II - Page 165", relatedConceptIds: ["c14_1_1"] },
    { entryId: "GL02-E03", glossaryId: "GL02", term: "Convex Polygon", sinhalaTerm: "උත්තල බහු අස්‍රය", englishTerm: "Convex Polygon", definition: "එක් අභ්‍යන්තර කෝණයක්වත් පරාවර්ත කෝණයක් නොවන බහු අස්‍රය.", sourcePage: "Part II - Page 165", relatedConceptIds: ["c14_2_1"] },
    { entryId: "GL02-E04", glossaryId: "GL02", term: "Concave Polygon", sinhalaTerm: "අවතල බහු අස්‍රය", englishTerm: "Concave Polygon", definition: "අඩුම තරමේ එක් අභ්‍යන්තර කෝණයක්වත් පරාවර්ත කෝණයක් වන බහු අස්‍රය.", sourcePage: "Part II - Page 165", relatedConceptIds: ["c14_2_1"] },
    { entryId: "GL02-E05", glossaryId: "GL02", term: "Regular Polygon", sinhalaTerm: "සවිධි බහු අස්‍රය", englishTerm: "Regular Polygon", definition: "සියලු පාද දිගින් සමාන සහ සියලු කෝණ විශාලත්වයෙන් සමාන බහු අස්‍රය.", sourcePage: "Part II - Page 166", relatedConceptIds: ["c14_3_1"] },
    { entryId: "GL02-E06", glossaryId: "GL02", term: "Equation", sinhalaTerm: "සමීකරණය", englishTerm: "Equation", definition: "වීජීය ප්‍රකාශනයක් සංඛ්‍යාවකට හෝ වෙනත් ප්‍රකාශනයකට '=' ලකුණින් සමාන කළ සම්බන්ධතාව.", sourcePage: "Part II - Page 166", relatedConceptIds: ["c15_1_1"] },
    { entryId: "GL02-E07", glossaryId: "GL02", term: "Formula", sinhalaTerm: "සූත්‍රය", englishTerm: "Formula", definition: "විචල්‍ය කිහිපයක් අතර සබඳතාව දක්වන සමීකරණය.", sourcePage: "Part II - Page 166", relatedConceptIds: ["c15_3_1"] },
    { entryId: "GL02-E08", glossaryId: "GL02", term: "Perimeter", sinhalaTerm: "පරිමිතිය", englishTerm: "Perimeter", definition: "සංවෘත තල රූපයක පැති සියල්ලේ දිගවල එකතුව.", sourcePage: "Part II - Page 167", relatedConceptIds: ["c16_4_1"] },
    { entryId: "GL02-E09", glossaryId: "GL02", term: "Area", sinhalaTerm: "වර්ගඵලය", englishTerm: "Area", definition: "පෘෂ්ඨයක් පැතිරී ඇති ප්‍රමාණය.", sourcePage: "Part II - Page 167", relatedConceptIds: ["c17_1_1"] },
    { entryId: "GL02-E10", glossaryId: "GL02", term: "Circle", sinhalaTerm: "වෘත්තය", englishTerm: "Circle", definition: "කේන්ද්‍රයේ සිට නියත දුරකින් පිහිටන ලක්ෂ්‍යවල පථය.", sourcePage: "Part II - Page 168", relatedConceptIds: ["c18_1_1"] },
    { entryId: "GL02-E11", glossaryId: "GL02", term: "Radius", sinhalaTerm: "අරය", englishTerm: "Radius", definition: "කේන්ද්‍රයේ සිට වෘත්තය මත ලක්ෂ්‍යයකට ඇති දුර.", sourcePage: "Part II - Page 168", relatedConceptIds: ["c18_2_1"] },
    { entryId: "GL02-E12", glossaryId: "GL02", term: "Diameter", sinhalaTerm: "විෂ්කම්භය", englishTerm: "Diameter", definition: "කේන්ද්‍රය හරහා යන සේ වෘත්තය මත ලක්ෂ්‍ය දෙකක් යා කරන සරල රේඛා ඛණ්ඩය.", sourcePage: "Part II - Page 168", relatedConceptIds: ["c18_2_1"] },
    { entryId: "GL02-E13", glossaryId: "GL02", term: "Volume", sinhalaTerm: "පරිමාව", englishTerm: "Volume", definition: "ඝන වස්තුවක් අවකාශයේ ගන්නා ඉඩ ප්‍රමාණය.", sourcePage: "Part II - Page 169", relatedConceptIds: ["c19_1_1"] },
    { entryId: "GL02-E14", glossaryId: "GL02", term: "Ratio", sinhalaTerm: "අනුපාතය", englishTerm: "Ratio", definition: "එකම ඒකකයෙන් වූ ප්‍රමාණ අතර සංඛ්‍යාත්මක සම්බන්ධතාව.", sourcePage: "Part II - Page 169", relatedConceptIds: ["c21_1_1"] },
    { entryId: "GL02-E15", glossaryId: "GL02", term: "Percentage", sinhalaTerm: "ප්‍රතිශතය", englishTerm: "Percentage", definition: "සියයෙන් පංගු ප්‍රමාණය නිරූපණය කරන සංකල්පය.", sourcePage: "Part II - Page 170", relatedConceptIds: ["c22_1_1"] },
    { entryId: "GL02-E16", glossaryId: "GL02", term: "Cartesian Plane", sinhalaTerm: "කාටීසීය තලය", englishTerm: "Cartesian Plane", definition: "ලම්බකව ඡේදනය වන x සහ y අක්ෂ සහිත තලය.", sourcePage: "Part II - Page 171", relatedConceptIds: ["c23_1_1"] },
    { entryId: "GL02-E17", glossaryId: "GL02", term: "Coordinates", sinhalaTerm: "ඛණ්ඩාංක", englishTerm: "Coordinates", definition: "කාටීසීය තලයක ලක්ෂ්‍යයක පිහිටීම දක්වන (x, y) සංඛ්‍යා යුගල.", sourcePage: "Part II - Page 171", relatedConceptIds: ["c23_1_1"] },
    { entryId: "GL02-E18", glossaryId: "GL02", term: "Square Pyramid", sinhalaTerm: "සමචතුරස්‍ර ප්‍රමිඩය", englishTerm: "Square Pyramid", definition: "පතුල සමචතුරස්‍රයක් වූ ප්‍රමිඩය.", sourcePage: "Part II - Page 172", relatedConceptIds: ["CH25-C02"] },
    { entryId: "GL02-E19", glossaryId: "GL02", term: "Triangular Prism", sinhalaTerm: "ත්‍රිකෝණ ප්‍රිස්මය", englishTerm: "Triangular Prism", definition: "සමාන ත්‍රිකෝණාකාර මුහුණත් 2ක් හා ඍජුකෝණාස්‍ර 3ක් ඇති ප්‍රිස්මය.", sourcePage: "Part II - Page 172", relatedConceptIds: ["CH25-C03"] },
    { entryId: "GL02-E20", glossaryId: "GL02", term: "Euler's Relation", sinhalaTerm: "ඔයිලර් සම්බන්ධතාව", englishTerm: "Euler's Relation", definition: "බහුතලයක F + V = E + 2 සබඳතාව.", sourcePage: "Part II - Page 172", relatedConceptIds: ["CH25-C04"] },
    { entryId: "GL02-E21", glossaryId: "GL02", term: "Tessellation", sinhalaTerm: "ටෙසලාකරණය", englishTerm: "Tessellation", definition: "තලයක් මත එකම හැඩැති රූප හිඩැස් නැතිව ඇසිරීමේ රටාව.", sourcePage: "Part II - Page 173", relatedConceptIds: ["CH28-C01"] },
    { entryId: "GL02-E22", glossaryId: "GL02", term: "Likelihood", sinhalaTerm: "විය හැකියාව", englishTerm: "Likelihood", definition: "සිදුවීමක් සිදු වීමේ ප්‍රවණතාව හෝ හැකියාව.", sourcePage: "Part II - Page 174", relatedConceptIds: ["CH29-C01"] }
];

if (typeof window !== 'undefined') {
    window.GLOSSARY_DATA = GLOSSARY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GLOSSARY_DATA };
}
