class Stack {
    constructor(elements = []) {
        this.items = Array.isArray(elements) ? elements : []; // Inicializamos un array vacío para almacenar los elementos de la pila.
    }

    // Método para agregar un elemento a la pila.
    push(element) {
        this.items.push(element);
    }

    // Método para remover y retornar el elemento en la parte superior de la pila.
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Verificación opcional para evitar errores.
        }
        return this.items.pop();
    }

    // Método para ver el elemento en la parte superior sin removerlo.
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Verificación opcional para evitar errores.
        }
        return this.items[this.items.length - 1];
    }

    //metodo para obtener el elemento más pequeño del stack
    getMin() {
        if (typeof this.items[0] === 'number') {
            return Math.min(...this.items);
        }

        this.items.sort();

        return this.items[0];

    }

    // Método para verificar si la pila está vacía.
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para obtener el tamaño de la pila.
    size() {
        return this.items.length;
    }

    // Método para vaciar la pila.
    clear() {
        this.items = [];
    }

    // Método para imprimir la pila.
    print() {
        console.log(this.items.toString());
    }
}

export { Stack }