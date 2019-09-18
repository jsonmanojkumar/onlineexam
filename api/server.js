
import app from './core/app'

const PORT = process.env.PORT || 3000;


app.express.listen(PORT, () => {
    console.log(`server up and running on port ${PORT}`)
})
