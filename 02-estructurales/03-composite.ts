/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
    showDetails(indent: string): void;
}

class File implements FileSystemComponent {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    showDetails(indent: string): void {
        console.log(`${indent}- File: ${this.name}`);
    }
}

class Folder implements FileSystemComponent {

    private name: string;
    private contents: FileSystemComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: FileSystemComponent): void {
        this.contents.push(component);
    }

    showDetails(indent: string): void {
    console.log(`${indent}+ Folder: ${this.name}`);
        this.contents.forEach(component => {
            component.showDetails(indent + "  ");
        });
    }
}

function main() {
    const folderA = new Folder("FolderA");
    const file1 = new File("File1.txt");
    const file2 = new File("File2.txt");
    const file3 = new File("File3.txt");

    folderA.add(file1);
    folderA.add(file2);

    const folderB = new Folder("FolderB");
    folderB.add(file3);

    folderA.add(folderB);

    folderA.showDetails("");
}

main();