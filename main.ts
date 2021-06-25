enum angleType{
    radians=1,
    degrees=2,
}
namespace trigonometry {
    // Functions for trigonometry

    /**
    * Reads the angle number based on dimension, radians or degrees
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
        // Use Taylor or Maclaurin series upto 6 terms
        return 0
    }

    function degToRad(degrees: number) {
     return degrees * (Math.PI / 180);
    };

    function radToDeg(rad: number) {
        return rad / (Math.PI / 180);
    };

    function factorial(n: number) {
        let answer = 1;
        if (n == 0 || n == 1){
            return answer;
        }else{
            for(let i = n; i >= 1; i--){
                answer = answer * i;
            }
            return answer;
        }  
    }

}
