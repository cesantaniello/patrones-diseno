/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = 'en' | 'es';

function greeterFactory(language: Language) {
    if (language === 'en') {
        return function greet(name: string) {
            return `Hello, ${name}!`;
        };
    } else if (language === 'es') {
        return function greet(name: string) {
            return `¡Hola, ${name}!`;
        };
    } else {
        throw new Error('Unsupported language');
    }
}

function main() {
    const englishGreeter = greeterFactory('en');
    const spanishGreeter = greeterFactory('es');

    console.log(englishGreeter('Alice'));
    console.log(spanishGreeter('Carlos'));
}

main();