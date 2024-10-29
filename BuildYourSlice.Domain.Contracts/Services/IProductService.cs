using BuildYourSlice.Domain.Contracts.Models;

namespace BuildYourSlice.Domain.Contracts.Services
{
    public interface IProductService
    {
        void AddProduct(ProductModel product);
        ProductModel GetProductById(int id);
        IList<ProductModel> GetAvailableProducts();
    }
}
