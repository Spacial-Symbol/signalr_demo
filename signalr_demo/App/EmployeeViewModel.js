﻿var EmployeeViewModel = function(){
    var self = this;
    self.employees = ko.observableArray();
    self.loading = ko.observable(true);

    self.watchModel = function (model, callback) {
        for (var key in model) {
            if (model.hasOwnProperty(key) && ko.isObservable(model[key])) {
                self.subscribeToProperty(model, key, function (key, val) {
                    callback(model, key, val);
                });
            }
        }
    }

    self.subscribeToProperty = function (model, key, callback) {
        model[key].subscribe(function (val) {
            callback(key, val);
        });
    }

    self.modelChanged = function (model, key, val) {
        var payload = {};
        payload[key] = val;
        $.ajax({
            url: '/odata/Employees(' + model.id + ')',
            type: 'PATCH',
            data: JSON.stringify(payload),
            contentType: 'application/json',
            dataType: 'json'
        });
       // alert(model.id);
       // alert(key);
       // alert(value);
    }


    $.getJSON('/odata/Employees', function (data) {
        self.employees(ko.utils.arrayMap(data.value, function (employee) {
            var obsEmployee = {
                id: employee.Id,
                Name: ko.observable(employee.Name),
                Email: ko.observable(employee.Email),
                Salary: ko.observable(employee.Salary)
            }
            self.watchModel(obsEmployee, self.modelChanged);
            return obsEmployee;
        }));
        self.loading(false);
    });
}

//    $.getJSON('api/Employees', function (data) {
//        self.employees(ko.utils.arrayMap(data, function (employee) {
//            var obsEmployee = {
//                id: employee.Id,
//                Name: ko.observable(employee.Name),
//                Email: ko.observable(employee.Email),
//                Salary:ko.observable(employee.Salary)
//            }
//            self.watchModel(obsEmployee, self.modelChanged);
//            return obsEmployee;
//        }));
//        self.loading(false);
//    });
//}

$(function () {
    ko.applyBindings(new EmployeeViewModel);
});