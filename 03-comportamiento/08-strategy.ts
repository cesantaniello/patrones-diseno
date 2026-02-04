/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */

interface EstrategiaMovimiento {
    mover(): void;
}

class Nadar implements EstrategiaMovimiento {
    mover(): void {
        console.log("El patito está nadando.");
    }
}

class Volar implements EstrategiaMovimiento {
    mover(): void {
        console.log("El patito está volando.");
    }
}

class Caminar implements EstrategiaMovimiento {
    mover(): void {
        console.log("El patito está caminando.");
    }
}

class Patito {
    private estrategiaMovimiento: EstrategiaMovimiento;

    constructor(estrategiaMovimiento: EstrategiaMovimiento) {
        this.estrategiaMovimiento = estrategiaMovimiento;
    }

    setEstrategiaMovimiento(estrategiaMovimiento: EstrategiaMovimiento): void {
        this.estrategiaMovimiento = estrategiaMovimiento;
    }

    mover(): void {
        this.estrategiaMovimiento.mover();
    }
}

function carreraDePatitos() {
    const patito1 = new Patito(new Nadar());
    const patito2 = new Patito(new Volar());
    const patito3 = new Patito(new Caminar());

    patito1.mover(); // El patito está nadando.
    patito2.mover(); // El patito está volando.
    patito3.mover(); // El patito está caminando.

    patito3.setEstrategiaMovimiento(new Nadar());
    patito3.mover(); // El patito está nadando.
}

carreraDePatitos();