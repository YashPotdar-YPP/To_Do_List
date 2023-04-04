function add() {
    var title = document.getElementById('title').value;
    if (title == '') {
        alert("enter a valid todo");
    }else{
        var box = document.getElementById('box');

        var list = document.createElement('list');
        list.textContent = 'title';

        var position = box.firstElementChild;

        if(position == null){
            box
        }else{

        }
    }
}