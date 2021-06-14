const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/connection')
const tables = require('./infrastructure/tables')

conexao.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Conectado com o banco de dados')
        const app = customExpress()
        tables.init(conexao)

 app.listen(3000, 
     ()=>
         console.log('servidor funfando')
     )  
    }
})


    