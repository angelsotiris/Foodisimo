using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShopController : ControllerBase
    {
        [HttpGet("{id}")]
        public Shop GetShop(int id)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return new Shop();//context.GetShop(id);
        }

        public List<Shop> GetShops()
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.GetShops();
        }


        [HttpGet("menu/{id}")]
        public ShopMenu GetShopMenu(int id)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.GetShopMenu(id);
        }

    }
}
