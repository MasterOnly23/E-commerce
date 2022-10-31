   let precios = document.querySelectorAll(".precio")

  

   let moneda = document.querySelectorAll("#moneda")

   let preciosDolar = document.querySelectorAll(".precio")


   
   preciosDolar.forEach(function precioOriginal(precioDolar){
      console.log(precioDolar.innerHTML)
  })

  precios.forEach(function cambioValor(precio){
    console.log(precio.innerHTML)
  })


    let url = "https://api.bluelytics.com.ar/v2/latest"

    var checkbox = document.querySelector("#ARS");
    var checkbox2 = document.querySelector("#USD");
    
    checkbox2.checked = true;


    // var usd = document.querySelector("#USD");
    // var ars = document.querySelector("#ARS");


    // ars.addEventListener('click', function() {

    //         fetch(url)
    //         .then(r => r.json())
    //         .then(function(data)  {
    //           console.log(data.blue.value_avg)
    //           //let cambio = document.querySelector(".precio").innerHTML * data.blue.value_avg
        
    //           precios.forEach(function cambioValor(precio){
    //             let cambio = precio.innerHTML * data.blue.value_avg
    //             precio.innerHTML = cambio
    //             console.log(precio.innerHTML)
        
    //           })

    //           moneda.forEach(function cambioMoneda(tipo){
    //             tipo.innerHTML = "ARS: "
    //             console.log(moneda.innerHTML)
    //           })
            
    //         })
    //         .catch(error => console.error(error))
    //     }) 

    //     usd.addEventListener('click', function() {

    //       fetch(url)
    //       .then(r => r.json())
    //       .then(function(data)  {
    //         console.log(data.blue.value_avg)
    //         //let cambio = document.querySelector(".precio").innerHTML * data.blue.value_avg
      
    //         precios.forEach(function cambioValor(precio){
    //           let cambio = precio.innerHTML / data.blue.value_avg
    //           precio.innerHTML = cambio
    //           console.log(precio.innerHTML)
      
    //         })

    //         moneda.forEach(function cambioMoneda(tipo){
    //           tipo.innerHTML = "ARS: "
    //           console.log(moneda.innerHTML)
    //         })
          
    //       })
    //       .catch(error => console.error(error))
    //   }) 



    checkbox.addEventListener('change', function() {
      
      checkbox2.checked = false;

      if (this.checked) {
            fetch(url)
            .then(r => r.json())
            .then(function(data)  {
              console.log(data.blue.value_avg)
              //let cambio = document.querySelector(".precio").innerHTML * data.blue.value_avg
        
              precios.forEach(function cambioValor(precio){
                let cambio = precio.innerHTML * data.blue.value_avg
                precio.innerHTML = cambio
                console.log(precio.innerHTML)
        
              })

              moneda.forEach(function cambioMoneda(tipo){
                tipo.innerHTML = "ARS: "
                console.log(moneda.innerHTML)
              })
            
            })
            .catch(error => console.error(error))
        } 
      })


      checkbox2.addEventListener('change', function() {
        
        checkbox.checked = false;
        
          if (this.checked) {
            fetch(url)
            .then(r => r.json())
            .then(function(data)  {
              console.log(data.blue.value_avg)
              //let cambio = document.querySelector(".precio").innerHTML * data.blue.value_avg
        
              precios.forEach(function cambioValor(precio){
                let cambio = precio.innerHTML / data.blue.value_avg
                precio.innerHTML = cambio
                console.log(precio.innerHTML)
        
              })

              moneda.forEach(function cambioMoneda(tipo){
                tipo.innerHTML = "USD: "
                console.log(moneda.innerHTML)
              })
            
            })
            .catch(error => console.error(error))
        }
      })
      





















      //   else {

      //     precios.forEach(function cambioValor(precio){
      //       preciosDolar.forEach(function precioOriginal(precioDolar){
      //         console.log(precio.innerHTML)
      //         console.log(precioDolar.innerHTML)

      //         precio.innerHTML = precioDolar.innerHTML
      //       })
             
    
      //     })

      //       fetch(url)
      //       .then(r => r.json())
      //       .then(function(data)  {
      //         console.log(data.blue.value_avg)
      //         // let cambio = document.querySelector("#precio").innerHTML * data.blue.value_avg
        


      //         moneda.forEach(function cambioMoneda(tipo){
      //           tipo.innerHTML = "USD: "
      //           console.log(moneda.innerHTML)
      //         })

            
      //       })
      //       .catch(error => console.error(error))
      //   }
      // });
  



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