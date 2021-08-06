using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProgWeb.Api.Common;
using ProgWeb.Api.Extensions;
using ProgWeb.Dao.Common;
using ProgWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgWeb.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("ProgramacaoWeb2021/[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IRepository<Aluno> _repository;

        public AlunoController(IRepository<Aluno> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAlunos()
        {
            var listaAlunos = _repository.All.ToList();

            return Ok(listaAlunos); //Status code 200
        }

        [HttpGet("{idAluno}")]
        public IActionResult GetAluno(long idAluno)
        {
            var model = _repository.Find(idAluno);

            if(model == null)
            {
                return NotFound(); // Status code 404
            }

            return Ok(model); //Status code 200
        }

        [HttpPost]
        public IActionResult AddAluno([FromBody] AlunoModel alunoModel)
        {
            if (ModelState.IsValid)
            {
                var aluno = alunoModel.ToAluno();
                _repository.Add(aluno);
                var uri = Url.Action("GetAluno", new { idAluno = aluno.IdAluno });
                return Created(uri, aluno); //Status code 201
            }
            return BadRequest(); //Status code 400
        }

        [HttpPut]
        public IActionResult UpdateAluno([FromBody] AlunoModel model)
        {
            if (ModelState.IsValid)
            {
                var aluno = model.ToAluno();
                _repository.Update(aluno);
                return Ok(); //Status code 200
            }
            return BadRequest(); //Status code 400
        }

        [HttpDelete("{idAluno}")]
        public IActionResult RemoveAluno(long idAluno)
        {
            var model = _repository.Find(idAluno);

            if (model == null)
                return NotFound(); // Status code 404

            _repository.Delete(model);
            return NoContent(); // Status code 204
        }
    }
}
