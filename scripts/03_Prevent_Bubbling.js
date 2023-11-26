
document.getElementById('child1').addEventListener('click', function (event) {
    console.log('Child1 clicked!');
    event.stopPropagation(); // Stops the event from bubbling up or down
});
document.getElementById('child2').addEventListener('click', function (event) {
    console.log('Child2 clicked!');
    event.stopPropagation(); // Stops the event from bubbling up or down
});

document.getElementById('parent').addEventListener('click', function (event) {
    console.log('Parent clicked!');
});
