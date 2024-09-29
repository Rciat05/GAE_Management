using Dapper;
using GAE_Management.Model;
using Microsoft.Data.SqlClient;
using System.Data;

namespace GAE_Management.Data.Services
{
    public class UsuarioService
    {
        private readonly string _connectionString;

        public UsuarioService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("default");
        }

        public async Task<IEnumerable<UsuariosModel>> GetAllUsuarios()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = "SELECT * FROM Usuarios";
                return await db.QueryAsync<UsuariosModel>(sql);
            }
        }

        public async Task<UsuariosModel> GetUsuarioById(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = "SELECT * FROM Usuarios WHERE id_usuario = @Id";
                return await db.QueryFirstOrDefaultAsync<UsuariosModel>(sql, new { Id = id });
            }
        }

        public async Task<int> AddUsuario(UsuariosModel usuario)
        {
            var query = "INSERT INTO Usuarios (correo, contrasena, tipo_usuario, fecha_registro) VALUES (@Correo, @Contrasena, @TipoUsuario, @FechaRegistro); SELECT CAST(SCOPE_IDENTITY() as int);";

            using (var connection = new SqlConnection(_connectionString))
            {
                var id = await connection.ExecuteScalarAsync<int>(query, new
                {
                    Correo = usuario.Correo,
                    Contrasena = usuario.Contrasena,
                    TipoUsuario = usuario.TipoUsuario,
                    FechaRegistro = usuario.FechaRegistro
                });

                usuario.IdUsuario = id;

                return id; // Asegúrate de devolver el ID del usuario insertado
            }
        }

        public async Task<int> UpdateUsuario(UsuariosModel usuario)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE Usuarios 
                            SET correo = @Correo, contrasena = @Contrasena, tipo_usuario = @TipoUsuario 
                            WHERE id_usuario = @IdUsuario";
                return await db.ExecuteAsync(sql, usuario);
            }
        }

        public async Task<int> DeleteUsuario(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM Usuarios WHERE id_usuario = @Id";
                return await db.ExecuteAsync(sql, new { Id = id });
            }
        }
    }
}
