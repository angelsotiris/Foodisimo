using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Foodishop
{
    public partial class LoadingForm : Form
    {
        private ConnectionDB con = new ConnectionDB();
        private bool end = false;
        public LoadingForm()
        {
            InitializeComponent();
            progressBar.Visible = true;
            progressBar.Step = 1;
            progressBar.Value = 1;
            progressBar.Minimum = 1;
            progressBar.Maximum = 13;
        }

        private void setConnectionDB()
        {
            try
            {
                con.Open();
                progressBar.PerformStep();
                string query2 = "select ad.address as address, ar.name as area, ar.zip_code as postalCode "
                               + "from addresses as ad "
                               + "inner join shops as s on ad.id=s.address_id "
                               + "inner join areas as ar on ad.area_id=ar.id "
                               + "WHERE s.email ='"
                               + LoginForm.katastima.ShopEmail
                               + "' AND s.password ='"
                               + LoginForm.katastima.Password
                               + "'";

                MySqlDataReader adr;
                adr = con.ExecuteReader(query2);
                progressBar.PerformStep();

                if (adr.HasRows)
                {
                    while (adr.Read())
                    {
                        LoginForm.katastima.Address = adr["address"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.Area = adr["area"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.PostalCode = adr["postalCode"].ToString();
                        progressBar.PerformStep();
                    }
                }
            }
            catch
            {
                MessageBox.Show("444Δημιουργήθηκε ένα απρόσμενο σφάλμα κατά τη σύνδεση σας.", "Σφάλμα");
                this.Close();
            }
            finally
            {
                con.Close();
            }


            try
            {
                con.Open();
                progressBar.PerformStep();
                string query = "select s.id as id, s.shop_name as shop_name, s.phone as phone, "
                               + "u.name as name, u.email as email "
                               + "from shops as s "
                               + "inner join users as u on s.head_user_id=u.id "
                               + "WHERE s.email ='"
                               + LoginForm.katastima.ShopEmail
                               + "' AND s.password ='"
                               + LoginForm.katastima.Password
                               + "'";

                MySqlDataReader rows;
                progressBar.PerformStep();
                rows = con.ExecuteReader(query);
                progressBar.PerformStep();

                if (rows.HasRows)
                {
                    while (rows.Read())
                    {
                        LoginForm.katastima.ShopName = rows["shop_name"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.ShopID = rows["id"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.Phone = rows["phone"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.UserName = rows["name"].ToString();
                        progressBar.PerformStep();
                        LoginForm.katastima.UserEmail = rows["email"].ToString();

                    }
                }

            }
            catch
            {
                MessageBox.Show("Δημιουργήθηκε ένα απρόσμενο σφάλμα κατά τη σύνδεση σας.", "Σφάλμα");
                this.Close();
            }
            finally
            {
                con.Close();
            }

            progressBar.PerformStep();
            end = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            //progressBar.PerformStep();
            if(progressBar.Value == progressBar.Maximum && end)
            {
                timer1.Stop();
                MainForm main = new MainForm();
                this.Hide();
                main.Closed += (s, args) => this.Close();
                main.Show();
            }
        }

        private void LoadingForm_Shown(object sender, EventArgs e)
        {
            setConnectionDB();
        }
    }
}
