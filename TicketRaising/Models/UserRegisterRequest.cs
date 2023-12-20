using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class UserRegisterRequest
    {
        [Required]
        public string? Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required, MinLength(6)]
        public string Password { get; set; } 
    }
}
