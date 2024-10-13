namespace GAE_Management.Model
{
    public class ReporteProblemaModel
    {
        public int id_reporte { get; set; }
        public int id_usuario { get; set; }
        public string descripcion { get; set; }
        public DateTime fecha_reporte { get; set; }
        public string estado { get; set; }
    }
}
