using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgWeb.Models
{
    //[Table("Alunos")]
    public class Aluno
    {
        public long IdAluno { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }

        public Aluno() { }

        public Aluno(long idAluno, string nome, string telefone) 
        {
            IdAluno = idAluno;
            Nome = nome;
            Telefone = telefone;
        }

        public Aluno(string nome, string telefone)
        {
            Nome = nome;
            Telefone = telefone;
        }
    }
}
