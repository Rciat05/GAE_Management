using GAE_Management.Data.Services;
using GAE_Management.Model;
using Microsoft.AspNetCore.Mvc;

namespace GAE_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsuarios()
        {
            var usuarios = await _usuarioService.GetAllUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsuarioById(int id)
        {
            var usuario = await _usuarioService.GetUsuarioById(id);
            if (usuario == null) return NotFound();
            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> AddUsuario([FromBody] UsuariosModel usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Asigna la fecha de registro
            usuario.FechaRegistro = DateTime.UtcNow;

            // No asignes IdUsuario, ya que se auto-incrementa en la base de datos.
            await _usuarioService.AddUsuario(usuario);

            return CreatedAtAction(nameof(AddUsuario), new { id = usuario.IdUsuario }, usuario);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUsuario([FromBody] UsuariosModel usuario)
        {
            var result = await _usuarioService.UpdateUsuario(usuario);
            if (result > 0) return Ok();
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var result = await _usuarioService.DeleteUsuario(id);
            if (result > 0) return Ok();
            return BadRequest();
        }
    }

}
