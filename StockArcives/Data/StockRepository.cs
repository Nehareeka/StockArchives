using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using StockArcives.Data.Entities;
using StockArcives.ViewModels;

namespace StockArcives.Data
{
    public class StockRepository: IStockRepository
    {
        private readonly StockContext _context;
        private readonly ILogger<StockRepository> _logger;

        public StockRepository(StockContext context, ILogger<StockRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Stock> GetAllStocks()
        {
           return _context.Stock
               .GroupBy(x=>x.Symbol)
               .Select(g=>g.First())
               .OrderByDescending(x=>x.Volume)
               .ToList();
        }

        public IEnumerable<Stock> GetStockBySymbol(string symbol)
        {
            return _context.Stock
                .Select(x => x)
                .Where(x => x.Symbol == symbol)
                .ToList();
        }
    }
}
