/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। */
function feetToInch(feet) {
  let inch = 12;

  if (feet <= 0) {
    return "input positive num";
  } else {
    const convert = inch * feet;
    return convert;
  }
}

const feetToInchEl = feetToInch(555);
console.log(feetToInchEl);

/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */
function centimeterToMeter(cm) {
  let m = 0.01;

  if (cm <= 0) {
    return "input positive num";
  } else {
    const convert = m * cm;
    return convert;
  }
}

const centimeterToMeterEl = centimeterToMeter(34);
console.log(centimeterToMeterEl);

/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড 
বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

 প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

 সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

 তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

 
 এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।
 উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
*/
function paperRequirements(book1, book2, book3) {
  const book = book1 + book2 + book3;
  return book;
}

const paperRequirementsEl = paperRequirements(100, 200, 300);
console.log(paperRequirementsEl);

/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

"Jack", "Corey", "Madison", "Linda", "Harry"
 */
function bestFriend(friend) {
  let friendEl = friend[0];

  for (let i = 0; i < friend.length; i++) {
    const element = friend[i];

    if (friendEl < element) {
      friendEl = element;
    }
  }
  return friendEl;
}

const bestFriendEl = ["Jack", "Corey", "Madison", "Linda", "Harry"];
const name = bestFriend(bestFriendEl);
console.log(name);

/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে
 */
function number(num) {
  let posativenNum = [];

  for (let i = 0; i < num.length; i++) {
    let numEl = num[i];

    if (posativenNum < numEl) {
      console.log(numEl);
    }
  }
  return posativenNum;
}

const numberEl = [98, -45, 14, 100, -35, -10, 23, 34, 0, -1, 4, 7];
const arr = number(numberEl);
console.log(arr);
