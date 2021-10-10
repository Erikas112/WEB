function removeItemFromArray(array, item) {
    let arrayWithoutItme = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element != item) {
            arrayWithoutItme.push(element);
        }

    }
    return arrayWithoutItme;
}

function displayItems(array, container) {

    let innerItems = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        innerItems += "<div>" + element + "</div>";

    }
    container.innerHTML = innerItems;

}