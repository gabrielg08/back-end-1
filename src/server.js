import app from "./app.js";
import { authenticated, syncUp } from "./config/database/database.js";
import { envs } from './config/enviroments/enviroments.js'

async function main(){
    try {
        await authenticated()
        await syncUp()
    } catch (error) {
        console.log(error)
    }
}

main()

app.listen(envs.PORT, () => {
    console.log(`Server running port: ${envs.PORT}`)
})