using FluentValidation;
using GAE_Management.Data;
using GAE_Management.Data.Services;
using GAE_Management.Model;
using GAE_Management.Service;
using GAE_Management.Validators;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//************************* VALIDACIONES **************************
builder.Services.AddScoped<IValidator<UsuariosModel>, UsuarioValidator>();
builder.Services.AddScoped<IValidator<EstudianteModel>, EstudianteValidator>();
builder.Services.AddScoped<IValidator<ReporteProblemaModel>, ReporteProblemaValidator>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("default")));

var misReglasCors = "ReglasCors";
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: misReglasCors, builder =>
    {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

//SERVICIOS
builder.Services.AddScoped<UsuarioService>();
builder.Services.AddScoped<EstudianteService>();
builder.Services.AddScoped<ReporteProblemaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(misReglasCors);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
