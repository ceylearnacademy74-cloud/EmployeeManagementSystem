using Microsoft.EntityFrameworkCore;
using backend_EM.Models;

namespace backend_EM.Data
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

        public DbSet<Employee> Employees1 { get; set; }
    }
}
