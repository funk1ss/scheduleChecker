const schedule = {
    "Понедельник": {
        "one": "ИКТ",
        "two": "Способы программирования",
        "three": "Код программирования",
        "four": "Физическая культура",
        "five": "-"
    },
    "Вторник": {
        "one": "-",
        "two": "-",
        "three": "Способы программирования",
        "four": "Экономика",
        "five": "Делопроизовдство"
    },
    "Среда": {
        "one": "Способы программирования",
        "two": "Код программирования",
        "three": "Культурология",
        "four": "ИКТ",
        "five": "-"
    },
    "Четверг": {
        "one": "-",
        "two": "ИКТ",
        "three": "Экономика",
        "four": "Код программирования",
        "five": "Делопроизводство"
    },
    "Пятница": {
        "one": "Нейронные сети",
        "two": "Основы социологии и политологии",
        "three": "Физическая культура",
        "four": "-",
        "five": "-"
    }
}

const currentDay = () => {
    const date = new Date();
    const options = { weekday: 'long' };
    let dayOfWeek = date.toLocaleString('en-US', options);
    
    
    switch (dayOfWeek) {
        case "Monday":
            dayOfWeek = "Понедельник";
            break;
        case "Tuesday":
            dayOfWeek = "Вторник";
            break;
        case "Wednesday":
            dayOfWeek = "Среда";
            break;
        case "Thursday":
            dayOfWeek = "Четверг";
            break;
        case "Friday":
            dayOfWeek = "Пятница";
            break;
    
        default:
            break;
    }

    return dayOfWeek
}


const nextDayInfo = () => {
    let nextDay
    let arrivingTime
    switch (currentDay()) {
        case "Понедельник":
            nextDay = "Вторник"
            break;
        case "Вторник":
            nextDay = "Среда"
            break;
        case "Среда":
            nextDay = "Четверг"
            break;
        case "Четверг":
            nextDay = "Пятница"
            break;
    
        default:
            nextDay = "Выходной"
            break;
    }
    let currentSchedule = schedule[nextDay]
    let subjectsList = []
    
    let counter = 0
    for (let item in currentSchedule){
        counter++
        subjectsList.push(counter +". "+ currentSchedule[item])
    }

    if (nextDay == "Выходной"){
        arrivingTime = "-"
    }
    else if (schedule[nextDay].one != "-"){
        arrivingTime = "8:00"
    }
    else if (schedule[nextDay].two != "-"){
        arrivingTime = "9:30"
    }
    else if (schedule[nextDay].three != "-"){
        arrivingTime = "11:00"
    }
    else if (schedule[nextDay].four != "-"){
        arrivingTime = "12:20"
    }
    

    if(nextDay != "Выходной"){
        Swal.fire({
            title: nextDay,
            html: '<div class="text-left">' + subjectsList.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Пары начнутся в ' + arrivingTime,
            confirmButtonText: 'Ok',
          })
    }
    else{
        Swal.fire({
            title: nextDay,
            icon: 'info',
            confirmButtonText: 'С кайфом',
          })
    }


}

const todaysInfo = () => {
    let currentSchedule = schedule[currentDay()]
    let subjectsList = []
    
    let counter = 0
    for (let item in currentSchedule){
        counter++
        subjectsList.push(counter +". "+ currentSchedule[item])
    }

    if (currentDay() == "Выходной"){
        arrivingTime = "-"
    }
    else if (schedule[currentDay()].one != "-"){
        arrivingTime = "8:00"
    }
    else if (schedule[currentDay()].two != "-"){
        arrivingTime = "9:30"
    }
    else if (schedule[currentDay()].three != "-"){
        arrivingTime = "11:00"
    }
    else if (schedule[currentDay()].four != "-"){
        arrivingTime = "12:20"
    }

    if(currentDay() != "Выходной"){
        Swal.fire({
            title: currentDay(),
            html: '<div class="text-left">' + subjectsList.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Пары начнутся в ' + arrivingTime,
            confirmButtonText: 'Ok',
          })
    }
    else{
        Swal.fire({
            title: currentDay(),
            icon: 'info',
            confirmButtonText: 'С кайфом',
          })
    }
}