using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Portal_noticias
{
    #region Noticias
    public class Noticias
    {
        #region Member Variables
        protected int _id_noticia;
        protected string _titulo;
        protected string _noticia;
        protected unknown _data_criacao;
        protected string _resumo;
        protected string _autor;
        protected unknown _data_noticia;
        #endregion
        #region Constructors
        public Noticias() { }
        public Noticias(string titulo, string noticia, unknown data_criacao, string resumo, string autor, unknown data_noticia)
        {
            this._titulo=titulo;
            this._noticia=noticia;
            this._data_criacao=data_criacao;
            this._resumo=resumo;
            this._autor=autor;
            this._data_noticia=data_noticia;
        }
        #endregion
        #region Public Properties
        public virtual int Id_noticia
        {
            get {return _id_noticia;}
            set {_id_noticia=value;}
        }
        public virtual string Titulo
        {
            get {return _titulo;}
            set {_titulo=value;}
        }
        public virtual string Noticia
        {
            get {return _noticia;}
            set {_noticia=value;}
        }
        public virtual unknown Data_criacao
        {
            get {return _data_criacao;}
            set {_data_criacao=value;}
        }
        public virtual string Resumo
        {
            get {return _resumo;}
            set {_resumo=value;}
        }
        public virtual string Autor
        {
            get {return _autor;}
            set {_autor=value;}
        }
        public virtual unknown Data_noticia
        {
            get {return _data_noticia;}
            set {_data_noticia=value;}
        }
        #endregion
    }
    #endregion
}