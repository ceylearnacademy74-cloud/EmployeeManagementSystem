namespace backend_EM.Models
{
    public class Employee
    {
        public int Id { get; set; }  // Primary Key
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public decimal Salary { get; set; }
    }
}

