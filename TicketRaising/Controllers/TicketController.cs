using Microsoft.AspNetCore.Mvc;
using TicketRaising.Services.Userservicesss;

namespace TicketRaising.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpPost("ChooseTicketType")]
        public async Task<IActionResult> ChooseTicketType(string Types_Name, int userId, string description)
        {

            return Ok(await _ticketService.CreateTicketWithTicketType(Types_Name, userId,  description));
          
        }

        [HttpGet("getAllTickets")]
        public async Task<IActionResult> GetAllTickets()
        {
            var allTickets = await _ticketService.GetAllTicketList();
            if (allTickets == null)
            {
                return NotFound("No tickets Found");
            }   
            return Ok(allTickets);
        }

        [HttpGet("getunassignedIssues")]

        public async Task<IActionResult> GetUnassignedIssues()
        {
            var unassignedIssues = await _ticketService.GetUnassignedIssues();
            return Ok(unassignedIssues);
        }

        [HttpGet("GetOpenStatusTickets")]
        public async Task<IActionResult> GetOpenStatusTickets()
        {
            var openStatusTickets = await _ticketService.GetOpenStatusTickets();

            return Ok(openStatusTickets);
        }


        [HttpPost("Assign_the_Issue")]
        public async Task<IActionResult> ReassignTicket(int ticketId, int newEmployeeId)
        {
            var success = await _ticketService.ReassignTicket(ticketId, newEmployeeId);
            if (success)
            {
                return Ok("Ticket assigned successfully");
            }
            return BadRequest("Unable to assign the ticket ");
        }

        [HttpPut("Change_Status_to_Resolved")]
        public async Task<IActionResult> MarkTicketAsResolved(int ticketId)
        {
            var success = await _ticketService.MarkTicketAsResolved(ticketId);
            if(success)
            {
                return Ok("Ticket Marked as resolved");
            }
            return BadRequest("Unable to mark ticket as resolved. Please check and try again");
        }

        [HttpPut("ResolveAndCloseTicket/{ticketId}")]
        public async Task<IActionResult> ResolveAndCloseTicket(int ticketId, string resolutionDetails)
        {
            var success = await _ticketService.ResolveAndCloseTicket(ticketId, resolutionDetails); 
            if (success)
            {
                return Ok("Ticket resolved and closed successfully ");
            }
            return BadRequest("Unable to resolve and close ticket. Please check");
        }
    }
}
