using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace ServerApp.Controllers {

    public class HomeController : Controller {
        private DataContext context;

        public HomeController(DataContext ctx) {
            context = ctx;
        }

        public IActionResult Index() {
            return View(context.Products.First());
        }

        public IActionResult Blazor() {
            return View();
        }

        public IActionResult Privacy() {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, 
            NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id 
                ?? HttpContext.TraceIdentifier });
        }

        [Authorize]
        public string Protected() {
            return "You have been authenticated";
        }
    }
}
