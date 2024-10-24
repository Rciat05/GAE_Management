﻿using GAE_Management.Data.Services;
using GAE_Management.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GAE_Management.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/v1/usuarios")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        // Ruta para obtener todos los usuarios: api/v1/usuarios/get
        [HttpGet("get")]
        public async Task<IActionResult> GetUsuarios()
        {
            var usuarios = await _usuarioService.GetAllUsuarios();
            return Ok(usuarios);
        }

        // Ruta para obtener un usuario por ID: api/v1/usuarios/get/{id}
        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetUsuarioById(int id)
        {
            var usuario = await _usuarioService.GetUsuarioById(id);
            if (usuario == null) return NotFound();
            return Ok(usuario);
        }

        // Ruta para agregar un nuevo usuario: api/v1/usuarios/add
        [HttpPost("add")]
        public async Task<IActionResult> AddUsuario([FromBody] UsuariosModel usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            usuario.fecha_registro = DateTime.UtcNow;
            await _usuarioService.AddUsuario(usuario);

            return CreatedAtAction(nameof(AddUsuario), new { id = usuario.id_usuario }, usuario);
        }


        // Ruta para actualizar un usuario: api/v1/usuarios/update
        [HttpPut("update")]
        public async Task<IActionResult> UpdateUsuario([FromBody] UsuariosModel usuario)
        {
            var result = await _usuarioService.UpdateUsuario(usuario);
            if (result > 0) return Ok();
            return BadRequest();
        }

        // Ruta para eliminar un usuario por ID: api/v1/usuarios/delete/{id}
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var result = await _usuarioService.DeleteUsuario(id);
            if (result > 0) return Ok();
            return BadRequest();
        }

        // Ruta para validar el login: api/v1/usuarios/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuario = await _usuarioService.GetUsuarioByEmailAndPassword(loginRequest.correo, loginRequest.contrasena);

            if (usuario == null)
            {
                return Unauthorized(); // Si el usuario no existe o la contraseña no es correcta
            }

            return Ok(usuario); // Si las credenciales son correctas
        }

        // Ruta para obtener todos los usuarios de tipo estudiante: api/v1/usuarios/estudiantes
        [HttpGet("estudiantes")]
        public async Task<IActionResult> GetUsuariosEstudiantes()
        {
            var estudiantes = await _usuarioService.GetEstudiantes();
            return Ok(estudiantes);
        }

    }
}
