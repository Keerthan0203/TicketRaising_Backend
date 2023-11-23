
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

          //  var employee = await _context.Employees.FindAsync(employeeId);
            //if (employee == null)
            //{
            //    return false;
            //}

            var newTicket = new Tickets
            {
                TicketType = ticketType,
                UserId = userId,
               // EmployeeId = employeeId,
                Description = description,
                CreatedBy = user.Name,
               // AssignedTo = employee.Name

                
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

        public async Task<IEnumerable<Tickets>> GetUnassignedIssues()
        {
            var unassignedIssues = await _context.Ticket
                .Where(ticket => ticket.EmployeeId == null) //Tickets with unassigned employee
                .ToListAsync();
            return unassignedIssues;

        }
        //public async Task<bool> AssignTicketToSelf(int ticketId, int employeeId)
        //{
        //    var ticket = await _context.Ticket.FindAsync(ticketId);
        //    if (ticket == null)
        //    {
        //        return false; //Ticket Not Found
        //    }

        //    // check if ticket is unassigned
        //    if(ticket.EmployeeId !=null)
        //    {
        //        return false; // Ticket is already assigned 
        //    }

        //    var employee = await _context.Employees.FindAsync(employeeId); //Find the employee by employeeId
        //    if(employee == null)
        //    {
        //        return false; //Employee not found
        //    }


        //    // Assign the ticket to the employee
        //    ticket.EmployeeId = employeeId;
        //    ticket.AssignedTo = employee.Name;
        //    ticket.Status = TicketStatus.Processing;
        //    ticket.UpdatedOn = DateTime.Now;

        //    await _context.SaveChangesAsync();
        //    return true;

        //}

        public async Task<IEnumerable<Tickets>> GetOpenStatusTickets()
        {
            var openStatusTickets = await _context.Ticket
                .Where(ticket => ticket.Status == TicketStatus.Open || ticket.Status == TicketStatus.Processing)
                .ToListAsync();

            return openStatusTickets;
        }

        public async Task<bool> ReassignTicket(int ticketId, int newEmployeeId)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if (ticket == null)
            {
                return false; // Ticket Not Found
            }
            // Check if new employee exist

            var newEmployee = await _context.Employees.FindAsync(newEmployeeId);
            if (newEmployee == null)
            {
                return false; // New employee not found
            }
            // Reassign the ticket to new employee
            ticket.EmployeeId= newEmployeeId;
            ticket.AssignedTo = newEmployee.Name;
            ticket.UpdatedOn= DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> MarkTicketAsResolved(int ticketId)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if(ticket == null)
            {
                return false; // Ticket not found
            }

            //Change status as resolved 
            ticket.Status = TicketStatus.Query_Resolved;
            ticket.UpdatedOn = DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> ResolveAndCloseTicket(int ticketId, string resolutionDetails)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if(ticket == null || ticket.Status != TicketStatus.Query_Resolved )
            {
                return false; //  Ticket not found or not in the resolved state
            }
            // Add resolution details
            ticket.Description = resolutionDetails;

            // CLose the ticket
            ticket.Status = TicketStatus.Ticket_Closed;
            ticket.UpdatedOn = DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
