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
    public class UserController : ControllerBase
    {
        public List<User> Index()
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.GetAllUsers();
        }


        [HttpGet("{id}")]
        public User GetUser(int id)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.GetUser(id);
        }

        [HttpDelete("{id}")]
        public User DeleteUser(int id)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;

            return context.DeleteUser(id);
        }

        [HttpPost]
        public User InsertUser(User user)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;
            return context.InsertUser(user);
        }

        [HttpPut("{id}")]
        public User UpdateUser(User user)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;
            return context.UpdateUser(user);
        }

        [HttpPost("login")]
        public User Login(User user)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;
            return context.Login(user.Email, user.Password);
        }

        [HttpGet("shops/{id}")]
        public List<Shop> GetShopsById(int id)
        {
            FoodisimoContext context = HttpContext.RequestServices.GetService(typeof(API.Models.FoodisimoContext)) as FoodisimoContext;
            return new List<Shop>();
        }

    }
}
