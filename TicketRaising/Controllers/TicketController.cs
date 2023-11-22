using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicketRaising.Services.Userservicesss;

namespace TicketRaising.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpPost("ChooseTicketType")]
        public async Task<IActionResult> ChooseTicketType(TicketType ticketType, int userId, int employeeId, string description)
        {

            return Ok(await _ticketService.CreateTicketWithTicketType(ticketType, userId, employeeId, description));
          
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

        [HttpPost("AssignTicketToSelf")]
        public async Task<IActionResult> AssignTicketToSelf(int ticketId, int employeeId)
        {
            var success = await _ticketService.AssignTicketToSelf(ticketId, employeeId);

            if (success)
            {
                return Ok("Ticket assigned successfully");
            }
            return BadRequest("Unable to assign the ticket. Please check the inputs and try again.");
        }

        [HttpPost("Reassign_the_issue")]
        public async Task<IActionResult> ReassignTicket(int ticketId, int newEmployeeId)
        {
            var success = await _ticketService.ReassignTicket(ticketId, newEmployeeId);
            if (success)
            {
                return Ok("Ticket re-assigned");
            }
            return BadRequest("Unable to re-assign the ticket ");
        }
    }
}
