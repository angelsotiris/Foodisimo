namespace Foodishop
{
    partial class Orders
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
            this.components = new System.ComponentModel.Container();
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.button1 = new System.Windows.Forms.Button();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this._wwwfoodisimotech_db_373145fdDataSet = new Foodishop._wwwfoodisimotech_db_373145fdDataSet();
            this.wwwfoodisimotechdb373145fdDataSetBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.ordersBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.ordersTableAdapter = new Foodishop._wwwfoodisimotech_db_373145fdDataSetTableAdapters.ordersTableAdapter();
            this.ID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.date = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.customerName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.customerSurname = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.address = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.total = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.useridDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.notesDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.statusDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this._wwwfoodisimotech_db_373145fdDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wwwfoodisimotechdb373145fdDataSetBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ordersBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // comboBox1
            // 
            this.comboBox1.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBox1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.comboBox1.FormatString = "Ημ/νία -> Φθίνουσα";
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Items.AddRange(new object[] {
            "Ημ/νίας -> Φθήνουσα",
            "Ημ/νίας -> Αύξουσα",
            "ID -> Φθήνουσα",
            "ID -> Αύξουσα"});
            this.comboBox1.Location = new System.Drawing.Point(12, 60);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(160, 24);
            this.comboBox1.TabIndex = 1;
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ID,
            this.date,
            this.statusDataGridViewTextBoxColumn,
            this.customerName,
            this.customerSurname,
            this.address,
            this.total,
            this.notesDataGridViewTextBoxColumn,
            this.useridDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.ordersBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(12, 98);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 51;
            this.dataGridView1.RowTemplate.Height = 24;
            this.dataGridView1.Size = new System.Drawing.Size(1496, 500);
            this.dataGridView1.TabIndex = 2;
            this.dataGridView1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(1030, 58);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(98, 24);
            this.button1.TabIndex = 3;
            this.button1.Text = "Αναζήτηση";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(797, 60);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(227, 22);
            this.textBox1.TabIndex = 4;
            // 
            // _wwwfoodisimotech_db_373145fdDataSet
            // 
            this._wwwfoodisimotech_db_373145fdDataSet.DataSetName = "_wwwfoodisimotech_db_373145fdDataSet";
            this._wwwfoodisimotech_db_373145fdDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // wwwfoodisimotechdb373145fdDataSetBindingSource
            // 
            this.wwwfoodisimotechdb373145fdDataSetBindingSource.DataSource = this._wwwfoodisimotech_db_373145fdDataSet;
            this.wwwfoodisimotechdb373145fdDataSetBindingSource.Position = 0;
            // 
            // ordersBindingSource
            // 
            this.ordersBindingSource.DataMember = "orders";
            this.ordersBindingSource.DataSource = this.wwwfoodisimotechdb373145fdDataSetBindingSource;
            // 
            // ordersTableAdapter
            // 
            this.ordersTableAdapter.ClearBeforeFill = true;
            // 
            // ID
            // 
            this.ID.DataPropertyName = "id";
            this.ID.HeaderText = "ID";
            this.ID.MinimumWidth = 6;
            this.ID.Name = "ID";
            this.ID.ToolTipText = "ID";
            this.ID.Width = 75;
            // 
            // date
            // 
            this.date.DataPropertyName = "created_at";
            this.date.HeaderText = "Ημερομηνία";
            this.date.MinimumWidth = 6;
            this.date.Name = "date";
            this.date.ToolTipText = "Ημερομηνία";
            this.date.Width = 125;
            // 
            // customerName
            // 
            this.customerName.HeaderText = "Όνομα Πελάτη";
            this.customerName.MinimumWidth = 10;
            this.customerName.Name = "customerName";
            this.customerName.Width = 150;
            // 
            // customerSurname
            // 
            this.customerSurname.HeaderText = "Επίθετο Πελάτη";
            this.customerSurname.MinimumWidth = 10;
            this.customerSurname.Name = "customerSurname";
            this.customerSurname.Width = 180;
            // 
            // address
            // 
            this.address.HeaderText = "Οδός";
            this.address.MinimumWidth = 6;
            this.address.Name = "address";
            this.address.Width = 200;
            // 
            // total
            // 
            this.total.DataPropertyName = "total";
            this.total.HeaderText = "Σύνολο";
            this.total.MinimumWidth = 6;
            this.total.Name = "total";
            // 
            // useridDataGridViewTextBoxColumn
            // 
            this.useridDataGridViewTextBoxColumn.DataPropertyName = "user_id";
            this.useridDataGridViewTextBoxColumn.HeaderText = "user_id";
            this.useridDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.useridDataGridViewTextBoxColumn.Name = "useridDataGridViewTextBoxColumn";
            this.useridDataGridViewTextBoxColumn.Width = 125;
            // 
            // notesDataGridViewTextBoxColumn
            // 
            this.notesDataGridViewTextBoxColumn.DataPropertyName = "notes";
            this.notesDataGridViewTextBoxColumn.HeaderText = "Σημειώσεις";
            this.notesDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.notesDataGridViewTextBoxColumn.Name = "notesDataGridViewTextBoxColumn";
            this.notesDataGridViewTextBoxColumn.Width = 300;
            // 
            // statusDataGridViewTextBoxColumn
            // 
            this.statusDataGridViewTextBoxColumn.DataPropertyName = "status";
            this.statusDataGridViewTextBoxColumn.HeaderText = "Κατάσταση";
            this.statusDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.statusDataGridViewTextBoxColumn.Name = "statusDataGridViewTextBoxColumn";
            this.statusDataGridViewTextBoxColumn.Width = 125;
            // 
            // Orders
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.comboBox1);
            this.Name = "Orders";
            this.Size = new System.Drawing.Size(1530, 613);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this._wwwfoodisimotech_db_373145fdDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wwwfoodisimotechdb373145fdDataSetBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ordersBindingSource)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.BindingSource wwwfoodisimotechdb373145fdDataSetBindingSource;
        private _wwwfoodisimotech_db_373145fdDataSet _wwwfoodisimotech_db_373145fdDataSet;
        private System.Windows.Forms.DataGridViewTextBoxColumn ID;
        private System.Windows.Forms.DataGridViewTextBoxColumn date;
        private System.Windows.Forms.DataGridViewTextBoxColumn customerName;
        private System.Windows.Forms.DataGridViewTextBoxColumn customerSurname;
        private System.Windows.Forms.DataGridViewTextBoxColumn address;
        private System.Windows.Forms.DataGridViewTextBoxColumn total;
        private System.Windows.Forms.BindingSource ordersBindingSource;
        private _wwwfoodisimotech_db_373145fdDataSetTableAdapters.ordersTableAdapter ordersTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn statusDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn notesDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn useridDataGridViewTextBoxColumn;
    }
}
