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
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
            topBar.Width = backgroundPanel.Width;
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
    }
}
