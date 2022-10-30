   let precios = document.querySelectorAll(".precio")

   let moneda = document.querySelectorAll("#moneda")

   precioDolar = document.querySelector("#precio").innerHTML

    let url = "https://api.bluelytics.com.ar/json/last_price"

    var checkbox = document.querySelector("#ARS");

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            fetch(url)
            .then(r => r.json())
            .then(function(data)  {
              console.log(data[1].value_avg)
              let cambio = document.querySelector("#precio").innerHTML * data[1].value_avg
        
              precios.forEach(function cambioValor(precio){
                precio.innerHTML = cambio
        
              })

              moneda.forEach(function cambioMoneda(tipo){
                tipo.innerHTML = "ARS: "
                console.log(moneda.innerHTML)
              })
            
            })
            .catch(error => console.error(error))
        } else {
            fetch(url)
            .then(r => r.json())
            .then(function(data)  {
              console.log(data[1].value_avg)
              let cambio = document.querySelector("#precio").innerHTML * data[1].value_avg
        
              precios.forEach(function cambioValor(precio){
                precio.innerHTML = precioDolar 
        
              })

              moneda.forEach(function cambioMoneda(tipo){
                tipo.innerHTML = "USD: "
                console.log(moneda.innerHTML)
              })

            
            })
            .catch(error => console.error(error))
        }
      });
  



    // fetch(url)
    // .then(r => r.json())
    // .then(function(data)  {
    //   console.log(data[1].value_avg)
    //   let cambio = document.querySelector("#precio").innerHTML * data[1].value_avg
    //   console.log(cambio)

    //   precios.forEach(function cambioValor(precio){
    //     precio.innerHTML = cambio
    //     console.log(precio.innerHTML)

    //   })
    
    // })
    // .catch(error => console.error(error))