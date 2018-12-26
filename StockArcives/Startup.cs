using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using StockArcives.Data;

namespace StockArcives
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<StockSeeder>();
            services.AddDbContext<StockContext>(cfg =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("StockConnectionString"));
            });

            services.AddScoped<IStockRepository, StockRepository>();
            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error"); // display an error razor page(inside Pages folder) in case environment is production
            }
            app.UseStaticFiles();
            app.UseNodeModules(env);

            app.UseMvc(cfg =>
                {
                    cfg.MapRoute("Default",
                        "{controller}/{action}/{id?}",
                        new { controller = "Home", Action = "Index" });
                }
            );
        }
    }
}
