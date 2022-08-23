function convertirTexto(texto) {
    //Crear una funcion para generar el hash de un texto como numero entero
    //Usando métodos ya establecidos
    //Aqui tu codigo

    if(typeof texto != 'string') { 
        throw TypeError('El argumento debe ser un string.');
    }

    if (!texto.length) {
        return null;
    }

    let caracteres = texto.split('');

    return caracteres.reduce((a,v) => (a = v.charCodeAt(0) + (a << 6) + (a << 16) -  a), 0 );
}

try {
    console.log(convertirTexto('JavaScript'));
    console.log(convertirTexto('hola'));
} catch(e) { 
    console.log(`Error: ${e.message}`);
}


function HashTable() {
    // Hash Table
    // Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
    // Para guardar un valor asociado a una key (string):
    // - Correr la key a través de una función hash para transformarla a un número entero.
    // - Establecer el par llave/valor en tu tabla hash -- Usa un set
    // - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
    //  Aqui tu codigo

}
