using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProgWeb.Api.Common
{
    public class AlunoModel
    {
        [Required]
        public long IdAluno { get; set; }

        [Required, MaxLength(100)]
        public string Nome { get; set; }

        [Required, MaxLength(15)]
        public string Telefone { get; set; }


    }
}
