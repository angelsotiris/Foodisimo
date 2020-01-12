using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Foodishop
{
    public partial class LoadingForm : Form
    {
        private MainForm main = new MainForm();
        public LoadingForm()
        {
            InitializeComponent();
            progressBar.Visible = true;
            progressBar.Step = 1;
            progressBar.Value = 1;
            progressBar.Minimum = 1;
            progressBar.Maximum = timer1.Interval;

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            progressBar.PerformStep();
            if(progressBar.Value == progressBar.Maximum)
            {
                timer1.Stop();
                this.Hide();
                main.Closed += (s, args) => this.Close();
                main.Show();
            }
        }
    }
}
