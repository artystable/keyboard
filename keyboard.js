// Keyboard shortcuts
export let activate_keyboard_shortcuts = () => {

    // Map variables representing keys to ASCII codes
    const [ A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z ] = Array.from({ length: 26 }, (v, i) => 65 + i);

    const _0 = 48;
    const _1 = 49;
    const _2 = 50;
    const _3 = 51;
    const _4 = 52;
    const _5 = 53;
    const _6 = 54;
    const _7 = 55;
    const _8 = 56;
    const _9 = 57;
    const minus = 189;
    const plus = 187;

    const Escape = 27;

    const Delete = 46;
    const Shift = 16;
    const Ctrl = 17;
    const Alt = 18;

    // Arrow keys
    const Left = 37;
    const Right = 39;
    const Up = 38;
    const Down = 40;

    // Key is pressed
    document.body.addEventListener("keydown", (e) => {

        let key = e.which || e.keyCode;

        if (key == X) {} // delete
        if (key == C) {} // copy
        if (key == V) {} // paste

        if (key == A) {} // A
        if (key == B) {} // B
        /* ...etc... */
        if (key == Z) {} // Z

        // Arrows
        if (key == Left) {}
        if (key == Right) {}
        if (key == Up) {}
        if (key == Down) {}

        if (key == Delete) {  }

        if (key == Shift) { window.keyShift = true; }
        if (key == Ctrl) { window.keyCtrl = true; }
        if (key == Alt) { window.keyAlt = true; }

        // Shift + Delete
        if (window.keyShift && key == Delete) {}
        // Shift + Alt
        if (window.keyShift && key == Alt) {}
        // Ctrl + C
        if (window.keyCtrl && key == C) {}
        // Ctrl + V
        if (window.keyCtrl && key == V) {}
    });

    // Key (is) depressed :...(
    document.body.addEventListener("keyup", (e) => {

        const key = e.which || e.keyCode;

        if (key == X) {} // delete
        if (key == C) {} // copy
        if (key == V) {} // paste

        if (key == A) {} // A
        if (key == B) {} // B
        /* ...etc... */
        if (key == Z) {} // Z

        // Arrows
        if (key == Left) {}
        if (key == Right) {}
        if (key == Up) {}
        if (key == Down) {}

        if (key == Delete) { /* delete something currently selected */ }

        if (key == Shift) { window.keyShift = false; }
        if (key == Ctrl) { window.keyCtrl = false; }
        if (key == Alt) { window.keyAlt = false; }

        // Shift + Delete
        if (window.keyShift && key == Delete) {}
        // Shift + Alt
        if (window.keyShift && key == Alt) {}
        // Ctrl + C
        if (window.keyCtrl && key == C) {}
        // Ctrl + V
        if (window.keyCtrl && key == V) {}
    });
}