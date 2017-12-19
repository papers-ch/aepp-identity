const _createPromise = getter => new Promise(
  (resolve, reject) => {
    getter((err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  }
)

export const getEstimatedGas = (web3, tx) =>{
  web3 = web3 || global.web3
  console.log(web3)
  return _createPromise(web3.eth.estimateGas.bind(undefined, tx))
}

export const getGasPrice = web3 => {
  web3 = web3 || global.web3
  return _createPromise(web3.eth.getGasPrice.bind(web3.eth))
}
