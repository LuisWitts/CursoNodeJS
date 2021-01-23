const Sequelize = require('sequelize') 
//para se conectar aonde BD criamos essas 2 const's aonde na segunda pedimos algums PARM's 
//('NAME OF DATABASE','USUARIO','SENHA',{OBJETO JSON} como vemos abaixo                                         
const sequelize = new Sequelize('test','root','956300',{
    host: "localhost",
    dialect: 'mysql'
})

//para ver se a conexão deu bom vamos uitilizar
sequelize.authenticate().then(function () {      //SE der BOM agt chama a Funcão then
    console.log("Conectado com SUCESSO!!");   
    
}).catch(function (erro) {                       //SE der BOM agt chama a Funcão catch
    console.log("Falha ao se conectar: "+erro);
    
})