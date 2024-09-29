namespace GAE_Management.Model
{
    public class ReporteGeneradoModel
    {
        public int IdReporte { get; set; }
        public string TipoReporte { get; set; }
        public DateTime FechaGeneracion { get; set; }
        public string UrlReporte { get; set; }
        public int IdUsuario { get; set; }
    }
}
