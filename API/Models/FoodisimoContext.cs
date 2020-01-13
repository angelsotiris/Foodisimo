using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace API.Models
{
    public class FoodisimoContext
    {
        public string ConnectionString { get; set; }

        public FoodisimoContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public Address GetUserAddress(int user_id)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(String.Format(
                    "SELECT a.id, a.address, a.floor, " +
                    "ar.name, ar.zip_code, ar.id as area_id from users u " +
                    "join addresses as a " +
                    "on u.address_id = a.id " +
                    "join areas as ar " +
                    "on ar.id = a.area_id " +
                    "where u.id = {0}", user_id), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return new Address()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            AddressTitle = reader["address"].ToString(),
                            Floor = Convert.ToInt32(reader["floor"]),
                            Area = new Area(Convert.ToInt32(reader["area_id"]), reader["name"].ToString(), Convert.ToInt32(reader["zip_code"]))
                        };
                    }
                    return null;

                }
            }
        }

        public List<User> GetAllUsers()
        {
            List<User> list = new List<User>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from users", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new User()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            SurName = reader["surname"].ToString(),
                            Password = reader["password"].ToString(),
                            Email = reader["email"].ToString(),
                            Phone = reader["phone"].ToString(),
                            DoorbellName = reader["doorbell_name"].ToString(),
                            DateOfBirth = DateTime.Parse(reader["date_of_birth"].ToString()),
                            Address = GetUserAddress(Convert.ToInt32(reader["id"]))
                        });
                    }
                }
            }
            return list;
        }
        public User GetUser(int id)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(String.Format("select * from users where id={0}", id), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return new User()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            SurName = reader["surname"].ToString(),
                            Password = reader["password"].ToString(),
                            Email = reader["email"].ToString(),
                            Phone = reader["phone"].ToString(),
                            DoorbellName = reader["doorbell_name"].ToString(),
                            DateOfBirth = DateTime.Parse(reader["date_of_birth"].ToString()),
                            Address = GetUserAddress(Convert.ToInt32(reader["id"]))
                        };
                    }
                    return new User();

                }
            }

        }

        public User DeleteUser(int id)
        {

            User user = GetUser(id);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(String.Format("delete from users where id={0}", id), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return new User()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            SurName = reader["surname"].ToString(),
                            Password = reader["password"].ToString(),
                            Email = reader["email"].ToString(),
                            Phone = reader["phone"].ToString(),
                            DoorbellName = reader["doorbell_name"].ToString(),
                            DateOfBirth = DateTime.Parse(reader["date_of_birth"].ToString()),
                            Address = GetUserAddress(Convert.ToInt32(reader["id"]))
                        };
                    }
                    return new User();

                }
            }

        }

        public User InsertUser(User user)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(
                    String.Format("insert into users (`id`, `name`, `surname`, `password`, `email`, `phone`, `doorbell_name`, " +
                                  "`date_of_birth`, `created_at`, `update_at`, `last_login`)" +
                                  "values ({0}, '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', now(), now(), now())",
                                  user.Id, user.Name, user.SurName, user.Password, user.Email, user.Phone, user.DoorbellName, user.DateOfBirth), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return user;
                    }
                    return new User();

                }
            }

        }

        public User UpdateUser(User user)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(
                    String.Format("update users set name='{0}', surname='{1}', password='{2}', email='{3}', phone='{4}', " +
                                  "doorbell_name='{5}', date_of_birth='{6}', update_at=now()",
                                  user.Name, user.SurName, user.Password, user.Email, user.Phone, user.DoorbellName, user.DateOfBirth), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return user;
                    }
                    return new User();

                }
            }

        }

        public User Login(string email, string password)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(
                    String.Format("select * from users where email='{0}' and password='{1}'", email, password), conn);

                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        return new User { 
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            SurName = reader["surname"].ToString(),
                            Password = reader["password"].ToString(),
                            Email = reader["email"].ToString(),
                            Phone = reader["phone"].ToString(),
                            DoorbellName = reader["doorbell_name"].ToString(),
                            DateOfBirth = DateTime.Parse(reader["date_of_birth"].ToString()),
                            Address = GetUserAddress(Convert.ToInt32(reader["id"]))

                        };
                    }
                    return new User();

                }
            }

        }

        public List<Shop> GetShops()
        {
            List<Shop> shop_list = new List<Shop>();
            {
                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(String.Format("select s.id, s.shop_name, addr.address, s.distance, s.min_order, s.delivery_time, s.description " +
                                                                      " from shops as s " + 
                                                                      " join addresses as addr " +
                                                                      " on addr.id = s.address_id"), conn);

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            shop_list.Add(new Shop()
                            {
                                Id = Convert.ToInt32(reader["id"]),
                                Name = reader["shop_name"].ToString(),
                                Address = reader["address"].ToString(),
                                Distance = Convert.ToDouble(reader["distance"]),
                                MinOrder = Convert.ToInt32(reader["min_order"]),
                                Categories = GetShopCategories(Convert.ToInt32(reader["id"])),
                                DeliveryTime = Convert.ToInt32(reader["delivery_time"]),
                                Description = reader["description"].ToString(),
                            });
                        }
                    }
                    return shop_list;

                }

            }
        }

        public List<Category> GetShopCategories(int shop_id)
        {

            List<Category> list = new List<Category>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(String.Format(
                    "select c.* from shops as s "+
                    "join shop_categories as sc "+
                    "on s.id = sc.shop_id "+
                    "join categories as c " +
                    "on c.id = sc.category_id " +
                    "where s.id = {0}", shop_id), conn);
                
                
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Category 
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString() 
                        });
                    }                    
                }
                return list;
            }
        }

        public ShopMenu GetShopMenu(int shop_id)
        {
            Shop shop = GetShop(shop_id);
            if (shop != null)
                return new ShopMenu
                {
                    Id = shop.Id,
                    Name = shop.Name,
                    Address = shop.Address,
                    Distance = shop.Distance,
                    MinOrder = shop.MinOrder,
                    Categories = GetShopCategories(shop_id),
                    DeliveryTime = shop.DeliveryTime,
                    Description = shop.Description,
                    Products = GetShopProducts(shop_id)
                };


            return null;
        }

        public List<Product> GetShopProducts(int shop_id)
        {
            List<Product> list = new List<Product>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(String.Format(
                    "select p.*, c.name as category from shops as s " +
                    "join products as p " +
                    "on p.shop_id = s.id " +
                    "join product_categories as pc " +
                    "on pc.product_id = p.id " +
                    "join categories as c " +
                    "on c.id = p.id " +
                    "where s.id = {0}", shop_id), conn);


                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Product
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            Price = Convert.ToDouble(reader["price"]),
                            Stock = reader["stock"].ToString(),
                            Description = reader["description"].ToString(),
                            Category = reader["category"].ToString()
                        });
                    }
                }
                return list;
            }
        }

       
        public Shop GetShop(int id)
        {

            {
                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(String.Format("select s.id, s.shop_name, addr.address, s.distance, s.min_order, s.delivery_time, s.description from shops as s " +
                                                                      " join addresses as addr " +
                                                                      " on addr.id = s.address_id " +
                                                                      " where s.id = {0}", id), conn);

                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new Shop()
                            {
                                Id = Convert.ToInt32(reader["id"]),
                                Name = reader["shop_name"].ToString(),
                                Address = reader["address"].ToString(),
                                Distance = Convert.ToDouble(reader["distance"]),
                                MinOrder = Convert.ToInt32(reader["min_order"]),
                                Categories = GetShopCategories(Convert.ToInt32(reader["id"])),
                                DeliveryTime = Convert.ToInt32(reader["delivery_time"]),
                                Description = reader["description"].ToString(),
                            };
                        }
                        return null;
                    }
                }

            }
        }
        /*
       public List<Shop> GetShopsByAreaId(int id)
       {
           List<Shop> list = new List<Shop>();

           using (MySqlConnection conn = GetConnection())
           {
               conn.Open();
               MySqlCommand cmd = new MySqlCommand(String.Format("select s.* from shops as s " +
                                                   "join addresses as ad " +
                                                   "on s.address_id = ad.id " +
                                                   "join areas as ar " +
                                                   "on ar.id = ad.area_id " +
                                                   "where s.address_id = {0}", id), conn);

               using (var reader = cmd.ExecuteReader())
               {
                   while (reader.Read())
                   {
                       list.Add(new Shop()
                       {
                           Id = Convert.ToInt32(reader["id"]),
                           Name = reader["shop_name"].ToString(),
                          // Password = reader["password"].ToString(),
                         //  Email = reader["email"].ToString(),
                        //   Phone = reader["phone"].ToString(),
                        //   AddressId = Convert.ToInt32(reader["address_id"]),
                        //   HeadUserId = Convert.ToInt32(reader["head_user_id"]),
                        //   CreatedAt = DateTime.Parse(reader["created_at"].ToString()),
                       //    UpdatedAt = DateTime.Parse(reader["update_at"].ToString()),
                       //    LastLogin = DateTime.Parse(reader["last_login"].ToString())
                       });
                   }
               }
           }
           return list;
       }

       public List<Shop> GetShopProducts(int id)
       {
           List<Shop> list = new List<Shop>();

           using (MySqlConnection conn = GetConnection())
           {
               conn.Open();
               MySqlCommand cmd = new MySqlCommand(String.Format("select s.* from shops as s " +
                                                   "join addresses as ad " +
                                                   "on s.address_id = ad.id " +
                                                   "join areas as ar " +
                                                   "on ar.id = ad.area_id " +
                                                   "where s.address_id = {0}", id), conn);

               using (var reader = cmd.ExecuteReader())
               {
                   while (reader.Read())
                   {
                       list.Add(new Shop()
                       {
                           Id = Convert.ToInt32(reader["id"]),
                           Name = reader["shop_name"].ToString(),
                           Password = reader["password"].ToString(),
                           Email = reader["email"].ToString(),
                           Phone = reader["phone"].ToString(),
                           AddressId = Convert.ToInt32(reader["address_id"]),
                           HeadUserId = Convert.ToInt32(reader["head_user_id"]),
                           CreatedAt = DateTime.Parse(reader["created_at"].ToString()),
                           UpdatedAt = DateTime.Parse(reader["update_at"].ToString()),
                           LastLogin = DateTime.Parse(reader["last_login"].ToString())
                       });
                   }
               }
           }
           return list;
       }*/
    }

}