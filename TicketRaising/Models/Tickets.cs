namespace TicketRaising.Models
{
    public class Tickets
    {
        public int Id { get; set; }

        // Foreign key property for User
        public int UserId { get; set; }
        // Navigation property for the foreign key relationship with User
        public User User { get; set; }

        // Foreign key property for Employee
        public int EmployeeId { get; set; }

        // Navigation property for the foreign key relationship with User
        public Employee Employee { get; set; }

        public TicketType TicketType { get; set; }

        //Enaum
        public TicketStatus Status { get; set; }

        public string? Description { get; set; }
        public string? CreatedBy { get; set; }
        public string? AssignedTo { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime UpdatedOn { get; set; }
      

    }
    public enum TicketStatus 
    {
        Open,
        Processing,
        Query_Resolved,
        Ticket_Closed
    }
    public enum TicketType
    {
        Finance_Issues,
        Technical_Issue,
        Laptop_Issue,
        Reimbursement_Issues
    }
}
