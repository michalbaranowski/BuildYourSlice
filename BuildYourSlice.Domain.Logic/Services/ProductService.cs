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
                Price = product.Price,
                Image = Convert.FromBase64String(product.Image),
            };

            _context.Products.Add(entityToBeAdded);
            _context.SaveChanges();
        }

        public IList<ProductModel> GetAvailableProducts()
        {
            return _context.Products.Select(n => new ProductModel {
                Id = n.Id,
                Name = n.Name,
                Price = n.Price,
                Image = Convert.ToBase64String(n.Image),
                IsBaseProduct = n.IsBaseProduct
            }).ToList();
        }

        public ProductModel GetProductById(int id)
        {
            return _context.Products.Where(n => n.Id == id).Select(n => new ProductModel
            {
                Id = n.Id,
                Name = n.Name,
                Price = n.Price,
                Image = Convert.ToBase64String(n.Image),
                IsBaseProduct = n.IsBaseProduct
            }).First();
        }
    }
}
