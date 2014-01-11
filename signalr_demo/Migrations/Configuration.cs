namespace signalr_demo.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using signalr_demo.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<signalr_demo.Models.signalr_demoContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(signalr_demo.Models.signalr_demoContext context)
        {
           context.Employees.AddOrUpdate(e => e.Name ,
               new Employee { Name = "Vinay Joshi" ,Email ="vinay01joshi@gmail.com" , Salary = 1 },
               new Employee {Name = "shailendra Sajwan ", Email = "shailu.sajwan@gmail.com", Salary = 50 },
               new Employee {Name = "Gaurav Uniyal", Email= "Gaurav14Uniyal1987@gamil.com", Salary = 50 });
        }
    }
}
