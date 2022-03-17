using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Williams_AD_Website.Pages
{
    public class LoginModel : Controller
    {
        public string username { get; set; }
        public string password { get; set; }

        public bool triedLogin { get; set; }
        public IActionResult OnGet()
        {
            ViewBag.triedLogin = true;
            return View();
        }

        public IActionResult LogUser()
        {
            ViewBag.triedLogin = true;
            return View();
        }



    }
}
