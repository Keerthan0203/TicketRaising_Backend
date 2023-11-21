namespace TicketRaising.Services.Userservicesss
{
    public interface ITicketService
    {
        Task<bool> CreateTicketWithTicketType(TicketType ticketType, int userId, int employeeId, string description);
        Task<IEnumerable<Tickets>> GetAllTicketList();
    }
}
