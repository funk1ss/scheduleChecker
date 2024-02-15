const fillSchedule = () => {
    var parentElement = document.getElementById("subjectsList")
    parentElement.classList.toggle("visible")
    parentElement.classList.toggle("invisible")
    parentElement.classList.toggle("show");
    parentElement.innerHTML = "";


    for (let day in schedule){
        let itemTitle = document.createElement('div');
        itemTitle.textContent = day
        parentElement.appendChild(itemTitle)
        let counter = 0
        for (let item in schedule[day]){
            counter++
            let listItem = document.createElement('div');
            listItem.textContent = counter +".  "+ schedule[day][item]
            itemTitle.appendChild(listItem)
            itemTitle.classList.add("bg-zinc-600" ,"mb-2", "rounded", "p-3", "text-zinc-200")

        }
    }
}