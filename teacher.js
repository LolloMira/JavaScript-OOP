//name - surname - age - gender - degree 
//students = []
//toString() --> stampa prima i dati dell'insegnante e poi tutti i suoi studenti
//addStudents(student)  --> se lo studente non è già tra i suoi studenti, allora lo aggiunge (confronto tra lo studentCode())
//addGrade(studentCode, grade) --> ciclo tra gli studenti, trova quello con lo stesso codice e gli assegna il voto
//bestStudent() --> return toString() dello studente con la media più alta

class Teacher {


    addStudent(student) {
        // let hasStudent = false;
        // for (const student of this.students) {
        //     if (student.generateCode() === student.generateCode()){
        //         hasStudent = true;
        //     }
        // }
        // if (hasStudent === false) {
        //     this.students.push(student);
        // }


        //     for (const student of this.students) {
        //         if (student.generateCode() ===student.generateCode()){
        //             return;
        //         }
        //     }
        //     this.students.push(student);


        // let hasStudent = this.students.some(student => student.generateCode() === student.generateCode());
        // if (hasStudent === false) {
        //     this.students.push(student);
        // }

        let hasStudent = (!this.students.some(student => student.generateCode() === student.generateCode()));{
            this.students.push(student);
        }
    }
    

    addGrade(studentCode, grade){
        // for (const student of this.students) {
        //     if (student.generateCode() === student.generateCode()) {
        //         if (grade >= 0 && grade <= 10) {
        //             student.grades.push(grade);
        //         }
                
        //     }
        // }
        // for (const student of this.students) {
        //     if (student.generateCode() === student.generateCode()) {
        //         student.addGrade(grade);
        //         }
                
        //     }
        // }

        // this.students = this.students.map((student) => {
        //     if (student.studentCode() === studentCode) {
        //         student.addGrade(grade)
        //     }
        //     return student;
        // });

        this.students.forEach(student => {
            if (student.studentCode() === studentCode) {
                student.addGrade(grade);
            }
        });
    }


    bestStudent(){

        if (this.students.length === 0) {
            return "Nessuno studente";
        }
        // let bestStudent = this.students[0];
        // for (let i = 1; i < this.students.length.length; i++) {
        //     const student = this.students[i];
        //     if (student.calculateMean() > bestStudent.calculateMean()) {
        //         bestStudent = student;
        //     }
        // }
        // return bestStudent.toString();

        
        return this.students.reduce((std1, std2) => std1.calculateMean() > std2.calculateMean() ? std1 : std2).toString();
    }
}