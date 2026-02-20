"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createIntel = (processor) => {
    console.log(`anda telah membuat processor ${processor.brand}dengan 
    spesifikasi sebagai berikut: 
    🌟baseModel: ${processor.baseModel}
    🌟model: ${processor.modelName}
    🌟clockSpeed: ${processor.clockSpeed} GHz)
    🌟turboBoost: ${processor.turboBoost}
    🌟coreTotal: ${processor.coreTotal}`);
};
const createAMD = (processor) => {
    console.log(`anda telah membuat processor ${processor.brand}dengan 
    🌟spesifikasi sebagai berikut: 
    🌟baseModel: ${processor.baseModel}
    🌟model: ${processor.modelName}
    🌟clockSpeed: ${processor.clockSpeed} GHz) 
    🌟precisionBoost: ${processor.precisionBoost ? processor.precisionBoost : 'false'} 
    🌟coreTotal: ${processor.coreTotal}`);
};
const IntelZed = {
    brand: 'Intel',
    baseModel: 'Zed Intel',
    modelName: 'Zed 1234',
    clockSpeed: 3.5,
    turboBoost: true,
    coreTotal: 'hexa'
};
const AMDZed = {
    brand: 'AMD',
    baseModel: 'AMD Zed',
    modelName: 'Zed 1234',
    clockSpeed: 3.5,
    precisionBoost: true,
    coreTotal: 'octa'
};
createIntel(IntelZed);
createAMD(AMDZed);
//# sourceMappingURL=index.js.map