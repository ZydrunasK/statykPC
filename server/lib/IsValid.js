export class IsValid {
    /**
     * El.pasto validavimas
     * @param {string} txt El.pastas
     * @returns 
     */
    email(text) {
        if (typeof text !== 'string') {
            return [true, 'el.pastas turi buti teksto tipo']
        }
        return [false, 'ok'];
    }

    /**
     * Slaptazodzio validavimas
     * @param {string} txt Slaptazodis
     * @returns 
     */
    password(text) {
        const minSize = 6;
        const maxSize = 26;
        if (typeof text !== 'string') {
            return [true, 'salptazodis turi buti teksto tipo']
        }
        
        if (text.length < minSize) {
            return [true, `Slaptazodzio ilgis turi buti nemaziau ${minSize} simboliu`]
        }
        if (text.length < maxSize) {
            return [true, `Slaptazodzio ilgis turi buti nedaugiau ${minSize} simboliu`]
        }

        return [false, 'ok'];
    }
}