class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

/*
// Error: Property 'state' is missing in type 'Image'.
class Imagea implements SelectableControl {
    private state: any;
    select(): void {    }
}

*/

class Locations {

}