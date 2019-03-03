module.exports.index = function(app,req,res){
  const connection = app.config.dbconnection()
  const noticiasModel = new app.app.models.NoticiasDAO(connection)
  noticiasModel.getFiveLastNews(function(error,result){
    res.render('./home/index',{noticias:result})
  })

}