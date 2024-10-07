using Dapper;
using GAE_Management.Model;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Data.Common;

namespace GAE_Management.Service
{
    public class EstudianteService
    {
        private readonly string _connectionString;

        public EstudianteService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("default");
        }


        public IEnumerable<EstudianteModel> GetAllEstudiantes()
        {
            string storedProcedure = "GetAllEstudiantes";

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var estudiantes = connection.Query<EstudianteModel>(storedProcedure, commandType: CommandType.StoredProcedure);
                return estudiantes;
            }
        }

        public void CrearEstudiante(EstudianteModel estudiante)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_InsertarEstudiante";
                var parameters = new DynamicParameters();
                parameters.Add("@Carnet", estudiante.Carnet);
                parameters.Add("@Nombre", estudiante.Nombre);
                parameters.Add("@Apellido", estudiante.Apellido);
                parameters.Add("@Telefono", estudiante.Telefono);
                parameters.Add("@Carrera", estudiante.Carrera);
                parameters.Add("@Modalidad", estudiante.Modalidad);
                parameters.Add("@correo_estudiante", estudiante.correo_estudiante);
                parameters.Add("@IdUsuario", estudiante.IdUsuario);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public EstudianteModel ObtenerEstudiantePorCarnet(string carnet)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_ObtenerEstudiantePorCarnet";
                var parameters = new DynamicParameters();
                parameters.Add("@Carnet", carnet);

                return connection.QueryFirstOrDefault<EstudianteModel>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public void ActualizarEstudiante(EstudianteModel estudiante)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_ActualizarEstudiante";
                var parameters = new DynamicParameters();
                parameters.Add("@Carnet", estudiante.Carnet);
                parameters.Add("@Nombre", estudiante.Nombre);
                parameters.Add("@Apellido", estudiante.Apellido);
                parameters.Add("@Telefono", estudiante.Telefono);
                parameters.Add("@Carrera", estudiante.Carrera);
                parameters.Add("@Modalidad", estudiante.Modalidad);
                parameters.Add("@correo_estudiante", estudiante.correo_estudiante);
                parameters.Add("@IdUsuario", estudiante.IdUsuario);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public void EliminarEstudiante(string carnet)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "sp_EliminarEstudiante";
                var parameters = new DynamicParameters();
                parameters.Add("@Carnet", carnet);

                connection.Execute(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
