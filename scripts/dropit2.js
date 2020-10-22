var sourceContainerId;

var dragStart = function(e){
    //IE doesn't support text/plain
    //e.target.id is pointing to the source
    console.log('source: dragstart')
    var element = document.querySelector('input[name="allowed"]:checked');
    e.dataTransfer.effectAllowed=element.value;
    try{
        e.dataTransfer.setData('text/plain', '');
    }catch(e){
        e.dataTransfer.setData('Text', '');
    }
};

var cancel = function(e){
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
}
var dragEnd = function(e){
    console.log('source: dragend')
    document.getElementById('msg').innerText = e.dataTransfer.dropEffect;
}
var dragEnter = function(e){
    cancel(e);
    console.log('target: dragenter');
}
 var dragOver = function(e){
     cancel(e);
     e.dataTransfer.dropEffect = 'copy';
     this.classList.add('over');
    };

var dragLeave = function(e){
    console.log('target:dragleave')
    this.classList.remove('over');
};
var drag = function(e){
    console.log('source: drag');
};

var dropped = function(e){
    cancel(e);
var target = this, p;
var types = e.dataTransfer.types;

types.forEach(function(type) {
    if(type ==='Files'){
        [].forEach.call(files, function(file){
            p = document.createElement('p');
            p.innerHTML=
            '<b>Type</b>: ' + file.type + '<br />' +
            '<b>Name</b>: ' + file.name + '<br />' +
            '<b>Size</b>: ' + file.size + 'bk<br/>'+
            '<b> Modified Date</b>: ' +
                file.lastModifiedDat +
                '<br/><hr/>';
                target.appendChild(p);
        });
    }
});
target.classList.remove('over');
};

var countElement= document.getElementById('count'),
count = countElement.innerText;
count++;
countElement.innerText=count;
target.classList.remove('over');


// var img = document.querySelector('#not');
// img.addEventListener('dragstart', dragStart, false);


var target = document.getElementById('target');
    target.addEventListener('dragenter', cancel, false);
    target.addEventListener('dragover', dragOver, false);
    target.addEventListener('dragleave', dragLeave, false);
    target.addEventListener('drop', dropped, false);

    var clearTarget = function(e){

    }

    var clearButton= document.getElementById('clear');
    clearButton.addEventListener('click', function(e){
        e.preventDefault();
        target.innerHTML = '';
    })