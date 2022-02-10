function CourseInfo(title, instructor, image) { //kurs objesi 

    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

function UI(courseInfos) { // arayüz 
    this.courseInfos = courseInfos;
}

UI.prototype.addCourse = function(course) {


    // tablo oluşturma
    const taskList = document.querySelector('#course-list');
    var innerHtmL = `
    <tr>
    <td><img style="width:70px;height="70px;" src="image/${course.image}" alt=""></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
   
   
    <td> <a href="#" class="btn btn-danger btn-sm"> <i class="fa-solid fa-delete-left"></i> </a> </td>
    
    </tr>`;



    taskList.innerHTML += innerHtmL;
    const ui = new UI();


    // inputları temizleme işlemi
    const title = document.querySelector('#title').value = "";
    const instructor = document.querySelector('#instructor').value = "";
    const image = document.querySelector('#image').value = "";
    ui.showMessage('Course added successfully', 'success')
}

// her işlemden sonra kullanıcıya o işlemin sonucunu süreli mesaj olarak gösterme
UI.prototype.showMessage = function(msg, className) {

    var rowOfForm = document.querySelector('#Lastrow');

    var innerHtmL1 = ` 
    <div class="alert alert-${className} ">
              ${msg}     <a href="#" class="btn btn-danger btn-sm"> <i class="fa-solid fa-xmark"></i></i> </a>  
    </div>`;

    rowOfForm.innerHTML += innerHtmL1;

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

function createElement(title, instructor, img) {

    //const createTr = document.createElement('tr')
    //const image = '"<img src="image/' + course.image + '.jpg' + '" alt=""> ';
    //createTr.innerHTML = '<td>' + title + '</td>' + '<td>' + instructor + '</td>' + '<td>' + image + '</td>';

}

// submit durumu ve input bilgilerini alıp course objesine gönderme işlemi
document.getElementById('new-course').addEventListener('submit', function(e) {

    const title = document.querySelector('#title').value;


    const instructor = document.querySelector('#instructor').value;
    const image = document.querySelector('#image').value;
    let imageWithTag = image + '.jpg';

    const courseInfo = new CourseInfo(title, instructor, imageWithTag);

    const ui = new UI();
    ui.addCourse(courseInfo);







    e.preventDefault();
})

// silme işlemi
document.querySelector('#course-list').addEventListener('click', function(e) {

    var findDeleteBtn = e.target;
    if (e.target.className === 'fa-solid fa-delete-left') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.parentElement.remove();
            const ui = new UI();


            ui.showMessage('Course deleted successfully', 'danger')

        }
    }

    if (e.target.className === 'fa-solid fa-xmark') {

        e.target.parentElement.parentElement.remove();
    }

})

// 3 sanyede kaybolan bilgilendirme mesajını istenildiğinde X e basılarak silme işlemi
document.querySelector('#new-course').addEventListener('click', function(e) {



    if (e.target.className === 'fa-solid fa-xmark') {

        e.target.parentElement.parentElement.remove();
    }

})