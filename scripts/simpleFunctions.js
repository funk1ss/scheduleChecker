const alertOnMonday = () => {
    if (currentDay() == "Понедельник"){
        Swal.fire({
            title: "Внимание!",
            icon: 'warning',
            html: 'Сегодня понедельник, день практики, посмотри какая группа приходит раньше а какая позже.',
            footer: 'P.S тыкни "Что Сегодня?" там написано',
            confirmButtonText: 'OK',
          })
    }
    else if (currentDay() == "Воскресенье"){
        Swal.fire({
            title: "Внимание!",
            icon: 'warning',
            html: 'Завтра понедельник, день практики, посмотри какая группа приходит раньше а какая позже.',
            footer: 'P.S тыкни "Что Завтра?" там написано',
            confirmButtonText: 'OK',
          })
    }
}

const currentDay = () => {
    const date = new Date();
    const options = { weekday: 'long' };
    let dayOfWeek = date.toLocaleString('en-US', options);
    let dayOfWeekObj = {
        "Monday": "Понедельник",
        "Tuesday": "Вторник",
        "Wednesday": "Среда",
        "Thursday": "Четверг",
        "Friday": "Пятница",
        "Saturday": "Суббота",
        "Sunday": "Воскресенье"
    } 
    dayOfWeek = dayOfWeekObj[dayOfWeek]

    return dayOfWeek
}

function determineWeek(date) {
    const startDate = new Date(date.getFullYear(), 0, 1); 
    const dayOfYear = Math.floor((date - startDate) / (24 * 60 * 60 * 1000)); 
    const week = Math.floor(dayOfYear / 7); 

    
    if (week % 2 === 0) {
        return "1 группа";
    } else {
        return "2 группа";
    }
}

const fillSchedule = () => {
    var parentElement = document.getElementById("subjectsList")
    parentElement.classList.toggle("visible")
    parentElement.classList.toggle("invisible")
    parentElement.classList.toggle("show");
    parentElement.innerHTML = "";

    for (let day in schedule) {
        let itemTitle = document.createElement('div');
        itemTitle.textContent = day;
        
        parentElement.appendChild(itemTitle);
        let counter = 0;
        for (let item in schedule[day]) {
            counter++;
            let text = counter + ".  " + schedule[day][item];
            let formattedText = text.replace(/\[(.*?)\]/g, '<span class="text-green-400">[$1]</span>');
            let listItem = document.createElement('div');
            listItem.innerHTML = formattedText;
            itemTitle.appendChild(listItem);
            itemTitle.classList.add("bg-zinc-600", "mb-2", "rounded", "p-3", "text-zinc-200");
        }
    }
}