
namespace TicketRaising.Data
{
    public class DataContext : DbContext
    {
        internal object Tickets;

        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CarssRecord;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");
            optionsBuilder.UseSqlServer("Server=KRUDRARADHYA01\\SQLEXPRESS;Database=Ticket_Raising;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Tickets> Ticket { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Comment> Comments { get; set; }

    }
}
