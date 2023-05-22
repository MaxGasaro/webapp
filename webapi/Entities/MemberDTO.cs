using webapi.Extensions;

namespace webapi.Entities
{
    public class MemberDTO
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public int Age{ get; set; }
        public string PhotoUrl { get; set; }
        public string Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public List<PhotoDTO> Photos { get; set; }
        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }
    }
}
