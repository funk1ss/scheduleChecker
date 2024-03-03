
const nextDayInfo = () => {
    let nextDay
    let arrivingTime
    let endTime
    const today = new Date();
    today.setDate(today.getDate() + 1);

    let nextDayObj = {
        "Понедельник": "Вторник",
        "Вторник": "Среда",
        "Среда": "Четверг",
        "Четверг": "Пятница",
        "Пятница": "Суббота",
        "Суббота": "Воскресенье",
        "Воскресенье": "Понедельник",
    } 
    nextDay = nextDayObj[currentDay()]
    let currentSchedule = schedule[nextDay]
    let subjectsList = []
    let counter = 0
    console.log(schedule[nextDay])

    for (let item in currentSchedule){
        counter++
        subjectsList.push(counter +". "+ currentSchedule[item])
    }

    if (nextDay == "Суббота" || nextDay == "Воскресенье"){
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


    if (nextDay == "Суббота" || nextDay == "Воскресенье"){
        endTime = "-"
    }
    else if (schedule[nextDay].four.includes("-")){
        endTime = "12:20"
    }
    else if (schedule[nextDay].five.includes("-")){
        endTime = "14:10"
    }
    else{
        endTime = "15:40"
    }
    

    if ((nextDay != "Суббота" && nextDay != "Воскресенье")) {
        let formattedSubjects = subjectsList.map(subject => {
            return subject.replace(/\[(.*?)\]/g, '<span class="text-green-500">[$1]</span>');
        });
    
        Swal.fire({
            title: nextDay,
            html: '<div class="text-left">' + formattedSubjects.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Начало: ' + arrivingTime + "<br> Конец: " + endTime,
            confirmButtonText: 'OK',
        });
    }
    else{
        Swal.fire({
            title: nextDay,
            icon: 'info',
            confirmButtonText: 'Кайф',
          })
    }


}

const todaysInfo = () => {
    let currentSchedule = schedule[currentDay()]
    let subjectsList = []
    let counter = 0
    const today = new Date();

    for (let item in currentSchedule){
        counter++
        subjectsList.push(counter +". "+ currentSchedule[item])
    }

    if (currentDay() == "Суббота" || currentDay() == "Воскресенье"){
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

    if (currentDay() == "Суббота" || currentDay() == "Воскресенье"){
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

    if ((currentDay() != "Суббота" && currentDay() != "Воскресенье") && currentDay() != "Понедельник") {
        let formattedSubjects = subjectsList.map(subject => {
            return subject.replace(/\[(.*?)\]/g, '<span class="text-green-500">[$1]</span>');
        });
    
        Swal.fire({
            title: currentDay(),
            html: '<div class="text-left">' + formattedSubjects.join("<br>") + '</div>',
            icon: 'info',
            footer: 'Начало: ' + arrivingTime + "<br> Конец: " + endTime,
            confirmButtonText: 'OK',
        });
    }

    else{
        Swal.fire({
            title: currentDay(),
            icon: 'info',
            confirmButtonText: 'Кайф',
          })
    }
}




