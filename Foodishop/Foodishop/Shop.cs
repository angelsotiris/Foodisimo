using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Foodishop
{
    public class Shop
    {
        private string shopID;
        private string shopName;
        private string password;
        private string shopEmail;
        private string phone;
        private string address;
        private string postalCode;
        private string area;
        private string userName;
        private string userEmail;
        private string logo;

        public Shop()
        {
            this.shopID = "";
            this.shopName = "";
            this.password = "";
            this.shopEmail = "";
            this.phone = "";
            this.address = "";
            this.postalCode = "";
            this.area = "";
            this.userName = "";
            this.userEmail = "";
            this.logo = "";
    }

        public Shop(string shopID, string shopName, string password, string shopEmail, string phone)
        {
            this.shopID = shopID;
            this.shopName = shopName;
            this.password = password;
            this.shopEmail = shopEmail;
            this.phone = phone;
        }


        public string ShopID { get => shopID; set => shopID = value; }
        public string ShopName { get => shopName; set => shopName = value; }
        public string ShopEmail { get => shopEmail; set => shopEmail = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Address { get => address; set => address = value; }
        public string PostalCode { get => postalCode; set => postalCode = value; }
        public string Area { get => area; set => area = value; }
        public string UserName { get => userName; set => userName = value; }
        public string UserEmail { get => userEmail; set => userEmail = value; }
        public string Logo { get => logo; set => logo = value; }
        public string Password { get => password; set => password = value; }
    }
}
