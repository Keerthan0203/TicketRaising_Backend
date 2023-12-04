namespace TicketRaising.Dto
{
    public class TicketDetailsDto
    {
        public int TicketId { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int? EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int TicketTypeId { get; set; }
        public int StatusId { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public string AssignedTo { get; set; }
        public DateTime CreatedOn { get; set; }
        public string? UserComments { get; set; }
        public string? EmployeeComments { get; set; }
    }
}
