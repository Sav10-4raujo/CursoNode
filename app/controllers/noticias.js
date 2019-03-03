module.exports.noticias = function(app,req,res){
  const connection = app.config.dbconnection()
  const noticiasModel = new  app.app.models.NoticiasDAO(connection)
  
  noticiasModel.getNoticias(function(error, result){
      
      res.render("noticias/noticias", {noticias : result})
  })
}

module.exports.noticia = function(app,req,res){
  const connection = app.config.dbconnection()
  const modelNoticia = new app.app.models.NoticiasDAO(connection)
 
 let noticiaQuery = req.query

  modelNoticia.getNoticia(noticiaQuery,function(error,result){
    res.render('noticias/noticia', {noticia : result})
    console.log(result)
  })
}
