class Stack {
    constructor() {
        this.items = []; // Inicializamos un array vacío para almacenar los elementos de la pila.
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