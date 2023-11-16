using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace TicketRaising.Services.Userservicesss
{
    public class Userservices : Iuser
    {
        private readonly DataContext _context;

        public Userservices(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> Login(Login login)
        {
                var User = await _context.Users.FirstOrDefaultAsync(p => p.Email == login.email);

                if (User == null)
                {
                    return false;  // ("User with the provided email does not exist.");

                }
                if (!BCrypt.Net.BCrypt.Verify(login.password, User.Password))
                {
                    return false;  // Invalid password.
                }

                return true;  // Login successful.

            }

        public async Task<bool> Register(UserRegisterRequest request)
        {
           //var password = request.Password;
            var name = request.Name;
            if (_context.Users.Any(u => u.Email == request.Email)) // Here We are checking whether the user already exists or not. If exists then we dont want to register again.
            {
                return false;
                
            }
            var password = BCrypt.Net.BCrypt.HashPassword(request.Password);


            var user = new User
            {
                Email = request.Email,
                Name = name,
                Password = password

            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return true;

        }
    }
}
