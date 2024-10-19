using System.ComponentModel.DataAnnotations;

namespace GAE_Management.Model
{
    public class UsuariosModel
    {
        public int id_usuario { get; set; }

        [Required(ErrorMessage = "El correo es obligatorio.")]
        [EmailAddress(ErrorMessage = "El formato del correo es inválido.")]
        public string correo { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria.")]
        [MinLength(6, ErrorMessage = "La contraseña debe tener al menos 6 caracteres.")]
        public string contrasena { get; set; }

        [Required(ErrorMessage = "El tipo de usuario es obligatorio.")]
        [RegularExpression("Administrador|Profesor|Estudiante", ErrorMessage = "El tipo de usuario debe ser 'Administrador', 'Docente' o 'Estudiante'.")]
        public string tipo_usuario { get; set; }

        public DateTime fecha_registro { get; set; }
    }
}
