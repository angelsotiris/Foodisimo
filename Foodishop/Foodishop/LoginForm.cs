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
    public partial class LoginForm : Form
    {

        private string email = "";
        private string password = "";
        private string id;
        private string sname;
        private string phone;
        private ConnectionDB con = new ConnectionDB();

        public static Shop katastima = new Shop();

        public LoginForm()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void submitBtn_Click(object sender, EventArgs e)
        {
            email = emailBox.Text;
            password  = passBox.Text;
            emptyFieldLabel.Visible = false;
            emptyFieldLabel.Visible = false;

            Cursor.Current = Cursors.WaitCursor;

            // if fields are empty
            if (email == "" || password == "")
            {
                if (emptyFieldLabel.Visible)
                {
                    blink(emptyFieldLabel);
                }
                emptyFieldLabel.Visible = true;
            }
            else
            {
                try
                {
                    con.Open();
                    string query = "select * from shops WHERE email ='" + email + "' AND password ='" + password + "'";
                    MySqlDataReader row;
                    row = con.ExecuteReader(query);

                    if ( row.HasRows )
                    {
                        row.Read();

                        id = row["id"].ToString();
                        sname = row["shop_name"].ToString();
                        phone = row["phone"].ToString();

                        katastima.ShopID = id;
                        katastima.ShopName = sname;
                        katastima.Password = password;
                        katastima.ShopEmail = email;
                        katastima.Phone = phone;

                        // SUCCESS!!
                        LoadingForm loadingForm = new LoadingForm();
                        this.Hide();
                        loadingForm.Closed += (s, args) => this.Close();
                        loadingForm.Show();
                    }
                }
                catch
                {
                    //MessageBox.Show("Δημιουργήθηκε ένα απρόσμενο σφάλμα κατά τη σύνδεση σας.", "Σφάλμα");
                    // if there are connection errors
                    if (errorLabel.Visible)
                    {
                        blink(errorLabel);
                    }
                    errorLabel.Visible = true;
                }
            }
            
        }

        private void passBox_KeyDown(object sender, KeyEventArgs e)
        {
            if( e.KeyCode == Keys.Return)
            {
                submitBtn_Click(sender, e);
            }
        }

        private void emailBox_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Return)
            {
                submitBtn_Click(sender, e);
            }
        }

        private async void blink(Label label1)
        {
            Color oldColor = label1.ForeColor;
            for (int i = 0; i < 6; i++)
            {
                await Task.Delay(250);
                label1.ForeColor = label1.ForeColor == Color.DarkRed ? Color.ForestGreen : Color.DarkRed;
            }

            label1.ForeColor = oldColor;
        }
    }
}
