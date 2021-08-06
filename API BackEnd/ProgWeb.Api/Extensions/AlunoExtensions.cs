using ProgWeb.Api.Common;
using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgWeb.Api.Extensions
{
    public static class AlunoExtensions
    {
        public static Aluno ToAluno(this AlunoModel model)
        {
            return new Aluno
            {
                IdAluno = model.IdAluno,
                Nome = model.Nome,
                Telefone = model.Telefone
            };
        }
    }
}
