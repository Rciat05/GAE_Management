namespace GAE_Management.Model
{
    public class ReporteProblemaModel
    {
        public int IdReporte { get; set; }
        public int IdUsuario { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaReporte { get; set; }
        public string Estado { get; set; }
    }
}
