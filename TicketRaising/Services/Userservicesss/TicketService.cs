using TicketRaising.Dto;

namespace TicketRaising.Services.Userservicesss
{
    public class TicketService : ITicketService
    {
        private readonly DataContext _context;

        public TicketService(DataContext context) 
        {
            _context = context;
        }

        public async Task<bool> CreateTicketWithTicketType(string Types_Name, int userId,  string description)
        {
           
                var user = await _context.Users.FindAsync(userId);
                if (user == null)
                {
                    return false;
                }

            var newTicket = new Tickets
            {
                UserId = userId,
                TicketTypeId = (int)Enum.Parse<TicketTypes>(Types_Name),
                Description = description,
                CreatedBy = user.Name,
                StatusId = 1
            };

                _context.Ticket.Add(newTicket);

                await _context.SaveChangesAsync();
                return true;
        }

        public async Task<IEnumerable<GetAllTicketsDto>> GetAllTicketList()
        {
            var tickets = await _context.Ticket.ToListAsync();
            var ticketDtos = tickets.Select(ticket => new GetAllTicketsDto()
            {
                Id = ticket.Id,
                UserId = ticket.UserId,
                EmployeeId = ticket.EmployeeId,
                TicketTypeId = Enum.Parse<TicketTypes>(ticket.TicketTypeId.ToString()).ToString(),
                StatusId = Enum.Parse<TicketStatus>(ticket.StatusId.ToString()).ToString(),
                Description = ticket.Description,
                CreatedBy = ticket.CreatedBy,
                AssignedTo = ticket.AssignedTo,
                Success = true,
                Message = "Data retrieved successfully"
            });
            return ticketDtos;
        }

        public async Task<IEnumerable<GetAllTicketsDto>> GetAllTicketsByUserId(int userId)
        {
            var tickets = await _context.Ticket
                .Where(ticket => ticket.UserId == userId)
                .ToListAsync();

            var ticketDtos = tickets.Select(ticket => new GetAllTicketsDto()
            {
                Id = ticket.Id,
                UserId = ticket.UserId,
                EmployeeId = ticket.EmployeeId,
                TicketTypeId = Enum.Parse<TicketTypes>(ticket.TicketTypeId.ToString()).ToString(),
                StatusId = Enum.Parse<TicketStatus>(ticket.StatusId.ToString()).ToString(),
                Description = ticket.Description,
                CreatedBy = ticket.CreatedBy,
                AssignedTo = ticket.AssignedTo,
                Success = true,
                Message = "Data retrieved successfully"
            });

            return ticketDtos;
        }

        public async Task<GetAllTicketsDto> GetAllTicketsByTicketId(int ticketId)
        {
            var ticket = await _context.Ticket.FirstOrDefaultAsync(t => t.Id == ticketId);

            if (ticket == null)
            {
                return null; // Or handle as needed (throw exception, return a default DTO, etc.)
            }

            var ticketDto = new GetAllTicketsDto()
            {
                Id = ticket.Id,
                UserId = ticket.UserId,
                EmployeeId = ticket.EmployeeId,
                TicketTypeId = Enum.Parse<TicketTypes>(ticket.TicketTypeId.ToString()).ToString(),
                StatusId = Enum.Parse<TicketStatus>(ticket.StatusId.ToString()).ToString(),
                Description = ticket.Description,
                CreatedBy = ticket.CreatedBy,
                AssignedTo = ticket.AssignedTo,
                EmployeeComments = ticket.EmployeeComments,
                Success = true,
                Message = "Data retrieved successfully"
            };

            return ticketDto;
        }

        public async Task<IEnumerable<Tickets>> GetUnassignedIssues()
        {
            var unassignedIssues = await _context.Ticket
                .Where(ticket => ticket.EmployeeId == null) //Tickets with unassigned employee
                .ToListAsync();
            return unassignedIssues;

        }

        public async Task<IEnumerable<Tickets>> GetAssignedIssues(int employeeId)
        {
            var assignedIssues = await _context.Ticket
                .Where(ticket => ticket.EmployeeId == employeeId)
                .ToListAsync();
            return assignedIssues;
        }

        public async Task<IEnumerable<Tickets>> GetOpenStatusTickets()
        {
            var openStatusTickets = await _context.Ticket
         .Where(ticket => ticket.StatusId == (int)TicketStatus.Open || ticket.StatusId == (int)TicketStatus.Processing)
         .ToListAsync();
            return openStatusTickets;
        }

        public async Task<bool> ReassignAndChangeStatus(int ticketId, int newEmployeeId, TicketStatus newStatus, string employeeComment)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if (ticket == null)
            {
                return false; // Ticket Not Found
            }

            // Check if new employee exists
            var newEmployee = await _context.Employees.FindAsync(newEmployeeId);
            if (newEmployee == null)
            {
                return false; // New employee not found
            }

            // Reassign the ticket to the new employee
            ticket.EmployeeId = newEmployeeId;
            ticket.AssignedTo = newEmployee.Name;
            ticket.UpdatedOn = DateTime.Now;
            ticket.StatusId = (int)newStatus;
          
            ticket.EmployeeComments = employeeComment;
            ticket.UpdatedOn=DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }




        public async Task<bool> MarkTicketAsResolved(int ticketId)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if (ticket == null)
            {
                return false; // Ticket not found
            }

            //Change status as resolved 
            ticket.StatusId = (int)TicketStatus.Query_Resolved;
            ticket.UpdatedOn = DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> ResolveAndCloseTicket(int ticketId, string resolutionDetails)
        {
            var ticket = await _context.Ticket.FindAsync(ticketId);
            if (ticket == null || ticket.StatusId != (int)TicketStatus.Query_Resolved)
            {
                return false; //  Ticket not found or not in the resolved state
            }
            // Add resolution details
            ticket.Description = resolutionDetails;

            // CLose the ticket
            ticket.StatusId = (int)TicketStatus.Ticket_Closed;
            ticket.UpdatedOn = DateTime.Now;

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
