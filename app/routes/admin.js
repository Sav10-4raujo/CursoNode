module.exports = function(app){
  app.get('/addnoticia',function(req,res){
    app.app.controllers.admin.addnoticia(req,res)
  })

  app.post('/noticias/salvar',function(req,res){
    app.app.controllers.admin.noticias_salvar(app,req,res)
  })
}