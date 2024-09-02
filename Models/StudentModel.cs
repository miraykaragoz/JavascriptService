using System.ComponentModel.DataAnnotations;

namespace JavascriptService.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
    }
}
