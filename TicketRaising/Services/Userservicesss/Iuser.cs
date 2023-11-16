namespace TicketRaising.Services.Userservicesss
{
    public interface Iuser
    {
        Task<bool> Register(UserRegisterRequest request);
        Task<bool> Login(Login login);
    }
}
