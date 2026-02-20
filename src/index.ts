type core = 'single' | 'dual' | 'quad' | 'hexa' | 'octa';

interface IProcessor  {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
    coreTotal: core;
} 

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost?: boolean;
}

const createIntel = (processor: Intel):void => {
    console.log(`anda telah membuat processor ${processor.brand}dengan 
    spesifikasi sebagai berikut: 
    🌟baseModel: ${processor.baseModel}
    🌟model: ${processor.modelName}
    🌟clockSpeed: ${processor.clockSpeed} GHz)
    🌟turboBoost: ${processor.turboBoost}
    🌟coreTotal: ${processor.coreTotal}`)
}
const createAMD = (processor: AMD):void => {
    console.log(`anda telah membuat processor ${processor.brand}dengan 
    🌟spesifikasi sebagai berikut: 
    🌟baseModel: ${processor.baseModel}
    🌟model: ${processor.modelName}
    🌟clockSpeed: ${processor.clockSpeed} GHz) 
    🌟precisionBoost: ${processor.precisionBoost ? processor.precisionBoost : 'false'} 
    🌟coreTotal: ${processor.coreTotal}`)
}

const IntelZed: Intel = {
    brand: 'Intel',
    baseModel: 'Zed Intel',
    modelName: 'Zed 1234',
    clockSpeed: 3.5,
    turboBoost: true,
    coreTotal: 'hexa'
}

const AMDZed: AMD = {
    brand: 'AMD',
    baseModel: 'AMD Zed',
    modelName: 'Zed 1234',
    clockSpeed: 3.5,
    precisionBoost: true,
    coreTotal: 'octa'
}

createIntel(IntelZed);
createAMD(AMDZed); 


