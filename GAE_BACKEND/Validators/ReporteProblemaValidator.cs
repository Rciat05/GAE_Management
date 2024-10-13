using FluentValidation;
using GAE_Management.Model;

namespace GAE_Management.Validators
{
    public class ReporteProblemaValidator : AbstractValidator<ReporteProblemaModel>
    {
        public ReporteProblemaValidator()
        {
            RuleFor(r => r.descripcion).NotEmpty().WithMessage("La descripción es obligatoria.");
            RuleFor(r => r.fecha_reporte).NotEmpty().WithMessage("La fecha del reporte es obligatoria.");
            RuleFor(r => r.estado).Must(e => e == "pendiente" || e == "en proceso" || e == "resuelto")
                                  .WithMessage("El estado no es válido. Debe ser Abierto, Cerrado o Pendiente.");
        }
    }
}
