namespace Foodishop
{
    partial class LoginForm
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

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.submitBtn = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel3 = new System.Windows.Forms.Panel();
            this.emptyFieldLabel = new System.Windows.Forms.Label();
            this.emailLabel = new System.Windows.Forms.Label();
            this.errorLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.passBox = new System.Windows.Forms.TextBox();
            this.emailBox = new System.Windows.Forms.TextBox();
            this.panel2 = new System.Windows.Forms.Panel();
            this.Logo = new System.Windows.Forms.PictureBox();
            this.usersTableAdapter1 = new Foodishop._wwwfoodisimotech_db_373145fdDataSetTableAdapters.usersTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panel1.SuspendLayout();
            this.panel3.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).BeginInit();
            this.SuspendLayout();
            // 
            // submitBtn
            // 
            this.submitBtn.BackColor = System.Drawing.Color.DarkRed;
            this.submitBtn.Cursor = System.Windows.Forms.Cursors.Hand;
            this.submitBtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.submitBtn.ForeColor = System.Drawing.Color.White;
            this.submitBtn.Location = new System.Drawing.Point(51, 163);
            this.submitBtn.Name = "submitBtn";
            this.submitBtn.Size = new System.Drawing.Size(274, 41);
            this.submitBtn.TabIndex = 3;
            this.submitBtn.Text = "Είσοδος";
            this.submitBtn.UseVisualStyleBackColor = false;
            this.submitBtn.Click += new System.EventHandler(this.submitBtn_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.Cursor = System.Windows.Forms.Cursors.Hand;
            this.pictureBox1.Image = global::Foodishop.Properties.Resources.close;
            this.pictureBox1.Location = new System.Drawing.Point(429, 15);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(35, 28);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 6;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.panel3);
            this.panel1.Controls.Add(this.pictureBox1);
            this.panel1.Location = new System.Drawing.Point(315, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(485, 400);
            this.panel1.TabIndex = 7;
            // 
            // panel3
            // 
            this.panel3.BackColor = System.Drawing.Color.White;
            this.panel3.Controls.Add(this.emptyFieldLabel);
            this.panel3.Controls.Add(this.emailLabel);
            this.panel3.Controls.Add(this.errorLabel);
            this.panel3.Controls.Add(this.submitBtn);
            this.panel3.Controls.Add(this.label1);
            this.panel3.Controls.Add(this.passBox);
            this.panel3.Controls.Add(this.emailBox);
            this.panel3.Location = new System.Drawing.Point(71, 79);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(366, 255);
            this.panel3.TabIndex = 12;
            // 
            // emptyFieldLabel
            // 
            this.emptyFieldLabel.AutoSize = true;
            this.emptyFieldLabel.ForeColor = System.Drawing.Color.Black;
            this.emptyFieldLabel.Location = new System.Drawing.Point(33, 219);
            this.emptyFieldLabel.Name = "emptyFieldLabel";
            this.emptyFieldLabel.Size = new System.Drawing.Size(296, 17);
            this.emptyFieldLabel.TabIndex = 12;
            this.emptyFieldLabel.Text = "Σφάλμα: Δεν έχετε συμπληρώσει όλα τα πεδία";
            this.emptyFieldLabel.Visible = false;
            // 
            // emailLabel
            // 
            this.emailLabel.AutoSize = true;
            this.emailLabel.ForeColor = System.Drawing.Color.Black;
            this.emailLabel.Location = new System.Drawing.Point(167, 13);
            this.emailLabel.Name = "emailLabel";
            this.emailLabel.Size = new System.Drawing.Size(42, 17);
            this.emailLabel.TabIndex = 11;
            this.emailLabel.Text = "Email";
            // 
            // errorLabel
            // 
            this.errorLabel.AutoSize = true;
            this.errorLabel.ForeColor = System.Drawing.Color.Black;
            this.errorLabel.Location = new System.Drawing.Point(33, 219);
            this.errorLabel.Name = "errorLabel";
            this.errorLabel.Size = new System.Drawing.Size(310, 17);
            this.errorLabel.TabIndex = 9;
            this.errorLabel.Text = "Σφάλμα: Έχετε δώσει λάθος username ή κωδικό";
            this.errorLabel.Visible = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.Color.Black;
            this.label1.Location = new System.Drawing.Point(158, 82);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(60, 17);
            this.label1.TabIndex = 10;
            this.label1.Text = "Κωδικός";
            // 
            // passBox
            // 
            this.passBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.passBox.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.passBox.Location = new System.Drawing.Point(51, 103);
            this.passBox.Name = "passBox";
            this.passBox.PasswordChar = '*';
            this.passBox.Size = new System.Drawing.Size(274, 22);
            this.passBox.TabIndex = 2;
            this.passBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.passBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.passBox_KeyDown);
            // 
            // emailBox
            // 
            this.emailBox.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.emailBox.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.emailBox.Location = new System.Drawing.Point(51, 35);
            this.emailBox.Name = "emailBox";
            this.emailBox.Size = new System.Drawing.Size(274, 22);
            this.emailBox.TabIndex = 1;
            this.emailBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.emailBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.emailBox_KeyDown);
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.White;
            this.panel2.Controls.Add(this.Logo);
            this.panel2.Location = new System.Drawing.Point(-1, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(311, 400);
            this.panel2.TabIndex = 9;
            // 
            // Logo
            // 
            this.Logo.Image = global::Foodishop.Properties.Resources.foodisimo_logo;
            this.Logo.Location = new System.Drawing.Point(25, 103);
            this.Logo.Name = "Logo";
            this.Logo.Size = new System.Drawing.Size(259, 194);
            this.Logo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.CenterImage;
            this.Logo.TabIndex = 1;
            this.Logo.TabStop = false;
            // 
            // usersTableAdapter1
            // 
            this.usersTableAdapter1.ClearBeforeFill = true;
            // 
            // LoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.DarkRed;
            this.ClientSize = new System.Drawing.Size(800, 400);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "LoginForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            this.panel3.PerformLayout();
            this.panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Button submitBtn;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TextBox emailBox;
        private System.Windows.Forms.TextBox passBox;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.PictureBox Logo;
        private System.Windows.Forms.Label errorLabel;
        private System.Windows.Forms.Label emailLabel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Panel panel3;
        private _wwwfoodisimotech_db_373145fdDataSetTableAdapters.usersTableAdapter usersTableAdapter1;
        private System.Windows.Forms.Label emptyFieldLabel;
    }
}