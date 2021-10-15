function displayTrucks(trucks, element) {

    let allItems = "";
    for (let index = 0; index < trucks.length; index++) {
        const truck = trucks[index];

        let template = '<div class="col m2 s12"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="{{photo}}"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{name}} {{model}}<i class="material-icons right">more_vert</i></span> <p><a href="Trucks.html">Daugiau</a></p></div><div class="card-reveal"> <span class="card-title grey-text text-darken-4">{{name}} {{model}}<i class="material-icons right">close</i></span> <p>Dokumentas: {{Id}}</p></div></div></div>';
     

        template = template.replaceAll("{{name}}", truck.name);
        template = template.replaceAll("{{model}}", truck.model);
        template = template.replaceAll("{{Id}}", truck.id);
        template = template.replaceAll("{{photo}}", truck.photo);

        allItems += template;
    }

    element.innerHTML = allItems
}