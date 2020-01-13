using System;
using System.Collections.Generic;
using System.Text;

namespace API.Models
{
    public class Product
    {
        public Product() { }

        public Product(int id, string name, double price,
            string stock, string description, string category)
        {
            Id = id;
            Name = name;
            Price = price;
            Stock = stock;
            Description = description;
            Category = category;

        }

        public int? Id { get; set; }
        public string? Name { get; set; }
        public double? Price { get; set; }
        public string? Stock { get; set; }
        public string? Description { get; set; }
        public string? Category { get; set; }
    }



}
