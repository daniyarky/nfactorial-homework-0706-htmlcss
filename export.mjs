let motos=["suzuki","yamaha","harley"];
let canBuyMoto=(moto)=> moto.includes(moto);
let countMotos =()=> motos.length;

export {countMotos, canBuyMoto};
export {countMotos as cM,canBuyMoto as cBM};

export default motos;