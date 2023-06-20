using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    [Table("Expenses")]
    public class Expenses
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
        public float Cost { get; set; }
        public string Type { get; set; }
        public DateTime OperationDate { get; set; }
        public DateTime Updated { get; set; } = DateTime.UtcNow;
    }
}
