namespace FinalProject.API.Data
{
    public class EntertainerSummaryDto
    {
        public int EntertainerID { get; set; }
        public string? EntStageName { get; set; }
        public string? EntPhoneNumber { get; set; }
        public DateTime? DateEntered { get; set; }

        public int BookingCount { get; set; }
        public DateTime? LastBooked { get; set; }
    }
}

