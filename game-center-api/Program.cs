using game_center_api.Contexts;
using Keycloak.AuthServices.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

var AllowOrigins = "_allowOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
    c.AddSecurityDefinition("JWT",
        new OpenApiSecurityScheme
        {
            Description = "JWT Authorization header using the Bearer scheme.",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.Http,
            Scheme = "bearer"
        });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "JWT"
                }
            },
            new List<string>()
        }
    });
});

builder.Services.AddKeycloakAuthentication(builder.Configuration, options =>
{
    options.RequireHttpsMetadata = false;
});

builder.Services.AddCors(p => p.AddPolicy(AllowOrigins, builder =>
{
    builder.WithOrigins("http://localhost:3000", "https://localhost:3000")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials();
}));

var connectionString = builder.Configuration.GetConnectionString("WebApiDatabase");
builder.Services.AddDbContext<DataContext>(x => x.UseSqlite(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.UseCors(AllowOrigins);

app.Run();

/*
 curl --data "grant_type=password&client_id=lyceum_game_center&username=dankan&password=29084" localhost:8080/realms/Realm_1/protocol/openid-connect/token
 */
