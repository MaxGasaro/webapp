﻿using System.ComponentModel.DataAnnotations;

namespace webapi.Entities
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Token { get; set; } 
        public string PhotoUrl { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
