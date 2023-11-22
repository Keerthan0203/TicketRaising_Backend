namespace TicketRaising.Services.Userservicesss
{
    public interface Iuser
    {
        Task<bool> Register(UserRegisterRequest request);
        Task<bool> Login(Login login);
        Task<bool> EmpRegister(EmployeeRegisterRequest emprequest);
        Task<bool> EmpLogin(Login emplogin);

        Task<IEnumerable<User>> GetAllUsers();
        
    }
}
