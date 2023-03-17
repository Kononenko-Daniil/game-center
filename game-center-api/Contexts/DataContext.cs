using game_center_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Reflection;
using System.Reflection.Metadata;

namespace game_center_api.Contexts
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public DbSet<Result> Results { get; set; }

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"), options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Result>().ToTable("Results", "test");
            modelBuilder.Entity<Result>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.UserId).IsRequired();
                entity.Property(e => e.UserFirstName).IsRequired();
                entity.Property(e => e.UserSecondName).IsRequired();
                entity.Property(e => e.GameId).IsRequired();
                entity.Property(e => e.ResultValue).IsRequired();
            });

            base.OnModelCreating(modelBuilder);
        }

        
    }
}
