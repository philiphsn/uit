enum angleType{
    radians=1,
    degrees=2,
}
namespace trigonometry {

    // Functions for trigonometry

    /**
    * Reads the number
    */
    //% weight=30 blockId="trigonometry_sine" block="Get sine of pin %x | in %angleType"
    export function sine(x: number, type: angleType): number {
    
        switch(type){
            case angleType.radians: return calculateSine(x, true)
            case angleType.degrees: return  calculateSine(x, false)
            default: return null
        }
    }

    /**
     * Function to calculate sine
     */
    //% shim=gatorMoisture::getMoisture
    function calculateSine(angle: number, dim: boolean) {
        // Use series
        return 0
    }
}
