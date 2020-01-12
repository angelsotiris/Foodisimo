using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Foodishop
{
    public partial class MainForm : Form
    {

        public MainForm()
        {
            InitializeComponent();
            topBar.Width = backgroundPanel.Width;
            dashboard2.BringToFront();
            panelActive.Height = btnDashboard.Height;
            panelActive.Top = btnDashboard.Top;
            shopName.Text = LoginForm.katastima.ShopName;
        }


        private void closeBtn_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void closeBtn_MouseHover(object sender, EventArgs e)
        {
            closeBtn.BackColor = System.Drawing.Color.Red;
        }

        private void closeBtn_MouseLeave(object sender, EventArgs e)
        {
            closeBtn.BackColor = System.Drawing.Color.Transparent;
        }

        private void bottomLogo_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://www.foodisimo.tech/");
        }

        private void btnDashboard_Click(object sender, EventArgs e)
        {
            dashboard2.BringToFront();
            panelActive.Height = btnDashboard.Height;
            panelActive.Top = btnDashboard.Top;
        }

        private void btnOpen_Click(object sender, EventArgs e)
        {
            opening1.BringToFront();
            panelActive.Height = btnOpen.Height;
            panelActive.Top = btnOpen.Top;
        }

        private void btnStatistics_Click(object sender, EventArgs e)
        {
            statistics1.BringToFront();
            panelActive.Height = btnStatistics.Height;
            panelActive.Top = btnStatistics.Top;
        }

        private void btnProducts_Click(object sender, EventArgs e)
        {
            products1.BringToFront();
            panelActive.Height = btnProducts.Height;
            panelActive.Top = btnProducts.Top;
        }

        private void btnOrders_Click(object sender, EventArgs e)
        {
            orders1.BringToFront();
            panelActive.Height = btnOrders.Height;
            panelActive.Top = btnOrders.Top;
        }

        private void dashboard2_Load(object sender, EventArgs e)
        {

        }
    }
}
