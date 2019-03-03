function NoticiasDAO(connection){
  this._connection = connection
}
NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query("SELECT * FROM noticias order by data_criacao desc", callback)
}
NoticiasDAO.prototype.getNoticia = function(queryNoticia,callback){
  this._connection.query(`SELECT * FROM noticias WHERE id_noticia = ${queryNoticia.id_noticia}`,callback)
}
NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
  this._connection.query('INSERT into noticias set ?',noticia, callback)
}
NoticiasDAO.prototype.getFiveLastNews = function(callback){
  this._connection.query('SELECT * FROM noticias order by data_criacao desc limit 5', callback)
}

module.exports = function(){
  return NoticiasDAO
}
