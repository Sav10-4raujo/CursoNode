const mysql = require('mysql')

const connMySql = function(){
  return mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'portal_noticias'
})
}

module.exports = function(){
  return connMySql   
  
}
