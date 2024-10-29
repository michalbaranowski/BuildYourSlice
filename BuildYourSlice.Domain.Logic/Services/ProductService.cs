using BuildYourSlice.DataAccess.Contexts;
using BuildYourSlice.DataAccess.Entities;
using BuildYourSlice.Domain.Contracts.Models;
using BuildYourSlice.Domain.Contracts.Services;

namespace BuildYourSlice.Domain.Logic.Services
{
    public class ProductService : IProductService
    {
        private readonly BuildYourSliceDbContext _context;

        public ProductService(BuildYourSliceDbContext context)
        {
            _context = context;
        }

        public void AddProduct(ProductModel product)
        {
            var entityToBeAdded = new Product()
            {
                Name = product.Name,
                Price = product.Price
            };

            _context.Products.Add(entityToBeAdded);
            _context.SaveChanges();
        }

        public IList<ProductModel> GetAvailableProducts()
        {
            return _context.Products.Select(n => new ProductModel {
                Name = n.Name,
                Price = n.Price
            }).ToList();
        }

        public ProductModel GetProductById(int id)
        {
            return _context.Products.Where(n => n.Id == id).Select(n => new ProductModel
            {
                Price = n.Price,
                Name = n.Name
            }).First();
        }
    }
}
