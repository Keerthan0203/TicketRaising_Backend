using TicketRaising.Dto;

namespace TicketRaising.Services.Userservicesss
{
    public interface Iuser
    {
        Task<bool> Register(UserRegisterRequest request);
        Task<userDetailsDto> Login(Login login);

        Task<bool> EmpRegister(EmployeeRegisterRequest emprequest);
        Task<EmployeeDetailsDto> EmpLogin(Login emplogin);

        Task<IEnumerable<User>> GetAllUsers();
        
    }
}
