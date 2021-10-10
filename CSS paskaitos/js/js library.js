function getItems() {
    let item1 = {
        image: "NWwD18kT.jpg",
        description: "Parduodamas blogas suo",
        price: 1000,
        currency: "EUR"
    };
    let item2 = {
        image: "https://picsum.photos/365/365?random=1",
        description: "Parduodama paslauga",
        price: 999.9,
        currency: "EUR"
    };

    let item3 = {
        image: "https://picsum.photos/365/365?random=2",
        description: "Parduodama paslauga",
        price: 899.9,
        currency: "EUR"
    };


    return [item1, item2, item3];
}

function displayItems(items, container) {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let template = <div class="child"> <div class="content"><img src="{{image}}" alt=""> <p> {{description}}</p><p>Kaina: {{price}} {{currency}}</p></div></div>;

        template = template.replace("{{image}}", item.image);
        template = template.replace("{{description}}", item.image);
        template = template.replace("{{price}}", item.image);
        template = template.replace("{{currency}}", item.image);

        allItems += template;

    }
    container.innerHTML = allItems;
}