const express = require('express')
const app = express()

app.get('/',(req,res)=>{
	resp.send('Heyyyyy Maaaaa! ')
})

app.listen(3000,()=> console.log('server running in port 3000'))

