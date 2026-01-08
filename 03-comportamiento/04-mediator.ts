/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

class ChatRoom {
    private users: User[] = [];
    public title: string;

    constructor(title: string) {
        this.title = title;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    sendMessage(sender: User, message: string): void {
        for (const user of this.users) {
            user.receiveMessage(`${sender['username']}: ${message}`);
        }
    }
}

class User {
    private username: string;
    private chatRoom: ChatRoom;

    constructor(username: string, chatRoom: ChatRoom) {
        this.username = username;
        this.chatRoom = chatRoom;
    }

    sendMessage(message: string): void {
        console.log(`${this.username} envía: ${message}`);
        this.chatRoom.sendMessage(this, message);
    }

    receiveMessage(message: string): void {
        console.log(`${this.username} recibe: ${message}`);
    }
}
