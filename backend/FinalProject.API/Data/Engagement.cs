using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalProject.API.Data
{
    [Table("Engagements")]
    public class Engagement
    {
        [Key]
        public int EngagementNumber { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string? StartTime { get; set; }
        public string? StopTime { get; set; }
        public decimal ContractPrice { get; set; }
        public int CustomerID { get; set; }
        public int AgentID { get; set; }
        public int EntertainerID { get; set; }
    }
}
