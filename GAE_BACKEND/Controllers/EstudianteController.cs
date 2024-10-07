using GAE_Management.Model;
using GAE_Management.Service;
using Microsoft.AspNetCore.Mvc;

namespace GAE_Management.Controllers
{
    [Route("api/v1/Estudiantes")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        private readonly EstudianteService _estudianteService;

        public EstudianteController(EstudianteService estudianteService)
        {
            _estudianteService = estudianteService;
        }


        [HttpGet("get")]
        public IActionResult GetAllEstudiantes()
        {
            var estudiantes = _estudianteService.GetAllEstudiantes();
            return Ok(estudiantes);
        }


        [HttpPost("add")]
        public IActionResult CrearEstudiante([FromBody] EstudianteModel estudiante)
        {
            _estudianteService.CrearEstudiante(estudiante);
            return Ok("Estudiante creado con éxito");
        }

        [HttpGet("{carnet}")]
        public IActionResult ObtenerEstudiantePorCarnet(string carnet)
        {
            var estudiante = _estudianteService.ObtenerEstudiantePorCarnet(carnet);
            if (estudiante == null)
                return NotFound("Estudiante no encontrado");

            return Ok(estudiante);
        }

        [HttpPut("update")]
        public IActionResult ActualizarEstudiante([FromBody] EstudianteModel estudiante)
        {
            _estudianteService.ActualizarEstudiante(estudiante);
            return Ok("Estudiante actualizado con éxito");
        }

        [HttpDelete("delete/{carnet}")]
        public IActionResult EliminarEstudiante(string carnet)
        {
            _estudianteService.EliminarEstudiante(carnet);
            return Ok("Estudiante eliminado con éxito");
        }
    }
}
