enum angleType{
    radians=1,
    degrees=2,
}
namespace trigonometry {

    // Functions for trigonometry

    /**
    * Reads the number
    */
    //% weight=30 blockId="trigonometry_sine" block="sine of angle %x | in %angleType"
    export function sine(x: number, type: angleType): number {
    
        switch(type){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }
    }

    /**
     * Function to calculate sine using Taylor series
     */
    function calculateSine(angle: number, dim: boolean) {
        // Use Taylor or Maclaurin series
        return 0
    }

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
