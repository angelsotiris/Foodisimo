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
        private ConnectionDB con = new ConnectionDB();

        public MainForm()
        {
            InitializeComponent();
            topBar.Width = backgroundPanel.Width;
            dashboard1.BringToFront();
            panelActive.Height = btnDashboard.Height;
            panelActive.Top = btnDashboard.Top;
            shopName.Text = LoginForm.email;
            setConnectionDB();
        }

        private void setConnectionDB()
        {
            try
            {
                con.Open();
                string query = "select * from shops WHERE email ='" + LoginForm.email + "' AND password ='" + LoginForm.password + "'";
                MySqlDataReader rows;
                rows = con.ExecuteReader(query);

                if (rows.HasRows)
                {
                    Dictionary<string, string> results = new Dictionary<string, string> { };
                    int i = 0;

                    while (rows.Read())
                    {
                        results["shop_name"] = rows["shop_name"].ToString();
                        results["phone"] = rows["phone"].ToString();
                    }

                    shopName.Text = results["shop_name"] ;
                }
            }
            catch
            {
                MessageBox.Show("Δημιουργήθηκε ένα απρόσμενο σφάλμα κατά τη σύνδεση σας.", "Σφάλμα");
            }
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
            dashboard1.BringToFront();
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
    }
}
