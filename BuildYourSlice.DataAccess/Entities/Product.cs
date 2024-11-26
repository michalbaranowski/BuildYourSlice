namespace BuildYourSlice.DataAccess.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public byte[] Image { get; set; }

        public bool IsBaseProduct { get; set; }

        public ICollection<Order> Orders { get; set; } = new List<Order>();
    }
}
