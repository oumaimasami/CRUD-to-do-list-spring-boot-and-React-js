package com.example.todolist.control;

import com.example.todolist.entity.Student;
import com.example.todolist.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private IStudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student added";
    }
    @PutMapping ("/modif/{id}")
    public ResponseEntity modif(@PathVariable Long id , @RequestBody Student student){
        Student student1=studentService.get(id);
        student1.setName(student.getName());
        student1.setAdress(student.getAdress());
        student1= studentService.modifyStudent(student);
        return ResponseEntity.ok(student1);
    }


    @DeleteMapping ("/delete/{student-id}")
    public void delete(@PathVariable("student-id") Long id){
        studentService.deleteStudent(id);
    }

    @GetMapping("/getall")
    public List<Student> getAll(){
       return studentService.getAllStudents();
    }

    @GetMapping("/get/{student-id}")
    public Student get(@PathVariable("student-id") Long studentId) {return studentService.get(studentId);}

}
