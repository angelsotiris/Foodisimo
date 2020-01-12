namespace Foodishop
{
    partial class Opening
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.labelOnOff = new System.Windows.Forms.Label();
            this.buttonOnOff = new System.Windows.Forms.Button();
            this.labelStatus = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // labelOnOff
            // 
            this.labelOnOff.AutoSize = true;
            this.labelOnOff.Font = new System.Drawing.Font("Microsoft Sans Serif", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelOnOff.ForeColor = System.Drawing.Color.ForestGreen;
            this.labelOnOff.Location = new System.Drawing.Point(537, 287);
            this.labelOnOff.Name = "labelOnOff";
            this.labelOnOff.Size = new System.Drawing.Size(61, 36);
            this.labelOnOff.TabIndex = 0;
            this.labelOnOff.Text = "ON";
            // 
            // buttonOnOff
            // 
            this.buttonOnOff.BackColor = System.Drawing.Color.Red;
            this.buttonOnOff.FlatAppearance.BorderSize = 0;
            this.buttonOnOff.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.buttonOnOff.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonOnOff.ForeColor = System.Drawing.Color.White;
            this.buttonOnOff.Location = new System.Drawing.Point(439, 440);
            this.buttonOnOff.Name = "buttonOnOff";
            this.buttonOnOff.Size = new System.Drawing.Size(254, 62);
            this.buttonOnOff.TabIndex = 1;
            this.buttonOnOff.Text = "Turn it OFF";
            this.buttonOnOff.UseVisualStyleBackColor = false;
            this.buttonOnOff.Click += new System.EventHandler(this.buttonOnOff_Click);
            // 
            // labelStatus
            // 
            this.labelStatus.AutoSize = true;
            this.labelStatus.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelStatus.Location = new System.Drawing.Point(293, 291);
            this.labelStatus.Name = "labelStatus";
            this.labelStatus.Size = new System.Drawing.Size(197, 29);
            this.labelStatus.TabIndex = 2;
            this.labelStatus.Text = "Shop is currently:";
            // 
            // panel1
            // 
            this.panel1.AutoSize = true;
            this.panel1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel1.Controls.Add(this.labelStatus);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(1133, 610);
            this.panel1.TabIndex = 3;
            // 
            // Opening
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.buttonOnOff);
            this.Controls.Add(this.labelOnOff);
            this.Controls.Add(this.panel1);
            this.Name = "Opening";
            this.Size = new System.Drawing.Size(1133, 610);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label labelOnOff;
        private System.Windows.Forms.Button buttonOnOff;
        private System.Windows.Forms.Label labelStatus;
        private System.Windows.Forms.Panel panel1;
    }
}
