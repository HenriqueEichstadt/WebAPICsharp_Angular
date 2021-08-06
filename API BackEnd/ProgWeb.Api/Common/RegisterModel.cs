using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProgWeb.Api.Common
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "User Name is required"), MaxLength(100)]
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required"), MaxLength(200)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
