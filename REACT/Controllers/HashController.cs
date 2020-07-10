using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;


namespace REACT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HashController : ControllerBase
    {
        // GET: api/Hash
        [HttpGet]
        public string Get()
        {
            return Guid.NewGuid().ToString().Replace("-", "").ToLower();
        }

        
    }
}
