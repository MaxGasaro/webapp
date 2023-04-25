using Microsoft.EntityFrameworkCore;
using webapi.Entities;

namespace webapi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users { get; set; } //Users indicherà il nome della nostra tabella sul DB, e le colonne sono indicate dal T di DbSet
    }
}
