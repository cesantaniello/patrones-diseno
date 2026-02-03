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
    console.log("Now you can choose a product");
    this.vendingMachine.setState(new ProductSelected(this.vendingMachine));
  }

  selectProduct(): void {
    console.log("You must introduce money");
  }

  dispenseProduct(): void {
    console.log("You must introduce money");
  }
}

class ProductSelected implements State {
  public name: string = "Product Selected";
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(): void {
    console.log("Now you can choose a product");
  }

  selectProduct(): void {
    this.vendingMachine.setState(new DispensingProduct(this.vendingMachine));
  }

  dispenseProduct(): void {
    console.log("You must introduce money");
  }
}

class DispensingProduct implements State {
  public name: string = "Dispensing Product";
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(): void {
    console.log("Please wait, we are already giving you a product");
  }

  selectProduct(): void {
    console.log("Your product is being dispensed");
  }

  dispenseProduct(): void {
    console.log("Product dispensed. Thank you!");
    this.vendingMachine.setState(new WaitingForMoneyState(this.vendingMachine));
  }
}

async function main() {
  const vendingMachine = new VendingMachine();
  let selectedOption: string | null = null;

  do {
    console.log(`\nCurrent State: ${vendingMachine.getStateName()}`);
    console.log("1. Insert Money");
    console.log("2. Select Product");
    console.log("3. Dispense Product");
    console.log("0. Exit");

    selectedOption = prompt("Choose an option:") || null;

    switch (selectedOption) {
      case "1":
        vendingMachine.insertMoney(100);
        break;
      case "2":
        vendingMachine.selectProduct("A1");
        break;
      case "3":
        vendingMachine.dispenseProduct();
        break;
      case "0":
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid option");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  } while (selectedOption !== "0");
}

main();
