/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
    prepare(): void;
}

class VeggieBurger implements Hamburger {
    prepare(): void {
        console.log(`Preparando una hamburguesa vegetariana...`);
    }
}

class ChickenBurger implements Hamburger {
    prepare(): void {
        console.log(`Preparando una hamburguesa de pollo...`);
    }
}

class BeanBurger implements Hamburger {
    prepare(): void {
        console.log(`Preparando una hamburguesa de frijoles...`);
    }
}

abstract class BurgerFactory {
    abstract createBurger(): Hamburger;

    orderBurger(): void {
        const burger = this.createBurger();
        burger.prepare();
    }
}

class VeggieBurgerFactory extends BurgerFactory {
    createBurger(): Hamburger {
        return new VeggieBurger();
    }
}

class ChickenBurgerFactory extends BurgerFactory {
    createBurger(): Hamburger {
        return new ChickenBurger();
    }
}

class BeanBurgerFactory extends BurgerFactory {
    createBurger(): Hamburger {
        return new BeanBurger();
    }
}

function main() {

    let factory: BurgerFactory;
    const burgerType = prompt('¿Qué tipo de hamburguesa deseas? (veggie/chicken/bean): ')
    
    switch (burgerType) {
        case 'veggie':
            factory = new VeggieBurgerFactory();
            break;
        case 'chicken':
            factory = new ChickenBurgerFactory();
            break;
        case 'bean':
            factory = new BeanBurgerFactory();
            break;
        default:
            console.log('Tipo de hamburguesa no válido.');
            return;
    }
    factory.orderBurger();

}

main();