using System;
using System.Collections.Generic;
using System.Text;

namespace API.Models
{
    public class User
    {
        public User() { }

        public User(int id, string name, string surname, string password, string email,
            string phone, string doorbell_name, DateTime date_of_birth, Address address,
            DateTime created_at, DateTime update_at, DateTime last_login)
        {
            Id = id;
            Name = name;
            SurName = surname;
            Password = password;
            Email = email;
            Phone = phone;
            DoorbellName = doorbell_name;
            DateOfBirth = date_of_birth;
            Address = address;
            CreatedAt = created_at;
            UpdatedAt = update_at;
            LastLogin = last_login;

        }

        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? SurName { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? DoorbellName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public Address? Address { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? LastLogin { get; set; }

    }
}
