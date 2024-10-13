using GAE_Management.Model;
using GAE_Management.Service;
using Microsoft.AspNetCore.Mvc;

namespace GAE_Management.Controllers
{
    [Route("api/v1/ReportesProblemas")]
    [ApiController]
    public class ReporteProblemaController : ControllerBase
    {
        private readonly ReporteProblemaService _reporteProblemaService;

        public ReporteProblemaController(ReporteProblemaService reporteProblemaService)
        {
            _reporteProblemaService = reporteProblemaService;
        }

        [HttpGet("get")]
        public IActionResult GetAllReportesProblemas()
        {
            var reportes = _reporteProblemaService.GetAllReportesProblemas();
            return Ok(reportes);
        }

        [HttpPost("add")]
        public IActionResult CrearReporteProblema([FromBody] ReporteProblemaModel reporte)
        {
            _reporteProblemaService.CrearReporteProblema(reporte);
            return Ok("Reporte de problema creado con éxito");
        }

        [HttpGet("{idReporte}")]
        public IActionResult ObtenerReportePorId(int idReporte)
        {
            var reporte = _reporteProblemaService.ObtenerReportePorId(idReporte);
            if (reporte == null)
                return NotFound("Reporte no encontrado");

            return Ok(reporte);
        }

        [HttpPut("update")]
        public IActionResult ActualizarReporteProblema([FromBody] ReporteProblemaModel reporte)
        {
            _reporteProblemaService.ActualizarReporteProblema(reporte);
            return Ok("Reporte de problema actualizado con éxito");
        }

        [HttpDelete("delete/{idReporte}")]
        public IActionResult EliminarReporteProblema(int idReporte)
        {
            _reporteProblemaService.EliminarReporteProblema(idReporte);
            return Ok("Reporte de problema eliminado con éxito");
        }
    }
}
