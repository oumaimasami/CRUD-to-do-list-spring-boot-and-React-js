package com.example.todolist.service;

import com.example.todolist.entity.Student;
import com.example.todolist.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student modifyStudent(Student student) {
        return
                studentRepository.save(student);
    }

    @Override
    public void deleteStudent(Long studentId) {
         studentRepository.deleteById(studentId);
    }

    @Override
    public Student get(Long studentId) {
        return studentRepository.findById(studentId).get();
    }
}
