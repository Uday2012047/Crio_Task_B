document.getElementById('parent').addEventListener('click', function (event) {
    if (event.target.id === 'child1') {
        console.log('Child 1 clicked');
    }
    if (event.target.id === 'child2') {
        console.log('Child 2 clicked');
    }
});