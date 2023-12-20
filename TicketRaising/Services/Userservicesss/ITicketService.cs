
using TicketRaising.Dto;

namespace TicketRaising.Services.Userservicesss
{
    public interface ITicketService
    {
        Task<bool> CreateTicketWithTicketType(string Types_Name, int userId, string description);

        Task<IEnumerable<GetAllTicketsDto>>GetAllTicketList();
        Task<IEnumerable<GetAllTicketsDto>> GetAllTicketsByUserId(int userId);
        Task<GetAllTicketsDto> GetAllTicketsByTicketId(int ticketId);

        Task<IEnumerable<Tickets>> GetUnassignedIssues();
        Task<IEnumerable<Tickets>> GetAssignedIssues(int employeeId);
        Task<IEnumerable<Tickets>> GetOpenStatusTickets();
        Task<bool> ReassignAndChangeStatus(int ticketId, int newEmployeeId, TicketStatus newStatus,  string employeeComment);
       
        Task<bool> MarkTicketAsResolved(int ticketId);
        Task<bool> ResolveAndCloseTicket(int ticketId, string resolutionDetails);
     
    }
}
