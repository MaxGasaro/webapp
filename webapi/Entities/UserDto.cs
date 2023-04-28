using System.ComponentModel.DataAnnotations;

namespace webapi.Entities
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Token { get; set; } 
    }
}
