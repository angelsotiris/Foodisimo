namespace Foodishop
{
    partial class MainForm
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
            this.topBar = new System.Windows.Forms.Panel();
            this.panel2 = new System.Windows.Forms.Panel();
            this.closeBtn = new System.Windows.Forms.PictureBox();
            this.backgroundPanel = new System.Windows.Forms.Panel();
            this.panel4 = new System.Windows.Forms.Panel();
            this.dashboard2 = new Foodishop.Dashboard();
            this.products1 = new Foodishop.Products();
            this.opening1 = new Foodishop.Opening();
            this.orders1 = new Foodishop.Orders();
            this.label1 = new System.Windows.Forms.Label();
            this.sidebar = new System.Windows.Forms.Panel();
            this.panel3 = new System.Windows.Forms.Panel();
            this.shopName = new System.Windows.Forms.Label();
            this.shopIcon = new System.Windows.Forms.PictureBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panelActive = new System.Windows.Forms.Panel();
            this.btnOpen = new System.Windows.Forms.Button();
            this.btnDashboard = new System.Windows.Forms.Button();
            this.btnOrders = new System.Windows.Forms.Button();
            this.btnStatistics = new System.Windows.Forms.Button();
            this.btnProducts = new System.Windows.Forms.Button();
            this.bottomLogo = new System.Windows.Forms.PictureBox();
            this.statistics1 = new Foodishop.Statistics();
            this.topBar.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.closeBtn)).BeginInit();
            this.backgroundPanel.SuspendLayout();
            this.panel4.SuspendLayout();
            this.sidebar.SuspendLayout();
            this.panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.shopIcon)).BeginInit();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.bottomLogo)).BeginInit();
            this.SuspendLayout();
            // 
            // topBar
            // 
            this.topBar.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.topBar.BackColor = System.Drawing.Color.DarkRed;
            this.topBar.Controls.Add(this.panel2);
            this.topBar.Dock = System.Windows.Forms.DockStyle.Top;
            this.topBar.Location = new System.Drawing.Point(0, 0);
            this.topBar.Name = "topBar";
            this.topBar.Size = new System.Drawing.Size(1242, 44);
            this.topBar.TabIndex = 0;
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.closeBtn);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Right;
            this.panel2.Location = new System.Drawing.Point(1187, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(55, 44);
            this.panel2.TabIndex = 1;
            // 
            // closeBtn
            // 
            this.closeBtn.Cursor = System.Windows.Forms.Cursors.Hand;
            this.closeBtn.Image = global::Foodishop.Properties.Resources.close;
            this.closeBtn.Location = new System.Drawing.Point(3, 3);
            this.closeBtn.Margin = new System.Windows.Forms.Padding(3, 3, 30, 3);
            this.closeBtn.Name = "closeBtn";
            this.closeBtn.Size = new System.Drawing.Size(30, 38);
            this.closeBtn.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.closeBtn.TabIndex = 0;
            this.closeBtn.TabStop = false;
            this.closeBtn.Click += new System.EventHandler(this.closeBtn_Click);
            this.closeBtn.MouseLeave += new System.EventHandler(this.closeBtn_MouseLeave);
            this.closeBtn.MouseHover += new System.EventHandler(this.closeBtn_MouseHover);
            // 
            // backgroundPanel
            // 
            this.backgroundPanel.Controls.Add(this.panel4);
            this.backgroundPanel.Controls.Add(this.sidebar);
            this.backgroundPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.backgroundPanel.Location = new System.Drawing.Point(0, 0);
            this.backgroundPanel.Name = "backgroundPanel";
            this.backgroundPanel.Size = new System.Drawing.Size(1242, 781);
            this.backgroundPanel.TabIndex = 1;
            // 
            // panel4
            // 
            this.panel4.Controls.Add(this.statistics1);
            this.panel4.Controls.Add(this.dashboard2);
            this.panel4.Controls.Add(this.products1);
            this.panel4.Controls.Add(this.opening1);
            this.panel4.Controls.Add(this.orders1);
            this.panel4.Controls.Add(this.label1);
            this.panel4.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.panel4.Location = new System.Drawing.Point(323, 41);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(919, 740);
            this.panel4.TabIndex = 1;
            // 
            // dashboard2
            // 
            this.dashboard2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dashboard2.Location = new System.Drawing.Point(0, 0);
            this.dashboard2.Name = "dashboard2";
            this.dashboard2.Size = new System.Drawing.Size(919, 740);
            this.dashboard2.TabIndex = 5;
            this.dashboard2.Load += new System.EventHandler(this.dashboard2_Load);
            // 
            // products1
            // 
            this.products1.AutoSize = true;
            this.products1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.products1.Location = new System.Drawing.Point(0, 0);
            this.products1.Name = "products1";
            this.products1.Size = new System.Drawing.Size(919, 740);
            this.products1.TabIndex = 4;
            // 
            // opening1
            // 
            this.opening1.AutoSize = true;
            this.opening1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.opening1.Location = new System.Drawing.Point(0, 0);
            this.opening1.Name = "opening1";
            this.opening1.Size = new System.Drawing.Size(919, 740);
            this.opening1.TabIndex = 3;
            // 
            // orders1
            // 
            this.orders1.AutoSize = true;
            this.orders1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.orders1.Location = new System.Drawing.Point(0, 0);
            this.orders1.Name = "orders1";
            this.orders1.Size = new System.Drawing.Size(919, 740);
            this.orders1.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(435, 378);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(46, 17);
            this.label1.TabIndex = 0;
            this.label1.Text = "label1";
            // 
            // sidebar
            // 
            this.sidebar.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.sidebar.Controls.Add(this.panel3);
            this.sidebar.Controls.Add(this.panel1);
            this.sidebar.Controls.Add(this.bottomLogo);
            this.sidebar.Dock = System.Windows.Forms.DockStyle.Left;
            this.sidebar.Location = new System.Drawing.Point(0, 0);
            this.sidebar.Name = "sidebar";
            this.sidebar.Size = new System.Drawing.Size(323, 781);
            this.sidebar.TabIndex = 0;
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.shopName);
            this.panel3.Controls.Add(this.shopIcon);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel3.Location = new System.Drawing.Point(0, 0);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(323, 211);
            this.panel3.TabIndex = 5;
            // 
            // shopName
            // 
            this.shopName.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.shopName.ForeColor = System.Drawing.Color.White;
            this.shopName.Location = new System.Drawing.Point(12, 173);
            this.shopName.Name = "shopName";
            this.shopName.Size = new System.Drawing.Size(285, 25);
            this.shopName.TabIndex = 1;
            this.shopName.Text = "label1";
            this.shopName.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // shopIcon
            // 
            this.shopIcon.Image = global::Foodishop.Properties.Resources.shop_logo;
            this.shopIcon.Location = new System.Drawing.Point(111, 66);
            this.shopIcon.Name = "shopIcon";
            this.shopIcon.Size = new System.Drawing.Size(100, 100);
            this.shopIcon.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.shopIcon.TabIndex = 0;
            this.shopIcon.TabStop = false;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.panelActive);
            this.panel1.Controls.Add(this.btnOpen);
            this.panel1.Controls.Add(this.btnDashboard);
            this.panel1.Controls.Add(this.btnOrders);
            this.panel1.Controls.Add(this.btnStatistics);
            this.panel1.Controls.Add(this.btnProducts);
            this.panel1.Location = new System.Drawing.Point(0, 313);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(323, 296);
            this.panel1.TabIndex = 6;
            // 
            // panelActive
            // 
            this.panelActive.BackColor = System.Drawing.Color.Red;
            this.panelActive.Location = new System.Drawing.Point(0, 3);
            this.panelActive.Name = "panelActive";
            this.panelActive.Size = new System.Drawing.Size(8, 52);
            this.panelActive.TabIndex = 5;
            // 
            // btnOpen
            // 
            this.btnOpen.BackColor = System.Drawing.Color.Gray;
            this.btnOpen.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.btnOpen.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnOpen.FlatAppearance.BorderSize = 0;
            this.btnOpen.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnOpen.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnOpen.ForeColor = System.Drawing.Color.White;
            this.btnOpen.Location = new System.Drawing.Point(0, 215);
            this.btnOpen.Name = "btnOpen";
            this.btnOpen.Size = new System.Drawing.Size(323, 52);
            this.btnOpen.TabIndex = 4;
            this.btnOpen.Text = "Άνοιγμα/Κλείσιμο";
            this.btnOpen.UseVisualStyleBackColor = false;
            this.btnOpen.Click += new System.EventHandler(this.btnOpen_Click);
            // 
            // btnDashboard
            // 
            this.btnDashboard.BackColor = System.Drawing.Color.Gray;
            this.btnDashboard.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnDashboard.FlatAppearance.BorderSize = 0;
            this.btnDashboard.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDashboard.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDashboard.ForeColor = System.Drawing.Color.White;
            this.btnDashboard.Location = new System.Drawing.Point(0, 3);
            this.btnDashboard.Name = "btnDashboard";
            this.btnDashboard.Size = new System.Drawing.Size(323, 52);
            this.btnDashboard.TabIndex = 0;
            this.btnDashboard.Text = "Πίνακας Ελέγχου";
            this.btnDashboard.UseVisualStyleBackColor = false;
            this.btnDashboard.Click += new System.EventHandler(this.btnDashboard_Click);
            // 
            // btnOrders
            // 
            this.btnOrders.BackColor = System.Drawing.Color.Gray;
            this.btnOrders.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.btnOrders.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnOrders.FlatAppearance.BorderSize = 0;
            this.btnOrders.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnOrders.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnOrders.ForeColor = System.Drawing.Color.White;
            this.btnOrders.Location = new System.Drawing.Point(0, 56);
            this.btnOrders.Name = "btnOrders";
            this.btnOrders.Size = new System.Drawing.Size(323, 52);
            this.btnOrders.TabIndex = 1;
            this.btnOrders.Text = "Παραγγελίες";
            this.btnOrders.UseVisualStyleBackColor = false;
            this.btnOrders.Click += new System.EventHandler(this.btnOrders_Click);
            // 
            // btnStatistics
            // 
            this.btnStatistics.BackColor = System.Drawing.Color.Gray;
            this.btnStatistics.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.btnStatistics.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnStatistics.FlatAppearance.BorderSize = 0;
            this.btnStatistics.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnStatistics.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnStatistics.ForeColor = System.Drawing.Color.White;
            this.btnStatistics.Location = new System.Drawing.Point(0, 162);
            this.btnStatistics.Name = "btnStatistics";
            this.btnStatistics.Size = new System.Drawing.Size(323, 52);
            this.btnStatistics.TabIndex = 3;
            this.btnStatistics.Text = "Στατιστικά";
            this.btnStatistics.UseVisualStyleBackColor = false;
            this.btnStatistics.Click += new System.EventHandler(this.btnStatistics_Click);
            // 
            // btnProducts
            // 
            this.btnProducts.BackColor = System.Drawing.Color.Gray;
            this.btnProducts.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.btnProducts.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnProducts.FlatAppearance.BorderSize = 0;
            this.btnProducts.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnProducts.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnProducts.ForeColor = System.Drawing.Color.White;
            this.btnProducts.Location = new System.Drawing.Point(0, 109);
            this.btnProducts.Name = "btnProducts";
            this.btnProducts.Size = new System.Drawing.Size(323, 52);
            this.btnProducts.TabIndex = 2;
            this.btnProducts.Text = "Προϊόντα";
            this.btnProducts.UseVisualStyleBackColor = false;
            this.btnProducts.Click += new System.EventHandler(this.btnProducts_Click);
            // 
            // bottomLogo
            // 
            this.bottomLogo.Cursor = System.Windows.Forms.Cursors.Hand;
            this.bottomLogo.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.bottomLogo.Image = global::Foodishop.Properties.Resources.foodisimo_logo;
            this.bottomLogo.Location = new System.Drawing.Point(0, 686);
            this.bottomLogo.Name = "bottomLogo";
            this.bottomLogo.Size = new System.Drawing.Size(323, 95);
            this.bottomLogo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.bottomLogo.TabIndex = 4;
            this.bottomLogo.TabStop = false;
            this.bottomLogo.Click += new System.EventHandler(this.bottomLogo_Click);
            // 
            // statistics1
            // 
            this.statistics1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.statistics1.Location = new System.Drawing.Point(0, 0);
            this.statistics1.Name = "statistics1";
            this.statistics1.Size = new System.Drawing.Size(919, 740);
            this.statistics1.TabIndex = 6;
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1242, 781);
            this.Controls.Add(this.topBar);
            this.Controls.Add(this.backgroundPanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "MainForm";
            this.Text = "MainForm";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.topBar.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.closeBtn)).EndInit();
            this.backgroundPanel.ResumeLayout(false);
            this.panel4.ResumeLayout(false);
            this.panel4.PerformLayout();
            this.sidebar.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.shopIcon)).EndInit();
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.bottomLogo)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel topBar;
        private System.Windows.Forms.PictureBox closeBtn;
        private System.Windows.Forms.Panel backgroundPanel;
        private System.Windows.Forms.Panel sidebar;
        private System.Windows.Forms.Button btnStatistics;
        private System.Windows.Forms.Button btnProducts;
        private System.Windows.Forms.Button btnOrders;
        private System.Windows.Forms.Button btnDashboard;
        private System.Windows.Forms.PictureBox bottomLogo;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.PictureBox shopIcon;
        private System.Windows.Forms.Label shopName;
        private System.Windows.Forms.Button btnOpen;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.Label label1;
        private Orders orders1;
        private Products products1;
        private Opening opening1;
        private Dashboard dashboard1;
        private System.Windows.Forms.Panel panelActive;
        private Dashboard dashboard2;
        private Statistics statistics1;
    }
}