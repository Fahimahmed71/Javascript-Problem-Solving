/* ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।  */
function anaToVori(ana) {
  let anaEl = 16;

  const math = anaEl * ana;

  return math;
}

let voriEl = 10;
const vori = anaToVori(voriEl);
console.log(vori);

/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।  */
const সিঙ্গারাPrice = 7;
const সমুচাPrice = 10;
const জিলাপিPrice = 15;

function pandaCost(সিঙ্গারা, সমুচা, জিলাপি) {
  const সিঙ্গারাTotel = সিঙ্গারাPrice * সিঙ্গারা;
  const সমুচাTotel = সমুচাPrice * সমুচা;
  const জিলাপিTotal = জিলাপিPrice * জিলাপি;

  const totel = সিঙ্গারাTotel + সমুচাTotel + জিলাপিTotal;

  return totel;
}

let panda = pandaCost(1, 2, 5);
console.log(panda);

/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */
function picnicBudget(people) {
  const takaHundred = 5000;
  const takaTwoHundred = 4000;

  if (people <= 100) {
    const takaHundred = people * 5000;
    return takaHundred;
  } else if (people <= 200) {
    const remainPeopleTwo = people - 100;
    const takaTwoHundred = 4000 * remainPeopleTwo;

    const totel = takaTwoHundred + takaHundred * 100;

    return totel;
  } else if (people <= 300) {
    const remainPeopleThree = people - 200;
    const takaThreeHundred = 3000 * remainPeopleThree;

    const totel = takaThreeHundred + takaHundred + takaTwoHundred * 200;
    return totel;
  } else {
    return "Add number less than 400";
  }
}

let picnicBudgetEl = picnicBudget(201);
console.log(picnicBudgetEl);

/* ৪. ফাংশন নেম দিতে হবে oddFriend: বিস্তারিত ভিডিওতে দেখো।  */
function oddFriend(friend) {
  let friendItem = [];

  for (let i = 0; i < friend.length; i++) {
    const friendIndex = friend[i];
    if (friendIndex <= friend[0]) {
      console.log(friendIndex);
      friendItem = friendIndex;
    }
  }
  return friendItem;
}

let friendList = ["Hughs", "Mary", "Scott", "Gary", "Smith"];
const friendEl = oddFriend(friendList);
console.log(friendEl);
