let cars = JSON.parse(carsDB);
console.log(cars);

for (let i of cars) {
    document.getElementById('viewCards').innerHTML += `<div class="col-lg-4 col-md-6">
                                                            <div class="card">
                                                            <img src="${i.image}" class="card-img-top" alt="...">
                                                            <div class="card-body">
                                                                <h4 class="card-title">${i.brand}</h4>
                                                                <h6 class="card-title">${i.type}</h6>
                                                                <p class="card-text">${i.text}</p>
                                                                <p class="card-text">KM: ${i.km} to price of ${i.price} €</p>
                                                                <a href="#" class="btn btn-primary">Buy</a>
                                                            </div>    
                                                        </div>
                                                    </div>`

}
