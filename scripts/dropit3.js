
var cancel = function(e){
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
}
var dragEnter = function(e){
    cancel(e);
    console.log('target: dragenter');
}

 var dragOver = function(e){
     cancel(e);
     e.dataTransfer.dropEffect='copy';
     this.classList.add('over');
    };

var dragLeave = function(e){
    console.log('target:dragleave')
    this.classList.remove('over');
};

var dropped = function(e){
    cancel(e);
    console.log('target: drop')
var target = this, p;
var types = e.dataTransfer.types;

types.forEach(function(type) {
    if(type==="Files"){
        var files = e.dataTransfer.files;
        [].forEach.call(files, function(file){
            p = document.createElement('p');
            p.innerHTML =
            '<b>Type</b>: ' + file.type + '<br />' +
            '<b>Name</b>: ' + file.name + '<br />' +
            '<b>Size</b>: ' + file.size + '<br />' +
            '<b>Modified Date</b>: ' + file.lastModifiedDate +
            '<br/><hr/>';
            target.appendChild(p);
            target.append('file', file);
        });
    }
});
    target.classList.remove('over');
};


var clearButton= document.getElementById('clear');
clearButton.addEventListener('click', function(e){
    e.preventDefault();
    target.innerHTML = '';
})



var target = document.getElementById('target');
    target.addEventListener('dragenter', cancel, false);
    target.addEventListener('dragover', dragOver, false);
    target.addEventListener('dragleave', dragLeave, false);
    target.addEventListener('drop', dropped, false);


    var clearButton= document.getElementById('clear');
    clearButton.addEventListener('click', function(e){
        e.preventDefault();
        target.innerHTML = '';
    })