using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using ProgWeb.Dao.Configurations;
using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProgWeb.Dao.Contexts.DataAccess
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            //irá criar o banco e a estrutura de tabelas necessárias
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration<Aluno>(new AlunoConfiguration());
        }
    }
}
