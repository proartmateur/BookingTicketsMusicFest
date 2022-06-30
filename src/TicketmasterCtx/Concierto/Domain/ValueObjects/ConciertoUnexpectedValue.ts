export class ConciertoUnexpectedValue extends Error {
    constructor(msg: string) {
        super(msg);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ConciertoUnexpectedValue.prototype);
    }
}