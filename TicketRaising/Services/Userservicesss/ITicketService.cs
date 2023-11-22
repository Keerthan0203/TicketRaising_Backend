namespace TicketRaising.Services.Userservicesss
{
    public interface ITicketService
    {
        Task<bool> CreateTicketWithTicketType(TicketType ticketType, int userId, int employeeId, string description);
        Task<IEnumerable<Tickets>> GetAllTicketList();

        Task<IEnumerable<Tickets>> GetUnassignedIssues();
        Task<bool> AssignTicketToSelf(int ticketId, int employeeId);
        Task<bool> ReassignTicket(int ticketId, int newEmployeeId);
    }
}
