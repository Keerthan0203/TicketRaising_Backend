using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicketRaising.Services.Userservicesss;

namespace TicketRaising.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Iuser _userservices;

        public UserController(Iuser userservices)
        {
            _userservices = userservices;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRegisterRequest request)
        {
        
                return Ok(await _userservices.Register(request));

        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(Login login)
        {

            return Ok(await _userservices.Login(login));


        }
    }
}
