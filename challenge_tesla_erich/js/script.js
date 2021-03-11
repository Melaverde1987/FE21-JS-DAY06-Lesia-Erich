let cars = JSON.parse(carsDB);
console.log(cars);

for (let i of cars) {
    document.getElementById('viewCards').innerHTML += `<div class="col-lg-4 col-md-6 ${i.Id}">
                                                            <div class="card">
                                                            <img src="${i.image}" class="card-img-top" alt="...">
                                                            <div class="card-body">
                                                                <h4 id="${i.Id}" class="card-title">${i.brand}</h4>
                                                                <h6 class="card-title">${i.type}</h6>
                                                                <p class="card-text">${i.text}</p>
                                                                <p class="card-text">KM: ${i.km} to price of ${i.price} €</p>
                                                                <a href="#" class="btn btn-primary">Buy</a>
                                                            </div>    
                                                        </div>
                                                    </div>`

                                           

}

function enlargen (x) {
    console.log("Large " + x);
    // this.style.opacity = "0";
    document.getElementsByClassName(x)[0].classList.toggle('col-lg-4'); 
    document.getElementsByClassName(x)[0].classList.toggle('col-md-6'); 
    document.getElementsByClassName(x)[0].classList.toggle('col-lg-12');
    document.getElementsByClassName(x)[0].classList.toggle('col-md-12');
};

for (let i of cars) {
    document.getElementById(i.Id).addEventListener("click", function(){enlargen(i.Id)});
    console.log(i.Id);
}

// document.getElementById("car_name").addEventListener("click", enlargen);  




