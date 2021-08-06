using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProgWeb.Models;

namespace ProgWeb.Dao.Configurations
{
    internal class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasData(
                new Usuario
                {
                    UserName = "admin",
                    Email = "admin@admin.com",
                    PasswordHash = "AQAAAAEAACcQAAAAEONc3/Lq6uCoAoAjnatoPhVRrOwRDVOf8gqxo1C9PJCbvIJa2l9xDSP0Nc9nu4bWrg==",
                },
                new Usuario 
                {
                    UserName = "henrique",
                    Email = "heichstadt@furb.br",
                    PasswordHash = "AQAAAAEAACcQAAAAEONc3/Lq6uCoAoAjnatoPhVRrOwRDVOf8gqxo1C9PJCbvIJa2l9xDSP0Nc9nu4bWrg==",
                });
        }
    }
}
