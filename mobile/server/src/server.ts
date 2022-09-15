// npm i @prisma/client - ambiente de produção

// npx prisma generate, ele cria em node-modules, dentro de prisma/client, um arquivo de tipificação do TypeScript, definições de tipos do TS, cria baseado no Banco de Dados do SCHEMA do Prisma e cria tbm todos os métodos que podemos executar


// Segundo Nível de abstração
//  Podemos utilizar um query builder para escrevermos em JS e ele converter para a linguagem do banco de dados como o SQL

// Terceiro nível  de abstração
// Utilizar um ORM - object relational mapper - Existem vários,e nesse caso estaremos utilizando o Prisma

// npm i prisma -D (-D de desenvolvimento)
// npx prisma studio - gera uma interface grafica (GUI) para navegarmos na DB

// A maioria dos packages existem a tag -h no final que trazem um relatório sobre o comando

// Esse é o método mais moderno de se importar o modulo, mudando no json, adicionando   "type":"module", e renomeando o arquivo com final .mjs

// Para parar o erro devemos descomentar a linha no tsconfig json para que entenda o node "moduleResolution": "node"
// E também no caso do express por não ter o typescript como linguagem nativa, precisamos instalar o pacote para que entenda

// HTTP methods / API RESTful

// GET, POST, PUT, PATCH, DELETE

import express from 'express'

//A biblioteca do cors necessita também de um package para entender o TypeScript - npm i @types/cors -D
// O cors é um limitador para que ninguém acesse páginas além das definidas
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minute'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

// Uma das coisas legais do Prisma é poder passar um objeto de configuraçao no PrismaClient e requisitar um log

//Por padrão o express não entende que podemos enviar uma informação em JSON 


const app = express()
//Para faze-lo entender que estamos enviando JSON usamos 
// app.use(express.json())
app.use(express.json())
app.use(cors())


const prisma = new PrismaClient({
  log: ['query']
})

/** PARAMS
 * Query: localhost:3333/ads?page=2
 * São utilizados quando precisamos persistir estado da pagina daquele momento, como filtros, ordenação. Também sempre são nomeados, 
 * localhost: 3333/ads?page2&sort=title
 * 
 * Route: localhost:3333/post/api-node
 * Não são nomeados
 * 
 * Body: Geralmente para envio de formulário, para informações sensíveis
*/

//  criar a primeira rota da aplicação com o método get

// a primeira pagina depois da '/'
// o segundo parâmetro desse app.get precisa ser uma função
// qual função vai ser executada quando o usuário acessar /ads
// No express quando se define esse tipo de função ele grava um request, response, esperando uma requisição e uma resposta

// Um array[] contendo objetos{}

//quando se usa um método assíncrono é melhor utilizar a sintaxe async/await

// Na função que está por volta da instrução, coloco async, e na frente do método que demora para executar, coloco await

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.json(games);
})

//HTTP CODES
// Os principais são os que começam com o Nº2, que são de sucesso
// Nº300 REDIRECIONAMENTO
// Nº400 - ERROS ALGUM CODIGO BUGADO
// Nº500 ERROS INESPERADOS
// 'response.status(201)'
//Recomenda-se fazer validação com a biblioteca zod javascript



app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return response.status(201).json(ad);
})

//Apesar de duas rotas terem o mesmo nome ela são diferentes por causa do method

//No express para identificarmos que esse 'id' é um parâmetro, colocamos dois pontos ':', ou seja, uma informação dinâmica
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hourStart),
      hoursEnd: convertMinutesToHourString(ad.hourEnd),
    }
  }))
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  // Ele vai tentar encontrar um ad com o id, senão encontrar vai disparar um erro

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  return response.json({
    discord: ad.discord,
  })
})


// app.LISTEN, quero que minha aplicação fique ouvindo novas requisições

app.listen(3333)

//  para rodar a aplicação executa-se o comando node mais o local do mjs, no caso, src/server.mjs
// Para parar CTRL + C

// Ferramenta para testar o backend, insomnia, getpostman, hoppscotch (se estiver online) ou instalar offline

// Por padrão o node não entende o TypeScript, então não faz sentido instalar ele como uma dependência, então usamos o comando
// npm i typescript -D
// Então trocar a extensão do nosso arquivo para .ts
// E então depois de terminar é necessário converter o codigo para que o node entenda com um script no json

// Precisamos criar um arquivo de configuração do  typescript

// o npx serve para executarmos alguma biblioteca ou executável que temos, e como quero rodar o tsc, dou um "npx tsc --init" que criará um arquivo de configurações do TS

// O legal da tipagem é que podemos definir o que uma função deve retornar obrigatoriamente para que funcione como por ex;

// Para que a produção seja agilizada, e tenhamos atualização, adicionamos uma ferramenta com o comando "npm i ts-node-dev -D"

// Para o ts-node-dev funcionar precisamos fazer algumas cfg a mais