input.onButtonPressed(Button.A, function () {
    basic.showNumber(trigonometry.sine(76, angleType.degrees))
})
enum angleType{
    radians=1,
    degrees=2,
}
namespace trigonometry {
    // Functions for trigonometry
    /**
    * Reads the angle  based on dimension, radians or degrees
    */
    //% weight=30 blockId="trigonometry_sine" block="sine of angle %x | in %angleType"
    export function sine(x: number, Dim: angleType): number {
    
        switch(Dim){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }
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
                val += (angle ** k)/factorial(k)
            else
                val -= (angle ** k)/factorial(k)
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
        if (n == 0 || n == 1){
            return answer
        }else{
            for(let j = n; j >= 1; j--){
                answer = answer * j
            }
            return answer
        }  
    }
}
