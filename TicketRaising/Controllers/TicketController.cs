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
    }
}
