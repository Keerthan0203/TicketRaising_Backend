using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class Status
    {
        [Key]
        public int Id { get; set; }
        public string Status_Name { get; set; } = string.Empty;
    }
        
        public enum TicketStatus
        {
            Open=1,
            Processing=2,
            Query_Resolved=3,
            Ticket_Closed=4
        }
    
}
