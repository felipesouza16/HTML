using MVC.Models;
using MVC.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class ClientesController : Controller
    {
        ClientesRepository repository = new ClientesRepository();
        // GET: Clientes
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Cadastro()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Cadastro(Clientes model)
        {
            repository.Create(model);
            return View();
        }
        public ActionResult Listar()
        {
            return View(repository.Read());
        }
        public ActionResult Deletar(int id)
        {
            repository.Delete(id);
            return RedirectToAction("Listar");
        }
        [HttpPost]
        public ActionResult Editar(Clientes model)
        {
            repository.Update(model);
            return RedirectToAction("Listar");
        }
        [HttpGet]
        public ActionResult Editar(int id)
        {
            return View(repository.Read(id));
        }
    }
}