namespace GAE_Management.Model
{
    public class EstudianteModel
    {
        public int IdEstudiante { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Grado { get; set; }
        public string CorreoEstudiante { get; set; }
        public int IdUsuario { get; set; }
    }
}
