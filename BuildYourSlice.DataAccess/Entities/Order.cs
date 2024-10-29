using System.ComponentModel.DataAnnotations;

namespace BuildYourSlice.DataAccess.Entities
{
    public class Order
    {
        public int Id { get; set; }

        [MaxLength(30)]
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
