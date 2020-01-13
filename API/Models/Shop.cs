using System;
using System.Collections.Generic;
using System.Text;

namespace API.Models
{
    public class Shop
    {
        public Shop() { }

        public Shop(int id, string name, string address, double distance,
            int min_order, List<Category> categories, int delivery_time, string description)
        {
            Id = id;
            Name = name;
            Address = address;
            Distance = distance;
            MinOrder = min_order;
            DeliveryTime = delivery_time;
            Categories = categories;
            Description = description;
        }

        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public double? Distance { get; set; }
        public int? MinOrder { get; set; }
        public int? DeliveryTime { get; set; }
        public string? Description { get; set; }
        public List<Category>? Categories { get; set; }

    }

    public class ShopMenu : Shop
    {
        public ShopMenu() { }

        public ShopMenu(int id, string name, string address, double distance,
            int min_order, List<Category> categories, int delivery_time, 
            List<Product> products, string description) : base(id, name, address, distance,
            min_order, categories, delivery_time, description)
        {
            Id = id;
            Name = name;
            Address = address;
            Distance = distance;
            MinOrder = min_order;
            Description = description;
            DeliveryTime = delivery_time;
            Categories = categories;
            Products = products;
        }

        public int? Id { get; set; }
        public string? Name { get; set; }
        public int? ShopId { get; set; }
        public List<Product> Products { get; set; }
    }
}
