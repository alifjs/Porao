const express=require('express')
const app=express()
const cors=require('cors')
const mysql=require('mysql2')
const db=mysql.createConnection({
    user : 'root',
    host:'localhost',
    password:'1234',
    database:'porao'
})

app.use(cors())
app.use(express.json())

app.post('/post_job',(request,response)=>{
    const guardian_email=request.body.guardian_email
    const tuition_type=request.body.tuition_type
    const curriculum=request.body.curriculum
    const tutoring_time=request.body.tutoring_time
    const no_of_days=request.body.no_of_days
    const student_gender=request.body.student_gender
    const tutor_gender=request.body.tutor_gender
    const grade=request.body.grade
    const subjects=request.body.subjects
    const salary=request.body.salary
    const location=request.body.location

    let sql='INSERT INTO Tuition_jobs (guardian_email,tuition_type,curriculum,tutoring_time,no_of_days,student_gender,tutor_gender,grade,subjects,salary,location) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
    db.query(sql,[guardian_email,tuition_type,curriculum,tutoring_time,no_of_days,student_gender,tutor_gender,grade,subjects,salary,location],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.post('/tutor_sign_up',(request,response)=>{
    const name=request.body.name
    const number=request.body.number
    const email=request.body.email
    const password=request.body.password
    const ssc_school=request.body.ssc_school
    const ssc_group=request.body.ssc_group
    const ssc_gpa=request.body.ssc_gpa
    const hsc_school=request.body.hsc_school
    const hsc_group=request.body.hsc_group
    const hsc_gpa=request.body.hsc_gpa
    const uni_name=request.body.uni_name
    const cgpa=request.body.cgpa

    let sql='INSERT INTO Tutors (name,number,email,password,ssc_school,ssc_group,ssc_gpa,hsc_school,hsc_group,hsc_gpa,uni_name,cgpa) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
    db.query(sql,[name,number,email,password,ssc_school,ssc_group,ssc_gpa,hsc_school,hsc_group,hsc_gpa,uni_name,cgpa],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.post('/guardian_sign_up',(request,response)=>{
    const name=request.body.name
    const number=request.body.number
    const email=request.body.email
    const password=request.body.password

    let sql='INSERT INTO Guardians (name,phone_number,email,password) VALUES (?,?,?,?)'
    db.query(sql,[name,number,email,password],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.get('/get_guardian_login_credentials',(request,response)=>{
    let sql='SELECT email,password FROM Guardians'
    db.query(sql,(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.get('/get_tutor_login_credentials',(request,response)=>{
    let sql='SELECT email,password FROM Tutors'
    db.query(sql,(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.get('/get_all_tuition_jobs',(request,response)=>{
    let sql='SELECT * FROM Tuition_jobs'
    db.query(sql,(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})

app.get('/check_application/:job_id/:tutor_email',(request,response)=>{
    const job_id=request.params.job_id
    const tutor_email=request.params.tutor_email

    let sql='SELECT * FROM Job_Applications WHERE job_id=? and tutor_email=?'
    db.query(sql,[job_id,tutor_email],(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.post('/post_job_application',(request,response)=>{
    const job_id=request.body.job_id
    const tutor_email=request.body.tutor_email

    let sql='INSERT INTO Job_Applications VALUES (?,?)'
    db.query(sql,[job_id,tutor_email],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.get('/get_all_interested_tutor_emails/:job_id',(request,response)=>{
    const job_id=request.params.job_id

    let sql='SELECT tutor_email FROM Job_Applications WHERE job_id=?'
    db.query(sql,[job_id],(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.get('/get_all_selected_tutor_emails/:job_id',(request,response)=>{
    const job_id=request.params.job_id

    let sql='SELECT tutor_email FROM Selected_tutors WHERE job_id=?'
    db.query(sql,[job_id],(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.get('/get_tutor/:tutor_email',(request,response)=>{
    const tutor_email=request.params.tutor_email

    let sql='SELECT * FROM Tutors WHERE email=?'
    db.query(sql,[tutor_email],(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})

app.post('/post_selected_tutor',(request,response)=>{
    const job_id=request.body.job_id
    const tutor_email=request.body.tutor_email

    let sql='INSERT INTO Selected_tutors VALUES (?,?)'
    db.query(sql,[job_id,tutor_email],
    (error,results)=>{
        if(error){
            throw error
        }
    })
})
app.get('/get_all_tuition_jobs_of_guardian/:guardian_email',(request,response)=>{
    const guardian_email=request.params.guardian_email

    let sql='SELECT * FROM Tuition_jobs WHERE guardian_email=?'
    db.query(sql,[guardian_email],(error,results)=>{
        if (error){
            throw error
        }else{
            response.send(results)
        }
    })
})
app.listen(3005,()=>{
    console.log('hijdk')
})
app.get('/',(req,res)=>{
    res.send('Hello The server is running')
})