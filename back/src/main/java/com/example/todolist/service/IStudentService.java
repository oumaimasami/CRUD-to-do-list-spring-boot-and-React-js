package com.example.todolist.service;

import com.example.todolist.entity.Student;

import java.util.List;

public interface IStudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student get(Long studentId);
    public Student modifyStudent(Student student);
    public void deleteStudent(Long studentId);
}
