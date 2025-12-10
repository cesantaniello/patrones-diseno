/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notificador {
  enviar(mensaje: string): void;
}

class NotificadorBase implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Notificación: ${mensaje}`);
    }
}

abstract class NotificadorDecorador implements Notificador {
    protected notificador: Notificador;

    constructor(notificador: Notificador) {
        this.notificador = notificador;
    }

    enviar(mensaje: string): void{
        this.notificador.enviar(mensaje);
    }
}

class EmailDecorator extends NotificadorDecorador {

    private enviarEmail(mensaje: string): void {
        console.log(`Enviando email con el mensaje: ${mensaje}`);
    }

    override enviar(mensaje: string): void {
        super.enviar(mensaje);
        this.enviarEmail(mensaje);
    }
}

class SMSDecorator extends NotificadorDecorador {

    private enviarSMS(mensaje: string): void {
        console.log(`Enviando SMS con el mensaje: ${mensaje}`);
    }

    override enviar(mensaje: string): void {
        super.enviar(mensaje);
        this.enviarSMS(mensaje);
    }
}