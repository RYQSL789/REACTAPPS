using REACT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace REACT.Logic
{
    public static class Speakers
    {
        public static List<Speaker> SpeakersGet()
        {
            var speakers = new List<Speaker>();
            speakers.Add(new Speaker() { id = "2de30c42-9deb-40fc-a41f-05e62b5939a7", firstName = "Freda", lastName = "Grady", jobTitle = "Legacy Brand Director", email = "Leann_Berge@gmail.com", twitter = "FredaGrady22221-7573", avatarUrl = "https://www.gravatar.com/avatar/" + Guid.NewGuid().ToString().Replace("-","") + "?d=identicon" });
            speakers.Add(new Speaker() { id = "d00d3614-101a-44ca-b6c2-0be075aeed3d", firstName = "Major", lastName = "Rodriguez", jobTitle = "Human Research Architect", email = "Ilene66@hotmail.com", twitter = "MajorRodriguez61545", avatarUrl = "https://www.gravatar.com/avatar/" + Guid.NewGuid().ToString().Replace("-", "") + "?d=identicon" });
            speakers.Add(new Speaker() { id = "63c03386-33a2-4512-9ac1-354ad7bec5e9", firstName = "Daphney", lastName = "Torphy", jobTitle = "National Markets Officer", email = "Ron61@hotmail.com", twitter = "DaphneyTorphy96105", avatarUrl = "https://www.gravatar.com/avatar/" + Guid.NewGuid().ToString().Replace("-", "") + "?d=identicon" });
            return speakers;
        }
    }
}
