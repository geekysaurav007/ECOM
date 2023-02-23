const express=require('express')
require('./database/connection')()
const morgan=require('morgan')
const handleError = require('./middlewares/error-handler')
const {categoryRouter} = require('./router/category-router')
const {orderRouter} = require('./router/order-router')
const {productRouter} = require('./router/product-router')
const  {userRouter}  = require('./router/user-router')
const app=express()
app.use(express.json())
app.use(morgan('dev'))


app.listen(3000,()=>{
    console.log("listening on port 3000")
})


app.get('/',(req,resp)=>{
    resp.json({"message":"success saurav"})
})

const apiRouter=express.Router()

apiRouter.get('',(req,resp)=>{
    resp.json({"message":"hello saurav"})
})
app.use('/api',apiRouter)







apiRouter.use('/users',userRouter)
apiRouter.use('/products',productRouter)
apiRouter.use('/orders',orderRouter)
apiRouter.use('/categories',categoryRouter)

app.use(handleError)