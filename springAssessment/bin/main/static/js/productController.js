const createHTMLList = (index, title, description, date) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
       <h5 class="card-title">${title}</h5>
    <div class="card-body">
        <p class="card-text">${description}</p>
        <p class="card-date">${date}</p>
    </div>
</div>
</div>

`;

 function displayProductDetails(item)
 {
     document.querySelector("#modalTitle").innerText = item.title;
     document.querySelector("#modalDescription").src = item.description;
     document.querySelector("#modalDate").innerText = item.date;
 }

class ProductsController 
{
    constructor()
    {

        this._items = [];       //create an array to store the details of product items
    }

    addItem(title, description, date)
        {
            var productController = this;
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('date', date);

           fetch("http://localhost:8080/item/add", {
                 method: 'POST',
                 body: formData
                 })
                 .then(function(response) {
                     console.log(response.status);
                     if (response.ok) {
                         alert("Successfully Added Product!")
                     }
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert("Error adding item to Product")
                 });
        }

    //method to add the items into the array
    addItem(title, description, date)
    {
        const itemObj = {
            oTitle: title,
            oDescription: description,
            oDate: date
        };

        this._items.push(itemObj);
    }

    displayItem()
            {
                let productController = this;
                productController._items = [];

                //fetch data from database using the REST API endpoint from Spring Boot
                fetch('http://localhost:8080/item/all')
                    .then((resp) => resp.json())
                    .then(function(data) {
                        console.log("2. receive data")
                        console.log(data);
                        data.forEach(function (item, index) {

                            const itemObj = {
                                title: item.title,
                                description: item.description,
                                date: item.date,
                           };
                            productController._items.push(itemObj);
                      });

                      productController.renderProductPage();

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }

    renderProductPage()
    {
        let productHTMLList = [];
        
        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];

            const productHTML = createHTMLList(i, item.title, item.description, item.date);

            productHTMLList.push(productHTML);
        }

        const pHTML = productHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;

        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];
            document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
        }

    }
} 
