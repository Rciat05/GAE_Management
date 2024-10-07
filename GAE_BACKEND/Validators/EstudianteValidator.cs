using FluentValidation;
using GAE_Management.Model;

namespace GAE_Management.Validators
{
    public class EstudianteValidator : AbstractValidator<EstudianteModel>
    {
        public EstudianteValidator()
        {
            RuleFor(e => e.Carnet).NotEmpty().Length(8).WithMessage("El carnet debe tener 8 caracteres.");
            RuleFor(e => e.Nombre).NotEmpty().WithMessage("El nombre es obligatorio.");
            RuleFor(e => e.Apellido).NotEmpty().WithMessage("El apellido es obligatorio.");
            RuleFor(e => e.Telefono).Matches(@"^\d{8}$").WithMessage("El teléfono debe tener 8 dígitos.");
            RuleFor(e => e.correo_estudiante).EmailAddress().WithMessage("El correo electrónico no es válido.");
            RuleFor(e => e.Modalidad).Must(m => m == "presencial" || m == "virtual" || m == "semipresencial").WithMessage("Modalidad no válida.");
        }
    }
}
