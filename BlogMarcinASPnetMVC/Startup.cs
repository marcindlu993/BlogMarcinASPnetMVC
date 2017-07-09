using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BlogMarcinASPnetMVC.Startup))]
namespace BlogMarcinASPnetMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
