//let students = [];

//function render() {
//    if (Array.isArray(students) && students.length > 0) {
//        studentList.innerHTML = students.map(x => `<li data-id="${x.id}">${x.firstName} ${x.lastName}</li>`).join('');
//    } else {
//        studentList.innerHTML = '<li>No students available</li>'; // Eğer students dizisi boş veya undefined ise, bir mesaj göster.
//    }
//    bindEvents();
//}

//function handleClick() {
//    console.log(this.dataset.id);
//}

//function bindEvents() {
//    document.querySelectorAll('#studentList li')
//        .forEach(x => x.addEventListener('click', handleClick));
//}

//function init() {
//    studentForm.addEventListener('submit', handleSubmit);

//    fetch('https://localhost:7137/Home/Students')
//        .then(res => res.json())
//        .then(function (res) {
//            students = res.students;
//            render();
//        });
//    render();
//}

//function handleSubmit(e) {
//    e.preventDefault();
//    let formData = new FormData(studentForm);
//    let formObj = Object.fromEntries(formData);
//    fetch('https://localhost:7137/Home/Students', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(formObj),
//    }).then(res => res.json())
//        .then(function (res) {
//            /*students.push(res);*/
//            students = res.students;
//            render();
//        })
//}

//init();
