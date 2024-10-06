const functions = {
  sugar: function (peso_contenedor,peso_total,densidad) {
    const peso_liquido = peso_total - peso_contenedor
    const volumen_liquido = peso_liquido / densidad
    const cantidad_de_azucar = volumen_liquido * 9
    return [volumen_liquido,cantidad_de_azucar];
  },
  water: function (qty) {
    const litro = 0.49
    const cantidad_de_agua = qty * 3
    const cm = 51 - (cantidad_de_agua * litro);
    return [cantidad_de_agua,cm]  ;
  },
  lts: function (qty) {
    const litro = 0.49
    return 51 - (qty * litro);
  },
  litros_por_kg : function (peso_contenedor,peso_total,densidad){
    const peso_liquido = peso_total - peso_contenedor
    const volumen_liquido = peso_liquido / densidad
    return volumen_liquido

  }
};

export default functions;
