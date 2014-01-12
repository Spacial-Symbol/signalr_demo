using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace signalr_demo.Hubs
{
    public class EmployeeHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}