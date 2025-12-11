/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

interface Location {
    display(coordinates: {x: number, y: number}): void;
}

class LocationIcon implements Location {

    private type: string;
    private iconImage: string;

    constructor(type: string, iconImage: string) {
        this.type = type;
        this.iconImage = iconImage;
    }

    display(coordinates: {x: number, y: number}): void {
        console.log(`Mostrando icono de tipo ${this.type} en (${coordinates.x}, ${coordinates.y}) con imagen ${this.iconImage}`);
    }
}

class LocationFactory {
    private icons: Record<string, LocationIcon> = {};

    getLocationIcon(type: string, iconImage: string): LocationIcon {
        const key = `${type}-${iconImage}`;
        if (!this.icons[key]) {
            this.icons[key] = new LocationIcon(type, iconImage);
        }
        return this.icons[key];
    }
}

class MapLocation {
    private icon: LocationIcon;
    private coordinates: {x: number, y: number};

    constructor(icon: LocationIcon, coordinates: {x: number, y: number}) {
        this.icon = icon;
        this.coordinates = coordinates;
    }

    display(): void {
        this.icon.display(this.coordinates);
    }
}

function main() {
    const factory = new LocationFactory();

    const locations: MapLocation[] = [
        new MapLocation(factory.getLocationIcon('restaurant', 'restaurant.png'), {x: 10, y: 20}),
        new MapLocation(factory.getLocationIcon('restaurant', 'restaurant.png'), {x: 15, y: 25}),
    ];

    locations.forEach(location => location.display());
}

main();