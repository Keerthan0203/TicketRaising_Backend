
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
            optionsBuilder.UseSqlServer("Server=BRAVISHANKAR01\\SQLEXPRESS;Database=Ticket_Raising;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");

        }

        //gitpushtry

        public DbSet<User> Users { get; set; }
        public DbSet<Tickets> Ticket { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public DbSet<Types> TypesofTickets { get; set; }
        public DbSet<Status> Statuses { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Types>().HasData(
                new Types { Id = 1, Types_Name = TicketTypes.Finance_Issues.ToString() },
                new Types { Id = 2, Types_Name = TicketTypes.Technical_Issue.ToString() },
                 new Types { Id = 3, Types_Name = TicketTypes.Laptop_Issue.ToString() },
                 new Types { Id = 4, Types_Name = TicketTypes.Reimbursement_Issues.ToString() }
                );
            modelBuilder.Entity<Status>().HasData(
                new Status { Id = 1, Status_Name = TicketStatus.Open.ToString() },
                new Status { Id = 2, Status_Name = TicketStatus.Processing.ToString() },
                 new Status { Id = 3, Status_Name = TicketStatus.Query_Resolved.ToString() },
                 new Status { Id = 4, Status_Name = TicketStatus.Ticket_Closed.ToString() }
                );
        }
    }
}
