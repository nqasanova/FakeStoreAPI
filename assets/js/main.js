let btn = document.querySelector('#btn-send');

btn.onclick = function() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let users = ''

    data.forEach (user => {
        users += `
        <div class="card col-lg-3 mt-4 mb-3 ">
        <img class="card-img-top" src=${user.image} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`

      document.getElementById('list').innerHTML = users
    })
})

.catch(error => console.log(error))
}