using BuildYourSlice.Domain.Contracts.Models;
using BuildYourSlice.Domain.Contracts.Services;
using Microsoft.AspNetCore.Mvc;

namespace BuildYourSlice.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IEnumerable<ProductModel> GetAll()
        {
            return _productService.GetAvailableProducts();
        }

        [HttpPost]
        public void AddProduct(ProductModel model)
        {
            _productService.AddProduct(model);
        }
    }
}
