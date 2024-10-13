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
                var sql = "SELECT id_usuario, correo, contrasena, tipo_usuario, fecha_registro FROM Usuarios";
                return await db.QueryAsync<UsuariosModel>(sql);
            }
        }

        public async Task<UsuariosModel> GetUsuarioById(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = "SELECT Id_usuario, correo, contrasena, tipo_usuario, fecha_registro FROM Usuarios WHERE Id_usuario = @Id";
                return await db.QueryFirstOrDefaultAsync<UsuariosModel>(sql, new { Id = id });
            }
        }

        public async Task<int> AddUsuario(UsuariosModel usuario)
        {
            var query = @"INSERT INTO Usuarios (correo, Contrasena, tipo_usuario, fecha_registro) 
                          VALUES (@correo, @Contrasena, @tipo_usuario, @fecha_registro); 
                          SELECT CAST(SCOPE_IDENTITY() as int);";

            using (var connection = new SqlConnection(_connectionString))
            {
                var id = await connection.ExecuteScalarAsync<int>(query, new
                {
                    correo = usuario.correo,
                    Contrasena = usuario.contrasena,
                    tipo_usuario = usuario.tipo_usuario,
                    fecha_registro = usuario.fecha_registro
                });

                usuario.id_usuario = id;

                return id; // Asegúrate de devolver el ID del usuario insertado
            }
        }

        public async Task<int> UpdateUsuario(UsuariosModel usuario)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE Usuarios 
                            SET correo = @correo, contrasena = @contrasena, tipo_usuario = @tipo_usuario 
                            WHERE id_usuario = @id_usuario";
                return await db.ExecuteAsync(sql, usuario);
            }
        }

        public async Task<int> DeleteUsuario(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM Usuarios WHERE Id_usuario = @Id";
                return await db.ExecuteAsync(sql, new { Id = id });
            }
        }

        public async Task<UsuariosModel> GetUsuarioByEmailAndPassword(string correo, string contrasena)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT id_usuario, correo, contrasena, tipo_usuario, fecha_registro 
                    FROM Usuarios 
                    WHERE correo = @correo AND contrasena = @contrasena";

                return await db.QueryFirstOrDefaultAsync<UsuariosModel>(sql, new { correo, contrasena });
            }
        }


    }
}
