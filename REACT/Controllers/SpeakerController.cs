using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using REACT.Logic;
using REACT.Models;

namespace REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeakerController : ControllerBase
    {
        // GET: api/Speaker
        [HttpGet]
        public IEnumerable<Speaker> Get()
        {
            return Speakers.SpeakersGet();
        }

        // GET: api/Speaker/5
        [HttpGet("{id}", Name = "Get")]
        public Speaker Get(string id)
        {
            return Speakers.SpeakersGet().FirstOrDefault(s => s.id == id);
        }

        // POST: api/Speaker
        [HttpPost]
        public bool Post([FromBody] Speaker speaker)
        {
            var spiker = Speakers.SpeakersGet().FirstOrDefault(s => s.id == speaker.id);
            return true;
        }

        // PUT: api/Speaker/5
        [HttpPut]
        public bool Put([FromBody] Speaker speaker)
        {
            var spiker = Speakers.SpeakersGet().FirstOrDefault(s => s.id == speaker.id);
            return true;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public bool Delete(string id)
        {
            var spiker = Speakers.SpeakersGet().FirstOrDefault(s => s.id == id);
            return true;
        }
    }
}
