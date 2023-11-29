namespace TicketRaising.Dto
{
    public class GetAllTicketsDto : ServiceResponse
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int? EmployeeId { get; set; }
        public int TicketTypeId { get; set; }
        public int StatusId { get; set; }
        public string? Description { get; set; }
        public string? CreatedBy { get; set; }
        public string? AssignedTo { get; set; }

    }
}
