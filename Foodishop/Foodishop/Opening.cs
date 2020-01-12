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
    public partial class Opening : UserControl
    {
        public bool status;
        public Opening()
        {
            InitializeComponent();
            buttonOnOff.Text = "Turn it ON";
            buttonOnOff.BackColor = System.Drawing.Color.ForestGreen;
            labelOnOff.Text = "OFF";
            labelOnOff.ForeColor = System.Drawing.Color.Red;
            status = false;
        }

        private void buttonOnOff_Click(object sender, EventArgs e)
        {
            if (status)
            {
                buttonOnOff.Text = "Turn it ON";
                buttonOnOff.BackColor = System.Drawing.Color.ForestGreen;
                labelOnOff.Text = "OFF";
                labelOnOff.ForeColor =  System.Drawing.Color.Red;
                status = false;
            }
            else
            {
                buttonOnOff.Text = "Turn it OFF";
                buttonOnOff.BackColor = System.Drawing.Color.Red;
                labelOnOff.Text = "ON";
                labelOnOff.ForeColor = System.Drawing.Color.ForestGreen;
                status = true;
            }
        }
    }
}
