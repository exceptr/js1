while (true) {
    const numberToGuess = Math.floor(Math.random() * 1000);

    console.log("Загаданное число:", numberToGuess);

    const numberFromUser = prompt("Введите число от 0 до 999");

    console.log("Вы ввели:", +numberFromUser);
    if (numberFromUser === "q") {
        break;
    } else if (isNaN(numberFromUser) || numberFromUser <= 0 || numberFromUser > 999) {
        alert("Вы ввели не число от 0 до 999");
    }else if (+numberFromUser === numberToGuess) {
        alert("Вы угадали!");
    } else if (+numberFromUser > numberToGuess) {
        alert("Вы не угадали! Загаданное число меньше введённого");
    } else if (+numberFromUser < numberToGuess) {
        alert("Вы не угадали! Загаданное число больше введённого")
    }
}