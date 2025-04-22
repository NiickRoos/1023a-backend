/*let nomeMateria:string = "FrameworksI"
console.log(nomeMateria)

const variavel = 10
const variavelNumber:number = 10
const variavelString:string = "frameworks I"
const variavelbooleano:boolean = true //false
const vetor:number[] = []
const vetorstrig:string[] = ["strings", "11"]
vetor.push(10)  
//Como criar objetos dentro do js
const pessoas:{nome:string, idade:number} = {
    idade:16,
    nome:"Nick"
}

pessoas.nome = "nick gay"
console.log(pessoas)
//type 
type EstudanteType = {
    nome:string,
    idade:number,
    cpf:number
}
//typo maiusculo e obj minusculo

const estudanteObj:EstudanteType = {
    nome: "Nick ateu",
    idade:17,
    cpf: 52865789210
}
console.log(estudanteObj)
//funções no javascript
function soma(a:number,b:number):number|undefined{
    return a+b
}
console.log(`o resultado da soma é:${soma(20.69,80.78)}`)
const vetorExemplo  = [1,2,3,4,5,6,7,8,9]
console.log(vetorExemplo.pop())
console.log(vetorExemplo)
function somaA(a:number,b:number):number{
    return a+b
}
 const somaB = function(a:number,b:number):number{
    return a+b
}
const somaC = (a:number,b:number):number=>{
    return a+b
}
const somaD = (a:number,b:number):number=>a+b
const somay = (a,b)=> a+b
*/

//Atividade
//primeira atividde com tipagem no typescript


//Crie uma função par()
//recebe um número e se ele for par retorna true
//se não for retorna false
//usar tipagem do typescript na função
//exemplo par(10) //true
//exemplo 2 par(11)//false
//exemplo 3 par(0)//undefined
//exemplo 4 par(-1) //undefined
/*function par(numero:number){  //tipagem seria colocar :number ou :string
   if(numero<=0) return undefined
   if(numero%2 ==0) return true
   else return false
   

   
}
console.log(par(10))
console.log(par(-10))
console.log(par(11))
*/

//Atividade 02
//Crie uma função que receba um vetor e some os numeros do vertpr
//somaNumeros([1,2,3,4])
//qunado o vetor passado for vazio retorna undefined
/*function soma(vetor:number[]): number | undefined{
    if (vetor.length == 0) {
        return undefined;
      }else{
        return "to com preguiça de terminar";
      }
}

console.log(soma([1,2,3,4]))

*/
//ATIVIDADE 03
//Crie uma função que receba um vetor e um numero , sua função deve somar as posições do vetor elevado ao numero recebido por parâmetro
//exemplo
//somaElevado([2,2,2],2) //12
//se o vetor for vázio devolva undefined


//Atividade
//Atividade 02
//Crie uma função que receba um vetor e some os numeros do vertpr
//somaNumeros([1,2,3,4])
//qunado o vetor passado for vazio retorna undefined
/*function soma(vetor:number[]): number | undefined{
    let numero = 0;
    if (vetor.length == 0) {
        return undefined;
    }
    for(let i = 0; i < vetor.length; i++){
        numero += vetor[i];
    }
     return numero

    }
     console.log(soma([1,2,3,4,5,6]));*/





/*
function somaposi(vetor:number[], numero:number){
    numero: 2
    
    if(vetor.length === 0) return undefined
    
}

*/

// MAP -> tranforma o vetor em um mapeamento

/*const vetor:number [ ] = [ 1,2,3 ]

function soma2 ( x:number ) {
    return x + 2
}

const result = vetor.map ( soma2 ) 

console.log ( result ) 

// Crie uma função que receba um vetor e devolva o mesmo vetor elevado ao cubo 

// Exemplo - eleva ( [1,2,3] ) // [1,8,27]

function eleva ( x:number ){
    return x ** 3 
}

const result = vetor.map ( eleva )

console.log ( result )

// Crie uma função que receba um vetor e um número e devolva um vetor com a soma de cada item com esse número

// Exemplo somaVetor ( [1,2], 3 ) // [ 4,5 ]

function somaVetor(v:number[], num:number){
    return v.map(
        function (num:number){
            return num + v
        }
    )
    }

    console.log(somaVetor([1,2],3))

    const vetor = [1,2,3]
    const result = vetor.filter(
        function (x:number){
            if(x<3){
                return true
            }
            else{
                return false
            }
        }
    )
        */
//console.log(result)
//Find

//criar uma função que retorna verdadeiro quando é o meu elemento buscado, quando n for retorne falso
//find encontra o priemiro e devolve, coisas especificas
//filter busca todos elemnos que atendem a condição, ou seja se tiver dois 5 e eu pedir 5, ele retorna os dois cincos
/*const v = [1,2,3,4,5]
function callbacks(x:number){
     return x==5
 
}
let result = v.find(callbacks)
console.log(result)
*/
/*const v = [1,2,3,4,5,5]
function callbacks(x:number){
     return x<6
 
}
let result = v.filter(callbacks)
console.log(result)
*/

/*
Assincronidade -> não sicronizado -> paralelo, não ficar esperando
algo que demore enquanto voce pode fazer outras coisas.
ex: enquanto esperamos o banco responder algo.
podemos realizar algo com javascript.


promessas é uma classe, que vc consegue colocar um retono como sendo a promessa
é um tipode objeto do javascript que é retonro de uma função que não é sicrona.
essse objeto chamado de promise quando a função termina elempode estar nos dois casos:
resolve -> qunado a função executou corretamente.
reject -> quando algo deu errado.

 

*/

//    function demora():Promise<string>{
//     let promise = new Promise<string>((resolve, reject)=>{
//         setTimeout(
//             function(){
//                 if(Math.random()<0.5){
//                     resolve("dados hehe")
//                 }else{
//                     reject("não funciona")
//                 }

//             },
//             2000
//           )

//     });
//     return promise

//    }


//      console.log("executar algo antes")
//     const resultado = demora()
//     .then((resultadoespera)=>{console.log(resultadoespera)})//resolve
//     .catch((resultadoespera)=>{console.log("Catch:"+ resultadoespera)})//reject
//     console.log("executar algo depois")







//.then => então
//.catch => capturar 


//await async
/**novo javascript trouxe esse novo conceito
 * await é para voce ficar esperando algo que é assícrono(async)
 * não podemos utilizar await sem ser em uma função assícrona(async)
 * 
 */
//  async function aux(){
//     try{
//     const resultado = await demora()//já sai o resultado
//     console.log("resultado await: "+ resultado)
//     }
//     catch(erro){
//         console.log("erro try/catch: "+erro)
//     }
//   }
//   aux()
/**bora lá */

import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'


const app = fastify()
app.register(cors)

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando")
})
app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn =  await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023a',
            port: 3306
        })
        const resultado =  await conn.query("SELECT * FROM estudantes")
        const [dados, camposTabela] = resultado
        reply.status(200).send(dados)
    }
    catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGAO => Conexão Recusada")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGAO => Conexão Recusada"})
        } 
        else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO")
            reply.status(400).send({mensagem:"CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO"})
        } 
        else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO")
            reply.status(400).send({mensagem:"CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO"})
        } 
        else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
            reply.status(400).send({mensagem:" Você deve criar a tabela com o mesmo nome da sua QUERY"})
        } 
        else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
            reply.status(400).send({mensagem:"Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
        } 
        else {
            console.log(erro)
            reply.status(400).send({mensagem:"Erro não identificado"})
        }
    }
})

app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})