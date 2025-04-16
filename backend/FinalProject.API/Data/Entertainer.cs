using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalProject.API.Data
{
    [Table("Entertainers")]

    public class Entertainer
    {
        [Key]
        public int EntertainerID { get; set; }  // AUTOINCREMENT, so EF will treat it as Identity

        public string? EntStageName { get; set; }

        public string? EntSSN { get; set; }

        public string? EntStreetAddress { get; set; }

        public string? EntCity { get; set; }

        public string? EntState { get; set; }

        public string? EntZipCode { get; set; }

        public string? EntPhoneNumber { get; set; }

        public string? EntWebPage { get; set; }

        public string? EntEMailAddress { get; set; }

        public DateTime? DateEntered { get; set; }
    }
}
