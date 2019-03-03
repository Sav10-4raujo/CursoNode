module.exports.addnoticia = function(req,res){
  res.render('admin/addnoticia',{validacao : {}, noticia:{}})
}

module.exports.noticias_salvar = function(app,req,res){
  let noticia = req.body

  req.assert('titulo','Título é obrigatório.').notEmpty()
  req.assert('resumo','Resumo é obrigatório.').notEmpty()
  req.assert('resumo','Resumo deve conter entre 10  e 100 char').len(10,100)
  req.assert('autor','Autor é obrigatório.').notEmpty()
  req.assert('data_noticia','Data é obrigatória.').notEmpty()
  req.assert('noticia','Notícia é obrigatória.').notEmpty()

  let erros = req.validationErrors()

  if(erros){
    res.render('admin/addnoticia', {validacao : erros, noticia : noticia})
    return;
  }

  const connection = app.config.dbconnection()
  const noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.salvarNoticia(noticia,function(error, result){
    res.redirect('/noticias')   
  })
}