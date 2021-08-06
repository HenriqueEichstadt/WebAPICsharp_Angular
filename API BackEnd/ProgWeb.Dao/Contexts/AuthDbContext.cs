using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProgWeb.Dao.Configurations;
using ProgWeb.Models;

namespace ProgWeb.Dao.Contexts.DataAccess
{
    public class AuthDbContext : IdentityDbContext<Usuario> 
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options)
        {
            // A linha de código abaixo irá criar o banco de dados 
            // e sua estrutura de tabelas necessária
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration<Usuario>(new UsuarioConfiguration());
        }
    }
}
