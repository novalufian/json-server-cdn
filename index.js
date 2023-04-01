const jsonServer = require('json-server')
const server = jsonServer.create()

const packageData = require('./packages.json')
const subjectData = require('./subject.json')
const usersData = require('./users.json')
const examsData = require('./exams.json')
const tryoutsData = require('./tryout.json')
const questionsData = require('./questions.json')

// join manual
tryoutsData.forEach(function (el, index) {
  examsData.forEach(function (_el, _index) {
  if (el.examId == _el.id) {
    el.exam = _el;
    return;
  }
  })
})

const dbData = {
  'packages' : packageData,
  'subjects' : subjectData,
  'users' : usersData,
  'tryouts' : tryoutsData,
  'exams' : examsData,
  'questions' : questionsData,

}
const router = jsonServer.router(dbData)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3005, () => {
  console.log('JSON Server is running')
})
