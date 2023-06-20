using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using webapi.Extensions;

namespace webapi.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
        public string KnownAs { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public string Introduction { get; set; } = string.Empty;    
        public string LookingFor { get; set; } = string.Empty;
        public string Interests { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;    
        public string Country { get; set; } = string.Empty;
        public List<Photo> Photos { get; set; } = new List<Photo>();
        public List<Expenses> Expenses { get; set; } = new List<Expenses>();
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime TokenCreated { get; set; } = DateTime.UtcNow;
        public DateTime TokenExpires { get; set; } = DateTime.UtcNow;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        //public int GetAge()
        //{
        //    return DateOfBirth.CalculateAge();
        //}
    }
}
