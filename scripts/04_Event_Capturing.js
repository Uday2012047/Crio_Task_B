document.getElementById('parent').addEventListener('click', function (event) {
    console.log('Parent clicked');
}, true);

document.getElementById('child1').addEventListener('click', function (event) {
    console.log('Child 1 clicked');
});

document.getElementById('child2').addEventListener('click', function (event) {
    console.log('Child 2 clicked');
});