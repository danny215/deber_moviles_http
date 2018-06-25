/**
 * Pokemon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numPok:{
      type:"number"
    },
    nombrePok:{
      type:"string"
    },
    Ataque1:{
      type:"string"
    },
    Ataque2:{
      type:"string"
    },
    fechaCaptura:{
      type:"string"
    },
    nivel:{
      type:"number"
    },
    entrenadorId:{
      model:"Entrenador"
    }

  },

};

