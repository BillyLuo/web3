// let provider = 'http://119.8.175.222:8545'
// let web3 = new Web3(new Web3.providers.HttpProvider(provider))
let web3 = new Web3(window.ethereum)
web3.eth.getAccounts().then(res => {
	console.log(res)
})
if (address) {
	web3.eth.getBalance(address).then(res => {
		console.log(res)
	})
}
// web3.eth.sendTransaction({
//     from: address,
//     gasPrice: "20000000000",
//     gas: "21000",
//     to: '0x3535353535353535353535353535353535353535',
//     value: "234324",
//     data: ""
// }).then(console.log)
web3.eth.getChainId().then((res) => {
	console.log(res)
});
web3.eth.getNodeInfo().then(console.log)
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
	let c = new web3.eth.Contract(interface, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', {
		from: address,
		gasPrice:2343,
		gas: 23432
	})
	c.methods.foo(123).send()
}
