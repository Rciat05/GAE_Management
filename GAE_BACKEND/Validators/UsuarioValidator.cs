using FluentValidation;
using GAE_Management.Model;

namespace GAE_Management.Validators
{
    public class UsuarioValidator : AbstractValidator<UsuariosModel>
    {
        public UsuarioValidator()
        {
            RuleFor(x => x.correo)
                .NotEmpty().WithMessage("El correo es obligatorio.")
                .EmailAddress().WithMessage("El formato del correo es inválido.");

            RuleFor(x => x.contrasena)
                .NotEmpty().WithMessage("La contraseña es obligatoria.")
                .MinimumLength(6).WithMessage("La contraseña debe tener al menos 6 caracteres.");

            RuleFor(x => x.tipo_usuario)
                .NotEmpty().WithMessage("El tipo de usuario es obligatorio.")
                .Must(tipo => tipo == "Administrador" || tipo == "Docente" || tipo == "Estudiante")
                .WithMessage("El tipo de usuario debe ser 'Administrador', 'Docente' o 'Estudiante'.");
        }
    }
}
