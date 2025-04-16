using FinalProject.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FinalController : ControllerBase
    {
        private Context _context;
        public FinalController(Context temp)
        {
            _context = temp;
        }
    }


}
