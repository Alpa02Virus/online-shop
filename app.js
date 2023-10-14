let display ='';
let row = document.querySelector('.row');
console.log(row)
fetch('https://fakestoreapi.com/products').then(
        Response => Response.json()
).then(
    data =>{
        console.log(data);
        // .map()--> gile iig copy hiigeed uur giled hadgaldag gunvtion
        //slive taslah huvaan
        (data.slice(0,15)).map(
            product => {
                console.log (product.title);
                console.log(product.image);
                display += ` <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}">
                    <h5>
                        ${product.title}
                    </h5>
                    <p class="price">${product.price}</p>
                    <p class="cat">${product.category}</p>
                </div>
            </div>`
            row.innerHTML=display;
            }
        )
    }
)