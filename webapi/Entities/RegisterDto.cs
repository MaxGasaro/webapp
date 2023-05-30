using System.ComponentModel.DataAnnotations;

namespace webapi.Entities
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; } 
        [Required]
        [StringLength(8,MinimumLength = 4)]
        public string Password { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required] 
        public DateOnly? DateOfBirth { get; set; } // optional to make required work!
        [Required]
        public string Email { get; set; }
    }
}
