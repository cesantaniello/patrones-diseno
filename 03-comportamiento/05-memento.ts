import { Logger } from 'jsr:@deno-library/logger';
/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMemento {

    private position: string;
    level: number;
    health: number;

    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    getLevel(): number {
        return this.level;
    }

    getHealth(): number {
        return this.health;
    }

    getPosition(): string {
        return this.position;
    }

}

class Game {
    private level: number = 1;
    private health: number = 100;
    private position: string = '0,0';

    constructor() {
        console.log(`
            Jugador en nivel ${this.level} con salud ${this.health} y posición ${this.position}
        `);
    }

    save(): GameMemento {
        return new GameMemento(this.level, this.health, this.position);
    }

    play(level: number, health: number, position: string): void {
        this.level = level;
        this.health = health;
        this.position = position;
        console.log(`
            Jugador en nivel ${this.level} con salud ${this.health} y posición ${this.position}
        `);
    }

    restore(memento: GameMemento): void {
        this.level = memento.getLevel();
        this.health = memento.getHealth();
        this.position = memento.getPosition();
        console.log(`
            Jugador restaurado a nivel ${this.level} con salud ${this.health} y posición ${this.position}
        `);
    }
}

class GameHistory {
    private mementos: GameMemento[] = [];

    push(memento: GameMemento): void {
        this.mementos.push(memento);
    }

    pop(): GameMemento | undefined {
        return this.mementos.pop();
    }
}

function main() {
    const game = new Game();
    const history = new GameHistory();

    history.push(game.save());

    game.play(2, 80, '10,10');
    history.push(game.save());

    game.play(3, 50, '20,20');
    history.push(game.save());

    game.play(4, 60, '30,30');
    console.log('Estado actual');

    game.restore(history.pop()!);
    console.log('Estado guardado 1');
}

main();