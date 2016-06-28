# txnid
stupid simple method to create transactionids (random 'base36' strings)

## installation

```bash
npm install txnid
```

## usage

```node
var txnid = require('txnid');

console.log(txnid.newTxnid());
console.log(txnid.newTxnid(10));
```

outputs:
```
'0pxk7c'
'h65rtk525i'
```
