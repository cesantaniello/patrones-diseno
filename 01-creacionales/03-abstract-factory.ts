/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Burger {
    prepare(): void;
}

interface Drink {
    serve(): void;
}

class VeggieBurger implements Burger {
    prepare(): void {
        console.log("Preparing a veggie burger.");
    }
}

class ChickenBurger implements Burger {
    prepare(): void {
        console.log("Preparing a chicken burger.");
    }
}

class Soda implements Drink {
    serve(): void {
        console.log("Serving a soda.");
    }  
}

class Juice implements Drink {
    serve(): void {
        console.log("Serving a juice.");
    }
}

interface FastFoodFactory {
    createBurger(): Burger;
    createDrink(): Drink;
}

class VeggieFastFoodFactory implements FastFoodFactory {
    
    createBurger(): Burger {
        return new VeggieBurger();
    }

    createDrink(): Drink {
        return new Juice();
    }
}

class ChickenFastFoodFactory implements FastFoodFactory {

    createBurger(): Burger {
        return new ChickenBurger();
    }
    
    createDrink(): Drink {
        return new Soda();
    }
}