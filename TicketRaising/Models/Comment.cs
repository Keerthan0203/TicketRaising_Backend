namespace TicketRaising.Models
{
    public class Comment
    {
        public int Id { get; set; }
        // Foreign key property for Tickets
        public int TicketId { get; set; }
        // Navigation property for the foreign key relationship with Tickets
        public Tickets Ticket { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Direction { get; set; } = string.Empty;

    }
}
