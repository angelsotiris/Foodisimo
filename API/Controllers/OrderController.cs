using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        [HttpPost]
        public bool AcceptOrder(Order order)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.AcceptOrder(order);
        }

        [HttpGet("user/{userId}")]
        public List<Order> GetUserOrders(int userId)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;
            return context.GetUserOrders(userId);
        }
    }
}