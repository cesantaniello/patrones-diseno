/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBall {
    private static instance: DragonBall;
    private wishes: number;

    private constructor() {
        this.wishes = 0;
    }

    public static getInstance(): DragonBall {
        if (!DragonBall.instance) {
            DragonBall.instance = new DragonBall();
            console.log('Dragon balls has been made');
        }
        return DragonBall.instance;
    }
    
    collectWishes(): void {
        if (this.wishes < 3) {
            this.wishes++;
            console.log(`You have collected ${this.wishes} wishes.`);
            return;
        }
        console.log('You have already collected 3 wishes. You can summon Shenron!');
    }

    summonShenron(): void {
        if (this.wishes === 3) {
            console.log('Shenron has been summoned! Make your wish!');
            this.wishes = 0;
            return;
        }
        console.log(`You need ${3 - this.wishes} more wishes to summon Shenron.`);
    }
}