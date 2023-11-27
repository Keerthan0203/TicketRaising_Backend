using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Dto
{
    public class userDetailsDto : ServiceResponse { 
        public int Id { get; set; }

        public string? Name { get; set; } = string.Empty;

        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
