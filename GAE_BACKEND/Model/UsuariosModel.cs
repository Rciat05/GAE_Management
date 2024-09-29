using System.ComponentModel.DataAnnotations;

namespace GAE_Management.Model
{
    public class UsuariosModel
    {
        public int IdUsuario { get; set; }
        public string Correo { get; set; }
        public string Contrasena { get; set; }
        [Required]
        public string TipoUsuario { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}
