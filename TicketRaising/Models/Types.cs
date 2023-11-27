using System.ComponentModel.DataAnnotations;

namespace TicketRaising.Models
{
    public class Types
    {
        [Key]
        public int Id { get; set; }
        public string Types_Name { get; set; }
    }
    public enum TicketTypes
    {
        Finance_Issues = 1,
        Technical_Issue = 2,
        Laptop_Issue = 3,
        Reimbursement_Issues = 4
    }
}
