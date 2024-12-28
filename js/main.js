import randomNumbers from "./alghortims.js"
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

const checkInputNumber = (num) => {
    if(typeof num !== 'number' || num < 0){
        throw new Error("Faktorialni hisoblash uchun musbat son kerak!")
    }
    let factorial = 1

    for(let i = 1; i < num; i++){
        factorial *= num
    }
    return factorial
}

try {
    console.log(checkInputNumber(5))
} catch (error) {
    console.error('Xato yuz berdi:', error.message)
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
    if(typeof arr !== 'object' || arr === undefined){
        throw new Error("Massiv uzatilmadi")
    }
    let sum = 0
    let country = 0
    arr.forEach(num => {
        if(isNaN(num)){
            throw new Error('Massivda faqat sonlar bo`lishi kerak!')
        }
        sum += num
        country++
    });
    return sum / country
}

const newArr = [1, 2, 3, 4]

try {
    console.log(calculateSredniyZnacheniya(newArr))
} catch (error) {
    console.error("Xato yuz berdi:", error.message)
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
const arr = randomNumbers(10)
let sum = 0
arr.forEach(arr => {
    if(arr % 2 == 0){
        sum += arr
    }
})

console.log(sum)

// ============
// 5-masala:
//Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
const arr1 = randomNumbers(10)

let res = arr1.filter(arrNumbers => {
    if(arrNumbers % 2 == 0){
        return arrNumbers
    }
})
console.log(res)
// ============
// 6-masala:
//Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
const arr2 = randomNumbers(10)

let res1 = arr2.filter(arrNumbers => {
    
})

// ============
// 7-masala:
//Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.


// ============
// 8-masala:
//Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.


// ============
// 9-masala:
//Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.


// ============
// 10-masala:
//Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.


// ============
// 11-masala:
//Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).


// ============
// 12-masala:
//Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.


// ============
// 13-masala:
//Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.


// ============
// 14-masala:
//Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.


// ============
// 15-masala:
//Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.


// ============
// 16-masala:
//Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).


// ============
// 17-masala:
//Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

// ============
// 18-masala:
//Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).


// ============
// 19-masala:
//

// ============
// 20-masala:
//

// ============
// 21-masala:
//

// ============
// 22-masala:
//

// ============
// 23-masala:
//

// ============
// 24-masala:
//

// ============
// 25-masala:
//

// ============
// 26-masala:
//

// ============
// 27-masala:
//

// ============
// 28-masala:
//

// ============
// 29-masala:
//

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

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
