let inventario1 = new Inventario();

const guardar=document.getElementById("guardar");
guardar.addEventListener('click',()=>{
    let nombre=document.getElementById("pName").value;
    let codigo = document.getElementById("pCode").value;
    let cantidad = document.getElementById("pAmount").value;
    let costo = document.getElementById("pCosto").value;

    let pNuevo = new Producto(nombre, codigo, cantidad, costo);
    inventario1.agregarProducto(pNuevo);
})
