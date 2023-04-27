using webapi.Entities;

namespace webapi.Services
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
