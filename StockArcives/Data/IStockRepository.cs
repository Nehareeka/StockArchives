using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StockArcives.Data.Entities;
using StockArcives.ViewModels;

namespace StockArcives.Data
{
    public interface IStockRepository
    {
        IEnumerable<Stock> GetAllStocks();
        IEnumerable<Stock> GetStockBySymbol(string symbol);
    }
}
