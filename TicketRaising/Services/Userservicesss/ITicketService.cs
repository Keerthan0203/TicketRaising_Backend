using TicketRaising.Dto;

namespace TicketRaising.Services.Userservicesss
{
    public interface ITicketService
    {
        Task<bool> CreateTicketWithTicketType(string Types_Name, int userId, string description);
        //Task<IEnumerable<Tickets>> GetAllTicketList();

        Task<IEnumerable<GetAllTicketsDto>>GetAllTicketList();
        Task<IEnumerable<GetAllTicketsDto>> GetAllTicketsByUserId(int userId);

        Task<IEnumerable<Tickets>> GetUnassignedIssues();
        //Task<bool> AssignTicketToSelf(int ticketId, int employeeId);  
        Task<IEnumerable<Tickets>> GetOpenStatusTickets();
        Task<bool> ReassignTicket(int ticketId, int newEmployeeId);
        Task<bool> MarkTicketAsResolved(int ticketId);
        Task<bool> ResolveAndCloseTicket(int ticketId, string resolutionDetails);
    }
}
