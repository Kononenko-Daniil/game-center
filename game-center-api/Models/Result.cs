namespace game_center_api.Models
{
    public class Result
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserSecondName { get; set; }
        public string GameId { get; set; }
        public int ResultValue { get; set; }
    }
}
