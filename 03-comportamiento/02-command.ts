/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

interface Command {
    execute(): void;
}

class Light {
    turnOn() {
        console.log("La luz está encendida");
    }

    turnOff() {
        console.log("La luz está apagada");
    }
}

class Fan {
    turnOn() {
        console.log("El ventilador está encendido");
    }

    turnOff() {
        console.log("El ventilador está apagado");
    }
}

class LightOnCommand implements Command {

    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {

    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOff();
    }
}

class FanOnCommand implements Command {

    constructor(private fan: Fan) {}

    execute(): void {
        this.fan.turnOn();
    }
}


class FanOffCommand implements Command {

    constructor(private fan: Fan) {}

    execute(): void {
        this.fan.turnOff();
    }
}

class RemoteControl {
    private commands: Record<string, Command> = {};

    setCommand(button: string, command: Command) {
        this.commands[button] = command;
    }

    pressButton(button: string) {
        if (this.commands[button]) {
            this.commands[button].execute();
        }
    }
}

