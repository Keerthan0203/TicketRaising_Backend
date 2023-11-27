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

        [HttpGet("getallTicketList")]
        public async Task<IActionResult> GetAllTicketList()
        {
            var ticketlist = await _ticketService.GetAllTicketList(); // Create a method in your service to get all users

            //if (users == null )
            //{
            //    return NotFound("No users found");
            //}

            return Ok(ticketlist);
        }

        [HttpGet("getunassignedIssues")]

        public async Task<IActionResult> GetUnassignedIssues()
        {
            var unassignedIssues = await _ticketService.GetUnassignedIssues();
            return Ok(unassignedIssues);
        }

        //[HttpPost("AssignTicketToSelf")]
        //public async Task<IActionResult> AssignTicketToSelf(int ticketId, int employeeId)
        //{
        //    var success = await _ticketService.AssignTicketToSelf(ticketId, employeeId);

        //    if (success)
        //    {
        //        return Ok("Ticket assigned successfully");
        //    }
        //    return BadRequest("Unable to assign the ticket. Please check the inputs and try again.");
        //}

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
