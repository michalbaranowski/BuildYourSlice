namespace BuildYourSlice.Domain.Contracts.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public decimal Price { get; set; }
        public bool IsBaseProduct { get; set; }

    }
}
