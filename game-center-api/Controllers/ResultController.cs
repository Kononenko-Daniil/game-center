using game_center_api.Contexts;
using game_center_api.DTOs;
using game_center_api.Models;
using Keycloak.AuthServices.Sdk.Admin.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace game_center_api.Controllers
{
    [ApiController]
    [Route("/results")]
    public class ResultController : ControllerBase
    {
        private readonly DataContext dbcontext;

        public ResultController(DataContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
    
        [HttpGet("get-all")]
        public IEnumerable<Result> GetAllResults()
        {
            List<Result> results = dbcontext.Results.ToList();
            

            return results;
        }

        [Authorize]
        [HttpGet("get-user-results")]
        public IEnumerable<Result> GetUserResults(string userId)
        {
            List<Result> results = dbcontext.Results.Where(o => o.UserId == userId).ToList();

            return results;
        }

        [HttpGet("get-game-results")]
        public IEnumerable<Result> GetGameResults(string gameId, bool orderByDescending)
        {
            List<Result> results = new List<Result>();
            if (orderByDescending)
            {
                results = dbcontext.Results.Where(o => o.GameId == gameId)
                    .OrderByDescending(o => o.ResultValue)
                    .ToList();
            } else
            {
                results = dbcontext.Results.Where(o => o.GameId == gameId)
                    .OrderBy(o => o.ResultValue)
                    .ToList();
            }

            return results;
        }

        [Authorize]
        [HttpPost("post-result")]
        public ActionResult PostResult([FromBody]ResultDto result)
        {
            Result _result = new Result
            {
                UserId = User.Claims.ToList()[6].Value,
                UserFirstName = User.Claims.ToList()[20].Value,
                UserSecondName = User.Claims.ToList()[21].Value,
                GameId = result.GameId,
                ResultValue = result.ResultValue
            };

            var existingResult = dbcontext.Results
                .FirstOrDefault(o => o.UserId == _result.UserId && o.GameId == _result.GameId);

            if (existingResult != null)
            {
                if (result.ResultDescending)
                {
                    if (existingResult.ResultValue < _result.ResultValue)
                    {
                        existingResult.ResultValue = _result.ResultValue;
                    }
                }
                else
                {
                    if (existingResult.ResultValue > _result.ResultValue)
                    {
                        existingResult.ResultValue = _result.ResultValue;
                    }
                }
            }
            else
            {
                dbcontext.Results.Add(_result);
            }

            dbcontext.SaveChanges();

            return Ok();
        }
    }
}
