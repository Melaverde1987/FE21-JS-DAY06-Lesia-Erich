let data = JSON.parse(employees);
console.log(data);

for (let i = 0; i < data.length; i++) {

    document.getElementById('result').innerHTML += `My name is  ${data[i].firstName}  and I am working as a  ${data[i].jobTitle}<hr>`;

}


let data2 = JSON.parse(books);
console.log(data2);

for (let i = 0; i < data2.length; i++) {

    document.getElementById('result2').innerHTML += `<h1>Title</h1><div> ${data2[i].title}  </div><h1>Author</h1><div> ${data2[i].author} </div><h1>Read Status</h1><div> ${data2[i].read} </div><h1>Year</h1><div> ${data2[i].year} </div> <h1>Pages number</h1><div> ${data2[i].pages} </div> <h1>Price</h1><div> ${data2[i].price} </div> <hr>`;

}