using System;
using System.Collections.Generic;
using System.Text;

namespace API.Models
{
    public class Address
    {
        public Address() { }

        public Address(int id, string address, int floor, Area area)
        {
            Id = id;
            AddressTitle = address;
            Floor = floor;
            Area = area;
        }

        public int? Id { get; set; }
        public string? AddressTitle { get; set; }
        public int? Floor { get; set; }
        public Area? Area { get; set; }
    }

}
