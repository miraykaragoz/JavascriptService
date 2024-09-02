let students = [];

function render() {
    studentList.innerHTML = students.map(x => `<li>${x.firstName} ${x.lastName}</li>`).join('');
}

fetch('/api').then(res => res.json())
    .then(res => {
        students = res;
        render();
    })

studentForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(studentForm);
    let formObj = Object.fromEntries(formData);
    fetch('/api/add', {
        method: 'POST',
        body: formData
    }).then(res => res.json())
        .then(function (res){
            students = res;
            render();
            studentForm.reset(); 
        })
}
