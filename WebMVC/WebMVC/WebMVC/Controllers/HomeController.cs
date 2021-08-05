using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMVC.Models;
using WebMVC.Repository;

namespace WebMVC.Controllers
{
    public class HomeController : Controller
    {
        RepositoryVacina repository = new RepositoryVacina();

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Cadastrar()
        {
            
            return View();
        }
        public ActionResult Listar()
        {
            List<Vacinas> model = repository.Listar();
            return View(model);
        }
        [HttpPost]
        public ActionResult Salvar(Vacinas model)
        {
            repository.Salvar(model);
            return RedirectToAction("Listar");
        }

        public ActionResult Excluir(int id)
        {
            repository.Deletar(id);
            return RedirectToAction("Listar");
        }
        public ActionResult Editar(int id) 
        {
            repository.Editar(id);
            return RedirectToAction("Listar");
        }
    }
}