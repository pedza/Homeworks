function Academy(name, start, end){
    this.name=name;
    this.students=[];
    this.subjects=[];
    this.start=start;
    this.end=end;
    
    this.subjectFunc=function(subject, subjNumOfCl){
        this.subjects.push(subject)
        this.numOfClasses=this.subjects.length*subjNumOfCl;
        console.log(subjNumOfCl)
    }
    this.printStudents=function(){
        console.log(this.students)
    }
    this.printSubjects=function(){

        console.log(this.subjects)
    }
    
}

function Subject(title, academy){
    this.title=title;
    this.numOfClasses=10;
    this.isElective=false;
    this.academy=academy;
    this.students=[];
    this.academySub=academy.subjectFunc(this.title, this.numOfClasses)
    this.overrideClass=function(num){
        if(num>=3){
            this.numOfClasses=num
        }
        else{
            console.log("The number can't be smaller than 3")
        }
    }

}

function Student(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.complSubj=[];
    this.academy=null;
    this.currSubj=null;
    this.startAcademy=function(academy){
        this.academy=academy
        academy.students.push(this.firstName)
        console.log(academy)
    }
    this.startSubject=function(subject){
         if(this.academy && this.academy===subject.academy){
            subject.students.push(this.firstName)

             if(this.currSubj){
            this.complSubj.push(this.currSubj)
            this.currSubj=subject.title
            }
            else{this.currSubj=subject.title}
         }
         else{
             console.log("error there is no academy or the subject is in different academy, subject is not set")
         }
         console.log(subject)
         
    }
}
let sedcAcademy= new Academy("SEDC", new Date(), 09.21)
let semosAcademy= new Academy("Semos", new Date(), 09.21)



let subjJS=new Subject("Java Script Basic", sedcAcademy )
let subjCsharp=new Subject("C#", semosAcademy )
let subjHTMLcss=new Subject("HTML/CSS", sedcAcademy)


let pedzaStudent=new Student("pedza", "jans", 32)
let ivicaStudent=new Student("ivica", "jans", 38)

console.log(pedzaStudent.startAcademy(sedcAcademy))
console.log(pedzaStudent)

console.log(pedzaStudent.startSubject(subjJS))
console.log(pedzaStudent.startSubject(subjCsharp))
console.log(semosAcademy)

console.log(ivicaStudent.startAcademy(sedcAcademy))
console.log(ivicaStudent.startSubject(subjJS))
console.log(ivicaStudent.startSubject(subjHTMLcss))
console.log(ivicaStudent)




