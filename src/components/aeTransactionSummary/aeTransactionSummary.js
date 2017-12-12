import {AeAddress} from '@aeternity/aepp-components'
import web3Utils from 'web3-utils'
export default {
  name: 'ae-transaction-summary',
  props : [
    'addressFrom',
    'addressTo',
    'amount',
    'amountInFiat',
    'gas',
  ],
  components : {
    AeAddress
  },
  filters: {
    fromWei(value) {
      return web3Utils.fromWei(value.toString(), 'ether')
    }
  },
  computed : {
    amountInWei() {
      return web3Utils.toWei(this.amount.toString(), 'ether')
    },
    total() {
      return this.gas.price
        .mul(this.gas.amount)
        .add(this.amountInWei)
        .toString()
    }
  }
}
