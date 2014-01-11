ko.bindingHandlers.displayMoney = {
    init: function (element, valueAccessor, allBindingAccessor, viewModel, bindingContext) {
        $(element).html('$' + valueAccessor().toFixed(2));
    },

    update: function (element, valueAccessor, allBindingAccessor, viewModel, BindingContext) {

    }
};