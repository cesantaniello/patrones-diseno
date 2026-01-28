/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

interface Observer {
    notify(videoTitle: string): void;
}

class YouTubeChannel {

    private observers: Observer[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    uploadVideo(videoTitle: string): void {
        console.log(`El canal ${this.name} ha subido un nuevo video: ${videoTitle}`);
    
        for (const observer of this.observers) {
            observer.notify(videoTitle);
        }
    }

}

class Subscriber implements Observer {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(videoTitle: string): void {
        console.log(`Hola ${this.name}, se ha subido un nuevo video: ${videoTitle}`);
    }
}