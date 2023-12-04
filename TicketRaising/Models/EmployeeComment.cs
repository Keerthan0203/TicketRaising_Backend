using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class EmployeeComment
    {
        [Key]
        public int Id { get; set; }

        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        // Foreign key property for Tickets
        public int TicketId { get; set; }
        // Navigation property for the foreign key relationship with Tickets
        public Tickets Ticket { get; set; }
        public string createdBy { get; set; }
        public string Comment { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
