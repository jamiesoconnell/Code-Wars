// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    string = string.toLowerCase(); // Convert to lowercase to handle uppercase letters

    let alphabet = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    };

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (alphabet.hasOwnProperty(char)) {
            alphabet[char] = true;
        }
    }

    // Check if all alphabet letters were found
    for (const letter in alphabet) {
        if (alphabet.hasOwnProperty(letter) && alphabet[letter] === false) {
            return false;
        }
    }

    return true;
}
