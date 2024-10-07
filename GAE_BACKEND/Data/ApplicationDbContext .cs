using GAE_Management.Model;
using Microsoft.EntityFrameworkCore;

namespace GAE_Management.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<UsuariosModel> Usuarios { get; set; }
        public DbSet<EstudianteModel> Estudiantes { get; set; }
    }
}
