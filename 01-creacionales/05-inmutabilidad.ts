/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    copyWith({content, cursorPosition, unsavedChanges}: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        );
    }

    displayState(): void {
        console.log(`Content: ${this.content}`);
        console.log(`Cursor Position: ${this.cursorPosition}`);
        console.log(`Unsaved Changes: ${this.unsavedChanges}`);
    }
}

class CodeEditorHistory {
    private states: CodeEditorState[] = [];
    private currentStateIndex: number = -1;
    
    saveState(state: CodeEditorState): void {
        if (this.currentStateIndex < this.states.length - 1) {
            this.states = this.states.slice(0, this.currentStateIndex + 1);
        }

        this.states.push(state);
        this.currentStateIndex++;
    }

    redo(): CodeEditorState | null {
        if (this.currentStateIndex > 0) {
            this.currentStateIndex--;
            return this.states[this.currentStateIndex];
        }
        return null;
    }
}

