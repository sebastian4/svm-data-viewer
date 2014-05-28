var viewModel = {};
viewModel.todos = ko.observableArray([
    {text: 'Todo 1', done: ko.observable(false)},
    {text: 'Todo 2', done: ko.observable(false)},
    {text: 'Todo 3', done: ko.observable(true)}
]);

viewModel.addAction = function() {
    var todo = {
        text: document.getElementById("input").value,
        done: ko.observable(false)
    };
    viewModel.todos.push(todo);
    document.getElementById("input").value = "";
};

viewModel.toggleAction = function(a) {
    console.log(a);
    a.done(a.done() == false);
    console.log(a);
};

ko.applyBindings(viewModel);
