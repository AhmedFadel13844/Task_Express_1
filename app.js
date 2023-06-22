const express= require('express')
const app= express()
const productRoutes= require('./routes/productRoutes')
app.use(express.json())


app.use('/api/v1/products', productRoutes)

const port=  8001
app.listen(port, ()=> console.log(`Listinning on port ${port}...`))