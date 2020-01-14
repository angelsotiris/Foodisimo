using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Order
    {
        public Order() { }

        public Order(int id, int user_id, string doorbell_name, int floor, int shopId,
            string phone, string shopName, string notes, double total, List<OrderItem> order_items, string createdAt)
        {
            Id = id;
            UserId = user_id;
            DoorbellName = doorbell_name;
            Floor = floor;
            Phone = phone;
            Notes = notes;
            Total = total;
            ShopId = shopId;
            ShopName = shopName;
            OrderItems = order_items;
            CreatedAt = createdAt;
        }

        public int? Id { get; set; }
        public int? UserId { get; set; }
        public int? Floor { get; set; }
        public int? ShopId { get; set; }
        public string? ShopName { get; set; }
        public string? DoorbellName { get; set; }
        public string? Phone { get; set; }
        public string? Notes { get; set; }
        public double? Total { get; set; }
        public List<OrderItem>? OrderItems { get; set; }
        public string CreatedAt { get; set; }
    }

    public class OrderItem
    {
        public OrderItem() { }

        public OrderItem(int id, string product_name, int quantity)
        {
            Id = id;
            ProductName = product_name;
            Quantity = quantity;

        }

        public int? Id { get; set; }
        public string? ProductName { get; set; }
        public int? Quantity { get; set; }

    }
}
