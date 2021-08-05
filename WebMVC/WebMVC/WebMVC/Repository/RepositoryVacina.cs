using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMVC.Models;

namespace WebMVC.Repository
{
    public class RepositoryVacina
    {
        private static List<Vacinas> vacinas = new List<Vacinas>();

        public void Salvar(Vacinas model)
        {
            vacinas.Add(model);
        }
        public List<Vacinas> Listar()
        {
            return vacinas;
        }
        public void Deletar(int id)
        {
            var qqr = vacinas.Find(v => v.Id == id);
            if(qqr != null)
            {
                vacinas.Remove(qqr);
            }
        }
        public void Editar(int id)
        {
            var qqr = vacinas.Find(v => v.Id == id);
            if (qqr != null)
            {
                
            }
        }
    }
}