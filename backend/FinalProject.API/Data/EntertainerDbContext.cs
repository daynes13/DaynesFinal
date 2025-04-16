using Microsoft.EntityFrameworkCore;

namespace FinalProject.API.Data
{
    public class EntertainerDbContext : DbContext
    {
        public EntertainerDbContext(DbContextOptions<EntertainerDbContext> options)
            : base(options)
        {
            Console.WriteLine("Connected to SQLite DB at: " + Database.GetDbConnection().DataSource);
        }

        public DbSet<Entertainer> Entertainers { get; set; }
        public DbSet<Engagement> Engagements { get; set; }

    }



}
