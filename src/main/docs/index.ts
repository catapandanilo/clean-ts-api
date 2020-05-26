import { loginPath, surveyPath, signupPath } from './paths/'
import { badRequest, notFound, serverError, unauthorized, forbidden } from './components'
import { accountSchema, loginParamsSchema, errorSchema, surveySchema, surveyAnswerSchema, surveysSchema, apiKeyAuthSchema, signupParamsSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Essa é a documentação da API feita pelo instrutor Rodrigo Manguinho no curso da Udemy de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signupPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signupParams: signupParamsSchema,
    error: errorSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    surveys: surveysSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    notFound,
    serverError,
    unauthorized,
    forbidden
  }
}
