using game_center_api.Models;
using Microsoft.EntityFrameworkCore;

namespace game_center_api.Contexts
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sqlite database
            options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<Result> Results { get; set; }
    }
}
