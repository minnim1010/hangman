const Words = [];

// 길이가 4인 단어 10개
const words4 = [
  "book", "desk", "tree", "fish", "ball", "park", "bird", "lamp", "rose", "moon"];
// 길이가 5인 단어 10개
const words5 = [
  "apple", "beach", "chair", "dream", "earth", "fence", "grape", "house", "juice", "laugh"];
// 길이가 6인 단어 10개
const words6 = [
  "banana", "castle", "donkey", "eleven", "friday", "guitar", "honest", "jacket", "kitten", "laptop"];
// 길이가 7인 단어 10개
const words7 = [
  "bicycle", "captain", "freedom", "history", "journey", "machine", "natural", "quality", "sibling", "victory"];
// 길이가 8 이상인 단어 10개
const wordsOver8 = [
  "champion", "daughter", "friendly", "hospital", "language", "elephants", "marketing", "nutrition", "whispered", "persistence"];

Words.push(...words4, ...words5, ...words6, ...words7, ...wordsOver8);

export {Words}