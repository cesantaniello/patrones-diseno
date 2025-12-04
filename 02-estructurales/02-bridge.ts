/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
    useAbility(): void;
}

class FireAbility implements Ability {
    useAbility(): void {
        console.log('Using fire ability!');
    }
}
class IceAbility implements Ability {
    useAbility(): void {
        console.log('Using ice ability!');
    }
}

abstract class Character {
    protected ability: Ability;

    constructor(ability: Ability) {
        this.ability = ability;
    }

    setAbility(ability: Ability) {
        this.ability = ability;
    }

    abstract performAbility(): void;
}

class Warrior extends Character {
    performAbility(): void {
        console.log('Warrior:');
        this.ability.useAbility();
    }
}

class Mage extends Character {
    performAbility(): void {
        console.log('Mage:');
        this.ability.useAbility();
    }
}