
namespace TicketRaising.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CarssRecord;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");
            optionsBuilder.UseSqlServer("Server=KRUDRARADHYA01\\SQLEXPRESS;Database=Ticket_Raising;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");

        }

        public DbSet<User> Users { get; set; }
    }
}
