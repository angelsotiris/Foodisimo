namespace Foodishop
{
    partial class Products
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
            this._wwwfoodisimotech_db_373145fdDataSet1 = new Foodishop._wwwfoodisimotech_db_373145fdDataSet();
            this.wwwfoodisimotechdb373145fdDataSet1BindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.productsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.productsTableAdapter = new Foodishop._wwwfoodisimotech_db_373145fdDataSetTableAdapters.productsTableAdapter();
            this.checkedListBox1 = new System.Windows.Forms.CheckedListBox();
            ((System.ComponentModel.ISupportInitialize)(this._wwwfoodisimotech_db_373145fdDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wwwfoodisimotechdb373145fdDataSet1BindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.productsBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // _wwwfoodisimotech_db_373145fdDataSet1
            // 
            this._wwwfoodisimotech_db_373145fdDataSet1.DataSetName = "_wwwfoodisimotech_db_373145fdDataSet";
            this._wwwfoodisimotech_db_373145fdDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // wwwfoodisimotechdb373145fdDataSet1BindingSource
            // 
            this.wwwfoodisimotechdb373145fdDataSet1BindingSource.DataSource = this._wwwfoodisimotech_db_373145fdDataSet1;
            this.wwwfoodisimotechdb373145fdDataSet1BindingSource.Position = 0;
            // 
            // productsBindingSource
            // 
            this.productsBindingSource.DataMember = "products";
            this.productsBindingSource.DataSource = this.wwwfoodisimotechdb373145fdDataSet1BindingSource;
            // 
            // productsTableAdapter
            // 
            this.productsTableAdapter.ClearBeforeFill = true;
            // 
            // checkedListBox1
            // 
            this.checkedListBox1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.checkedListBox1.FormattingEnabled = true;
            this.checkedListBox1.Items.AddRange(new object[] {
            "Espresso",
            "Cappuccino",
            "Freddo Espresso",
            "Freddo Cappuccino",
            "Nescafe",
            "Καφές Φίλτρου",
            "Φραπέ"});
            this.checkedListBox1.Location = new System.Drawing.Point(21, 78);
            this.checkedListBox1.Name = "checkedListBox1";
            this.checkedListBox1.Size = new System.Drawing.Size(306, 393);
            this.checkedListBox1.TabIndex = 3;
            // 
            // Products
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.checkedListBox1);
            this.Name = "Products";
            this.Size = new System.Drawing.Size(1138, 607);
            ((System.ComponentModel.ISupportInitialize)(this._wwwfoodisimotech_db_373145fdDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wwwfoodisimotechdb373145fdDataSet1BindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.productsBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private _wwwfoodisimotech_db_373145fdDataSet _wwwfoodisimotech_db_373145fdDataSet1;
        private System.Windows.Forms.BindingSource wwwfoodisimotechdb373145fdDataSet1BindingSource;
        private System.Windows.Forms.BindingSource productsBindingSource;
        private _wwwfoodisimotech_db_373145fdDataSetTableAdapters.productsTableAdapter productsTableAdapter;
        private System.Windows.Forms.CheckedListBox checkedListBox1;
    }
}
