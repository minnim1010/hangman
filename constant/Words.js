const Words = [];

// 길이가 4인 단어 10개
const words4 = ["book", "cake", "jump", "flag", "tree", "card", "love", "home", "ball", "rain"];
// 길이가 5인 단어 15개
const words5 = ["apple", "happy", "plant", "watch", "quick", "smile", "beach", "music", "party", "dance", "dream", "paint", "horse", "chair", "laugh"];
// 길이가 6인 단어 20개
const words6 = ["school", "summer", "winter", "family", "doctor", "pencil", "friend", "market", "coffee", "garden", "window", "flower", "camera", "sister", "forest", "circus", "island", "tunnel", "pillow", "guitar"];
// 길이가 7인 단어 20개
const words7 = ["holiday", "clothes", "bicycle", "balloon", "backpack", "country", "evening", "library", "kangaroo", "necklace", "rainbow", "mountain", "airplane", "elephant", "daughter", "balloon", "bicycle", "company", "package", "morning"];
// 길이가 8인 단어 20개
const words8 = ["daughter", "football", "hospital", "magazine", "pineapple", "butterfly", "president", "secretary", "telephone", "adventure", "chocolate", "girlfriend", "helicopter", "strawberry", "television", "beautiful", "celebrate", "important", "millionaire", "mysterious"];
// 길이가 9 이상인 단어 20개
const wordsOver9 = ["celebration", "basketball", "grandfather", "information", "university", "refrigerator", "revolutionary", "skyscraper", "responsibility", "independence", "entertainment", "multiplication", "authorization", "celebration", "international", "grandmother", "imagination", "headquarters", "refrigerator", "satisfaction"];

Words.push(...words4, ...words5, ...words6, ...words7, ...words8, ...wordsOver9);

export {Words}