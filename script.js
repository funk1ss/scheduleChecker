const schedule = {
    "Понедельник": {
        "one": "[8:00] ИКТ [313каб.]",
        "two": "[9:30] Способы программирования [310каб.]",
        "three": "[11:00] Код программирования [211каб.]",
        "four": "[12:50] Физическая культура",
        "five": "[14:20] -"
    },
    "Вторник": {
        "one": "[8:00] -",
        "two": "[9:30] -",
        "three": "[11:00] Способы программирования [310каб.]",
        "four": "[12:50] Экономика [303каб.]",
        "five": "[14:20] Делопроизовдство [104каб.]"
    },
    "Среда": {
        "one": "[8:00] Способы программирования [310каб.]",
        "two": "[9:30] Код программирования [211каб.]",
        "three": "[10:50] Культурология [106каб.]",
        "four": "[12:50] -",
        "five": "[14:20] -"
    },
    "Четверг": {
        "one": "[8:00] -",
        "two": "[9:30] ИКТ [313каб.]",
        "three": "[11:00] Экономика [303каб.]",
        "four": "[12:50] Код программирования [211каб.]",
        "five": "[14:20] Делопроизводство [104каб.]"
    },
    "Пятница": {
        "one": "[8:00] Нейронные сети [308каб.]",
        "two": "[9:30] Основы социологии и политологии [106каб.]",
        "three": "[11:00] Физическая культура",
        "four": "[12:50] ИКТ [313каб.]",
        "five": "[14:20] -"
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
    let endTime
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
    else if (!schedule[nextDay].one.includes("-")){
        arrivingTime = "8:00"
    }
    else if (!schedule[nextDay].two.includes("-")){
        arrivingTime = "9:30"
    }
    else if (!schedule[nextDay].three.includes("-")){
        arrivingTime = "11:00"
    }
    else if (!schedule[nextDay].four.includes("-")){
        arrivingTime = "12:20"
    }


    if (nextDay == "Выходной"){
        arrivingTime = "-"
    }
    else if (schedule[nextDay].four.includes("-")){
        endTime = "12:20"
    }
    else if (schedule[nextDay].five.includes("-")){
        endTime = "14:10"
    }
    

    if (nextDay != "Выходной") {
        let formattedSubjects = subjectsList.map(subject => {
            return subject.replace(/\[(.*?)\]/g, '<span class="text-green-500">[$1]</span>');
        });
    
        Swal.fire({
            title: nextDay,
            html: '<div class="text-left">' + formattedSubjects.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Пары начнутся в ' + arrivingTime,
            confirmButtonText: 'Ok',
        });
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
    else if (!schedule[currentDay()].one.includes("-")){
        arrivingTime = "8:00"
    }
    else if (!schedule[currentDay()].two.includes("-")){
        arrivingTime = "9:30"
    }
    else if (!schedule[currentDay()].three.includes("-")){
        arrivingTime = "11:00"
    }
    else if (!schedule[currentDay()].four.includes("-")){
        arrivingTime = "12:20"
    }

    if (currentDay() == "Выходной"){
        arrivingTime = "-"
    }
    else if (schedule[currentDay()].four.includes("-")){
        endTime = "12:20"
    }
    else if (schedule[currentDay()].five.includes("-")){
        endTime = "14:10"
    }
    else{
        endTime = "15:40"
    }

    if (currentDay() != "Выходной") {
        let formattedSubjects = subjectsList.map(subject => {
            return subject.replace(/\[(.*?)\]/g, '<span class="text-green-500">[$1]</span>');
        });
    
        Swal.fire({
            title: currentDay(),
            html: '<div class="text-left">' + formattedSubjects.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Пары начнутся в ' + arrivingTime,
            confirmButtonText: 'Ok',
        });
    }
    else{
        Swal.fire({
            title: currentDay(),
            icon: 'info',
            confirmButtonText: 'С кайфом',
          })
    }
}