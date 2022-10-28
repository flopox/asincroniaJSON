document.getElementById('json').addEventListener('click', mostrarJSON);

function mostrarJSON(){
        fetch('productos.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html ='';
            data.forEach(function(comestible){
                html += `
                <li> ${comestible.nombre} ${comestible.detalle} ${comestible.precio}</li>
                `;
            })
            document.getElementById('resultado').innerHTML=html;
        })
}