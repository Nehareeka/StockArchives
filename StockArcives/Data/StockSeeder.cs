using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using EntityFramework.Seeder;
using CsvHelper;
using Microsoft.EntityFrameworkCore.Internal;
using StockArcives.Data.Entities;

namespace StockArcives.Data
{
    public class StockSeeder
    {
        private readonly StockContext _context;
        private readonly IHostingEnvironment _hosting;

        public StockSeeder(StockContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();
            if (!_context.Stock.Any())
            {
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/StockData.csv");
                    List<Stock> lst = File.ReadAllLines(filepath)
                            .Skip(1)
                            .Select(OneFromCsv)
                            .ToList();
                    _context.Stock.AddRange(lst.ToArray());
                    _context.SaveChanges();
            }
        }
        public static Stock OneFromCsv(string csvLine)
        {
            string[] values = csvLine.Split(',');
            Stock item = new Stock();
            int i = 0;
            item.Date = Convert.ToDateTime(values[i++]);
            item.Symbol = values[i++];
            item.Open = Convert.ToDecimal(values[i++]);
            item.Close = Convert.ToDecimal(values[i++]);
            item.Low = Convert.ToDecimal(values[i++]);
            item.High = Convert.ToDecimal(values[i++]);
            item.Volume = Convert.ToDecimal(values[i++]);
            return item;
        }
    }
}
