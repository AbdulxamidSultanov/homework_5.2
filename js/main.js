import { randomNumbersTo5, randomNumbersTo100 } from "./alghortims.js";

// ============
// 1-masala:
/*Funksiya uchun xato tashlash
Shart:
        Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:
"       Faktorialni hisoblash uchun musbat son kerak!"
        Funksiya try...catch orqali chaqirilganda:
        Xato yuz bersa, konsolga "Xato yuz berdi: xato haqida xabar" yozilsin.
        Xato bo‘lmasa, natija qaytarilsin.
*/

const checkInputNumberTo100 = (num) => {
  if (typeof num !== "number" || num < 0) {
    throw new Error("Faktorialni hisoblash uchun musbat son kerak!");
  }
  let factorial = 1;

  for (let i = 1; i < num; i++) {
    factorial *= num;
  }
  return factorial;
};

try {
  console.log(checkInputNumber(5));
} catch (error) {
  console.error("Xato yuz berdi:", error.message);
}

// ============
// 2-masala:
/*
Array bilan ishlashda xatolarni boshqarish
Shart:
    Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:
    Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:
    Xato xabari: "Massiv uzatilmadi!".
    Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:
    Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".
    Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.
    Funksiya xato bo‘lmasa, massivdagi barcha sonlarning o‘rtacha qiymatini qaytarishi kerak.

*/
const calculateSredniyZnacheniya = (arr) => {
  if (typeof arr !== "object" || arr === undefined) {
    throw new Error("Massiv uzatilmadi");
  }
  let sum = 0;
  let country = 0;
  arr.forEach((num) => {
    if (isNaN(num)) {
      throw new Error("Massivda faqat sonlar bo`lishi kerak!");
    }
    sum += num;
    country++;
  });
  return sum / country;
};

const newArr = [1, 2, 3, 4];

try {
  console.log(calculateSredniyZnacheniya(newArr));
} catch (error) {
  console.error("Xato yuz berdi:", error.message);
}

// ============
// 3-masala:
/* O‘z xatolik funksiyasini yaratish
    Shart:
        Funksiya yozing, u ikki sonni bo‘lishni bajaradi.
        Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
        Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.
        Funksiyani try...catch orqali chaqiring:
        Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.
        Xato bo‘lmasa, natijani qaytaring.
*/

// ============
// 4-masala:
//  Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.
const arr = randomNumbersTo100(10);
let sum = 0;
arr.forEach((arr) => {
  if (arr % 2 == 0) {
    sum += arr;
  }
});

console.log(sum);

// ============
// 5-masala:
//Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
const arr1 = randomNumbersTo100(10);

let res = arr1.filter((arrNumbers) => {
  if (arrNumbers % 2 == 0) {
    return arrNumbers;
  }
});
console.log(res);
// ============
// 6-masala:
//Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
const arr2 = randomNumbersTo100(10);

let res1 = arr2.filter((arrNumbers) => {});

// ============
// 7-masala:
//Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.
const arr3 = randomNumbersTo100(10);

let minIndex = arr3[0];
let maxIndex = arr3[0];

arr3.forEach((arrIndex) => {
  if (arrIndex < minIndex) {
    minIndex = arrIndex;
  } else if (maxIndex < arrIndex) {
    maxIndex = arrIndex;
  }
});

if (minIndex > 0) {
  console.log(maxIndex - minIndex);
} else {
  console.log(maxIndex + minIndex);
}
// ============
// 8-masala:
//Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.
const arr4 = randomNumbersTo100(10);
let res2 = [];

arr4.forEach((arr) => {
  res2.unshift(arr);
});

console.log(res2);

// ============
// 9-masala:
//Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.
const arr5 = randomNumbersTo5(10);

const findNumbers = (number) => {
  let counter = 0;
  arr5.forEach((arr) => {
    if (number == arr) {
      counter++;
    }
  });
  return counter;
};

// ============
// 10-masala:
//Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.
const arr6 = ["apple", "banana", "kiwi", "orange", "pear"];
function sorting(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

// ============
// 11-masala:
//Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).
const arr7 = randomNumbersTo100(10);

const divideArray = (arr) => {
  const firstArrLength = arr.length / 2;

  const firstArr = arr.slice(0, firstArrLength);
  const secondArr = arr.slice(firstArrLength, arr.length);
  return {
    firstArr,
    secondArr,
  };
};
// ============
// 12-masala:
//Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.
const arr8 = randomNumbersTo100(10);

const filterArr = (arr) => {
  const res = arr.filter((arr) => {
    if (arr > 0) {
      return arr;
    }
  });
  return res;
};
// ============
// 13-masala:
//Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.
const arr9 = randomNumbersTo100(10);

const ortachaQiymati = (arr) => {
  let sum = 0;
  arr.forEach((arr) => {
    sum += arr;
  });
  return sum / arr.length;
};
// ============
// 14-masala:
//Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.
const arr10 = randomNumbersTo100(10);

const doublePrintArr = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    res.push(arr[i]);
  }
  return res;
};
// ============
// 15-masala:
//Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.
const arr11 = ["apple", "banana", "kiwi", "orange", "pear"];

