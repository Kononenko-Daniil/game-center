using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace game_center_api.Models
{
    public class Result
    {
        [Key, NotNull, Required]
        public int Id { get; set; }
        [Required, NotNull]
        public string UserId { get; set; }
        [Required, NotNull]
        public string UserFirstName { get; set; }
        [Required, NotNull]
        public string UserSecondName { get; set; }
        [Required, NotNull]
        public string GameId { get; set; }
        [Required, NotNull]
        public int ResultValue { get; set; }
    }
}
