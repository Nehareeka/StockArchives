using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockArcives.Data;

namespace StockArcives.Controllers
{
    public class HomeController: Controller
    {
        private readonly IStockRepository _repo;

        public HomeController(IStockRepository repo)
        {
            _repo = repo;
        }

        public IActionResult Index()
        {
            //var result = _repo.GetAllStocks();
            return View();
        }
    }
}
