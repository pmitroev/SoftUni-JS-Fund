function solve(arr){
    let grocerieList = arr.shift().split('!');

    while(arr[0] != 'Go Shopping!'){
        let groceries = arr.shift();
        let [command, item, newItem] = groceries.split(' ');

        if(command === 'Urgent'){
            if(!grocerieList.includes(item)){
                grocerieList.unshift(item);
            }
        } else if(command === 'Unnecessary'){
            if(grocerieList.includes(item)){
                let index = grocerieList.indexOf(item);
                grocerieList.splice(index, 1);
            }
        } else if(command === 'Correct'){
            if(grocerieList.includes(item)){
                let index = grocerieList.indexOf(item);
                grocerieList[index] = newItem;
            }
        } else if (command === 'Rearrange'){
            if(grocerieList.includes(item)){
                let index = grocerieList.indexOf(item);
                grocerieList.splice(index, 1);
                grocerieList.push(item);
            }
        }
    }

    console.log(grocerieList.join(', '));
}

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]); 