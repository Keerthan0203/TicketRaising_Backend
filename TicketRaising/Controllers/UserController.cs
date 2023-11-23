using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicketRaising.Services.Userservicesss;

namespace TicketRaising.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Iuser _userservices;

        public UserController(Iuser userservices)
        {
            _userservices = userservices;
        }

        [HttpPost("UserRegister")]
        public async Task<IActionResult> Register(UserRegisterRequest request)
        {
        
                return Ok(await _userservices.Register(request));

        }
        [HttpPost("UserLogin")]
        public async Task<IActionResult> Login(Login login)
        {

            return Ok(await _userservices.Login(login));
        }

        [HttpPost("EmployeeLogin")]
        public async Task<IActionResult> EmpLogin(Login emplogin)
        {
            return Ok(await _userservices.EmpLogin(emplogin));
        }

        [HttpPost("EmpRegister")]
        public async Task<IActionResult> EmpRegister(EmployeeRegisterRequest emprequest)
        {
            return Ok(await _userservices.EmpRegister(emprequest));
        }

        [HttpGet("getallUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userservices.GetAllUsers(); // Create a method in your service to get all users

            //if (users == null )
            //{
            //    return NotFound("No users found");
            //}

            return Ok(users);
        }
    }
}
