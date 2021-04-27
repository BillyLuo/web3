// let provider = 'http://114.115.173.246:38545'
// let web3 = new Web3(new Web3.providers.HttpProvider(provider))
let provider = window.ethereum || window.BinanceChain
console.log(window.BinanceChain, provider)
let web3 = new Web3(provider)
// web3.eth.getAccounts().then(res => {
// 	console.log(res)
// })

// web3.eth.sendTransaction({
//     from: address,
//     gasPrice: "20000000000",
//     gas: "21000",
//     to: '0x3535353535353535353535353535353535353535',
//     value: "234324",
//     data: ""
// }).then(console.log)
// web3.eth.getChainId().then((res) => {
// 	console.log(res)
// });
// web3.eth.getNodeInfo().then(console.log)
// interest exchange electric razor liquid nuclear kingdom what dust occur sport piece
function contract () {
	var interface = [{
	    "type":"function",
	    "name":"foo",
	    "inputs": [{"name":"a","type":"uint256"}],
	    "outputs": [{"name":"b","type":"address"}]
	},{
	    "type":"event",
	    "name":"Event",
	    "inputs": [{"name":"a","type":"uint256","indexed":true},{"name":"b","type":"bytes32","indexed":false}],
	}]
	if (!web3.utils.isAddress(address)) return
	console.log(address)
	web3.eth.defaultAccount  = address
	var toAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
	let c = new web3.eth.Contract(interface, toAddress, {
		from: address,
		gasPrice:2343,
		gas: 23432
	})
	c.methods.foo(123).send()
}
