Array.prototype.fillAll = function (maxNumber = 5) {
  for (let i = 0; i < this.length; i++) {
    this[i] = Math.floor(Math.random() * (maxNumber + 1))
  }
}
/*
 *  Funcion para la generacion de matrices cuadradas
 * @params dimesion
 * @params numberMin
 */
const generateArrSquare = ({ dimesion: d = 2, numberMin: n }) => {
  let newArr = new Array(d)
  for (let i = 0; i < d; i++) {
    newArr[i] = new Array(d)
    newArr[i].fillAll(n)
    console.log(newArr[i])
  }
  return newArr
}
//-- Generacion de una matriz
let matriz = generateArrSquare({ dimesion: 6, numberMin: 1 })
//-- Funcion encargada de la sumatoria de anillos
const sumRing = (arr = [], level = 1) => {
  if (level > Math.floor(arr.length / 2)) {
    return new Error('Level no entrado')
  }
  let sum = 0
  for (let i = level - 1; i <= arr.length - level; i++) {
    for (let j = level - 1; j <= arr.length - level; j++) {
      if (
        !(
          i >= level &&
          i <= arr.length - level - 1 &&
          j >= level &&
          j <= arr.length - level - 1
        )
      ) {
        sum += arr[i][j]
      }
    }
  }
  return sum
}

let sumfinal = sumRing(matriz, 2)
console.log(sumfinal)
