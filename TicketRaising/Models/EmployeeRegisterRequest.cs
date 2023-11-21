﻿using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class EmployeeRegisterRequest
    {
        [Required]
        public string? Name { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, MinLength(6)]
        public string Password { get; set; } = string.Empty;
    }
}
