using Dapper;
using GAE_Management.Model;
using Microsoft.Data.SqlClient;
using System.Data;

namespace GAE_Management.Service
{
    public class ReporteProblemaService
    {
        private readonly string _connectionString;

        public ReporteProblemaService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("default");
        }

        // Obtener todos los reportes de problemas
        public IEnumerable<ReporteProblemaModel> GetAllReportesProblemas()
        {
            string storedProcedure = "GetAllReportesProblemas";

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var reportes = connection.Query<ReporteProblemaModel>(storedProcedure, commandType: CommandType.StoredProcedure);
                return reportes;
            }
        }

        // Crear un nuevo reporte de problema
        public void CrearReporteProblema(ReporteProblemaModel reporte)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_InsertarReporteProblema";
                var parameters = new DynamicParameters();
                parameters.Add("@id_usuario", reporte.id_usuario);
                parameters.Add("@descripcion", reporte.descripcion);
                parameters.Add("@estado", reporte.estado);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        // Obtener reporte de problema por ID
        public ReporteProblemaModel ObtenerReportePorId(int idReporte)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_ObtenerReportePorId";
                var parameters = new DynamicParameters();
                parameters.Add("@id_reporte", idReporte);

                return connection.QueryFirstOrDefault<ReporteProblemaModel>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        // Actualizar reporte de problema
        public void ActualizarReporteProblema(ReporteProblemaModel reporte)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_ActualizarReporteProblema";
                var parameters = new DynamicParameters();
                parameters.Add("@id_reporte", reporte.id_reporte);
                parameters.Add("@descripcion", reporte.descripcion);
                parameters.Add("@estado", reporte.estado);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        // Eliminar reporte de problema
        public void EliminarReporteProblema(int idReporte)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_EliminarReporteProblema";
                var parameters = new DynamicParameters();
                parameters.Add("@id_reporte", idReporte);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public IEnumerable<ReporteProblemaModel> GetReportesByUsuario(int id_usuario)
        {
            string query = "SELECT * FROM ReportesProblemas WHERE id_usuario = @id_usuario";

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<ReporteProblemaModel>(query, new { id_usuario });
            }
        }

    }
}
