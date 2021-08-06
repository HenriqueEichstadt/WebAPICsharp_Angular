using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ProgWeb.Api.Common;
using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProgWeb.Api.Controllers
{
    [Route("ProgramacaoWeb2021/[controller]")]
    [ApiController]
    public class AutenticacaoController : ControllerBase
    {
        private readonly UserManager<Usuario> userManager;
        private readonly IConfiguration _configuration;

        public AutenticacaoController(UserManager<Usuario> userManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.Username);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim("nome", user.UserName),
                    new Claim("jti", Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(1),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized(); // Status code 401
        }

        [HttpPost]
        [Route("registro")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Erro", Message = "Usuário já cadastrado com o mesmo nome" });

            Usuario user = new Usuario()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            return Ok(new Response { Status = "Successo", Message = "Usuário criado com sucesso!" });
        }

        [HttpGet("existe/{nome}")]
        public async Task<IActionResult> UsuarioExiste(string nome)
        {
            if (string.IsNullOrEmpty(nome))
                return NotFound(); // Status code 404

            var userExists = await userManager.FindByNameAsync(nome);

            if (userExists == null)
                return NotFound(); // Status code 404

            return Ok(true); //Status code 200
        }

    }
}
