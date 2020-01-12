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

        public static string email = "";
        public static string password = "";
        private ConnectionDB con = new ConnectionDB();

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
                    string query = "select count(id) as count from shops WHERE email ='" + email + "' AND password ='" + password + "'";
                    MySqlDataReader row;
                    row = con.ExecuteReader(query);

                    if (row.HasRows)
                    {
                        string results = "";
                        while ( row.Read() )
                        {
                            results = row["count"].ToString();
                        }

                        if ( results == "1" )
                        {
                            // SUCCESS!!
                            LoadingForm loadingForm = new LoadingForm();
                            this.Hide();
                            loadingForm.Closed += (s, args) => this.Close();
                            loadingForm.Show();
                        }
                    }
                    else
                    {
                        // if there are connection errors
                        if (errorLabel.Visible)
                        {
                            blink(errorLabel);
                        }
                        errorLabel.Visible = true;
                    }
                }
                catch
                {
                    MessageBox.Show("Δημιουργήθηκε ένα απρόσμενο σφάλμα κατά τη σύνδεση σας.", "Σφάλμα");
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
