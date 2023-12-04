using System.ComponentModel.DataAnnotations.Schema;

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
        public int? EmployeeId { get; set; }

        // Navigation property for the foreign key relationship with User
        public Employee Employee { get; set; }
        [ForeignKey("Types")]
        public int TicketTypeId { get; set; }
        // Navigation property for the foreign key relationship with Types
        public Types Types { get; set; }
        [ForeignKey("Status")]
        public int StatusId { get; set; }
        public  Status status { get; set; }

        public string? Description { get; set; }
        public string? CreatedBy { get; set; }
        public string? AssignedTo { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime UpdatedOn { get; set; }
        public string? EmployeeComments { get; set; }


    }


}
