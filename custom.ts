input.onButtonPressed(Button.A, function () {
    basic.showNumber(trigonometry.sine(34, angleType.radians))
})
enum angleType {
    radians = 1,
    degrees = 2,
}
namespace trigonometry {
    // Functions for trigonometry
    /**
    * Reads the angle based on radians or degrees.
    */
    //% color=#fc2003 weight=30 blockId="trigonometry_sine" icon="\uf209" block="sine of angle %x | in %angleType"
    //% x.shadow="protractorPicker"
    export function sine(x: number, Dim: angleType): number {

        switch (Dim) {
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return calculateSine(x, false)
            default: return null
        }
    }
    //% color=#fc2003 weight=30 blockId="trigonometry_sinh" icon="\uf209" block="sinh of x %x"
    //% x.shadow="protractorPicker"
    export function sinh(x: number): number {

        /*switch(Dim){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }*/
        return 0
    }
    //% color=#fc2003 weight=30 blockId="trigonometry_cosh" icon="\uf209" block="cosh of x %x"
    //% x.shadow="protractorPicker"
    export function cosh(x: number): number {

        /*switch(Dim){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }*/
        return 0
    }
    //% color=#fc2003 weight=30 blockId="trigonometry_tanh" icon="\uf209" block="tanh of x %x"
    //% x.shadow="protractorPicker"
    export function tanh(x: number): number {

        /*switch(Dim){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }*/
        return 0
    }

    /**
     * Function to calculate sine using Taylor series
     */
    function calculateSine(angle: number, dim: boolean) {
        // Use Taylor series upto 9 terms
        if (!dim)
            angle = degToRad(angle);

        return calculateSineUsingTaylor(angle);
    }

    function calculateSineUsingTaylor(angle: number) {
        let val = 0;
        for (let i = 1, k = 1; k < 18; i++, k += 2) {
            if (i % 2)
                val += (angle ** k) / factorial(k)
            else
                val -= (angle ** k) / factorial(k)
        }
        return val
    }

    function degToRad(degrees: number) {
        return degrees * (Math.PI / 180)
    }
    function radToDeg(rad: number) {
        return rad / (Math.PI / 180)
    }
    function factorial(n: number) {
        let answer = 1
        if (n == 0 || n == 1) {
            return answer
        } else {
            for (let j = n; j >= 1; j--) {
                answer = answer * j
            }
            return answer
        }
    }
}
