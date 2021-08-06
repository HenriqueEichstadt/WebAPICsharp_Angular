using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgWeb.Dao.Configurations
{
    internal class AlunoConfiguration : IEntityTypeConfiguration<Aluno>
    {
        public void Configure(EntityTypeBuilder<Aluno> builder)
        {

            // Definindo chave primária
            builder.HasKey(e => e.IdAluno);

            // Definindo demais campos
            builder.Property(e => e.IdAluno);

            builder.Property(e => e.Nome)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(e => e.Telefone)
                .IsRequired()
                .HasMaxLength(15);
        }
    }
}