const toUperCaseFirstLetter = (arr) => {
  const res = arr.map((arr) => {
    return arr[0].toUpperCase() + arr.slice(1);
  });
  return res;
};

console.log(toUperCaseFirstLetter(arr11));
// ============
// 16-masala:
//Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).
const arr12 = randomNumbersTo100(10);

const filterArrNumbers = (arr, select) => {
  let selected = select.toLowerCase();
  const res = arr.sort((a, b) => {
    if (selected === "osish") {
      return a - b;
    } else if (selected === "kamayish") {
      return b - a;
    } else {
      throw new Error("Tartib notgri tanlangan");
    }
  });
  return res;
};

try {
  console.log(filterArrNumbers(arr12, "kamayih"));
} catch (error) {
  console.error("Hatolik:", error.message);
}

// ============
// 17-masala:
//Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.
const arr13 = ["apple", "banana", "kiwi", "orange", "pear"];

const returnTallAndSmallLetters = (arr) => {
  let minLength = arr[0].length;
  let maxLength = arr[0].length;
  let tallLeter = arr[0];
  let smallLeter = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minLength > arr[i].length) {
      minLength = arr[i].length;
      smallLeter = arr[i];
    }
    if (maxLength < arr[i].length) {
      maxLength = arr[i].length;
      tallLeter = arr[i];
    }
  }

  return {
    tallLeter,
    smallLeter,
  };
};
// ============
// 18-masala:
//Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).
const arr14 = randomNumbersTo100(10);

const numbersInArrToString = (arr) => {
  let res = [];
  arr.forEach((arr) => {
    res.push(arr.toString());
  });
  return res;
};
// ============
// 19-masala:
//Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.
let str = "Salom, dunyo!";

const unliHariflarSoni = (str) => {
  const unliHariflar = ["i", "e", "a", "o", "u", "o"];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (unliHariflar.includes(str[i].toLowerCase())) {
      counter++;
    } else {
    }
  }
  return counter;
};
// ============
// 20-masala:
//Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.
const deleteWhiteSpace = (str) => {
  let res = str.replaceAll(" ", "");
  return res;
};
// ============
// 21-masala:
//Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.
const replaceStr = (str) => {
  const splitStr = str.split(" ");
  let res;
  for (let i = 0; i < splitStr.length; i += 2) {
    res = str.replaceAll(splitStr[i], splitStr[i + 1]);
    if ((i = splitStr.length)) {
      res = str.replaceAll(
        splitStr[splitStr.length - 1],
        splitStr[splitStr.length]
      );
    }
  }
  return res;
};
// ============
// 22-masala:
//Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.
const arrangeStrFromLength = (str) => {
  let tallStr = str.split(" ");
  let tallStrIndex = tallStr[0];
  const res = tallStr.sort((a, b) => {
    return b.length - a.length;
  });
  return res.join(" ");
};
// ============
// 23-masala:
//Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.
const countRepetLetter = (str, findElement) => {
  let clearLetter = str
    .toLowerCase()
    .replace(/\W|_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  let strToObject = clearLetter.split(" ");
  let counter = 0;
  strToObject.forEach((element) => {
    if (element === findElement) {
      counter++;
    }
  });
  return counter;
};
// ============
// 24-masala:
//Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.
const replaceLetterLowerAndUpper = (str) => {
  const replaced = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      replaced.push(str[i].toUpperCase());
    } else {
      replaced.push(str[i].toLowerCase());
    }
  }
  return replaced.join("");
};
// ============
// 25-masala:
//Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.
const calculateStrNumbers = (str) => {
  let strToObject = str.split(" ");
  let sum = 0;
  strToObject.forEach((number) => {
    let strToNumber = parseInt(number);
    sum += strToNumber;
  });
  return sum;
};
// ============
// 26-masala:
//Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.
const deleteRepetLetters = (str) => {
  const strToArr = str.split("");
  const res = strToArr.map((arr) => {
    for (let i = 0; i < strToArr.length; i++) {
      if (arr === strToArr[i]) {
        delete strToArr[i];
      }
    }
    return arr;
  });
  return res.join("");
};
// ============
// 27-masala:
//Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.
const reverseStr = (str) => {
  return str.split("").reverse().join(" ");
};
// ============
// 28-masala:
//Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.
const upperCaseFirstLetter = (str) => {
  const strToArr = str.split(" ");
  const res = strToArr.map((arr) => {
    return arr.charAt(0).toUpperCase() + arr.slice(1);
  });
  return res.join(" ");
};
// ============
// 29-masala:
//Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.
const sortWordsAlphabetically = (str) => {
  return str.split(" ").sort((a, b) => a.localeCompare(b));
};
// ============
// 30-masala:
//Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.
const removeWhiteSpaceInArr = (arr) => {
  return arr.join("");
};
// ============
// 31-masala:
//Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.
const
// ============
// 32-masala:
//Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.

// ============
// 33-masala:
//Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
//
