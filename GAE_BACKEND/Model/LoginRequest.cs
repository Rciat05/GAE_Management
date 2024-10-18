using System.ComponentModel.DataAnnotations;

namespace GAE_Management.Model
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "El correo es obligatorio.")]
        [EmailAddress(ErrorMessage = "El formato del correo es inválido.")]
        public string correo { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria.")]
        [MinLength(6, ErrorMessage = "La contraseña debe tener al menos 6 caracteres.")]
        public string contrasena { get; set; }
    }
}
