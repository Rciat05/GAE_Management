using FluentValidation;
using GAE_Management.Model;

namespace GAE_Management.Validators
{
    public class LoginRequestValidator : AbstractValidator<LoginRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(x => x.correo)
                .NotEmpty().WithMessage("El correo es obligatorio.")
                .EmailAddress().WithMessage("El formato del correo es inválido.");

            RuleFor(x => x.contrasena)
                .NotEmpty().WithMessage("La contraseña es obligatoria.")
                .MinimumLength(6).WithMessage("La contraseña debe tener al menos 6 caracteres.");
        }
    }
}
