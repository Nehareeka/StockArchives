using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StockArcives.Data;

namespace StockArcives.Controllers
{
    [Route("api/[Controller]")]
    public class StockController: ControllerBase
    {
        private readonly IStockRepository _repo;
        private readonly ILogger<StockController> _logger;
        //private readonly IMapper _mapper;

        public StockController(IStockRepository repo, ILogger<StockController> logger)
        {
            _repo = repo;
            _logger = logger;
            //_mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = _repo.GetAllStocks();
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex}");
                return BadRequest("Error occurred");
            }


        }

        [HttpGet("{symbol}")]
        public IActionResult Get(string symbol)
        {
            try
            {
                var stock = _repo.GetStockBySymbol(symbol);
                if (stock != null)
                    return Ok(stock);
                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex}");
                return BadRequest("Error occurred");
            }
        }

    }
}
