require([
    '../lib/scribe/scribe.min',
    '../lib/scribe-plugin-toolbar/scribe-plugin-toolbar.min'
],
function(Scribe, scribePluginBlockquoteCommand, scribePluginToolbar) {
    return;
    var textareas = document.querySelector('.scribe');
    var scribe = new Scribe(textareas);

    // scribe.use(scribePluginBlockquoteCommand());
    var toolbars = document.querySelector('.scribe-toolbar');
    scribe.use(scribePluginToolbar(toolbars));
    console.log(toolbars);
});

$(function() {
    // new Medium({
    //     element: document.getElementById('question-second-description')
    // });
});
