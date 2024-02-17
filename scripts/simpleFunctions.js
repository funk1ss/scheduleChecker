let burgerIsOpened = false;
let scheduleIsOpened = false;
let isAnimating = false;
let groupListFilled = false;
let groupListOpened = false;
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

    console.log(scheduleIsOpened,groupListOpened)
    if (groupListOpened){
        groupList()
        groupListOpened = false
    }

    if (scheduleIsOpened){
        scheduleIsOpened = false
    }
    else{
        scheduleIsOpened = true
    }
    var parentElement = document.getElementById("subjectsList")
    parentElement.classList.toggle("visible")
    parentElement.classList.toggle("invisible")
    parentElement.classList.toggle("show");
    let content  = document.getElementById("dynamicHeight")
    content.classList.toggle("height")
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

const hamburgerMenu = () => {
    var btn = document.getElementById("hamburgerMenu")
    btn.classList.toggle("dropdown-content")
    btn.classList.toggle("hamburger")
}



const changeColor = () => {
    if (!isAnimating) {
        isAnimating = true;

        var fire = document.getElementById("fire");
        fire.classList.toggle("fill-green-400");
        fire.classList.toggle("fill-cyan-400");
        fire.classList.toggle("fire-shake");

        setTimeout(() => {
            fire.classList.remove("fire-shake");
            isAnimating = false;
        }, 1000); // 1000 миллисекунд = 1 секунда, укажите длительность вашей анимации
    }
}

const groupList = () => {

    console.log(scheduleIsOpened,groupListOpened)

    if (scheduleIsOpened){
        fillSchedule()
        scheduleIsOpened = false
    }

    if (groupListOpened){
        groupListOpened = false
    }
    else{
        groupListOpened = true
    }
    let parentElement = document.getElementById("groupList")
    let dynamicHeight = document.getElementById("dynamicHeight2")
    parentElement.classList.toggle("dropdown-content")
    parentElement.classList.toggle("visible")
    parentElement.classList.toggle("invisible")
    parentElement.classList.toggle("show");
    let content  = document.getElementById("dynamicHeight")
    content.classList.toggle("height")
    if(!groupListFilled){
        for (let i = 0; i < students.length; i++){
            let tableId = document.getElementById("addTable")
            let newField = document.createElement('tr')
            tableId.appendChild(newField)
    
            let id = document.createElement('td')
            id.classList.add("border-2","border-zinc-700", "p-2")
            id.innerHTML = parseInt(i+1)
            newField.appendChild(id)
    
            let name = document.createElement('td')
            name.classList.add("border-2","border-zinc-700", "p-2")
            name.innerHTML = students[i].Name
            newField.appendChild(name)
    
            let group = document.createElement('td')
            group.classList.add("border-2","border-zinc-700", "p-2")
            group.innerHTML = students[i].groupNumber
            newField.appendChild(group)

            let deleteIcon = document.createElement('td');
            deleteIcon.classList.add("border-2","border-zinc-700","text-green-100", "p-2", "flex", "justify-center");
            deleteIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6 fill-green-400" onclick = absent(this)>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                
            `;
            newField.appendChild(deleteIcon);
    
            
            
            
        }
        groupListFilled = true

    }
    else{
        return
        
    }

}

const absent = (object) => {
    
    let parentElement = object.parentNode.parentNode
    let tdElement = object.parentNode
    tdElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6 fill-red-400" onclick = present(this)>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
  
    `;
    parentElement.classList.add("text-red-400")

}

var fire = document.getElementById("fire");
fire.addEventListener("click", changeColor);


const present = (object) => {
    let parentElement = object.parentNode.parentNode
    let tdElement = object.parentNode
    tdElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6 fill-green-400" onclick = absent(this)>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
  
    `;
    parentElement.classList.remove("text-red-400")
    parentElement.classList.add("text-green-400")
}

function takeScreenshot() {
    html2canvas(document.getElementById('addTable')).then(function(canvas) {
      // Создаем элемент <a> для скачивания
      var link = document.createElement('a');
      link.download = 'table_screenshot.png'; // Имя файла для скачивания
      link.href = canvas.toDataURL(); // Конвертируем canvas в URL
      link.click(); // Вызываем событие клика для скачивания
    });
  }