/**
 * ! Patrón Template Method
 *
 * El patrón Template Method es un patrón de diseño de comportamiento
 * que define el esqueleto de un algoritmo en una operación,
 * delegando algunos pasos a las subclases.
 *
 * Permite que las subclases redefinan ciertos pasos de un algoritmo
 * sin cambiar su estructura.
 *
 * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
 * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.
 *
 * https://refactoring.guru/es/design-patterns/template-method
 */

/**
 * Contexto: Vamos a implementar un sistema que permite preparar
 * diferentes bebidas calientes, como café y té.
 *
 * Aunque el proceso general para preparar ambas bebidas es similar
 * (hervir agua, añadir el ingrediente principal, servir en una taza),
 * hay pasos específicos que varían dependiendo de la bebida.
 *
 * El patrón Template Method es perfecto para este caso,
 * ya que define un esqueleto general del algoritmo en una clase base
 * y delega los detalles específicos a las subclases.
 */

abstract class BebidaCaliente {

    preparaBebida(): void {
        this.hervirAgua();
        this.añadirIngredientePrincipal();
        this.servirEnTaza();
        this.añadirCondimentos();
    }

    private hervirAgua(): void {
        console.log("Hirviendo agua...");
    }

    private servirEnTaza(): void {
        console.log("Sirviendo en la taza...");
    }

    protected abstract añadirIngredientePrincipal(): void;
    protected abstract añadirCondimentos(): void;
}

class Cafe extends BebidaCaliente {
    protected añadirIngredientePrincipal(): void {
        console.log("Añadiendo café molido...");
    }

    protected añadirCondimentos(): void {
        console.log("Añadiendo azúcar y leche...");
    }
}

class Te extends BebidaCaliente {
    protected añadirIngredientePrincipal(): void {
        console.log("Añadiendo té en bolsa...");
    }

    protected añadirCondimentos(): void {
        console.log("Añadiendo limón...");
    }
}

function main() {
    const cafe = new Cafe();
    console.log("Preparando café:");
    cafe.preparaBebida();

    const te = new Te();
    console.log("\nPreparando té:");
    te.preparaBebida();
}

main();