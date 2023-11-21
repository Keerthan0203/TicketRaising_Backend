
using TicketRaising.Models;

namespace TicketRaising.Services.Userservicesss
{
    public class TicketService : ITicketService
    {
        private readonly DataContext _context;

        public TicketService(DataContext context) 
        {
            _context = context;
        }

        public async Task<bool> CreateTicketWithTicketType(TicketType ticketType, int userId, int employeeId, string description)
        {
            //if (!Enum.IsDefined(typeof(TicketType), ticketType))
            //{
            //    return false;
            //}

            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return false;
            }

            var employee = await _context.Employees.FindAsync(employeeId);
            if (employee == null)
            {
                return false;
            }

            var newTicket = new Tickets
            {
                TicketType = ticketType,
                UserId = userId,
                EmployeeId = employeeId,
                Description = description,
                CreatedBy = user.Name,
                AssignedTo = employee.Name

                
            };
            _context.Ticket.Add(newTicket);
            
            await _context.SaveChangesAsync();
            return true;
        }
        // To view the list of all the issues logged
        public async Task<IEnumerable<Tickets>> GetAllTicketList()
        {
            var ticketlist = await _context.Ticket.ToListAsync();
            return ticketlist;
        }

    }
}
