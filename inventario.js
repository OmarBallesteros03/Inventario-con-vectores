class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    eliminarProducto(code){
        for(let i = 0; i < this.inventario.length;i++){
            if(code === this.inventario[i].getCode)
            {
                for(let j = i; j < this.inventario.length; j++)
                {
                    producto[j] = producto[j+1];
                }
            this.inventario.pop();
            alert("Producto eliminado"); 
            } else{
                return null;
            }
        }
        
    }

    buscar(code){
        for(let i = 0; i < this.inventario.length; i++){
            if(code === this.inventario[i].getCode){
                return this.inventario[i];
            } 
        }
        return null; 
    }

    listado(){
        this.inventario.forEach((producto, i) => {
            return producto.info();
        })

    }

    listadoInverso(){

    }

}

class Producto{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;

    }

    info(){
        return `${i+1}.- Código: ${getCode()} | Nombre: ${getName()} | Cantidad: ${getAmount()} | Costo: ${getCost()}`
    }

    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getAmount(){
        return this.amount;
    }

    getCost(){
        return this.cost
    }

}

let inventario = new Inventario()


//let res=miInv.buscar(5);
//if (res=null)
//console.log("no existe")
