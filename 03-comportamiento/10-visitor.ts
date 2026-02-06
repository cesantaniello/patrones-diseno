/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */

interface Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): number;
  visitHauntedHouse(hauntedHouse: HauntedHouse): number;
  visitFerrisWheel(ferrisWheel: FerrisWheel): number;
}

interface Attraction {
  accept(visitor: Visitor): number;
}

class RollerCoaster implements Attraction {
  private price: number = 50;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visitRollerCoaster(this);
  }
}

class HauntedHouse implements Attraction {
  private price: number = 30;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visitHauntedHouse(this);
  }
}

class FerrisWheel implements Attraction {
  private price: number = 20;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visitFerrisWheel(this);
  }
}

class ChildVisitor implements Visitor {
    visitRollerCoaster(rollerCoaster: RollerCoaster): number {
        return rollerCoaster.getPrice() * 0.5; // 50% de descuento para niños
    }

    visitHauntedHouse(hauntedHouse: HauntedHouse): number {
        return hauntedHouse.getPrice() * 0.5; // 50% de descuento para niños
    }

    visitFerrisWheel(ferrisWheel: FerrisWheel): number {
        return ferrisWheel.getPrice() * 0.5; // 50% de descuento para niños
    }
}

class AdultVisitor implements Visitor {
    visitRollerCoaster(rollerCoaster: RollerCoaster): number {
        return rollerCoaster.getPrice(); // Precio completo para adultos
    }

    visitHauntedHouse(hauntedHouse: HauntedHouse): number {
        return hauntedHouse.getPrice(); // Precio completo para adultos
    }

    visitFerrisWheel(ferrisWheel: FerrisWheel): number {
        return ferrisWheel.getPrice(); // Precio completo para adultos
    }
}

class SeniorVisitor implements Visitor {
    visitRollerCoaster(rollerCoaster: RollerCoaster): number {
        return rollerCoaster.getPrice() * 0.7; // 30% de descuento para adultos mayores
    }

    visitHauntedHouse(hauntedHouse: HauntedHouse): number {
        return hauntedHouse.getPrice() * 0.7; // 30% de descuento para adultos mayores
    }

    visitFerrisWheel(ferrisWheel: FerrisWheel): number {
        return ferrisWheel.getPrice() * 0.7; // 30% de descuento para adultos mayores
    }
}

function main() {
    const rollerCoaster = new RollerCoaster();
    const hauntedHouse = new HauntedHouse();
    const ferrisWheel = new FerrisWheel();

    const childVisitor = new ChildVisitor();
    const adultVisitor = new AdultVisitor();
    const seniorVisitor = new SeniorVisitor();
    console.log("Precios para niños:");
    console.log(`Montaña Rusa: $${rollerCoaster.accept(childVisitor)}`);
    console.log(`Casa del Terror: $${hauntedHouse.accept(childVisitor)}`);
    console.log(`Rueda de la Fortuna: $${ferrisWheel.accept(childVisitor)}`);

    console.log("\nPrecios para adultos:");
    console.log(`Montaña Rusa: $${rollerCoaster.accept(adultVisitor)}`);
    console.log(`Casa del Terror: $${hauntedHouse.accept(adultVisitor)}`);
    console.log(`Rueda de la Fortuna: $${ferrisWheel.accept(adultVisitor)}`);

    console.log("\nPrecios para adultos mayores:");
    console.log(`Montaña Rusa: $${rollerCoaster.accept(seniorVisitor)}`);
    console.log(`Casa del Terror: $${hauntedHouse.accept(seniorVisitor)}`);
    console.log(`Rueda de la Fortuna: $${ferrisWheel.accept(seniorVisitor)}`);
}

main();