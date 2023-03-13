
class students{
    constructor(MSSV,HovaTen,Lop,Email,Ngaysinh) {
        this.MSSV = MSSV;
        this.HovaTen = HovaTen;
        this.lop = Lop;
        this.Email = Email;
        this.ngaySinh = Ngaysinh;
    }
    getMSSV(){
        return this.MSSV;
    }
    setMSSV(newMSSV){
        this.MSSV = newMSSV;

    }
    gethovaTen(){
         return this.HovaTen;
    }
    setHovaTen(newHOvaTen){
        this.HovaTen = newHOvaTen;
    }
    getLOp(){
        return this.lop;
    }
    setLop(newLOP){
        this.lop = newLOP;
    }
    getEmail(){
        return this.Email;
    }
    setEmail(newEMail){
        this.Email = newEMail;
    }
    getNgaysinh(){
        return this.ngaySinh;
    }
    setNgaysinh(newNGaysinh){
        this.ngaySinh = newNGaysinh;
    }

}
let  st = [];
let index = 0;
function display(students){
    let tablecontent = "<table>" +
                 "<tr>"+
                 "<th>MSSV</th>"+
                 "<th>HỌ và Tên</th>"+
                 "<th>Lớp</th>"+
                 "<th>Email</th>"+
                 "<th>Ngày sinh</th>"+
                 "</tr>"
    for (let i = 0; i < students.length ; i++) {
          tablecontent +="<tr>"+
                       "<td>"+ (students[i].MSSV)+"</td>"+
                       "<td>"+ (students[i].HovaTen)+"</td>"+
                       "<td>"+ (students[i].lop)+"</td>"+
                       "<td>"+ (students[i].Email)+"</td>"+
                       "<td>"+ (students[i].ngaySinh)+"</td>"+
                       "</tr>"
    }
         tablecontent += "</table>";
    document.getElementById("list-student").innerHTML = tablecontent;
}
display(st);

 function add(){
     let sinhvien = new students();
     sinhvien.setMSSV(document.getElementById("MSSV").value);
     sinhvien.setHovaTen(document.getElementById("fullname").value);
     sinhvien.setLop(document.getElementById("class").value);
     sinhvien.setEmail(document.getElementById("email1").value);
     sinhvien.setNgaysinh(document.getElementById("Date").value);
     st.push(sinhvien);
     display(st);
 }
 function Edit(){
     // st[index].setMSSV(document.getElementById("MSSV").value);
     st[index].setHovaTen(document.getElementById("fullname").value);
     st[index].setLop(document.getElementById("class").value);
     st[index].setEmail(document.getElementById("email1").value);
     st[index].setNgaysinh(document.getElementById("Date").value);
     display(st);
 }
 function TimkiemMaSinhvien(){
     let ktra= false;
     let  n  = document.getElementById("find").value;
     for (let i = 0; i <st.length ; i++) {
         if( n === st[i].getMSSV()){
             alert("mã số sinh có tồn tại");
             index = i;
             console.log(i);
             Edit();
              ktra = true;
              break;
         }
     }
     if(ktra === false){
         alert("không tìm thấy mã sinh viên");
     }
 }
 function Delete(){
     let t = false;
     let  n  = document.getElementById("find").value;
     for (let i = 0; i <st.length ; i++) {
         if( n === st[i].getMSSV()){
             alert("mã số sinh có tồn tại");
             index = i;
             console.log(i);
            st.splice(i,i+1);
            t =true;
             break;
         }
     }
     if(t === false){
         alert("không tìm thấy ");
     }
 }



