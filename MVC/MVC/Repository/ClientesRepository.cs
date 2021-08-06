using MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC.Repository
{
    public class ClientesRepository
    {
        private static List<Clientes> clientes = new List<Clientes>();
        static int id = 0;
        public void Create(Clientes model)
        {
            model.Id = id;
            id++;
            clientes.Add(model);
        }
        public Clientes Read(int id)
        {
            return clientes.Find(c => c.Id == id);
        }
        public List<Clientes> Read()
        {
            return clientes;
        }
        public void Update(Clientes model)
        {
            int index = clientes.FindIndex(v => v.Id == model.Id);
            if (index != -1)
            {
                clientes[index] = model;
            }
        }
        public void Delete(int id)
        {
            Clientes model = Read(id);
            if (model != null)
            {
               clientes.Remove(model);
            }
        }
    }
}