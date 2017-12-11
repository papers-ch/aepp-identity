import moment from 'moment'
const blockies = require('ethereum-blockies-png')
import web3Utils from 'web3-utils'

//a "stupid" web3 just for conversions

export default {
	methods: {
		readableTimestamp: function (timestamp) {
			if (timestamp) {
				let momentTime = moment.unix(timestamp.toString())
				return momentTime.format('YYYY-MM-DD HH:mm')
			} else {
				return ''
			}
		},
		etherscanLink: function (value, type) {
			// type tx, address, block
			let baseurl = 'https://kovan.etherscan.io/'
			baseurl += type
			baseurl += '/'
			baseurl += value
			return baseurl
		},
		blockie: function (address) {
			return blockies.createDataURL({
				seed: address
			})
		},
		readableToken: function(balance) {
			if (!web3Utils) {
				return "null";
			}
			return parseFloat(web3Utils.fromWei(balance.toString(10), 'ether')).toFixed(3);
		},
		readableEther: function(balance) {
			if (!web3Utils) {
				return "null";
			}
			return parseFloat(web3Utils.fromWei(balance.toString(10), 'ether')).toFixed(3);
		}
	}
}
