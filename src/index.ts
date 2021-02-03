import * as MinaSDK from '@o1labs/client-sdk'

const keys = MinaSDK.genKeys()

printHeader('Generate keys...', keys)

const signed = MinaSDK.signMessage('Hello', keys)

printHeader('Signed', signed)

if (MinaSDK.verifyMessage(signed)) {
  console.log('Message was verified successfully')
}

const signedPayment = MinaSDK.signPayment(
  {
    to: keys.publicKey,
    from: keys.publicKey,
    amount: 1,
    fee: 1,
    nonce: 0,
  },
  keys
)

console.log(signedPayment)

function printHeader(title: string, obj: any) {
  console.log('\n')
  console.log(
    '========================= ' + title + ' ========================='
  )
  console.log(obj)
}
