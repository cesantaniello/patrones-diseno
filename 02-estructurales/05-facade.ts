/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector {
    on() {
        console.log("Proyector encendido");
    }

    off() {
        console.log("Proyector apagado");
    }
}

class SoundSystem {
    on() {
        console.log("Sistema de sonido encendido");
    }

    off() {
        console.log("Sistema de sonido apagado");
    }
}

class VideoPlayer {
    on() {
        console.log("Reproductor de video encendido");
    }

    off() {
        console.log("Reproductor de video apagado");
    }

    play(movie: string) {
        console.log(`Reproduciendo película: ${movie}`);
    }

    stop() {
        console.log("Película detenida");
    }
}

class PopcornMaker {

    poppingPopcorn() {
        console.log("Haciendo palomitas de maíz");
    }

    turnOffPopcornMaker() {
        console.log("Apagando la máquina de palomitas de maíz");
    }
}

interface HomeTheaterFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;


    constructor(options: HomeTheaterFacadeOptions) {
        this.projector = options.projector;
        this.soundSystem = options.soundSystem;
        this.videoPlayer = options.videoPlayer;
        this.popcornMaker = options.popcornMaker;
    }
    
    watchMovie(movie: string) {
        console.log("Preparando el cine en casa...");
        this.popcornMaker.poppingPopcorn();
        this.projector.on();
        this.soundSystem.on();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
    }

    endMovie() {
        console.log("Apagando el cine en casa...");
        this.videoPlayer.stop();
        this.videoPlayer.off();
        this.soundSystem.off();
        this.projector.off();
        this.popcornMaker.turnOffPopcornMaker();
    }

}