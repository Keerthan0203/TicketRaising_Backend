﻿using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class User
    {
        public int Id { get; set; }
        
        public string? Name { get; set; } = string.Empty;

        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

    }
}
