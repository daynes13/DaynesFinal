using FinalProject.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinalProject.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EntertainerController : ControllerBase
    {
        private EntertainerDbContext _context;
        public EntertainerController(EntertainerDbContext temp)
        {
            _context = temp;
        }

        [HttpGet("AllEntertainers")]
        public IActionResult GetAllEntertainers()
        {
            var summary = _context.Entertainers
                .Select(e => new EntertainerSummaryDto
                {
                    EntertainerID = e.EntertainerID,
                    EntStageName = e.EntStageName,
                    EntPhoneNumber = e.EntPhoneNumber,
                    DateEntered = e.DateEntered,
                    BookingCount = _context.Engagements.Count(eng => eng.EntertainerID == e.EntertainerID),
                    LastBooked = _context.Engagements
                        .Where(eng => eng.EntertainerID == e.EntertainerID)
                        .OrderByDescending(eng => eng.StartDate)
                        .Select(eng => (DateTime?)eng.StartDate)
                        .FirstOrDefault()

                })
                .ToList();

            return Ok(new { entertainers = summary });
        }



        // POST: /entertainers
        [HttpPost("AddEntertainer")]
        public IActionResult AddEntertainer([FromBody] Entertainer newEntertainer)
        {
            _context.Entertainers.Add(newEntertainer);
            _context.SaveChanges();
            return Ok(newEntertainer);
        }

        [HttpGet("{id}")]
        public IActionResult GetEntertainerById(int id)
        {
            var entertainer = _context.Entertainers.FirstOrDefault(e => e.EntertainerID == id);

            if (entertainer == null)
                return NotFound();

            return Ok(entertainer);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteEntertainer(int id)
        {
            var entertainer = _context.Entertainers.FirstOrDefault(e => e.EntertainerID == id);

            if (entertainer == null)
                return NotFound();

            _context.Entertainers.Remove(entertainer);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPut("Edit/{id}")]
        public IActionResult EditEntertainer(int id, [FromBody] Entertainer updated)
        {
            var existing = _context.Entertainers.FirstOrDefault(e => e.EntertainerID == id);
            if (existing == null)
                return NotFound();

            existing.EntStageName = updated.EntStageName;
            existing.EntPhoneNumber = updated.EntPhoneNumber;
            existing.EntStreetAddress = updated.EntStreetAddress;
            existing.EntCity = updated.EntCity;
            existing.EntState = updated.EntState;
            existing.EntZipCode = updated.EntZipCode;
            existing.EntWebPage = updated.EntWebPage;
            existing.EntEMailAddress = updated.EntEMailAddress;
            existing.DateEntered = updated.DateEntered;

            _context.SaveChanges();
            return NoContent();
        }





    }


}
