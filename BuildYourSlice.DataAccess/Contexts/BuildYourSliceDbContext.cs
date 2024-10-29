using BuildYourSlice.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace BuildYourSlice.DataAccess.Contexts
{
    public class BuildYourSliceDbContext : DbContext
    {
        public BuildYourSliceDbContext()
        { }

        public BuildYourSliceDbContext(DbContextOptions<BuildYourSliceDbContext> options) : base(options)
        { }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasKey(c => c.Id);

            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasPrecision(18, 2);

            modelBuilder.Entity<Order>()
                .HasKey(t => t.Id);

            modelBuilder.Entity<Product>()
                .HasMany(c => c.Orders);

            modelBuilder.Entity<Order>()
                .HasMany(c => c.Products);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer(Environment.GetEnvironmentVariable("BuildYourSliceConnection"));
    }
}
