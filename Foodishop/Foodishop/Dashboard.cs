using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Foodishop
{
    public partial class Dashboard : UserControl
    {
        public Dashboard()
        {
            InitializeComponent();

            shopNameLabel.Text = LoginForm.katastima.ShopName;
            emailLabel.Text = LoginForm.katastima.ShopEmail;
            phoneLabel.Text = LoginForm.katastima.Phone;
            addressLabel.Text = LoginForm.katastima.Address;
            areaLabel.Text = LoginForm.katastima.Area;
            postalCodeLabel.Text = LoginForm.katastima.PostalCode;
            usernameLabel.Text = LoginForm.katastima.UserName;
            userEmailLabel.Text = LoginForm.katastima.UserEmail;
        }

        private void suppostBtn_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://www.foodisimo.tech/");
        }

        private void wrongDetailsBtn_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://www.foodisimo.tech/");
        }
    }
}
