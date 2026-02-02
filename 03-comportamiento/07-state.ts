/**
 * ! Patrón State
 * Este patrón permite a un objeto cambiar su comportamiento
 * cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado
 * * y debe cambiar su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

/**
 * * Objetivo: Implementar el patrón State para simular el funcionamiento
 * * de una máquina expendedora.
 * * La máquina tiene diferentes estados,
 *  * Como Esperando Dinero,
 *  * Seleccionando Producto,
 *  * Entregando Producto,
 * * y su comportamiento varía dependiendo del estado actual.
 */

interface State {

    name: string;

    insertMoney(amount: number): void;
    selectProduct(productCode: string): void;
    dispenseProduct(): void;
}

class VendingMachine {
    private state: State;

    constructor() {
        this.state = new WaitingForMoneyState(this);
    }

    insertMoney(amount: number): void {
        this.state.insertMoney(amount);
    }

    selectProduct(productCode: string): void {
        this.state.selectProduct(productCode);
    }

    dispenseProduct(): void {
        this.state.dispenseProduct();
    }

    getStateName(): string {
        return this.state.name;
    }

    setState(state: State): void {
        this.state = state;
    }
}

class WaitingForMoneyState implements State {
    
    public name: string = "Waiting For Money";
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney(): void {
        console.log('Now you can choose a product')
        throw new Error("Method not implemented.");

        this.vendingMachine.setState(new ProductSelected(this.vendingMachine));
    }

    selectProduct(): void {
        console.log('You must introduce money');
    }

    dispenseProduct(): void {
        console.log('You must introduce money');
    }

}

class ProductSelected implements State {
    
    public name: string = "Product Selected";
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney(): void {
        console.log('Now you can choose a product')
    }

    selectProduct(): void {
        this.vendingMachine.setState(new DispensingProduct(this.vendingMachine));
    }

    dispenseProduct(): void {
        console.log('You must introduce money');
    }

}

class DispensingProduct implements State {
    
    public name: string = "Dispensing Product";
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    insertMoney(): void {
        console.log('Please wait, we are already giving you a product');
    }

    selectProduct(): void {
        console.log('Your product is being dispensed');

    }

    dispenseProduct(): void {
        console.log('Product dispensed. Thank you!');
        this.vendingMachine.setState(new WaitingForMoneyState(this.vendingMachine));
    }


}