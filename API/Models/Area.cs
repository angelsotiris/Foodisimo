using System;
using System.Collections.Generic;
using System.Text;

namespace API.Models
{
    public class Area
    {
        public Area() { }

        public Area(int id, string name, int zipcode)
        {
            Id = id;
            Name = name;
            ZipCode = zipcode;
        }

        public int? Id { get; set; }
        public string? Name { get; set; }
        public int? ZipCode { get; set; }
    }

}
