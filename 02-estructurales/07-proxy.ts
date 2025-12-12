/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

class Player {

    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }   
}

interface Room {
    enter(player: Player): void;
}

class BasicRoom implements Room {
    enter(player: Player): void {
        console.log(`${player.name} has entered the basic room.`);
    }
}

class SecretRoom implements Room {
    enter(player: Player): void {
        console.log(`${player.name} has entered the secret room.`);
    }
}

class MagicPortal implements Room {

    private secretRoom: SecretRoom;

    constructor(room: SecretRoom) {
        this.secretRoom = room;
    }

    enter(player: Player): void {
        if (player.level >= 10) {
            this.secretRoom.enter(player);
        }
        console.log(`${player.name} is not allowed to enter the secret room.`);
    }

}